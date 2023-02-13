
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

export default {
  rpc: {},
  types: {
    CollectiveOrigin: {
      _enum: {
        Members: '(MemberCount, MemberCount)',
        Member: 'AccountId'
      }
    },
    MemberCount: 'u32',
    ProposalIndex: 'u32',
    VotesTo230: {
      index: 'ProposalIndex',
      threshold: 'MemberCount',
      ayes: 'Vec<AccountId>',
      nays: 'Vec<AccountId>'
    },
    Votes: {
      index: 'ProposalIndex',
      threshold: 'MemberCount',
      ayes: 'Vec<AccountId>',
      nays: 'Vec<AccountId>',
      end: 'BlockNumber'
    }
  }
} as Definitions;
