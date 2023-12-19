
import type { Codec } from 'https://deno.land/x/polkadot@0.2.45/types-codec/types/index.ts';

export type { AnyFunction, AnyJson, AnyNumber, AnyString, AnyTuple, AnyU8a, ArgsDef, BareOpts, Codec, CodecClass, CodecTo, Inspect } from 'https://deno.land/x/polkadot@0.2.45/types-codec/types/index.ts';

export type ArrayElementType<T extends readonly unknown[]> = T extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export type Callback<T, E = undefined> = E extends Codec
  ? (result: T, extra: E) => void | Promise<void>
  : (result: T) => void | Promise<void>;
