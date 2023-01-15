// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import 'https://deno.land/x/polkadot@0.2.22/api-augment/mod.ts';

import { derive } from './index.ts';

console.log(derive.chain.bestNumber);
