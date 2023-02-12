
import type Transport from 'https://esm.sh/@ledgerhq/hw-transport@6.28.0';
import type { TransportDef } from './types.ts';

import LedgerHid from 'https://esm.sh/@ledgerhq/hw-transport-node-hid-singleton@6.28.8';

export { packageInfo } from './packageInfo.ts';

export const transports: TransportDef[] = [
  {
    create: (): Promise<Transport> =>
      LedgerHid.create(),
    type: 'hid'
  }
];
