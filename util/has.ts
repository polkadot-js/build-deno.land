
import { BigInt } from 'https://deno.land/x/polkadot@0.2.30/x-bigint/mod.ts';
import { xglobal } from 'https://deno.land/x/polkadot@0.2.30/x-global/mod.ts';

declare const __dirname: unknown;
declare const module: unknown;
declare const require: unknown;

interface BufTyp extends Function { isBuffer: (value: unknown) => boolean; }

/** true if the environment has proper BigInt support */
export const hasBigInt = typeof BigInt === 'function' && typeof BigInt.asIntN === 'function';

/** true if the environment is CJS */
export const hasCjs = typeof require === 'function' && typeof module !== 'undefined';

/** true if the environment has __dirname available */
export const hasDirname = typeof __dirname !== 'undefined';

/** true if the environment is ESM */
export const hasEsm = !hasCjs;

/** true if the environment has WebAssembly available */
export const hasWasm = typeof WebAssembly !== 'undefined';


/** true if the environment has support for Buffer (typically Node.js) */
export const hasBuffer = typeof xglobal.Buffer === 'function' && typeof (xglobal.Buffer as BufTyp).isBuffer === 'function';

/** true if the environment has process available (typically Node.js) */
export const hasProcess = typeof xglobal.process === 'object';
