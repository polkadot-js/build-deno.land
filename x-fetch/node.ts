
import { extractGlobal } from 'https://deno.land/x/polkadot@0.2.44/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

const importFetch = import('https://esm.sh/node-fetch@3.3.2').catch(() => null);

let modFn: typeof fetch | null = null;

async function nodeFetch (...args: Parameters<typeof fetch>): Promise<Response> {
  if (!modFn) {
    const mod = await importFetch;

    if (!mod?.default) {
      throw new Error('Unable to import node-fetch in this environment');
    }

    modFn = mod.default as unknown as typeof fetch;
  }

  return modFn(...args);
}

export const fetch = /*#__PURE__*/ extractGlobal('fetch', nodeFetch);
