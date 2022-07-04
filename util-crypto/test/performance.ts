// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { arrayRange } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';
import { perf, perfCmp } from 'https://deno.land/x/polkadot@0.0.3/util/test/performance.ts';

import { randomAsU8a } from '../index.ts';

type ExecFn = (input: Uint8Array, onlyJs: boolean) => unknown;

const GENERATED = arrayRange(256).map(() => [randomAsU8a()]);

export function performanceWasm (name: string, count: number, exec: ExecFn, inputs = GENERATED): void {
  perfCmp(name, ['WebAssembly', 'JavaScript'], count, inputs, exec);
}

export { perf, perfCmp };
