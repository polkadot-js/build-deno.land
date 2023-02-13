
export type ExtTypes = Record<string, string>;

export type ExtInfo = {
  extrinsic: ExtTypes;
  payload: ExtTypes;
}

export type ExtDef = Record<string, ExtInfo>;
