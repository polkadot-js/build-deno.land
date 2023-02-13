
import type { CodecClass, Registry } from '../types/index.ts';

import { typeToConstructor } from './typeToConstructor.ts';

/**
 * @description takes an input map of the form `{ [string]: string | CodecClass }` and returns a map of `{ [string]: CodecClass }`
 */
export function mapToTypeMap (registry: Registry, input: Record<string, string | CodecClass>): [CodecClass[], string[]] {
  const entries = Object.entries(input);
  const count = entries.length;
  const output: [CodecClass[], string[]] = [new Array<CodecClass>(count), new Array<string>(count)];

  for (let i = 0; i < count; i++) {
    output[1][i] = entries[i][0];
    output[0][i] = typeToConstructor(registry, entries[i][1]);
  }

  return output;
}
