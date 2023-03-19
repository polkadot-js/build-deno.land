
import { packageInfo as deriveInfo } from 'https://deno.land/x/polkadot@0.2.32/api-derive/packageInfo.ts';
import { packageInfo as coreInfo } from 'https://deno.land/x/polkadot@0.2.32/rpc-core/packageInfo.ts';
import { packageInfo as providerInfo } from 'https://deno.land/x/polkadot@0.2.32/rpc-provider/packageInfo.ts';
import { packageInfo as typesInfo } from 'https://deno.land/x/polkadot@0.2.32/types/packageInfo.ts';
import { packageInfo as knownInfo } from 'https://deno.land/x/polkadot@0.2.32/types-known/packageInfo.ts';

export default [deriveInfo, coreInfo, providerInfo, typesInfo, knownInfo];
