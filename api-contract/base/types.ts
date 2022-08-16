// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'https://esm.sh/rxjs@7.5.6';
import type { SubmittableExtrinsic } from 'https://deno.land/x/polkadot@0.2.1/api/submittable/types.ts';
import type { ApiTypes, ObsInnerType } from 'https://deno.land/x/polkadot@0.2.1/api/types/index.ts';
import type { AccountId } from 'https://deno.land/x/polkadot@0.2.1/types/interfaces/index.ts';
import type { AbiMessage, BlueprintOptions, ContractCallOutcome, ContractOptions } from '../types.ts';

export interface MessageMeta {
  readonly meta: AbiMessage;
}

export interface BlueprintDeploy<ApiType extends ApiTypes> extends MessageMeta {
  (options: BlueprintOptions, ...params: unknown[]): SubmittableExtrinsic<ApiType>;
}

export interface ContractQuery<ApiType extends ApiTypes> extends MessageMeta {
  (origin: AccountId | string | Uint8Array, options: ContractOptions, ...params: unknown[]): ContractCallResult<ApiType, ContractCallOutcome>;
}

export interface ContractTx<ApiType extends ApiTypes> extends MessageMeta {
  (options: ContractOptions, ...params: unknown[]): SubmittableExtrinsic<ApiType>;
}

export interface ContractGeneric<O, T> {
  (messageOrId: AbiMessage | string | number, options: O, ...params: unknown[]): T;
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
