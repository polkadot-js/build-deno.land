
import { arrayRange } from 'https://deno.land/x/polkadot@0.2.32/util/mod.ts';
import { perf, perfCmp } from 'https://deno.land/x/polkadot@0.2.32/util/test/index.ts';

import { randomAsU8a } from '../index.ts';

type ExecFn = (input: Uint8Array, onlyJs: boolean) => unknown;

const GENERATED = arrayRange(256).map(() => [randomAsU8a()]);

export function perfWasm (name: string, count: number, exec: ExecFn, inputs = GENERATED): void {
  perfCmp(name, ['WebAssembly', 'JavaScript'], count, inputs, exec);
}

export { perf, perfCmp };
