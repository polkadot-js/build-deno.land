
import type { AnyTuple, CodecClass, INumber, Registry } from '../types/index.ts';

import { Range } from './Range.ts';

export class RangeInclusive<T extends INumber = INumber> extends Range<T> {
  constructor (registry: Registry, Type: CodecClass<T> | string, value?: AnyTuple) {
    super(registry, Type, value, { rangeName: 'RangeInclusive' });
  }

  public static override with <T extends INumber> (Type: CodecClass<T> | string): CodecClass<RangeInclusive<T>> {
    return class extends RangeInclusive<T> {
      constructor (registry: Registry, value?: AnyTuple) {
        super(registry, Type, value);
      }
    };
  }
}
