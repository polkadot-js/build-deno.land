
import type { Transport, TransportDef } from './types.ts';

import LedgerHid from 'https://esm.sh/@ledgerhq/hw-transport-node-hid-singleton@6.28.9';

export { packageInfo } from './packageInfo.ts';

export const transports: TransportDef[] = [
  {
    create: (): Promise<Transport> =>
      (LedgerHid as unknown as Transport).create(),
    type: 'hid'
  }
];
