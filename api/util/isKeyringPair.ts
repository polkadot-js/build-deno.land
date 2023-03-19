
import type { AccountId, Address } from 'https://deno.land/x/polkadot@0.2.32/types/interfaces/index.ts';
import type { IKeyringPair } from 'https://deno.land/x/polkadot@0.2.32/types/types/index.ts';

import { isFunction } from 'https://deno.land/x/polkadot@0.2.32/util/mod.ts';

export function isKeyringPair (account: string | IKeyringPair | AccountId | Address): account is IKeyringPair {
  return isFunction((account as IKeyringPair).sign);
}
