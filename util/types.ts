
import type { BN } from './bn/bn.ts';

export interface Class<T = any, A extends unknown[] = any[]> {
  prototype: T;

  new (...args: A): T;

  hasOwnProperty (prop: string): boolean;
  isPrototypeOf (other: unknown): boolean;
}

export interface ToBigInt {
  toBigInt: () => bigint;
}

export interface ToBn {
  toBn: () => BN;
}

export interface SiDef {
  power: number;
  text: string;
  value: string;
}

export interface Logger {
  debug: (...values: unknown[]) => void;
  error: (...values: unknown[]) => void;
  log: (...values: unknown[]) => void;
  noop: (...values: unknown[]) => void;
  warn: (...values: unknown[]) => void;
}

export interface ToBnOptions {
  /**
   * @description Convert in LE format
   */
  isLe?: boolean;
  /**
   * @description Number is signed, apply two's complement
   */
  isNegative?: boolean;
}

export interface NumberOptions extends ToBnOptions {
  /**
   * @description Limit to the specified bitLength, despite input length
   */
  bitLength?: number;
}

export interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export type Memoized<F> = F & {
  unmemoize: (...args: unknown[]) => void;
}

export type AnyString = string | String;

export type HexDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

export type HexString = `0x${string}`;

export interface BufferObj extends Uint8Array {
  equals: (otherBuffer: Uint8Array) => boolean;
  readDoubleLE: (offset?: number) => number;
}

export interface BufferObjClass extends Class<BufferObj> {
  isBuffer: (value: unknown) => boolean;
}

export type U8aLike = HexString | number[] | Uint8Array | AnyString;

export interface Observable {
  next: (...params: unknown[]) => unknown;
}
