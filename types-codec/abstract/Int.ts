
import type { HexString } from 'https://deno.land/x/polkadot@0.2.43/util/types.ts';
import type { AnyNumber, Inspect, INumber, IU8a, Registry, ToBn, UIntBitLength } from '../types/index.ts';

import { BN, BN_BILLION, BN_HUNDRED, BN_MILLION, BN_QUINTILL, bnToBn, bnToHex, bnToU8a, formatBalance, formatNumber, hexToBn, isBigInt, isBn, isFunction, isHex, isNumber, isObject, isString, isU8a, u8aToBn, u8aToNumber } from 'https://deno.land/x/polkadot@0.2.43/util/mod.ts';

export const DEFAULT_UINT_BITS = 64;

const MAX_NUMBER_BITS = 52;
const MUL_P = new BN(1_00_00);

const FORMATTERS: [string, BN][] = [
  ['Perquintill', BN_QUINTILL],
  ['Perbill', BN_BILLION],
  ['Permill', BN_MILLION],
  ['Percent', BN_HUNDRED]
];

function isToBn (value: unknown): value is ToBn {
  return isFunction((value as ToBn).toBn);
}

function toPercentage (value: BN, divisor: BN): string {
  return `${(value.mul(MUL_P).div(divisor).toNumber() / 100).toFixed(2)}%`;
}

/** @internal */
function decodeAbstractInt (value: Exclude<AnyNumber, Uint8Array> | Record<string, string> | ToBn | null, isNegative: boolean): string | number {
  if (isNumber(value)) {
    if (!Number.isInteger(value) || value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER) {
      throw new Error('Number needs to be an integer <= Number.MAX_SAFE_INTEGER, i.e. 2 ^ 53 - 1');
    }

    return value;
  } else if (isString(value)) {
    if (isHex(value, -1, true)) {
      return hexToBn(value, { isLe: false, isNegative }).toString();
    }

    if (value.includes('.') || value.includes(',') || value.includes('e')) {
      throw new Error('String should not contain decimal points or scientific notation');
    }

    return value;
  } else if (isBn(value) || isBigInt(value)) {
    return value.toString();
  } else if (isObject(value)) {
    if (isToBn(value)) {
      return value.toBn().toString();
    }

    // Allow the construction from an object with a single top-level key. This means that
    // single key objects can be treated equivalently to numbers, assuming they meet the
    // specific requirements. (This is useful in Weights 1.5 where Objects are compact)
    const keys = Object.keys(value);

    if (keys.length !== 1) {
      throw new Error('Unable to construct number from multi-key object');
    }

    return decodeAbstractInt(value[keys[0]], isNegative);
  } else if (!value) {
    return 0;
  }

  throw new Error(`Unable to create BN from unknown type ${typeof value}`);
}

/**
 * @name AbstractInt
 * @ignore
 * @noInheritDoc
 */
export abstract class AbstractInt extends BN implements INumber {
  readonly registry: Registry;
  readonly encodedLength: number;
  readonly isUnsigned: boolean;

  public createdAtHash?: IU8a;
  public initialU8aLength?: number;
  public isStorageFallback?: boolean;

  readonly #bitLength: UIntBitLength;

  constructor (registry: Registry, value: AnyNumber | null = 0, bitLength: UIntBitLength = DEFAULT_UINT_BITS, isSigned = false) {
    // Construct via a string/number, which will be passed in the BN constructor.
    // It would be ideal to actually return a BN, but there is an issue:
    // https://github.com/indutny/bn.js/issues/206
    super(
      // shortcut isU8a as used in SCALE decoding
      isU8a(value)
        ? bitLength <= 48
          ? u8aToNumber(value.subarray(0, bitLength / 8), { isNegative: isSigned })
          : u8aToBn(value.subarray(0, bitLength / 8), { isLe: true, isNegative: isSigned }).toString()
        : decodeAbstractInt(value, isSigned)
    );

    this.registry = registry;
    this.#bitLength = bitLength;
    this.encodedLength = this.#bitLength / 8;
    this.initialU8aLength = this.#bitLength / 8;
    this.isUnsigned = !isSigned;

    const isNegative = this.isNeg();
    const maxBits = bitLength - (isSigned && !isNegative ? 1 : 0);

    if (isNegative && !isSigned) {
      throw new Error(`${this.toRawType()}: Negative number passed to unsigned type`);
    } else if (super.bitLength() > maxBits) {
      throw new Error(`${this.toRawType()}: Input too large. Found input with ${super.bitLength()} bits, expected ${maxBits}`);
    }
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IU8a {
    return this.registry.hash(this.toU8a());
  }

  /**
   * @description Checks if the value is a zero value (align elsewhere)
   */
  public get isEmpty (): boolean {
    return this.isZero();
  }

  /**
   * @description Returns the number of bits in the value
   */
  public override bitLength (): number {
    return this.#bitLength;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public override eq (other?: unknown): boolean {
    // Here we are actually overriding the built-in .eq to take care of both
    // number and BN inputs (no `.eqn` needed) - numbers will be converted
    return super.eq(
      isHex(other)
        ? hexToBn(other.toString(), { isLe: false, isNegative: !this.isUnsigned })
        : bnToBn(other as string)
    );
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspect (): Inspect {
    return {
      outer: [this.toU8a()]
    };
  }

  /**
   * @description True if this value is the max of the type
   */
  public isMax (): boolean {
    const u8a = this.toU8a().filter((b) => b === 0xff);

    return u8a.length === (this.#bitLength / 8);
  }

  /**
   * @description Returns a BigInt representation of the number
   */
  public toBigInt (): bigint {
    return BigInt(this.toString());
  }

  /**
   * @description Returns the BN representation of the number. (Compatibility)
   */
  public toBn (): BN {
    return this;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (isLe = false): HexString {
    // For display/JSON, this is BE, for compare, use isLe
    return bnToHex(this, {
      bitLength: this.bitLength(),
      isLe,
      isNegative: !this.isUnsigned
    });
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (_isExpanded?: boolean): string {
    const rawType = this.toRawType();

    if (rawType === 'Balance') {
      return this.isMax()
        ? 'everything'
        // FIXME In the case of multiples we need some way of detecting which instance this belongs
        // to. as it stands we will always format (incorrectly) against the first token defined
        : formatBalance(this, { decimals: this.registry.chainDecimals[0], withSi: true, withUnit: this.registry.chainTokens[0] });
    }

    const [, divisor] = FORMATTERS.find(([type]) => type === rawType) || [];

    return divisor
      ? toPercentage(this, divisor)
      : formatNumber(this);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public override toJSON (onlyHex = false): any {
    // FIXME this return type should by string | number, however BN returns string
    // Options here are
    //   - super.bitLength() - the actual used bits, use hex when close to MAX_SAFE_INTEGER
    //   - this.#bitLength - the max used bits, use hex when larger than native Rust type
    return onlyHex || (this.#bitLength > 128) || (super.bitLength() > MAX_NUMBER_BITS)
      ? this.toHex()
      : this.toNumber();
  }

  /**
   * @description Returns the value in a primitive form, either number when <= 52 bits, or string otherwise
   */
  public toPrimitive (): number | string {
    return super.bitLength() > MAX_NUMBER_BITS
      ? this.toString()
      : this.toNumber();
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    // NOTE In the case of balances, which have a special meaning on the UI
    // and can be interpreted differently, return a specific value for it so
    // underlying it always matches (no matter which length it actually is)
    return this instanceof this.registry.createClassUnsafe('Balance')
      ? 'Balance'
      : `${this.isUnsigned ? 'u' : 'i'}${this.bitLength()}`;
  }

  /**
   * @description Returns the string representation of the value
   * @param base The base to use for the conversion
   */
  public override toString (base?: number): string {
    // only included here since we do not inherit docs
    return super.toString(base);
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  public toU8a (_isBare?: boolean): Uint8Array {
    return bnToU8a(this, {
      bitLength: this.bitLength(),
      isLe: true,
      isNegative: !this.isUnsigned
    });
  }
}
