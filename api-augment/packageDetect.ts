

import { packageInfo as baseInfo } from 'https://deno.land/x/polkadot/api-base/packageInfo.ts';
import { packageInfo as typesInfo } from 'https://deno.land/x/polkadot/types/packageInfo.ts';
import { packageInfo as codecInfo } from 'https://deno.land/x/polkadot/types-codec/packageInfo.ts';
import { detectPackage } from 'https://deno.land/x/polkadot/util/mod.ts';

import { packageInfo } from './packageInfo.ts';

detectPackage(packageInfo, null, [baseInfo, codecInfo, typesInfo]);
