// Copyright 2017-2022 @polkadot/x-fetch authors & contributors
// SPDX-License-Identifier: Apache-2.0

import nodeFetch from 'https://esm.sh/node-fetch@2.6.7';

import { extractGlobal } from 'https://deno.land/x/polkadot@0.0.3/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

export const fetch = extractGlobal('fetch', nodeFetch);
