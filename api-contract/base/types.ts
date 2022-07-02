// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.5';
import type { SubmittableExtrinsic } from 'https://deno.land/x/polkadot@0.0.2/api/submittable/types.ts';
import type { ApiTypes, ObsInnerType } from 'https://deno.land/x/polkadot@0.0.2/api/types/index.ts';
import type { AccountId } from 'https://deno.land/x/polkadot@0.0.2/types/interfaces/index.ts';
import type { BN } from 'https://deno.land/x/polkadot@0.0.2/util/mod.ts';
import type { AbiMessage, BlueprintOptions, ContractCallOutcome, ContractOptions } from '../types.ts';

export interface MessageMeta {
  readonly meta: AbiMessage;
}

export interface BlueprintDeploy<ApiType extends ApiTypes> extends MessageMeta {
  (options: BlueprintOptions, ...params: unknown[]): SubmittableExtrinsic<ApiType>;
  // @deprecated Use options form (to be dropped in a major update)
  (value: bigint | string | number | BN, gasLimit: bigint | string | number | BN, ...params: unknown[]): SubmittableExtrinsic<ApiType>;
}

export interface ContractQuery<ApiType extends ApiTypes> extends MessageMeta {
  (origin: AccountId | string | Uint8Array, options: ContractOptions, ...params: unknown[]): ContractCallResult<ApiType, ContractCallOutcome>;
  // @deprecated Use options form (to be dropped in a major update)
  (origin: AccountId | string | Uint8Array, value: bigint | BN | string | number, gasLimit: bigint | BN | string | number, ...params: unknown[]): ContractCallResult<ApiType, ContractCallOutcome>;
}

export interface ContractTx<ApiType extends ApiTypes> extends MessageMeta {
  (options: ContractOptions, ...params: unknown[]): SubmittableExtrinsic<ApiType>;
  // @deprecated Use options form (to be dropped in a major update)
  (value: bigint | BN | string | number, gasLimit: bigint | BN | string | number, ...params: unknown[]): SubmittableExtrinsic<ApiType>;
}

export interface ContractGeneric<O, T> {
  (messageOrId: AbiMessage | string | number, options: O, ...params: unknown[]): T;
  // @deprecated Use options form (to be dropped in a major update)
  (messageOrId: AbiMessage | string | number, value: bigint | BN | string | number, gasLimit: bigint | BN | string | number, ...params: unknown[]): T;
}

export type ContractCallResult<ApiType extends ApiTypes, T> = ApiType extends 'rxjs'
  ? Observable<T>
  : Promise<ObsInnerType<Observable<T>>>;

export interface ContractCallSend<ApiType extends ApiTypes> {
  send (account: string | AccountId | Uint8Array): ContractCallResult<ApiType, ContractCallOutcome>;
}

export interface MapConstructorExec<ApiType extends ApiTypes> {
  [message: string]: BlueprintDeploy<ApiType>;
}

export interface MapMessageTx<ApiType extends ApiTypes> {
  [message: string]: ContractTx<ApiType>;
}

export interface MapMessageQuery<ApiType extends ApiTypes> {
  [message: string]: ContractQuery<ApiType>;
}
