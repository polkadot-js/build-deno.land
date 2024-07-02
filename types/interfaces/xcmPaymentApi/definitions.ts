
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { runtime } from './runtime.ts';

export default {
  rpc: {},
  runtime,
  types: {
    XcmPaymentApiError: {
      _enum: [
        'Unimplemented',
        'VersionedConversionFailed',
        'WeightNotComputable',
        'UnhandledXcmVersion',
        'AssetNotFound'
      ]
    }
  }
} as Definitions;
