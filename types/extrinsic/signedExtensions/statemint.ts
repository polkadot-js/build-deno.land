
import type { ExtDef } from './types.ts';

export const statemint: ExtDef = {
  ChargeAssetTxPayment: {
    extrinsic: {
      tip: 'Compact<Balance>',
      // eslint-disable-next-line sort-keys
      assetId: 'TAssetConversion'
    },
    payload: {}
  }
};
