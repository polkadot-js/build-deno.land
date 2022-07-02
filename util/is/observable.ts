// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from '../types.ts';

import { isOn } from './helpers.ts';

/**
 * @name isBObservable
 * @summary Tests for a `Observable` object instance.
 * @description
 * Checks to see if the input object is an instance of `BN` (bn.js).
 * @example
 * <BR>
 *
 * ```javascript
 * import { isObservable } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
 *
 * console.log('isObservable', isObservable(...));
 * ```
 */
export const isObservable = isOn<Observable>('next');
