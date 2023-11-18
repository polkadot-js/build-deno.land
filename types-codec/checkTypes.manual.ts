
import 'https://deno.land/x/polkadot/types-augment/mod.ts';

import { TypeRegistry } from 'https://deno.land/x/polkadot/types/mod.ts';

import { U32 } from './index.ts';

const registry = new TypeRegistry();

console.log(new U32(registry).divn(1));
