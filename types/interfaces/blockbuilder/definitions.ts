
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { runtime } from './runtime.ts';

export default {
  rpc: {},
  runtime,
  types: {
    CheckInherentsResult: {
      okay: 'bool',
      fatalError: 'bool',
      errors: 'InherentData'
    },
    InherentData: {
      data: 'BTreeMap<InherentIdentifier, Bytes>'
    },
    InherentIdentifier: '[u8; 8]'
  }
} as Definitions;
