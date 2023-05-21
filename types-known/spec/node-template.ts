
/* eslint-disable sort-keys */

import type { OverrideVersionedType } from 'https://deno.land/x/polkadot@0.2.40/types/types/index.ts';

export const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      // nothing, API tracks master
      // (v2 weights are not yet the default)
      Weight: 'WeightV2'
    }
  }
];
