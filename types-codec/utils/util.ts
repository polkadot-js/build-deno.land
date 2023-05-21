
import { isFunction } from 'https://deno.land/x/polkadot@0.2.40/util/mod.ts';

export function hasEq (o: unknown): o is { eq: (other: unknown) => boolean } {
  return isFunction((o as { eq: unknown }).eq);
}
