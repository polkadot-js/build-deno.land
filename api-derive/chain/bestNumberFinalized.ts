
import type { DeriveApi } from '../types.ts';

import { createBlockNumberDerive } from './util.ts';

export type { BlockNumber } from 'https://deno.land/x/polkadot/types/interfaces/index.ts';

/**
 * @name bestNumberFinalized
 * @returns A BlockNumber
 * @description Get the latest finalized block number.
 * @example
 * <BR>
 *
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
