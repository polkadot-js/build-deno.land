

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const map = new Uint8Array(256);

for (let i = 0; i < chars.length; i++) {
  map[chars.charCodeAt(i)] = i;
}

export function base64Decode (data: string): Uint8Array {
  const bytes = [];
  let byte = 0;
  let bits = 0;

  for (let i = 0; i < data.length && data[i] !== '='; i++) {
    // each character represents 6 bits
    byte = (byte << 6) | map[data.charCodeAt(i)];

    // each byte needs to contain 8 bits
    if ((bits += 6) >= 8) {
      bytes.push((byte >>> (bits -= 8)) & 0xff);
    }
  }

  return Uint8Array.from(bytes);
}
