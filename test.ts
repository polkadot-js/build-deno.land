// Copyright 2017-2022 @polkadot/deno authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import { stringCamelCase } from './util/mod.ts';

Deno.test('deno: util', () => {
  assertEquals(stringCamelCase('foo-bar baz'), 'fooBarBaz', 'stringCamelCase');
});
