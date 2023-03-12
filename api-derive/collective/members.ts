
import type { AccountId } from 'https://deno.land/x/polkadot@0.2.31/types/interfaces/index.ts';

import { callMethod } from './helpers.ts';

export type { AccountId } from 'https://deno.land/x/polkadot@0.2.31/types/interfaces/index.ts';

export const members = /*#__PURE__*/ callMethod<AccountId[]>('members', []);
