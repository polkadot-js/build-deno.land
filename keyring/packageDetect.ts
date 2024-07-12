

import { detectPackage } from 'https://deno.land/x/polkadot/util/mod.ts';
import { packageInfo as utilInfo } from 'https://deno.land/x/polkadot/util/packageInfo.ts';
import { packageInfo as cryptoInfo } from 'https://deno.land/x/polkadot/util-crypto/packageInfo.ts';

import { packageInfo } from './packageInfo.ts';

detectPackage(packageInfo, null, [cryptoInfo, utilInfo]);
