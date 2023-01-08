// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ExtDef } from './types.ts';

export const statemint: ExtDef = {
  ChargeAssetTxPayment: {
    extrinsic: {
      tip: 'Compact<Balance>',
      // eslint-disable-next-line sort-keys
      assetId: 'Option<AssetId>'
    },
    payload: {}
  }
};
