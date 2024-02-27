

import { packageInfo as codecInfo } from 'https://deno.land/x/polkadot/types-codec/packageInfo.ts';
import { packageInfo as createInfo } from 'https://deno.land/x/polkadot/types-create/packageInfo.ts';
import { detectPackage } from 'https://deno.land/x/polkadot/util/mod.ts';

import { packageInfo } from './packageInfo.ts';

detectPackage(packageInfo, null, [codecInfo, createInfo]);
