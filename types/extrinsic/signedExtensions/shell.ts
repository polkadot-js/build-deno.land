// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtDef } from './types.ts';

import { emptyCheck } from './emptyCheck.ts';

export const shell: ExtDef = {
  DisallowSigned: emptyCheck
};
