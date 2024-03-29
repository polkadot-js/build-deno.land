
import type { Option, Text } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { ICompact, INumber, LookupString } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { TypeDef } from './types.ts';

interface SiTypeBase {
  def: {
    asTuple: ICompact<INumber>[]
  }
}

export interface ILookup {
  getSiType (lookupId: ICompact<INumber> | LookupString | number): SiTypeBase;
  getTypeDef (lookupId: ICompact<INumber> | LookupString | number): TypeDef;
  sanitizeField (name: Option<Text>): [string | null, string | null];
}
