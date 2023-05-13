
import { isUndefined } from 'https://deno.land/x/polkadot@0.2.39/util/mod.ts';

import { hasEq } from './util.ts';

export function compareArray (a: unknown[], b?: unknown): boolean {
  if (Array.isArray(b)) {
    return (a.length === b.length) && isUndefined(
      a.find((v, index): boolean =>
        hasEq(v)
          ? !v.eq(b[index])
          : v !== b[index]
      )
    );
  }

  return false;
}
