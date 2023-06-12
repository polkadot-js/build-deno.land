
import type { DeriveApi } from '../types.ts';

export function getQueryInterface (api: DeriveApi): DeriveApi['query']['voterList'] {
  return (
    // latest substrate & polkadot
    api.query.voterList ||
    // previous substrate
    api.query['voterBagsList'] ||
    api.query['bagsList']
  );
}
