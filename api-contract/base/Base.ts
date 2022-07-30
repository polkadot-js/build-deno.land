// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiTypes, DecorateMethod } from 'https://deno.land/x/polkadot@0.0.9/api/types/index.ts';
import type { Registry } from 'https://deno.land/x/polkadot@0.0.9/types/types/index.ts';

import { ApiBase } from 'https://deno.land/x/polkadot@0.0.9/api/base/index.ts';
import { isFunction } from 'https://deno.land/x/polkadot@0.0.9/util/mod.ts';

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

    if (!api || !api.isConnected || !api.tx) {
      throw new Error('Your API has not been initialized correctly and is not connected to a chain');
    } else if (!api.tx.contracts || !isFunction(api.tx.contracts.instantiateWithCode) || api.tx.contracts.instantiateWithCode.meta.args.length !== 6) {
      throw new Error('The runtime does not expose api.tx.contracts.instantiateWithCode with storageDepositLimit');
    } else if (!api.call.contractsApi || !isFunction(api.call.contractsApi.call)) {
      throw new Error('Your runtime does not expose the api.call.contractsApi.call runtime interfaces');
    }
  }

  public get registry (): Registry {
    return this.api.registry;
  }
}
