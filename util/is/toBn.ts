// Copyright 2017-2023 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ToBn } from '../types.ts';

import { isOn } from './helpers.ts';

export const isToBn = /*#__PURE__*/ isOn<ToBn>('toBn');
