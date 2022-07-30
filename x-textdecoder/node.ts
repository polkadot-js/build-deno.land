// Copyright 2017-2022 @polkadot/x-textencoder authors & contributors
// SPDX-License-Identifier: Apache-2.0

import util from 'https://deno.land/std@0.148.0/node/util.ts';

import { extractGlobal } from 'https://deno.land/x/polkadot@0.0.9/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

export const TextDecoder = extractGlobal('TextDecoder', util.TextDecoder);
