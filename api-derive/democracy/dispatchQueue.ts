// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.7';
import type { Option, Vec } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { BlockNumber, Call, Hash, ReferendumIndex, Scheduled } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';
import type { FrameSupportPreimagesBounded, FrameSupportScheduleMaybeHashed, PalletSchedulerScheduled, PalletSchedulerScheduledV3 } from 'https://deno.land/x/polkadot/types/lookup.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types/types/index.ts';
import type { HexString } from 'https://deno.land/x/polkadot/util/types.ts';
import type { DeriveApi, DeriveDispatch, DeriveProposalImage } from '../types.ts';

import { catchError, combineLatest, map, of, switchMap } from 'https://esm.sh/rxjs@7.5.7';

import { Enum } from 'https://deno.land/x/polkadot/types/mod.ts';
import { isFunction, objectSpread, stringToHex } from 'https://deno.land/x/polkadot/util/mod.ts';

import { memo } from '../util/index.ts';
import { getImageHashBounded } from './util.ts';

const DEMOCRACY_ID = stringToHex('democrac');

interface SchedulerInfo {
  at: BlockNumber;
  imageHash: HexString;
  index: ReferendumIndex;
}

function isMaybeHashedOrBounded (call: FrameSupportPreimagesBounded | FrameSupportScheduleMaybeHashed | Call): call is FrameSupportScheduleMaybeHashed | FrameSupportPreimagesBounded {
  // check for enum
  return call instanceof Enum;
}

function isBounded (call: FrameSupportPreimagesBounded | FrameSupportScheduleMaybeHashed): call is FrameSupportPreimagesBounded {
  // check for type
  return (call as FrameSupportPreimagesBounded).isInline || (call as FrameSupportPreimagesBounded).isLegacy || (call as FrameSupportPreimagesBounded).isLookup;
}

function queryQueue (api: DeriveApi): Observable<DeriveDispatch[]> {
  return api.query.democracy.dispatchQueue<Vec<ITuple<[BlockNumber, Hash, ReferendumIndex]>>>().pipe(
    switchMap((dispatches) =>
      combineLatest([
        of(dispatches),
        api.derive.democracy.preimages(
          dispatches.map(([, hash]) => hash))
      ])
    ),
    map(([dispatches, images]) =>
      dispatches.map(([at, imageHash, index], dispatchIndex): DeriveDispatch => ({
        at,
        image: images[dispatchIndex],
        imageHash: getImageHashBounded(imageHash),
        index
      }))
    )
  );
}

function schedulerEntries (api: DeriveApi): Observable<[BlockNumber[], Option<PalletSchedulerScheduled | PalletSchedulerScheduledV3 | Scheduled>[][]]> {
  // We don't get entries, but rather we get the keys (triggered via finished referendums) and
  // the subscribe to those keys - this means we pickup when the schedulers actually executes
  // at a block, the entry for that block will become empty
  return api.derive.democracy.referendumsFinished().pipe(
    switchMap(() =>
      api.query.scheduler.agenda.keys()
    ),
    switchMap((keys) => {
      const blockNumbers = keys.map(({ args: [blockNumber] }) => blockNumber);

      return blockNumbers.length
        ? combineLatest([
          of(blockNumbers),
          // this should simply be api.query.scheduler.agenda.multi,
          // however we have had cases on Darwinia where the indices have moved around after an
          // upgrade, which results in invalid on-chain data
          api.query.scheduler.agenda.multi(blockNumbers).pipe(
            catchError(() => of(blockNumbers.map(() => [])))
          )
        ])
        : of<[BlockNumber[], Option<PalletSchedulerScheduledV3 | Scheduled>[][]]>([[], []]);
    })
  );
}

function queryScheduler (api: DeriveApi): Observable<DeriveDispatch[]> {
  return schedulerEntries(api).pipe(
    switchMap(([blockNumbers, agendas]): Observable<[SchedulerInfo[], (DeriveProposalImage | undefined)[]]> => {
      const result: SchedulerInfo[] = [];

      blockNumbers.forEach((at, index): void => {
        (agendas[index] || []).filter((o) => o.isSome).forEach((o): void => {
          const scheduled = o.unwrap();

          if (scheduled.maybeId.isSome) {
            const id = scheduled.maybeId.unwrap().toHex();

            if (id.startsWith(DEMOCRACY_ID)) {
              const imageHash = isMaybeHashedOrBounded(scheduled.call)
                ? isBounded(scheduled.call)
                  ? getImageHashBounded(scheduled.call)
                  : scheduled.call.isHash
                    ? scheduled.call.asHash.toHex()
                    : scheduled.call.asValue.args[0].toHex()
                : scheduled.call.args[0].toHex();

              result.push({ at, imageHash, index: api.registry.createType('(u64, ReferendumIndex)', id)[1] });
            }
          }
        });
      });

      return combineLatest([
        of(result),
        result.length
          ? api.derive.democracy.preimages(result.map(({ imageHash }) => imageHash))
          : of([])
      ]);
    }),
    map(([infos, images]): DeriveDispatch[] =>
      infos.map((info, index) => objectSpread({ image: images[index] }, info))
    )
  );
}

export function dispatchQueue (instanceId: string, api: DeriveApi): () => Observable<DeriveDispatch[]> {
  return memo(instanceId, (): Observable<DeriveDispatch[]> =>
    isFunction(api.query.scheduler?.agenda)
      ? queryScheduler(api)
      : api.query.democracy.dispatchQueue
        ? queryQueue(api)
        : of([])
  );
}
