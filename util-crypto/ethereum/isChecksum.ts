
import { u8aToHex } from 'https://deno.land/x/polkadot/util/mod.ts';

import { keccakAsU8a } from '../keccak/index.ts';

function isInvalidChar (char: string, byte: number): boolean {
  return char !== (
    byte > 7
      ? char.toUpperCase()
      : char.toLowerCase()
  );
}

export function isEthereumChecksum (_address: string): boolean {
  const address = _address.replace('0x', '');
  const hash = u8aToHex(keccakAsU8a(address.toLowerCase()), -1, false);

  for (let i = 0; i < 40; i++) {
    if (isInvalidChar(address[i], parseInt(hash[i], 16))) {
      return false;
    }
  }

  return true;
}
