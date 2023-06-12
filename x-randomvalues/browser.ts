
import { xglobal } from 'https://deno.land/x/polkadot@0.2.41/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

export const crypto = xglobal.crypto;

export function getRandomValues <T extends Uint8Array> (arr: T): T {
  return crypto.getRandomValues(arr);
}
