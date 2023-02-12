
import type { Definitions } from 'https://deno.land/x/polkadot/types/types/index.ts';

import { objectSpread } from 'https://deno.land/x/polkadot/util/mod.ts';

import kusama from './kusama.ts';
import polkadot from './polkadot.ts';
import substrate from './substrate.ts';

export default {
  rpc: {},
  // Not 100% sure it is relevant, however the order here is the same
  // as exposed in the typegen lookup order
  types: objectSpread({}, substrate, polkadot, kusama)
} as Definitions;
