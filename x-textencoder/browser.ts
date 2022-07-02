// Copyright 2017-2022 @polkadot/x-textencoder authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { extractGlobal } from 'https://deno.land/x/polkadot@0.0.2/x-global/mod.ts';

import { TextEncoder as Fallback } from './fallback.ts';

export { packageInfo } from './packageInfo.ts';

export const TextEncoder = extractGlobal('TextEncoder', Fallback);
