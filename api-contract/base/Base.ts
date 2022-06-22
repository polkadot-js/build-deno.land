// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiTypes, DecorateMethod } from 'https://deno.land/x/polkadot/api/types.ts';
import type { Registry } from 'https://deno.land/x/polkadot/types/types.ts';

import { ApiBase } from 'https://deno.land/x/polkadot/api/base.ts';
import { assert, isFunction } from 'https://deno.land/x/polkadot/util/mod.ts';

import { Abi } from '../Abi/index.ts';

export abstract class Base<ApiType extends ApiTypes> {
  public readonly abi: Abi;

  public readonly api: ApiBase<ApiType>;

  protected readonly _decorateMethod: DecorateMethod<ApiType>;

  constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, decorateMethod: DecorateMethod<ApiType>) {
    this.abi = abi instanceof Abi
      ? abi
      : new Abi(abi, api.registry.getChainProperties());
    this.api = api;

    this._decorateMethod = decorateMethod;

    assert(!!(api && api.isConnected && api.tx), 'Your API has not been initialized correctly and is not connected to a chain');
    assert(!!(api.tx.contracts && Object.keys(api.tx.contracts).length), 'You need to connect to a chain with a runtime that supports contracts');
    assert(isFunction(api.tx.contracts.instantiateWithCode), 'You need to connect to a chain with a runtime with a V3 contracts module. The runtime does not expose api.tx.contracts.instantiateWithCode');
  }

  public get registry (): Registry {
    return this.api.registry;
  }
}