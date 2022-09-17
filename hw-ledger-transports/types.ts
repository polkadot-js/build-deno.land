// Copyright 2017-2022 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Transport from 'https://esm.sh/@ledgerhq/hw-transport@6.27.4';

export type LedgerTypes = 'hid' | 'u2f' | 'webusb';

export interface TransportDef {
  create (): Promise<Transport>;
  type: LedgerTypes;
}
