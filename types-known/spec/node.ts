
/* eslint-disable sort-keys */

import type { OverrideVersionedType } from 'https://deno.land/x/polkadot@0.2.29/types/types/index.ts';

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      // nothing, API tracks master
      // (v2 weights are not yet the default)
      Weight: 'WeightV2'
    }
  }
];

export default versioned;
