

import { NativeModules } from 'https://esm.sh/react-native';

import { base64Decode } from 'https://deno.land/x/polkadot/wasm-util/base64.ts';
import { xglobal } from 'https://deno.land/x/polkadot/x-global/mod.ts';

import { crypto as cryptoBrowser, getRandomValues as getRandomValuesBrowser } from './browser.ts';

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
  if (!NativeModules['ExpoRandom'] && !(NativeModules as RNExt).RNGetRandomValues) {
    throw new Error('No secure random number generator available. This environment does not support crypto.getRandomValues and no React Native secure RNG module is available.');
  }

  return base64Decode(
    (NativeModules as RNExt).RNGetRandomValues
      ? (NativeModules as RNExt).RNGetRandomValues.getRandomBase64(output.length)
      : (NativeModules as RNExt).ExpoRandom.getRandomBase64String(output.length),
    output
  );
}

const hasNativeRNModules = !!NativeModules['ExpoRandom'] || !!(NativeModules as RNExt).RNGetRandomValues;
const hasNativeCrypto = typeof xglobal.crypto === 'object' && typeof xglobal.crypto.getRandomValues === 'function';

export const getRandomValues = (
  hasNativeRNModules
    ? getRandomValuesRn
    : hasNativeCrypto
      ? getRandomValuesBrowser
      : () => {
        throw new Error('No secure random number generator available. This environment does not support crypto.getRandomValues.');
      }
);

export const crypto = (
  getRandomValues === getRandomValuesBrowser
    ? cryptoBrowser
    : { getRandomValues }
);
