

import { detectPackage } from 'https://deno.land/x/polkadot@0.2.36/util/mod.ts';

import others from './detectOther.ts';
import { packageInfo } from './packageInfo.ts';

detectPackage(packageInfo, null, others);
