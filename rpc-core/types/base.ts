// Copyright 2017-2022 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://cdn.skypack.dev/rxjs@7.5.5';
import type { AnyFunction, Codec, DefinitionRpc } from 'https://deno.land/x/polkadot/types/types.ts';

export interface RpcInterfaceMethod {
  <T extends Codec> (...params: unknown[]): Observable<T>;
  raw (...params: unknown[]): Observable<unknown>;
  meta: DefinitionRpc;
}

export type AugmentedRpc<F extends AnyFunction> = F & {
  raw: <T> (...params: Parameters<F>) => Observable<T>;
  meta: DefinitionRpc;
};
