// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableResult } from 'https://deno.land/x/polkadot@0.0.9/api/mod.ts';
import type { SubmittableExtrinsic } from 'https://deno.land/x/polkadot@0.0.9/api/submittable/types.ts';
import type { ApiTypes } from 'https://deno.land/x/polkadot@0.0.9/api/types/index.ts';
import type { AbiConstructor, AbiMessage, BlueprintOptions } from '../types.ts';
import type { BlueprintDeploy, ContractGeneric } from './types.ts';

import { Bytes } from 'https://deno.land/x/polkadot@0.0.9/types/mod.ts';
import { compactAddLength, u8aToU8a } from 'https://deno.land/x/polkadot@0.0.9/util/mod.ts';
import { randomAsU8a } from 'https://deno.land/x/polkadot@0.0.9/util-crypto/mod.ts';

export const EMPTY_SALT = new Uint8Array();

export function withMeta <T extends { meta: AbiMessage }> (meta: AbiMessage, creator: Omit<T, 'meta'>): T {
  (creator as T).meta = meta;

  return creator as T;
}

export function createBluePrintTx <ApiType extends ApiTypes, R extends SubmittableResult> (meta: AbiMessage, fn: (options: BlueprintOptions, params: unknown[]) => SubmittableExtrinsic<ApiType, R>): BlueprintDeploy<ApiType> {
  return withMeta(meta, (options: BlueprintOptions, ...params: unknown[]): SubmittableExtrinsic<ApiType, R> =>
    fn(options, params)
  );
}

export function createBluePrintWithId <T> (fn: (constructorOrId: AbiConstructor | string | number, options: BlueprintOptions, params: unknown[]) => T): ContractGeneric<BlueprintOptions, T> {
  return (constructorOrId: AbiConstructor | string | number, options: BlueprintOptions, ...params: unknown[]): T =>
    fn(constructorOrId, options, params);
}

export function encodeSalt (salt: Uint8Array | string | null = randomAsU8a()): Uint8Array {
  return salt instanceof Bytes
    ? salt
    : salt && salt.length
      ? compactAddLength(u8aToU8a(salt))
      : EMPTY_SALT;
}
