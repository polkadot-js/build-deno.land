
import type { ExtDef, ExtInfo, ExtTypes } from './types.ts';

import { objectSpread } from 'https://deno.land/x/polkadot@0.2.29/util/mod.ts';

import { polkadot } from './polkadot.ts';
import { shell } from './shell.ts';
import { statemint } from './statemint.ts';
import { substrate } from './substrate.ts';

export const allExtensions: ExtDef = objectSpread({}, substrate, polkadot, shell, statemint);

export const fallbackExtensions = [
  'CheckVersion',
  'CheckGenesis',
  'CheckEra',
  'CheckNonce',
  'CheckWeight',
  'ChargeTransactionPayment',
  'CheckBlockGasLimit'
];

export function findUnknownExtensions (extensions: string[], userExtensions: ExtDef = {}): string[] {
  const names = [...Object.keys(allExtensions), ...Object.keys(userExtensions)];

  return extensions.filter((k) => !names.includes(k));
}

export function expandExtensionTypes (extensions: string[], type: keyof ExtInfo, userExtensions: ExtDef = {}): ExtTypes {
  return extensions
    // Always allow user extensions first - these should provide overrides
    .map((k) => userExtensions[k] || allExtensions[k])
    .filter((info): info is ExtInfo => !!info)
    .reduce((result, info): ExtTypes => objectSpread(result, info[type]), {});
}
