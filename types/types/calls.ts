// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyTuple, CallBase as CallBaseBase, CallFunction as CallFunctionBase, IMethod } from 'https://deno.land/x/polkadot@0.0.2/types-codec/types/index.ts';
import type { FunctionMetadataLatest } from '../interfaces/metadata/index.ts';
import type { Call } from '../interfaces/runtime/index.ts';
import type { Registry } from './registry.ts';

export interface CallBase<A extends AnyTuple, M = FunctionMetadataLatest> extends CallBaseBase<A, M> {
  registry: Registry;
}

export interface CallFunction<A extends AnyTuple = AnyTuple, M = FunctionMetadataLatest> extends CallFunctionBase<A, M> {
  (...args: any[]): Call & IMethod<A, M>;
}
