
const chr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const map = new Array<number>(256);

for (let i = 0; i < chr.length; i++) {
  map[chr.charCodeAt(i)] = i;
}

/**
 * @name base64Decode
 * @description
 * A base64Decoding function that operates in all environments. Unlike decoding
 * from Buffer (Node.js only) or atob (browser-only) this implementation is
 * slightly slower, but it is platform independent.
 *
 * For our usage, since we have access to the static final size (where used), we
 * decode to a specified output buffer. This also means we have applied a number
 * of optimizations based on this - checking output position instead of chars.
 */
export function base64Decode (data: string, out: Uint8Array): Uint8Array {
  const len = out.length;
  let byte = 0;
  let bits = 0;
  let pos = -1;

  for (let i = 0; pos < len; i++) {
    // each character represents 6 bits
    byte = (byte << 6) | map[data.charCodeAt(i)];

    // each byte needs to contain 8 bits
    if ((bits += 6) >= 8) {
      out[++pos] = (byte >>> (bits -= 8)) & 0xff;
    }
  }

  return out;
}
