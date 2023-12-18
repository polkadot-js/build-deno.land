
import type * as HwTransport from 'https://esm.sh/@ledgerhq/hw-transport@6.30.1';

export type TransportType = 'hid' | 'webusb';

export type Transport = HwTransport.default;

export interface TransportDef {
  /** Create a transport to be used in Ledger operations */
  create (): Promise<Transport>;
  /** The type of the underlying transport definition */
  type: TransportType;
}
