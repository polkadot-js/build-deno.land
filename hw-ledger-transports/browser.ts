// Copyright 2017-2023 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type Transport from 'https://esm.sh/@ledgerhq/hw-transport@6.27.10';
import type { TransportDef } from './types.ts';

import LedgerWebHid from 'https://esm.sh/@ledgerhq/hw-transport-webhid@6.27.10';
import LedgerWebUsb from 'https://esm.sh/@ledgerhq/hw-transport-webusb@6.27.10';

export { packageInfo } from './packageInfo.ts';

export const transports: TransportDef[] = [
  {
    create: (): Promise<Transport> =>
      LedgerWebUsb.create(),
    type: 'webusb'
  },
  {
    create: (): Promise<Transport> =>
      LedgerWebHid.create(),
    type: 'hid'
  }
];
