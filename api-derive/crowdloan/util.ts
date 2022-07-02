// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { FrameSystemEventRecord } from 'https://deno.land/x/polkadot@0.0.2/types/lookup.ts';
import type { Vec } from 'https://deno.land/x/polkadot@0.0.2/types-codec/mod.ts';
import type { BN } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

interface Changes {
  added: string[];
  blockHash: string;
  removed: string[];
}

export function extractContributed (paraId: string | number | BN, events: Vec<FrameSystemEventRecord>): Changes {
  const added: string[] = [];
  const removed: string[] = [];

  return events
    .filter(({ event: { data: [, eventParaId], method, section } }) =>
      section === 'crowdloan' &&
      ['Contributed', 'Withdrew'].includes(method) &&
      eventParaId.eq(paraId)
    )
    .reduce((result: Changes, { event: { data: [accountId], method } }): Changes => {
      if (method === 'Contributed') {
        result.added.push(accountId.toHex());
      } else {
        result.removed.push(accountId.toHex());
      }

      return result;
    }, { added, blockHash: events.createdAtHash?.toHex() || '-', removed });
}
