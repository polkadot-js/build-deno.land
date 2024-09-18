
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { runtime } from './runtime.ts';

export default {
  rpc: {},
  runtime,
  types: {
    PostDispatchInfo: {
      actualWeight: 'Option<Weight>',
      paysFee: 'Pays'
    },
    DispatchResultWithPostInfo: 'Result<PostDispatchInfo, DispatchError>',
    CallDryRunEffects: {
      executionResult: 'DispatchResultWithPostInfo',
      emittedEvents: 'Vec<Event>',
      localXcm: 'Option<VersionedXcm>',
      forwardedXcms: 'Vec<(VersionedMultiLocation, Vec<VersionedXcm>)>'
    },
    XcmDryRunEffects: {
      executionResult: 'OutcomeV4',
      emittedEvents: 'Vec<Event>',
      forwardedXcms: 'Vec<(VersionedMultiLocation, Vec<VersionedXcm>)>'
    },
    XcmDryRunApiError: {
      _enum: [
        'Unimplemented',
        'VersionedConversionFailed'
      ]
    }
  }
} as Definitions;
