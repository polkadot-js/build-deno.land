
import { isReady, waitReady } from 'https://deno.land/x/polkadot/wasm-crypto/mod.ts';

export const cryptoIsReady = isReady;

export function cryptoWaitReady (): Promise<boolean> {
  return waitReady()
    .then((): boolean => {
      if (!isReady()) {
        throw new Error('Unable to initialize @polkadot/util-crypto');
      }

      return true;
    })
    .catch(() => false);
}
