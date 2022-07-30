// Copyright 2017-2022 @polkadot/x-fetch authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { extractGlobal } from 'https://deno.land/x/polkadot@0.0.9/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

// This is an ESM module, use the async import(...) syntax to pull it
// in. Logically we would like it in nodeFetch(...) itself, however
// while it is all-ok on Node itself, it does create issues in Jest,
// possibly due to the Jest 28 need for --experimental-vm-modules
const importFetch = import('https://esm.sh/node-fetch@3.2.9').catch(() => null);

// keep track of the resolved import value
let modFn: typeof fetch | null = null;

async function nodeFetch (...args: Parameters<typeof fetch>): Promise<Response> {
  if (modFn) {
    return modFn(...args);
  }

  const mod = await importFetch;

  if (!mod || !mod.default) {
    throw new Error('Unable to import node-fetch in this environment');
  }

  modFn = mod.default as unknown as typeof fetch;

  return modFn(...args);
}

export const fetch = extractGlobal('fetch', nodeFetch);
