
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { Option, Vec } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { AccountId, Balance, Hash, PropIndex } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { FrameSupportPreimagesBounded } from 'https://deno.land/x/polkadot/types/lookup.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { DeriveApi, DeriveProposal, DeriveProposalImage } from '../types.ts';

import { combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { isFunction, objectSpread } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';
import { getImageHashBounded } from './util.ts';

type DepositorsNew = Option<ITuple<[Vec<AccountId>, Balance]>>;
type DepositorsOld = Option<ITuple<[Balance, Vec<AccountId>]>>;
type Depositors = DepositorsNew | DepositorsOld;
type Proposals = ITuple<[PropIndex, Hash | FrameSupportPreimagesBounded, AccountId]>[];
type Result = [Proposals, (DeriveProposalImage | undefined)[], Depositors[]];

function isNewDepositors (depositors: ITuple<[Vec<AccountId>, Balance]> | ITuple<[Balance, Vec<AccountId>]>): depositors is ITuple<[Vec<AccountId>, Balance]> {
  // Detect balance...
  return isFunction((depositors[1] as Balance).mul);
}

function parse ([proposals, images, optDepositors]: Result): DeriveProposal[] {
  return proposals
    .filter(([, , proposer], index): boolean =>
      !!(optDepositors[index]?.isSome) && !proposer.isEmpty
    )
    .map(([index, hash, proposer], proposalIndex): DeriveProposal => {
      const depositors = optDepositors[proposalIndex].unwrap();

      return objectSpread(
        {
          image: images[proposalIndex],
          imageHash: getImageHashBounded(hash),
          index,
          proposer
        },
        isNewDepositors(depositors)
          ? { balance: depositors[1], seconds: depositors[0] }
          : { balance: depositors[0], seconds: depositors[1] }
      );
    });
}

/**
 * @name proposals
 * @description Retrieves the list of active public proposals in the democracy module, along with their associated preimage data and deposit information.
 * @example
 * ```javascript
 * const proposals = await api.derive.democracy.proposals();
 * console.log("proposals:", proposals);
 * ```
 */
export function proposals (instanceId: string, api: DeriveApi): () => Observable<DeriveProposal[]> {
  return memo(instanceId, (): Observable<DeriveProposal[]> =>
    isFunction(api.query.democracy?.publicProps)
      ? api.query.democracy.publicProps().pipe(
        switchMap((proposals) =>
          proposals.length
            ? combineLatest([
              of(proposals),
              api.derive.democracy.preimages(
                proposals.map(([, hash]) => hash)
              ),
              api.query.democracy.depositOf.multi(
                proposals.map(([index]) => index)
              )
            ])
            : of<Result>([[], [], []])
        ),
        map(parse)
      )
      : of([])
  );
}
