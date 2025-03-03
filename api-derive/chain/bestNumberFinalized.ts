
import type { DeriveApi } from '../types.ts';

import { createBlockNumberDerive } from './util.ts';

/**
 * @name bestNumberFinalized
 * @returns A BlockNumber
 * @description Get the latest finalized block number.
 * @example
 * ```javascript
 * api.derive.chain.bestNumberFinalized((blockNumber) => {
 *   console.log(`the current finalized block is #${blockNumber}`);
 * });
 * ```
 */
export const bestNumberFinalized = /*#__PURE__*/ createBlockNumberDerive(
  (api: DeriveApi) =>
    api.rpc.chain.subscribeFinalizedHeads()
);
