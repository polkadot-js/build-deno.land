// Copyright 2017-2023 @polkadot/types-lookup authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from 'https://deno.land/x/polkadot@0.2.23/types/types/index.ts';

import { objectSpread } from 'https://deno.land/x/polkadot@0.2.23/util/mod.ts';

import kusama from './kusama.ts';
import polkadot from './polkadot.ts';
import substrate from './substrate.ts';

export default {
  rpc: {},
  // Not 100% sure it is relevant, however the order here is the same
  // as exposed in the typegen lookup order
  types: objectSpread({}, substrate, polkadot, kusama)
} as Definitions;
