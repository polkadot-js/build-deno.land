

import { packageInfo as netInfo } from 'https://deno.land/x/polkadot/networks/packageInfo.ts';
import { detectPackage } from 'https://deno.land/x/polkadot/util/mod.ts';
import { packageInfo as utilInfo } from 'https://deno.land/x/polkadot/util/packageInfo.ts';
import { packageInfo as randomInfo } from 'https://deno.land/x/polkadot/x-randomvalues/mod.ts';

import { packageInfo } from './packageInfo.ts';

detectPackage(packageInfo, null, [netInfo, randomInfo, utilInfo]);
