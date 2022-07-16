// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveApi } from '../types.ts';

import { createBlockNumberDerive } from './util.ts';

/**
 * @name bestNumber
 * @returns The latest block number.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.bestNumber((blockNumber) => {
 *   console.log(`the current best block is #${blockNumber}`);
 * });
 * ```
 */
export const bestNumber = createBlockNumberDerive(
  (api: DeriveApi) =>
    api.rpc.chain.subscribeNewHeads()
);
