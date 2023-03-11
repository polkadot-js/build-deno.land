
import type { DeriveApi } from '../types.ts';

import { createBlockNumberDerive } from './util.ts';

export type { BlockNumber } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';

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
export const bestNumber = /*#__PURE__*/ createBlockNumberDerive(
  (api: DeriveApi) =>
    api.rpc.chain.subscribeNewHeads()
);
