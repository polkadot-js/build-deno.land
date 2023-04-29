
export class TextEncoder {
  encode (value: string): Uint8Array {
    const count = value.length;
    const u8a = new Uint8Array(count);

    for (let i = 0; i < count; i++) {
      u8a[i] = value.charCodeAt(i);
    }

    return u8a;
  }
}
