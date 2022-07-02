// Copyright 2017-2022 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from 'https://deno.land/x/polkadot@0.0.2/util/types.ts';

export type LedgerTypes = 'hid' | 'u2f' | 'webusb';

export interface AccountOptions {
  account: number;
  addressIndex: number;
  change: number;
}

export interface LedgerAddress {
  address: string;
  publicKey: HexString;
}

export interface LedgerSignature {
  signature: HexString;
}

export interface LedgerVersion {
  isLocked: boolean;
  isTestMode: boolean;
  /**
   * @description Tuple with major, minor, patch
   */
  version: [number, number, number];
}
