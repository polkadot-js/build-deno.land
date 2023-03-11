
import type { Transport, TransportDef } from './types.ts';

import LedgerWebHid from 'https://esm.sh/@ledgerhq/hw-transport-webhid@6.27.12';
import LedgerWebUsb from 'https://esm.sh/@ledgerhq/hw-transport-webusb@6.27.12';

export { packageInfo } from './packageInfo.ts';

export const transports: TransportDef[] = [
  {
    create: (): Promise<Transport> =>
      (LedgerWebUsb as unknown as Transport).create(),
    type: 'webusb'
  },
  {
    create: (): Promise<Transport> =>
      (LedgerWebHid as unknown as Transport).create(),
    type: 'hid'
  }
];
