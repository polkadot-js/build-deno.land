
export { packageInfo } from './packageInfo.ts';

export function getRandomValues <T extends Uint8Array> (arr: T): T {
  return crypto.getRandomValues(arr);
}
