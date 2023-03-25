
import { xglobal } from 'https://deno.land/x/polkadot@0.2.33/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

export const BigInt: BigIntConstructor = typeof xglobal.BigInt === 'function' && typeof xglobal.BigInt.asIntN === 'function'
  ? xglobal.BigInt
  : (() => Number.NaN) as unknown as BigIntConstructor;
