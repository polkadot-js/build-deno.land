// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableExtrinsic } from 'https://deno.land/x/polkadot@0.0.2/api/submittable/types.ts';
import type { ApiTypes, DecorateMethod } from 'https://deno.land/x/polkadot@0.0.2/api/types/index.ts';
import type { AccountId, EventRecord } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { ISubmittableResult } from 'https://deno.land/x/polkadot@0.0.2/types/types/index.ts';
import type { Codec } from 'https://deno.land/x/polkadot@0.0.2/types-codec/types/index.ts';
import type { AbiConstructor, BlueprintOptions } from '../types.ts';
import type { MapConstructorExec } from './types.ts';

import { SubmittableResult } from 'https://deno.land/x/polkadot@0.0.2/api/mod.ts';
import { ApiBase } from 'https://deno.land/x/polkadot@0.0.2/api/base/index.ts';
import { assert, BN_ZERO, compactAddLength, isUndefined, isWasm, u8aToU8a } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';

import { Abi } from '../Abi/index.ts';
import { applyOnEvent } from '../util.ts';
import { Base } from './Base.ts';
import { Blueprint } from './Blueprint.ts';
import { Contract } from './Contract.ts';
import { createBluePrintTx, encodeSalt } from './util.ts';

export interface CodeConstructor<ApiType extends ApiTypes> {
  new(api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, wasm: Uint8Array | string | Buffer | null | undefined): Code<ApiType>;
}

export class CodeSubmittableResult<ApiType extends ApiTypes> extends SubmittableResult {
  public readonly blueprint?: Blueprint<ApiType>;
  public readonly contract?: Contract<ApiType>;

  constructor (result: ISubmittableResult, blueprint?: Blueprint<ApiType>, contract?: Contract<ApiType>) {
    super(result);

    this.blueprint = blueprint;
    this.contract = contract;
  }
}

export class Code<ApiType extends ApiTypes> extends Base<ApiType> {
  public readonly code: Uint8Array;

  readonly #tx: MapConstructorExec<ApiType> = {};

  constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, wasm: Uint8Array | string | Buffer | null | undefined, decorateMethod: DecorateMethod<ApiType>) {
    super(api, abi, decorateMethod);

    this.code = isWasm(this.abi.info.source.wasm)
      ? this.abi.info.source.wasm
      : u8aToU8a(wasm);

    assert(isWasm(this.code), 'No WASM code provided');

    this.abi.constructors.forEach((c): void => {
      if (isUndefined(this.#tx[c.method])) {
        this.#tx[c.method] = createBluePrintTx(c, (o, p) => this.#instantiate(c, o, p));
      }
    });
  }

  public get tx (): MapConstructorExec<ApiType> {
    return this.#tx;
  }

  #instantiate = (constructorOrId: AbiConstructor | string | number, { gasLimit = BN_ZERO, salt, storageDepositLimit = null, value = BN_ZERO }: BlueprintOptions, params: unknown[]): SubmittableExtrinsic<ApiType, CodeSubmittableResult<ApiType>> => {
    const hasStorageDeposit = this.api.tx.contracts.instantiateWithCode.meta.args.length === 6;
    const encCode = compactAddLength(this.code);
    const encParams = this.abi.findConstructor(constructorOrId).toU8a(params);
    const encSalt = encodeSalt(salt);
    const tx = hasStorageDeposit
      ? this.api.tx.contracts.instantiateWithCode(value, gasLimit, storageDepositLimit, encCode, encParams, encSalt)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore old style without storage deposit
      : this.api.tx.contracts.instantiateWithCode(value, gasLimit, encCode, encParams, encSalt);

    return tx.withResultTransform((result: ISubmittableResult) =>
      new CodeSubmittableResult(result, ...(applyOnEvent(result, ['CodeStored', 'Instantiated'], (records: EventRecord[]) =>
        records.reduce<[Blueprint<ApiType>?, Contract<ApiType>?]>(([blueprint, contract], { event }) =>
          this.api.events.contracts.Instantiated.is(event)
            ? [blueprint, new Contract<ApiType>(this.api, this.abi, (event as unknown as { data: [Codec, AccountId] }).data[1], this._decorateMethod)]
            : this.api.events.contracts.CodeStored.is(event)
              ? [new Blueprint<ApiType>(this.api, this.abi, (event as unknown as { data: [AccountId] }).data[0], this._decorateMethod), contract]
              : [blueprint, contract],
        [])
      ) || []))
    );
  };
}

export function extendCode <ApiType extends ApiTypes> (type: ApiType, decorateMethod: DecorateMethod<ApiType>): CodeConstructor<ApiType> {
  return class extends Code<ApiType> {
    static __CodeType = type;

    constructor (api: ApiBase<ApiType>, abi: string | Record<string, unknown> | Abi, wasm: Uint8Array | string | Buffer | null | undefined) {
      super(api, abi, wasm, decorateMethod);
    }
  };
}
