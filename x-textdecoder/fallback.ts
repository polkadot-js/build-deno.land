
export class TextDecoder {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-useless-constructor
  constructor (_?: 'utf-8' | 'utf8') {
    // nothing
  }

  decode (value: Uint8Array): string {
    let result = '';

    for (let i = 0; i < value.length; i++) {
      result += String.fromCharCode(value[i]);
    }

    return result;
  }
}
