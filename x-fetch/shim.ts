// Copyright 2017-2023 @polkadot/x-fetch authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { fetch } from 'https://deno.land/x/polkadot@0.2.26/x-fetch/mod.ts';
import { exposeGlobal } from 'https://deno.land/x/polkadot@0.2.26/x-global/mod.ts';

exposeGlobal('fetch', fetch);
