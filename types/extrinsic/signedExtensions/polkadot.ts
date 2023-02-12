
import type { ExtDef } from './types.ts';

import { emptyCheck } from './emptyCheck.ts';

export const polkadot: ExtDef = {
  LimitParathreadCommits: emptyCheck,
  OnlyStakingAndClaims: emptyCheck,
  PrevalidateAttests: emptyCheck,
  RestrictFunctionality: emptyCheck,
  TransactionCallFilter: emptyCheck,
  ValidateDoubleVoteReports: emptyCheck
};
