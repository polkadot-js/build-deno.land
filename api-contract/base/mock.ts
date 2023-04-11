
import { ApiBase } from 'https://deno.land/x/polkadot@0.2.35/api/base/index.ts';
import { TypeRegistry } from 'https://deno.land/x/polkadot@0.2.35/types/mod.ts';

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
