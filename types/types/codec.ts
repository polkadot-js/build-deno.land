
import type { Codec } from 'https://deno.land/x/polkadot@0.2.42/types-codec/types/index.ts';

export type { AnyFunction, AnyJson, AnyNumber, AnyString, AnyTuple, AnyU8a, ArgsDef, BareOpts, Codec, CodecClass, CodecTo, Inspect } from 'https://deno.land/x/polkadot@0.2.42/types-codec/types/index.ts';

export type ArrayElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never;

export type Callback<T, E = undefined> = E extends Codec
  ? (result: T, extra: E) => void | Promise<void>
  : (result: T) => void | Promise<void>;
