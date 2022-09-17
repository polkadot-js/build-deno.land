// Copyright 2017-2022 @polkadot/x-fetch authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { fetch } from 'https://deno.land/x/polkadot/x-fetch/mod.ts';
import { exposeGlobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';

exposeGlobal('fetch', fetch);
