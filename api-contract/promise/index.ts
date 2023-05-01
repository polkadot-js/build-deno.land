
import type { ApiPromise } from 'https://deno.land/x/polkadot@0.2.38/api/mod.ts';
import type { AccountId, Hash } from 'https://deno.land/x/polkadot@0.2.38/types/interfaces/index.ts';
import type { Abi } from '../Abi/index.ts';

import { toPromiseMethod } from 'https://deno.land/x/polkadot@0.2.38/api/mod.ts';

import { Blueprint, Code, Contract } from '../base/index.ts';

export class BlueprintPromise extends Blueprint<'promise'> {
  constructor (api: ApiPromise, abi: string | Record<string, unknown> | Abi, codeHash: string | Hash) {
    super(api, abi, codeHash, toPromiseMethod);
  }
}

export class CodePromise extends Code<'promise'> {
  constructor (api: ApiPromise, abi: string | Record<string, unknown> | Abi, wasm: Uint8Array | string | Buffer | null | undefined) {
    super(api, abi, wasm, toPromiseMethod);
  }
}

export class ContractPromise extends Contract<'promise'> {
  constructor (api: ApiPromise, abi: string | Record<string, unknown> | Abi, address: string | AccountId) {
    super(api, abi, address, toPromiseMethod);
  }
}
