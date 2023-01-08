// Copyright 2017-2023 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { sr25519DeriveKeypairHard } from 'https://deno.land/x/polkadot@0.2.21/wasm-crypto/mod.ts';

import { createDeriveFn } from './derive.ts';

export const sr25519DeriveHard = createDeriveFn(sr25519DeriveKeypairHard);
