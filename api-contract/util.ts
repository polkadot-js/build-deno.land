// Copyright 2017-2022 @polkadot/rpc-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableResult } from 'https://deno.land/x/polkadot@0.0.3/api/mod.ts';
import type { EventRecord } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { BN } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import type { BlueprintOptions, ContractOptions } from './types.ts';

import { isBigInt, isBn, isNumber, isString } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

type ContractEvents = 'CodeStored' | 'ContractEmitted' | 'ContractExecution' | 'Instantiated';

type TOptions = BlueprintOptions | ContractOptions;

export function applyOnEvent <T> (result: SubmittableResult, types: ContractEvents[], fn: (records: EventRecord[]) => T): T | undefined {
  if (result.isInBlock || result.isFinalized) {
    const records = result.filterRecords('contracts', types);

    if (records.length) {
      return fn(records);
    }
  }

  return undefined;
}

export function isOptions <T> (options: bigint | string | number | BN | T): options is T {
  return !(isBn(options) || isBigInt(options) || isNumber(options) || isString(options));
}

export function extractOptions <T extends TOptions> (value: bigint | string | number | BN, params: unknown[]): [T, unknown[]] {
  const gasLimit = params.shift() as BN;

  return [{ gasLimit, value } as T, params];
}
