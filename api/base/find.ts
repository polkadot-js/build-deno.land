// Copyright 2017-2022 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CallFunction, Registry, RegistryError } from 'https://deno.land/x/polkadot/types/types/index.ts';

import { u8aToU8a } from 'https://deno.land/x/polkadot/util/mod.ts';

export function findCall (registry: Registry, callIndex: Uint8Array | string): CallFunction {
  return registry.findMetaCall(u8aToU8a(callIndex));
}

export function findError (registry: Registry, errorIndex: Uint8Array | string): RegistryError {
  return registry.findMetaError(u8aToU8a(errorIndex));
}
