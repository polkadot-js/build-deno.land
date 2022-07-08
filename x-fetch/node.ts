// Copyright 2017-2022 @polkadot/x-fetch authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { extractGlobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

let resolvedFetch: null | typeof fetch = null;

async function nodeFetch (...args: Parameters<typeof fetch>): Promise<Response> {
  if (!resolvedFetch) {
    // we use the async import here to resolve on-demand
    // (this allows us to use the latest ESM version of the package)
    const mod = await import('node-fetch');

    resolvedFetch = mod.default as unknown as typeof fetch;
  }

  return resolvedFetch(...args);
}

export const fetch = extractGlobal('fetch', nodeFetch);
