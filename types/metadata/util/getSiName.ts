
import type { ILookup } from 'https://deno.land/x/polkadot/types-create/types/index.ts';
import type { SiLookupTypeId } from '../../interfaces/index.ts';

export function getSiName (lookup: ILookup, type: SiLookupTypeId): string {
  const typeDef = lookup.getTypeDef(type);

  return typeDef.lookupName || typeDef.type;
}
