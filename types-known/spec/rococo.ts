
/* eslint-disable sort-keys */

import type { OverrideVersionedType } from 'https://deno.land/x/polkadot@0.2.41/types/types/index.ts';

import { mapXcmTypes } from 'https://deno.land/x/polkadot@0.2.41/types-create/mod.ts';

/* eslint-disable sort-keys */

const sharedTypes = {
  DispatchErrorModule: 'DispatchErrorModuleU8',
  FullIdentification: '()', // No staking, only session (as per config)
  Keys: 'SessionKeys7B',
  Weight: 'WeightV1'
};

export const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 200],
    types: {
      ...sharedTypes,
      AccountInfo: 'AccountInfoWithDualRefCount',
      Address: 'AccountId',
      LookupSource: 'AccountId'
    }
  },
  {
    minmax: [201, 214],
    types: {
      ...sharedTypes,
      AccountInfo: 'AccountInfoWithDualRefCount'
    }
  },
  {
    minmax: [215, 228],
    types: {
      ...sharedTypes,
      Keys: 'SessionKeys6'
    }
  },
  {
    minmax: [229, 9099],
    types: {
      ...sharedTypes,
      ...mapXcmTypes('V0')
    }
  },
  {
    minmax: [9100, 9105],
    types: {
      ...sharedTypes,
      ...mapXcmTypes('V1')
    }
  },
  {
    // metadata v14
    minmax: [9106, undefined],
    types: {
      Weight: 'WeightV1'
    }
  }
  // ,
  // {
  //   // weight v2 introduction
  //   minmax: [9300, undefined],
  //   types: {
  //     Weight: 'WeightV2'
  //   }
  // }
];
