// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Balance } from 'https://deno.land/x/polkadot@0.0.0-6/types/interfaces.ts';

export interface DeriveContributions {
  blockHash: string;
  contributorsHex: string[];
}

export type DeriveOwnContributions = Record<string, Balance>;
