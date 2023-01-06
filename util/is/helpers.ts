// Copyright 2017-2023 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isFunction } from './function.ts';
import { isObject } from './object.ts';

export function isOn <T> (...fns: (keyof T)[]): (value?: unknown) => value is T {
  return (value?: unknown): value is T =>
    (isObject(value) || isFunction(value)) &&
    fns.every((f) => isFunction((value as T)[f]));
}

export function isOnObject <T> (...fns: (keyof T)[]): (value?: unknown) => value is T {
  return (value?: unknown): value is T =>
    isObject(value) &&
    fns.every((f) => isFunction((value as T)[f]));
}
