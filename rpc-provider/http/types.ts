
import type { Logger } from 'https://deno.land/x/polkadot@0.2.45/util/types.ts';
import type { RpcCoder } from '../coder/index.ts';

export interface HttpState {
  coder: RpcCoder;
  endpoint: string;
  l: Logger;
}
