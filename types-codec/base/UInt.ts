
import type { AnyNumber, CodecClass, Registry, UIntBitLength } from '../types/index.ts';

import { AbstractInt } from '../abstract/Int.ts';

/**
 * @name UInt
 * @description
 * A generic unsigned integer codec. For Substrate all numbers are Little Endian encoded,
 * this handles the encoding and decoding of those numbers. Upon construction
 * the bitLength is provided and any additional use keeps the number to this
 * length. This extends `BN`, so all methods available on a normal `BN` object
 * is available here.
 * @noInheritDoc
 */
export class UInt extends AbstractInt {
  public static with (bitLength: UIntBitLength, typeName?: string): CodecClass<UInt> {
    return class extends UInt {
      constructor (registry: Registry, value?: AnyNumber | null) {
        super(registry, value, bitLength);
      }

      public override toRawType (): string {
        return typeName || super.toRawType();
      }
    };
  }
}
