
import { isFunction } from 'https://deno.land/x/polkadot/util/mod.ts';

export function hasEq (o: unknown): o is { eq: (other: unknown) => boolean } {
  return isFunction((o as { eq: unknown }).eq);
}
