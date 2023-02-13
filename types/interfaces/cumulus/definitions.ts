
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { runtime } from './runtime.ts';

const dmpQueue = {
  CollationInfo: {
    upwardMessages: 'Vec<UpwardMessage>',
    horizontalMessages: 'Vec<OutboundHrmpMessage>',
    newValidationCode: 'Option<ValidationCode>',
    processedDownwardMessages: 'u32',
    hrmpWatermark: 'RelayBlockNumber',
    headData: 'HeadData'
  },
  CollationInfoV1: {
    upwardMessages: 'Vec<UpwardMessage>',
    horizontalMessages: 'Vec<OutboundHrmpMessage>',
    newValidationCode: 'Option<ValidationCode>',
    processedDownwardMessages: 'u32',
    hrmpWatermark: 'RelayBlockNumber'
  },
  ConfigData: {
    maxIndividual: 'Weight'
  },
  MessageId: '[u8; 32]',
  OverweightIndex: 'u64',
  PageCounter: 'u32',
  PageIndexData: {
    beginUsed: 'PageCounter',
    endUsed: 'PageCounter',
    overweightCount: 'OverweightIndex'
  }
};

export default {
  rpc: {},
  runtime,
  types: dmpQueue
} as Definitions;
