// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Text } from 'https://deno.land/x/polkadot@0.0.2/types-codec/mod.ts';

import { stringCamelCase } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

type Name = string | Text;

interface Named {
  name: Name;
}

function convert (fn: (n: Name) => string): (n: Named) => string {
  return ({ name }: Named) => fn(name);
}

export const objectNameToCamel = convert(stringCamelCase);
export const objectNameToString = convert((n) => n.toString());
