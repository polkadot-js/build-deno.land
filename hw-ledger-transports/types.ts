// Copyright 2017-2022 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Transport from 'https://cdn.skypack.dev/@ledgerhq/hw-transport@6.27.1';

export type LedgerTypes = 'hid' | 'u2f' | 'webusb';

export interface TransportDef {
  create (): Promise<Transport>;
  type: LedgerTypes;
}
