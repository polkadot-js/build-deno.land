
import type { HashType } from './types.ts';

import { blake2AsU8a } from '../blake2/index.ts';
import { keccakAsU8a } from '../keccak/index.ts';

export function hasher (hashType: HashType, data: Uint8Array | string, onlyJs?: boolean): Uint8Array {
  return hashType === 'keccak'
    ? keccakAsU8a(data, undefined, onlyJs)
    : blake2AsU8a(data, undefined, undefined, onlyJs);
}
