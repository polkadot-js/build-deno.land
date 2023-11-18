
import 'https://deno.land/x/polkadot@0.2.44/x-bigint/shim.ts';

import { cryptoWaitReady } from './crypto.ts';

cryptoWaitReady().catch((): void => {
  // shouldn't happen, logged and caught inside cryptoWaitReady
});
