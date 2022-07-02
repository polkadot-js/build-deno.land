// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isUndefined } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

import { hasEq } from './util.ts';

// NOTE These are used internally and when comparing objects, expects that
// when the second is an Codec[] that the first has to be as well
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
