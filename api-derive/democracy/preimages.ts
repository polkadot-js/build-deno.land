
import type { Observable } from 'https://esm.sh/rxjs@7.8.1';
import type { u128 } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { AccountId, AccountId32, Balance, BlockNumber, Call, Hash, PreimageStatus } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { FrameSupportPreimagesBounded, PalletPreimageOldRequestStatus, PalletPreimageRequestStatus } from 'https://deno.land/x/polkadot/types/lookup.ts';
import type { Bytes, Option } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { HexString } from 'https://deno.land/x/polkadot/util/types.ts';
import type { DeriveApi, DeriveProposalImage } from '../types.ts';

import { map, of, switchMap } from 'https://esm.sh/rxjs@7.8.1';

import { BN_ZERO, isFunction } from 'https://deno.land/x/polkadot/util/mod.ts';

import { firstMemo, memo } from '../util/index.ts';
import { getImageHashBounded } from './util.ts';

type PreimageInfo = [Bytes, AccountId, Balance, BlockNumber];
type OldPreimage = ITuple<PreimageInfo>;
type CompatStatusU = PalletPreimageRequestStatus['asUnrequested'] & { deposit: ITuple<[AccountId32, u128]> };
type CompatStatusR = PalletPreimageRequestStatus['asRequested'] & { deposit: Option<ITuple<[AccountId32, u128]>> };

function getUnrequestedTicket (status: PalletPreimageRequestStatus['asUnrequested']): [AccountId32, u128] {
  return status.ticket || (status as CompatStatusU).deposit;
}

function getRequestedTicket (status: PalletPreimageRequestStatus['asRequested']): [AccountId32, u128] {
  return (status.maybeTicket || (status as CompatStatusR).deposit).unwrapOrDefault();
}

function isDemocracyPreimage (api: DeriveApi, imageOpt: Option<OldPreimage> | Option<PreimageStatus>): imageOpt is Option<PreimageStatus> {
  return !!imageOpt && !api.query.democracy['dispatchQueue'];
}

function constructProposal (api: DeriveApi, [bytes, proposer, balance, at]: PreimageInfo): DeriveProposalImage {
  let proposal: Call | undefined;

  try {
    proposal = api.registry.createType('Call', bytes.toU8a(true));
  } catch (error) {
    console.error(error);
  }

  return { at, balance, proposal, proposer };
}

function parseDemocracy (api: DeriveApi, imageOpt: Option<OldPreimage> | Option<PreimageStatus>): DeriveProposalImage | undefined {
  if (imageOpt.isNone) {
    return;
  }

  if (isDemocracyPreimage(api, imageOpt)) {
    const status = imageOpt.unwrap();

    if (status.isMissing) {
      return;
    }

    const { data, deposit, provider, since } = status.asAvailable;

    return constructProposal(api, [data, provider, deposit, since]);
  }

  return constructProposal(api, imageOpt.unwrap());
}

function parseImage (api: DeriveApi, [proposalHash, status, bytes]: [HexString, PalletPreimageRequestStatus | PalletPreimageOldRequestStatus | null, Bytes | null]): DeriveProposalImage | undefined {
  if (!status) {
    return undefined;
  }

  const [proposer, balance] = status.isUnrequested
    ? getUnrequestedTicket((status as PalletPreimageRequestStatus).asUnrequested)
    : getRequestedTicket((status as PalletPreimageRequestStatus).asRequested);
  let proposal: Call | undefined;

  if (bytes) {
    try {
      proposal = api.registry.createType('Call', bytes.toU8a(true));
    } catch (error) {
      console.error(error);
    }
  }

  return { at: BN_ZERO, balance, proposal, proposalHash, proposer };
}

function getDemocracyImages (api: DeriveApi, bounded: (Hash | Uint8Array | string | FrameSupportPreimagesBounded)[]): Observable<(DeriveProposalImage | undefined)[]> {
  const hashes = bounded.map((b) => getImageHashBounded(b));

  return api.query.democracy['preimages'].multi<Option<PreimageStatus>>(hashes).pipe(
    map((images): (DeriveProposalImage | undefined)[] =>
      images.map((imageOpt) => parseDemocracy(api, imageOpt))
    )
  );
}

function getImages (api: DeriveApi, bounded: (FrameSupportPreimagesBounded | Uint8Array | string)[]): Observable<(DeriveProposalImage | undefined)[]> {
  const hashes = bounded.map((b) => getImageHashBounded(b));
  const bytesType = api.registry.lookup.getTypeDef(api.query.preimage.preimageFor.creator.meta.type.asMap.key).type;

  return api.query.preimage.statusFor.multi(hashes).pipe(
    switchMap((optStatus) => {
      const statuses = optStatus.map((o) => o.unwrapOr(null));
      const keys = statuses
        .map((s, i) =>
          s
            ? bytesType === 'H256'
              // first generation
              ? hashes[i]
              // current generation (H256,u32)
              : s.isRequested
                ? [hashes[i], s.asRequested.len.unwrapOr(0)]
                : [hashes[i], s.asUnrequested.len]
            : null
        )
        .filter((p) => !!p);

      return api.query.preimage.preimageFor.multi(keys).pipe(
        map((optBytes) => {
          let ptr = -1;

          return statuses
            .map((s, i): [HexString, PalletPreimageRequestStatus | PalletPreimageOldRequestStatus | null, Bytes | null] =>
              s
                ? [hashes[i], s, optBytes[++ptr].unwrapOr(null)]
                : [hashes[i], null, null]
            )
            .map((v) => parseImage(api, v));
        })
      );
    })
  );
}

/**
 * @name preimages
 * @description Retrieves the full details (preimages) of governance proposals using their on-chain hashes.
 * @param { (Hash | Uint8Array | string | FrameSupportPreimagesBounded)[] } hashes An array of hashes representing governance proposals.
 * @example
 * ```javascript
 * const preimages = await api.derive.democracy.preimages([HASH1, HASH2]);
 * ```
 */
export function preimages (instanceId: string, api: DeriveApi): (hashes: (Hash | Uint8Array | string | FrameSupportPreimagesBounded)[]) => Observable<(DeriveProposalImage | undefined)[]> {
  return memo(instanceId, (hashes: (Hash | Uint8Array | string | FrameSupportPreimagesBounded)[]): Observable<(DeriveProposalImage | undefined)[]> =>
    hashes.length
      ? isFunction(api.query.democracy['preimages'])
        ? getDemocracyImages(api, hashes)
        : isFunction(api.query.preimage.preimageFor)
          ? getImages(api, hashes)
          : of([])
      : of([])
  );
}

/**
 * @name preimage
 * @description Retrieves the full details (preimage) of a governance proposal using its on-chain hash.
 * @param { Hash | Uint8Array | string | FrameSupportPreimagesBounded } hash Hash that represents governance proposals.
 *  * @example
 * ```javascript
 * const preimage = await api.derive.democracy.preimage(HASH);
 * ```
 */
export const preimage = /*#__PURE__*/ firstMemo(
  (api: DeriveApi, hash: Hash | Uint8Array | string | FrameSupportPreimagesBounded) =>
    api.derive.democracy.preimages([hash])
);
