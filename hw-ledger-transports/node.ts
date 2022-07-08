// Copyright 2017-2022 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type Transport from 'https://esm.sh/@ledgerhq/hw-transport@6.27.1';
import type { TransportDef } from './types.ts';

import LedgerHid from 'https://esm.sh/@ledgerhq/hw-transport-node-hid-singleton@6.27.2';

export { packageInfo } from './packageInfo.ts';

export const transports: TransportDef[] = [
  {
    create: (): Promise<Transport> =>
      LedgerHid.create(),
    type: 'hid'
  }
];
