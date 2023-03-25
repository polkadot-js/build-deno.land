
export type TransportType = 'hid' | 'webusb';


export interface Transport {
  // empty on purpose, just a stub
}

export interface TransportDef {
  /** Create a transport to be used in Ledger operations */
  create (): Promise<Transport>;
  /** The type of the underlying transport definition */
  type: TransportType;
}
