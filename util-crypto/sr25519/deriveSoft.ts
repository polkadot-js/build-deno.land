// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { sr25519DeriveKeypairSoft } from 'https://deno.land/x/polkadot@0.0.3/wasm-crypto/mod.ts';

import { createDeriveFn } from './derive.ts';

export const sr25519DeriveSoft = createDeriveFn(sr25519DeriveKeypairSoft);
