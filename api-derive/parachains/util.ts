
import type { ParaId } from 'https://deno.land/x/polkadot@0.2.40/types/interfaces/index.ts';
import type { DidUpdate } from './types.ts';

export function didUpdateToBool (didUpdate: DidUpdate, id: ParaId): boolean {
  return didUpdate.isSome
    ? didUpdate.unwrap().some((paraId) => paraId.eq(id))
    : false;
}
