// Copyright 2017-2023 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ToBigInt } from '../types.ts';

import { isOn } from './helpers.ts';

export const isToBigInt = /*#__PURE__*/ isOn<ToBigInt>('toBigInt');
