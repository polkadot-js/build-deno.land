
import { DeriveJunction } from './DeriveJunction.ts';

const RE_JUNCTION = /\/(\/?)([^/]+)/g;

export interface ExtractResult {
  parts: string[] | null;
  path: DeriveJunction[];
}

/**
 * @description Extract derivation junctions from the supplied path
 */
export function keyExtractPath (derivePath: string): ExtractResult {
  const parts = derivePath.match(RE_JUNCTION);
  const path: DeriveJunction[] = [];
  let constructed = '';

  if (parts) {
    constructed = parts.join('');

    for (const p of parts) {
      path.push(DeriveJunction.from(p.substring(1)));
    }
  }

  if (constructed !== derivePath) {
    throw new Error(`Re-constructed path "${constructed}" does not match input`);
  }

  return {
    parts,
    path
  };
}
