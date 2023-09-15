

import { NativeModules } from 'https://esm.sh/react-native';

import { base64Decode } from 'https://deno.land/x/polkadot@0.2.42/wasm-util/base64.ts';
import { xglobal } from 'https://deno.land/x/polkadot@0.2.42/x-global/mod.ts';

import { crypto as cryptoBrowser, getRandomValues as getRandomValuesBrowser } from './browser.ts';
import { insecureRandomValues } from './fallback.ts';

export { packageInfo } from './packageInfo.ts';

interface RNExt {
  ExpoRandom: {
    getRandomBase64String: (length: number) => string;
  };
  RNGetRandomValues: {
    getRandomBase64: (length: number) => string;
  }
}

/**
 * @internal
 *
 * A getRandomValues util that detects and uses the available RN
 * random utiliy generation functions.
 **/
function getRandomValuesRn (output: Uint8Array): Uint8Array {
  return base64Decode(
    (NativeModules as RNExt).RNGetRandomValues
      ? (NativeModules as RNExt).RNGetRandomValues.getRandomBase64(output.length)
      : (NativeModules as RNExt).ExpoRandom.getRandomBase64String(output.length),
    output
  );
}

export const getRandomValues = (
  (typeof xglobal.crypto === 'object' && typeof xglobal.crypto.getRandomValues === 'function')
    ? getRandomValuesBrowser
    : (typeof xglobal['nativeCallSyncHook'] === 'undefined' || !NativeModules['ExpoRandom'])
      ? insecureRandomValues
      : getRandomValuesRn
);

export const crypto = (
  getRandomValues === getRandomValuesBrowser
    ? cryptoBrowser
    : { getRandomValues }
);
