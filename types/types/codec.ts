// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec } from 'https://deno.land/x/polkadot@0.0.2/types-codec/types/index.ts';

export type { AnyJson, AnyFunction, AnyNumber, AnyString, AnyTuple, AnyU8a, ArgsDef, BareOpts, Codec, CodecClass, CodecClass as Constructor, CodecTo, Inspect } from 'https://deno.land/x/polkadot@0.0.2/types-codec/types/index.ts';

// helper to extract keys from an array
export type ArrayElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never;

export type Callback<T, E = undefined> = E extends Codec
  ? (result: T, extra: E) => void | Promise<void>
  : (result: T) => void | Promise<void>;
