
import type { Codec } from 'https://deno.land/x/polkadot@0.2.39/types/types/index.ts';
import type { DecorateFn } from '../types/index.ts';

export function toRxMethod <M extends DecorateFn<Codec>> (method: M): M {
  return method;
}
