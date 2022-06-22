// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId } from 'https://deno.land/x/polkadot@0.0.0-6/types/interfaces.ts';

import { callMethod } from './helpers.ts';

// We are re-exporting these from here to ensure that *.d.ts generation is correct
export type { AccountId } from 'https://deno.land/x/polkadot@0.0.0-6/types/interfaces.ts';

export const members = callMethod<AccountId[]>('members', []);
