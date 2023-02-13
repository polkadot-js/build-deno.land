
import { packageInfo as deriveInfo } from 'https://deno.land/x/polkadot@0.2.27/api-derive/packageInfo.ts';
import { packageInfo as coreInfo } from 'https://deno.land/x/polkadot@0.2.27/rpc-core/packageInfo.ts';
import { packageInfo as providerInfo } from 'https://deno.land/x/polkadot@0.2.27/rpc-provider/packageInfo.ts';
import { packageInfo as typesInfo } from 'https://deno.land/x/polkadot@0.2.27/types/packageInfo.ts';
import { packageInfo as knownInfo } from 'https://deno.land/x/polkadot@0.2.27/types-known/packageInfo.ts';

export default [deriveInfo, coreInfo, providerInfo, typesInfo, knownInfo];
