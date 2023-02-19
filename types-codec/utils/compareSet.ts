
import { isObject } from 'https://deno.land/x/polkadot@0.2.28/util/mod.ts';

function compareSetArray (a: Set<unknown>, b: any[]): boolean {
  // equal number of entries and each entry in the array should match
  return (a.size === b.length) && !b.some((e) => !a.has(e));
}

export function compareSet (a: Set<unknown>, b?: unknown): boolean {
  if (Array.isArray(b)) {
    return compareSetArray(a, b);
  } else if (b instanceof Set) {
    return compareSetArray(a, [...b.values()]);
  } else if (isObject(b)) {
    return compareSetArray(a, Object.values(b));
  }

  return false;
}
