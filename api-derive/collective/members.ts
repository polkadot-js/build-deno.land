
import type { AccountId } from 'https://deno.land/x/polkadot@0.2.29/types/interfaces/index.ts';

import { callMethod } from './helpers.ts';

export type { AccountId } from 'https://deno.land/x/polkadot@0.2.29/types/interfaces/index.ts';

export const members = callMethod<AccountId[]>('members', []);
