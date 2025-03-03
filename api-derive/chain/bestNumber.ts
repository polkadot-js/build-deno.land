
import type { DeriveApi } from '../types.ts';

import { createBlockNumberDerive } from './util.ts';

/**
 * @name bestNumber
 * @descrive Retrieves the latest block number.
 * @example
 * ```javascript
 * api.derive.chain.bestNumber((blockNumber) => {
 *   console.log(`the current best block is #${blockNumber}`);
 * });
 * ```
 */
export const bestNumber = /*#__PURE__*/ createBlockNumberDerive(
  (api: DeriveApi) =>
    api.rpc.chain.subscribeNewHeads()
);
