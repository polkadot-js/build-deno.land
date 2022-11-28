// Copyright 2017-2022 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiBase } from 'https://deno.land/x/polkadot/api/base/index.ts';
import { TypeRegistry } from 'https://deno.land/x/polkadot/types/mod.ts';

const registry = new TypeRegistry();

const instantiateWithCode = (): never => {
  throw new Error('mock');
};

instantiateWithCode.meta = { args: new Array(6) };

export const mockApi = {
  call: {
    contractsApi: {
      call: (): never => {
        throw new Error('mock');
      }
    }
  },
  isConnected: true,
  registry,
  tx: {
    contracts: {
      instantiateWithCode
    }
  }
} as unknown as ApiBase<'promise'>;
