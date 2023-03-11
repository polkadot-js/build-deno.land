
export type LedgerTypes = 'hid' | 'u2f' | 'webusb';

export interface Transport {
  create (): Promise<Transport>;
}

export interface TransportDef {
  /** Create a transport to be used in Ledger operations */
  create (): Promise<Transport>;
  /** The type of the underlying transport definition */
  type: LedgerTypes;
}
