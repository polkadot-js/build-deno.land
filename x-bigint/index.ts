// Copyright 2017-2022 @polkadot/x-bigint authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { xglobal } from 'https://deno.land/x/polkadot@0.0.3/x-global/mod.ts';

export { packageInfo } from './packageInfo.ts';

export const BigInt: BigIntConstructor = typeof xglobal.BigInt === 'function' && typeof xglobal.BigInt.asIntN === 'function'
  ? xglobal.BigInt
  : (() => Number.NaN) as unknown as BigIntConstructor;
