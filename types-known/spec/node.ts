// Copyright 2017-2022 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

import type { OverrideVersionedType } from 'https://deno.land/x/polkadot@0.0.2/types/types/index.ts';

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      // nothing, API tracks master
    }
  }
];

export default versioned;
