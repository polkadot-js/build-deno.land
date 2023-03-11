
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

import { rpc } from './rpc.ts';
import { runtime } from './runtime.ts';

export default {
  rpc,
  runtime,
  types: {
    BeefyAuthoritySet: {
      id: 'u64',
      len: 'u32',
      root: 'H256'
    },
    BeefyCommitment: {
      payload: 'BeefyPayload',
      blockNumber: 'BlockNumber',
      validatorSetId: 'ValidatorSetId'
    },
    BeefyId: '[u8; 33]',
    BeefyEquivocationProof: {
      first: 'BeefyVoteMessage',
      second: 'BeefyVoteMessage'
    },
    BeefySignedCommitment: {
      commitment: 'BeefyCommitment',
      signatures: 'Vec<Option<EcdsaSignature>>'
    },
    BeefyNextAuthoritySet: {
      id: 'u64',
      len: 'u32',
      root: 'H256'
    },
    BeefyPayload: 'Vec<(BeefyPayloadId, Bytes)>',
    BeefyPayloadId: '[u8;2]',
    BeefyVoteMessage: {
      commitment: 'BeefyCommitment',
      id: 'AuthorityId',
      signature: 'Signature'
    },
    MmrRootHash: 'H256',
    ValidatorSetId: 'u64',
    ValidatorSet: {
      validators: 'Vec<AuthorityId>',
      id: 'ValidatorSetId'
    }
  }
} as Definitions;
