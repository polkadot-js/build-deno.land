
import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.31/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

const importFetch = import('https://esm.sh/node-fetch@3.3.0').catch(() => null);

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

export const fetch = /*#__PURE__*/ extractGlobal('fetch', nodeFetch);
