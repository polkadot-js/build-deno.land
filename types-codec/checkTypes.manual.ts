// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import 'https://deno.land/x/polkadot@0.0.2/types-augment/mod.ts';

import { TypeRegistry } from 'https://deno.land/x/polkadot@0.0.2/types/mod.ts';

import { U32 } from './index.ts';

const registry = new TypeRegistry();

console.log(new U32(registry).divn(1));
