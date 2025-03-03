
import { all } from './all.ts';

export * from './account.ts';
export * from './votingBalances.ts';

/**
 * @name votingBalance
 * @param {( AccountId | string )} address An accounts Id in different formats.
 * @returns An object containing the results of various balance queries
 * @example
 * <BR>
 *
 * ```javascript
 * const ALICE = 'F7Hs';
 *
 * api.derive.balances.votingBalance(ALICE, ({ accountId, lockedBalance }) => {
 *   console.log(`The account ${accountId} has a locked balance ${lockedBalance} units.`);
 * });
 * ```
 */
const votingBalance = all;

export { all, votingBalance };
