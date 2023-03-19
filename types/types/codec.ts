
import type { Codec } from 'https://deno.land/x/polkadot@0.2.32/types-codec/types/index.ts';

export type { AnyJson, AnyFunction, AnyNumber, AnyString, AnyTuple, AnyU8a, ArgsDef, BareOpts, Codec, CodecClass, CodecClass as Constructor, CodecTo, Inspect } from 'https://deno.land/x/polkadot@0.2.32/types-codec/types/index.ts';

export type ArrayElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never;

export type Callback<T, E = undefined> = E extends Codec
  ? (result: T, extra: E) => void | Promise<void>
  : (result: T) => void | Promise<void>;
