

import { packageInfo as transportInfo } from 'https://deno.land/x/polkadot/hw-ledger-transports/packageInfo.ts';
import { detectPackage } from 'https://deno.land/x/polkadot/util/mod.ts';
import { packageInfo as utilInfo } from 'https://deno.land/x/polkadot/util/packageInfo.ts';

import { packageInfo } from './packageInfo.ts';

detectPackage(packageInfo, null, [transportInfo, utilInfo]);
