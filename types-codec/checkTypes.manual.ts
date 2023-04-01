
import 'https://deno.land/x/polkadot@0.2.34/types-augment/mod.ts';

import { TypeRegistry } from 'https://deno.land/x/polkadot@0.2.34/types/mod.ts';

import { U32 } from './index.ts';

const registry = new TypeRegistry();

console.log(new U32(registry).divn(1));
