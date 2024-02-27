

import { packageInfo as deriveInfo } from 'https://deno.land/x/polkadot/api-derive/packageInfo.ts';
import { packageInfo as coreInfo } from 'https://deno.land/x/polkadot/rpc-core/packageInfo.ts';
import { packageInfo as providerInfo } from 'https://deno.land/x/polkadot/rpc-provider/packageInfo.ts';
import { packageInfo as typesInfo } from 'https://deno.land/x/polkadot/types/packageInfo.ts';
import { packageInfo as knownInfo } from 'https://deno.land/x/polkadot/types-known/packageInfo.ts';
import { detectPackage } from 'https://deno.land/x/polkadot/util/mod.ts';

import { packageInfo } from './packageInfo.ts';

detectPackage(packageInfo, null, [coreInfo, deriveInfo, knownInfo, providerInfo, typesInfo]);
