// Copyright 2017-2023 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Transport from 'https://esm.sh/@ledgerhq/hw-transport@6.27.10';

export type LedgerTypes = 'hid' | 'u2f' | 'webusb';

export interface TransportDef {
  /** Create a transport to be used in Ledger operations */
  create (): Promise<Transport>;
  /** The type of the underlying transport definition */
  type: LedgerTypes;
}
