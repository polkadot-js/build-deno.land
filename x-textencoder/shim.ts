// Copyright 2017-2022 @polkadot/x-textencoder authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { exposeGlobal } from 'https://deno.land/x/polkadot@0.0.3/x-global/mod.ts';
import { TextEncoder } from 'https://deno.land/x/polkadot@0.0.3/x-textencoder/mod.ts';

exposeGlobal('TextEncoder', TextEncoder);
