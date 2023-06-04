
export class TextDecoder {
  __encoding?: string;

  constructor (encoding?: 'utf-8' | 'utf8') {
    this.__encoding = encoding;
  }

  decode (value: Uint8Array): string {
    let result = '';

    for (let i = 0, count = value.length; i < count; i++) {
      result += String.fromCharCode(value[i]);
    }

    return result;
  }
}
