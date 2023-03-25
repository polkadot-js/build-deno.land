
import { fetch } from 'https://deno.land/x/polkadot@0.2.33/x-fetch/mod.ts';


async function fetchWithTimeout (url: string, timeout = 2000): Promise<Response> {
  const controller = new AbortController();
  let isAborted = false;
  const id = setTimeout((): void => {
    console.log(`Timeout on ${url}`);

    isAborted = true;
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });

    clearTimeout(id);

    return response;
  } catch (error) {
    if (!isAborted) {
      clearTimeout(id);
    }

    throw error;
  }
}

export function fetchJson <T> (url: string, timeout?: number): Promise<T> {
  return fetchWithTimeout(url, timeout).then<T>((r) => r.json());
}

export function fetchText (url: string, timeout?: number): Promise<string> {
  return fetchWithTimeout(url, timeout).then((r) => r.text());
}
