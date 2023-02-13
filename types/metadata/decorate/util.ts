
import type { Text } from 'https://deno.land/x/polkadot@0.2.27/types-codec/mod.ts';

import { stringCamelCase } from 'https://deno.land/x/polkadot@0.2.27/util/mod.ts';

type Name = string | Text;

interface Named {
  name: Name;
}

function convert (fn: (n: Name) => string): (n: Named) => string {
  return ({ name }: Named) => fn(name);
}

export const objectNameToCamel = convert(stringCamelCase);
export const objectNameToString = convert((n) => n.toString());
