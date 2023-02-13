
import type { HexString } from 'https://deno.land/x/polkadot@0.2.27/util/types.ts';

export type LedgerTypes = 'hid' | 'u2f' | 'webusb';

export interface AccountOptions {
  /** The index of the account */
  account: number;
  /** The index of the address */
  addressIndex: number;
  /** The change to apply */
  change: number;
}

export interface LedgerAddress {
  /** The ss58 encoded address */
  address: string;
  /** The hex-encoded publicKey */
  publicKey: HexString;
}

export interface LedgerSignature {
  /** A hex-encoded signature, as generated by the device */
  signature: HexString;
}

export interface LedgerVersion {
  /** Indicator flag for locked status */
  isLocked: boolean;
  /** Indicator flag for testmode status */
  isTestMode: boolean;
  /** The software version for this device */
  version: [major: number, minor: number, patch: number];
}
