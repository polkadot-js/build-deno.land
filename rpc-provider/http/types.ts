// Copyright 2017-2022 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Logger } from 'https://deno.land/x/polkadot/util/types.ts';
import type { RpcCoder } from '../coder/index.ts';

export interface HttpState {
  coder: RpcCoder;
  endpoint: string;
  l: Logger;
}
