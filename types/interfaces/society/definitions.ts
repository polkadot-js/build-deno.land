
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.ts';

export default {
  rpc: {},
  types: {
    Bid: {
      who: 'AccountId',
      kind: 'BidKind',
      value: 'Balance'
    },
    BidKind: {
      _enum: {
        Deposit: 'Balance',
        Vouch: '(AccountId, Balance)'
      }
    },
    // a society-specific Judgement (not the same as identity Judgement)
    SocietyJudgement: {
      _enum: ['Rebid', 'Reject', 'Approve']
    },
    // a society-specific Vote
    SocietyVote: {
      _enum: ['Skeptic', 'Reject', 'Approve']
    },
    StrikeCount: 'u32',
    VouchingStatus: {
      _enum: ['Vouching', 'Banned']
    }
  }
} as Definitions;
