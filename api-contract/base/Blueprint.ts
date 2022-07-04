// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableExtrinsic } from 'https://deno.land/x/polkadot@0.0.3/api/submittable/types.ts';
import type { ApiTypes, DecorateMethod } from 'https://deno.land/x/polkadot@0.0.3/api/types/index.ts';
import type { AccountId, EventRecord, Hash } from 'https://deno.land/x/polkadot@0.0.3/types/interfaces/index.ts';
import type { ISubmittableResult } from 'https://deno.land/x/polkadot@0.0.3/types/types/index.ts';
import type { AbiConstructor, BlueprintOptions } from '../types.ts';
import type { MapConstructorExec } from './types.ts';

import { SubmittableResult } from 'https://deno.land/x/polkadot@0.0.3/api/mod.ts';
import { ApiBase } from 'https://deno.land/x/polkadot@0.0.3/api/base/index.ts';
import { BN_ZERO, isUndefined } from 'https://deno.land/x/polkadot@0.0.3/util/mod.ts';

import { Abi } from '../Abi/index.ts';
import { applyOnEvent } from '../util.ts';
import { Base } from './Base.ts';
import { Contract } from './Contract.ts';
import { createBluePrintTx, encodeSalt } from './util.ts';

export interface BlueprintConstructor<ApiType extends ApiTypes> {
  new(api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash | Uint8Array): Blueprint<ApiType>;
}

export class BlueprintSubmittableResult<ApiType extends ApiTypes> extends SubmittableResult {
  public readonly contract?: Contract<ApiType>;

  constructor (result: ISubmittableResult, contract?: Contract<ApiType>) {
    super(result);

    this.contract = contract;
  }
}

export class Blueprint<ApiType extends ApiTypes> extends Base<ApiType> {
  /**
   * @description The on-chain code hash for this blueprint
   */
  public readonly codeHash: Hash;

  readonly #tx: MapConstructorExec<ApiType> = {};

  constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash | Uint8Array, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.codeHash = this.registry.createType('Hash', codeHash);

    this.abi.constructors.forEach((c): void => {
      if (isUndefined(this.#tx[c.method])) {
        this.#tx[c.method] = createBluePrintTx(c, (o, p) => this.#deploy(c, o, p));
      }
    });
  }

  public get tx (): MapConstructorExec<ApiType> {
    return this.#tx;
  }

  #deploy = (constructorOrId: AbiConstructor | string | number, { gasLimit = BN_ZERO, salt, storageDepositLimit = null, value = BN_ZERO }: BlueprintOptions, params: unknown[]): SubmittableExtrinsic<ApiType, BlueprintSubmittableResult<ApiType>> => {
    const hasStorageDeposit = this.api.tx.contracts.instantiate.meta.args.length === 6;
    const encParams = this.abi.findConstructor(constructorOrId).toU8a(params);
    const encSalt = encodeSalt(salt);
    const tx = hasStorageDeposit
      ? this.api.tx.contracts.instantiate(value, gasLimit, storageDepositLimit, this.codeHash, encParams, encSalt)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore old style without storage deposit
      : this.api.tx.contracts.instantiate(value, gasLimit, this.codeHash, encParams, encSalt);

    return tx.withResultTransform((result: ISubmittableResult) =>
      new BlueprintSubmittableResult(result, applyOnEvent(result, ['Instantiated'], ([record]: EventRecord[]) =>
        new Contract<ApiType>(this.api, this.abi, record.event.data[1] as AccountId, this._decorateMethod)
      ))
    );
  };
}

export function extendBlueprint <ApiType extends ApiTypes> (type: ApiType, decorateMethod: DecorateMethod<ApiType>): BlueprintConstructor<ApiType> {
  return class extends Blueprint<ApiType> {
    static __BlueprintType = type;

    constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash | Uint8Array) {
      super(api, abi, codeHash, decorateMethod);
    }
  };
}
