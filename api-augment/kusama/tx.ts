/* eslint-disable */

import 'https://deno.land/x/polkadot/api-base/types/submittable.ts';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from 'https://deno.land/x/polkadot/api-base/types/index.ts';
import type { Data } from 'https://deno.land/x/polkadot/types/mod.ts';
import type { Bytes, Compact, Option, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { AnyNumber, IMethod, ITuple } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { EthereumAddress } from 'https://deno.land/x/polkadot/types/interfaces/eth/index.ts';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Percent, Perquintill } from 'https://deno.land/x/polkadot/types/interfaces/runtime/index.ts';
import type { FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime, KusamaRuntimeOriginCaller, KusamaRuntimeProxyType, KusamaRuntimeSessionKeys, PalletConvictionVotingConviction, PalletConvictionVotingVoteAccountVote, PalletElectionProviderMultiPhaseRawSolution, PalletElectionProviderMultiPhaseSolutionOrSnapshotSize, PalletIdentityBitFlags, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletImOnlineHeartbeat, PalletImOnlineSr25519AppSr25519Signature, PalletMultisigTimepoint, PalletNominationPoolsBondExtra, PalletNominationPoolsClaimPermission, PalletNominationPoolsCommissionChangeRate, PalletNominationPoolsConfigOpAccountId32, PalletNominationPoolsConfigOpPerbill, PalletNominationPoolsConfigOpU128, PalletNominationPoolsConfigOpU32, PalletNominationPoolsPoolState, PalletSocietyJudgement, PalletStakingPalletConfigOpPerbill, PalletStakingPalletConfigOpPercent, PalletStakingPalletConfigOpU128, PalletStakingPalletConfigOpU32, PalletStakingRewardDestination, PalletStakingValidatorPrefs, PalletVestingVestingInfo, PolkadotParachainPrimitivesHrmpChannelId, PolkadotPrimitivesV4ExecutorParams, PolkadotPrimitivesV4InherentData, PolkadotPrimitivesV4PvfCheckStatement, PolkadotPrimitivesV4ValidatorAppSignature, PolkadotPrimitivesVstagingAsyncBackingParams, PolkadotRuntimeCommonClaimsEcdsaSignature, PolkadotRuntimeCommonClaimsStatementKind, PolkadotRuntimeParachainsDisputesSlashingDisputeProof, SpConsensusBabeDigestsNextConfigDescriptor, SpConsensusGrandpaEquivocationProof, SpConsensusSlotsEquivocationProof, SpNposElectionsElectionScore, SpNposElectionsSupport, SpRuntimeMultiSignature, SpRuntimeMultiSigner, SpSessionMembershipProof, SpWeightsWeightV2Weight, XcmV3MultiLocation, XcmV3WeightLimit, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedXcm } from 'https://deno.land/x/polkadot/types/lookup.ts';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module 'https://deno.land/x/polkadot/api-base/types/submittable.ts' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    auctions: {
      /**
       * Make a new bid from an account (including a parachain account) for deploying a new
       * parachain.
       * 
       * Multiple simultaneous bids from the same bidder are allowed only as long as all active
       * bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
       * 
       * - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and
       * funded by) the same account.
       * - `auction_index` is the index of the auction to bid on. Should just be the present
       * value of `AuctionCounter`.
       * - `first_slot` is the first lease period index of the range to bid on. This is the
       * absolute lease period index value, not an auction-specific offset.
       * - `last_slot` is the last lease period index of the range to bid on. This is the
       * absolute lease period index value, not an auction-specific offset.
       * - `amount` is the amount to bid to be held as deposit for the parachain should the
       * bid win. This amount is held throughout the range.
       **/
      bid: AugmentedSubmittable<(para: Compact<u32> | AnyNumber | Uint8Array, auctionIndex: Compact<u32> | AnyNumber | Uint8Array, firstSlot: Compact<u32> | AnyNumber | Uint8Array, lastSlot: Compact<u32> | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, Compact<u32>, Compact<u32>, Compact<u128>]>;
      /**
       * Cancel an in-progress auction.
       * 
       * Can only be called by Root origin.
       **/
      cancelAuction: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Create a new auction.
       * 
       * This can only happen when there isn't already an auction in progress and may only be
       * called by the root origin. Accepts the `duration` of this auction and the
       * `lease_period_index` of the initial lease period of the four that are to be auctioned.
       **/
      newAuction: AugmentedSubmittable<(duration: Compact<u32> | AnyNumber | Uint8Array, leasePeriodIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    babe: {
      /**
       * Plan an epoch config change. The epoch config change is recorded and will be enacted on
       * the next call to `enact_epoch_change`. The config will be activated one epoch after.
       * Multiple calls to this method will replace any existing planned config change that had
       * not been enacted yet.
       **/
      planConfigChange: AugmentedSubmittable<(config: SpConsensusBabeDigestsNextConfigDescriptor | { V1: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusBabeDigestsNextConfigDescriptor]>;
      /**
       * Report authority equivocation/misbehavior. This method will verify
       * the equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence will
       * be reported.
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: SpConsensusSlotsEquivocationProof | { offender?: any; slot?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusSlotsEquivocationProof, SpSessionMembershipProof]>;
      /**
       * Report authority equivocation/misbehavior. This method will verify
       * the equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence will
       * be reported.
       * This extrinsic must be called unsigned and it is expected that only
       * block authors will call it (validated in `ValidateUnsigned`), as such
       * if the block author is defined it will be defined as the equivocation
       * reporter.
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpConsensusSlotsEquivocationProof | { offender?: any; slot?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusSlotsEquivocationProof, SpSessionMembershipProof]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    balances: {
      /**
       * Set the regular balance of a given account.
       * 
       * The dispatch origin for this call is `root`.
       **/
      forceSetBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Exactly as `transfer_allow_death`, except the origin must be root and the source account
       * may be specified.
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Unreserve some balance from a user by force.
       * 
       * Can only be called by ROOT.
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * Set the regular balance of a given account; it also takes a reserved balance but this
       * must be the same as the account's current reserved balance.
       * 
       * The dispatch origin for this call is `root`.
       * 
       * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
       **/
      setBalanceDeprecated: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, oldReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u128>]>;
      /**
       * Alias for `transfer_allow_death`, provided only for name-wise compatibility.
       * 
       * WARNING: DEPRECATED! Will be released in approximately 3 months.
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Transfer the entire transferable balance from the caller account.
       * 
       * NOTE: This function only attempts to transfer _transferable_ balances. This means that
       * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
       * transferred by this function. To ensure that this function results in a killed account,
       * you might need to prepare the account by removing any reference counters, storage
       * deposits, etc...
       * 
       * The dispatch origin of this call must be Signed.
       * 
       * - `dest`: The recipient of the transfer.
       * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
       * of the funds the account has, causing the sender account to be killed (false), or
       * transfer everything except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true).
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       **/
      transferAllowDeath: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
       * kill the origin account.
       * 
       * 99% of the time you want [`transfer_allow_death`] instead.
       * 
       * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Upgrade a specified account.
       * 
       * - `origin`: Must be `Signed`.
       * - `who`: The account to be upgraded.
       * 
       * This will waive the transaction fee if at least all but 10% of the accounts needed to
       * be upgraded. (We let some not have to be upgraded just in order to allow for the
       * possibililty of churn).
       **/
      upgradeAccounts: AugmentedSubmittable<(who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bounties: {
      /**
       * Accept the curator role for a bounty.
       * A deposit will be reserved from curator and refund upon successful payout.
       * 
       * May only be called from the curator.
       * 
       * ## Complexity
       * - O(1).
       **/
      acceptCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Approve a bounty proposal. At a later time, the bounty will be funded and become active
       * and the original deposit will be returned.
       * 
       * May only be called from `T::SpendOrigin`.
       * 
       * ## Complexity
       * - O(1).
       **/
      approveBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
       * after a delay.
       * 
       * The dispatch origin for this call must be the curator of this bounty.
       * 
       * - `bounty_id`: Bounty ID to award.
       * - `beneficiary`: The beneficiary account whom will receive the payout.
       * 
       * ## Complexity
       * - O(1).
       **/
      awardBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Claim the payout from an awarded bounty after payout delay.
       * 
       * The dispatch origin for this call must be the beneficiary of this bounty.
       * 
       * - `bounty_id`: Bounty ID to claim.
       * 
       * ## Complexity
       * - O(1).
       **/
      claimBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Cancel a proposed or active bounty. All the funds will be sent to treasury and
       * the curator deposit will be unreserved if possible.
       * 
       * Only `T::RejectOrigin` is able to cancel a bounty.
       * 
       * - `bounty_id`: Bounty ID to cancel.
       * 
       * ## Complexity
       * - O(1).
       **/
      closeBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Extend the expiry time of an active bounty.
       * 
       * The dispatch origin for this call must be the curator of this bounty.
       * 
       * - `bounty_id`: Bounty ID to extend.
       * - `remark`: additional information.
       * 
       * ## Complexity
       * - O(1).
       **/
      extendBountyExpiry: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes]>;
      /**
       * Propose a new bounty.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
       * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
       * or slashed when rejected.
       * 
       * - `curator`: The curator account whom will manage this bounty.
       * - `fee`: The curator fee.
       * - `value`: The total payment amount of this bounty, curator fee included.
       * - `description`: The description of this bounty.
       **/
      proposeBounty: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Bytes]>;
      /**
       * Assign a curator to a funded bounty.
       * 
       * May only be called from `T::SpendOrigin`.
       * 
       * ## Complexity
       * - O(1).
       **/
      proposeCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Unassign curator from a bounty.
       * 
       * This function can only be called by the `RejectOrigin` a signed origin.
       * 
       * If this function is called by the `RejectOrigin`, we assume that the curator is
       * malicious or inactive. As a result, we will slash the curator when possible.
       * 
       * If the origin is the curator, we take this as a sign they are unable to do their job and
       * they willingly give up. We could slash them, but for now we allow them to recover their
       * deposit and exit without issue. (We may want to change this if it is abused.)
       * 
       * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
       * anyone in the community to call out that a curator is not doing their due diligence, and
       * we should pick a new curator. In this case the curator should also be slashed.
       * 
       * ## Complexity
       * - O(1).
       **/
      unassignCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    childBounties: {
      /**
       * Accept the curator role for the child-bounty.
       * 
       * The dispatch origin for this call must be the curator of this
       * child-bounty.
       * 
       * A deposit will be reserved from the curator and refund upon
       * successful payout or cancellation.
       * 
       * Fee for curator is deducted from curator fee of parent bounty.
       * 
       * Parent bounty must be in active state, for this child-bounty call to
       * work.
       * 
       * Child-bounty must be in "CuratorProposed" state, for processing the
       * call. And state of child-bounty is moved to "Active" on successful
       * call completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       **/
      acceptCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Add a new child-bounty.
       * 
       * The dispatch origin for this call must be the curator of parent
       * bounty and the parent bounty must be in "active" state.
       * 
       * Child-bounty gets added successfully & fund gets transferred from
       * parent bounty to child-bounty account, if parent bounty has enough
       * funds, else the call fails.
       * 
       * Upper bound to maximum number of active  child bounties that can be
       * added are managed via runtime trait config
       * [`Config::MaxActiveChildBountyCount`].
       * 
       * If the call is success, the status of child-bounty is updated to
       * "Added".
       * 
       * - `parent_bounty_id`: Index of parent bounty for which child-bounty is being added.
       * - `value`: Value for executing the proposal.
       * - `description`: Text description for the child-bounty.
       **/
      addChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Bytes]>;
      /**
       * Award child-bounty to a beneficiary.
       * 
       * The beneficiary will be able to claim the funds after a delay.
       * 
       * The dispatch origin for this call must be the parent curator or
       * curator of this child-bounty.
       * 
       * Parent bounty must be in active state, for this child-bounty call to
       * work.
       * 
       * Child-bounty must be in active state, for processing the call. And
       * state of child-bounty is moved to "PendingPayout" on successful call
       * completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       * - `beneficiary`: Beneficiary account.
       **/
      awardChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, MultiAddress]>;
      /**
       * Claim the payout from an awarded child-bounty after payout delay.
       * 
       * The dispatch origin for this call may be any signed origin.
       * 
       * Call works independent of parent bounty state, No need for parent
       * bounty to be in active state.
       * 
       * The Beneficiary is paid out with agreed bounty value. Curator fee is
       * paid & curator deposit is unreserved.
       * 
       * Child-bounty must be in "PendingPayout" state, for processing the
       * call. And instance of child-bounty is removed from the state on
       * successful call completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       **/
      claimChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Cancel a proposed or active child-bounty. Child-bounty account funds
       * are transferred to parent bounty account. The child-bounty curator
       * deposit may be unreserved if possible.
       * 
       * The dispatch origin for this call must be either parent curator or
       * `T::RejectOrigin`.
       * 
       * If the state of child-bounty is `Active`, curator deposit is
       * unreserved.
       * 
       * If the state of child-bounty is `PendingPayout`, call fails &
       * returns `PendingPayout` error.
       * 
       * For the origin other than T::RejectOrigin, parent bounty must be in
       * active state, for this child-bounty call to work. For origin
       * T::RejectOrigin execution is forced.
       * 
       * Instance of child-bounty is removed from the state on successful
       * call completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       **/
      closeChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Propose curator for funded child-bounty.
       * 
       * The dispatch origin for this call must be curator of parent bounty.
       * 
       * Parent bounty must be in active state, for this child-bounty call to
       * work.
       * 
       * Child-bounty must be in "Added" state, for processing the call. And
       * state of child-bounty is moved to "CuratorProposed" on successful
       * call completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       * - `curator`: Address of child-bounty curator.
       * - `fee`: payment fee to child-bounty curator for execution.
       **/
      proposeCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Unassign curator from a child-bounty.
       * 
       * The dispatch origin for this call can be either `RejectOrigin`, or
       * the curator of the parent bounty, or any signed origin.
       * 
       * For the origin other than T::RejectOrigin and the child-bounty
       * curator, parent bounty must be in active state, for this call to
       * work. We allow child-bounty curator and T::RejectOrigin to execute
       * this call irrespective of the parent bounty state.
       * 
       * If this function is called by the `RejectOrigin` or the
       * parent bounty curator, we assume that the child-bounty curator is
       * malicious or inactive. As a result, child-bounty curator deposit is
       * slashed.
       * 
       * If the origin is the child-bounty curator, we take this as a sign
       * that they are unable to do their job, and are willingly giving up.
       * We could slash the deposit, but for now we allow them to unreserve
       * their deposit and exit without issue. (We may want to change this if
       * it is abused.)
       * 
       * Finally, the origin can be anyone iff the child-bounty curator is
       * "inactive". Expiry update due of parent bounty is used to estimate
       * inactive state of child-bounty curator.
       * 
       * This allows anyone in the community to call out that a child-bounty
       * curator is not doing their due diligence, and we should pick a new
       * one. In this case the child-bounty curator deposit is slashed.
       * 
       * State of child-bounty is moved to Added state on successful call
       * completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       **/
      unassignCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    claims: {
      /**
       * Attest to a statement, needed to finalize the claims process.
       * 
       * WARNING: Insecure unless your chain includes `PrevalidateAttests` as a `SignedExtension`.
       * 
       * Unsigned Validation:
       * A call to attest is deemed valid if the sender has a `Preclaim` registered
       * and provides a `statement` which is expected for the account.
       * 
       * Parameters:
       * - `statement`: The identity of the statement which is being attested to in the signature.
       * 
       * <weight>
       * The weight of this call is invariant over the input parameters.
       * Weight includes logic to do pre-validation on `attest` call.
       * 
       * Total Complexity: O(1)
       * </weight>
       **/
      attest: AugmentedSubmittable<(statement: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make a claim to collect your DOTs.
       * 
       * The dispatch origin for this call must be _None_.
       * 
       * Unsigned Validation:
       * A call to claim is deemed valid if the signature provided matches
       * the expected signed message of:
       * 
       * > Ethereum Signed Message:
       * > (configured prefix string)(address)
       * 
       * and `address` matches the `dest` account.
       * 
       * Parameters:
       * - `dest`: The destination account to payout the claim.
       * - `ethereum_signature`: The signature of an ethereum signed message
       * matching the format described above.
       * 
       * <weight>
       * The weight of this call is invariant over the input parameters.
       * Weight includes logic to validate unsigned `claim` call.
       * 
       * Total Complexity: O(1)
       * </weight>
       **/
      claim: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, ethereumSignature: PolkadotRuntimeCommonClaimsEcdsaSignature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, PolkadotRuntimeCommonClaimsEcdsaSignature]>;
      /**
       * Make a claim to collect your DOTs by signing a statement.
       * 
       * The dispatch origin for this call must be _None_.
       * 
       * Unsigned Validation:
       * A call to `claim_attest` is deemed valid if the signature provided matches
       * the expected signed message of:
       * 
       * > Ethereum Signed Message:
       * > (configured prefix string)(address)(statement)
       * 
       * and `address` matches the `dest` account; the `statement` must match that which is
       * expected according to your purchase arrangement.
       * 
       * Parameters:
       * - `dest`: The destination account to payout the claim.
       * - `ethereum_signature`: The signature of an ethereum signed message
       * matching the format described above.
       * - `statement`: The identity of the statement which is being attested to in the signature.
       * 
       * <weight>
       * The weight of this call is invariant over the input parameters.
       * Weight includes logic to validate unsigned `claim_attest` call.
       * 
       * Total Complexity: O(1)
       * </weight>
       **/
      claimAttest: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, ethereumSignature: PolkadotRuntimeCommonClaimsEcdsaSignature | string | Uint8Array, statement: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, PolkadotRuntimeCommonClaimsEcdsaSignature, Bytes]>;
      /**
       * Mint a new claim to collect DOTs.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * Parameters:
       * - `who`: The Ethereum address allowed to collect this claim.
       * - `value`: The number of DOTs that will be claimed.
       * - `vesting_schedule`: An optional vesting schedule for these DOTs.
       * 
       * <weight>
       * The weight of this call is invariant over the input parameters.
       * We assume worst case that both vesting and statement is being inserted.
       * 
       * Total Complexity: O(1)
       * </weight>
       **/
      mintClaim: AugmentedSubmittable<(who: EthereumAddress | string | Uint8Array, value: u128 | AnyNumber | Uint8Array, vestingSchedule: Option<ITuple<[u128, u128, u32]>> | null | Uint8Array | ITuple<[u128, u128, u32]> | [u128 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], statement: Option<PolkadotRuntimeCommonClaimsStatementKind> | null | Uint8Array | PolkadotRuntimeCommonClaimsStatementKind | 'Regular' | 'Saft' | number) => SubmittableExtrinsic<ApiType>, [EthereumAddress, u128, Option<ITuple<[u128, u128, u32]>>, Option<PolkadotRuntimeCommonClaimsStatementKind>]>;
      moveClaim: AugmentedSubmittable<(old: EthereumAddress | string | Uint8Array, updated: EthereumAddress | string | Uint8Array, maybePreclaim: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [EthereumAddress, EthereumAddress, Option<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    configuration: {
      /**
       * Set the asynchronous backing parameters.
       **/
      setAsyncBackingParams: AugmentedSubmittable<(updated: PolkadotPrimitivesVstagingAsyncBackingParams | { maxCandidateDepth?: any; allowedAncestryLen?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotPrimitivesVstagingAsyncBackingParams]>;
      /**
       * Setting this to true will disable consistency checks for the configuration setters.
       * Use with caution.
       **/
      setBypassConsistencyCheck: AugmentedSubmittable<(updated: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * Set the availability period for parachains.
       **/
      setChainAvailabilityPeriod: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the acceptance period for an included candidate.
       **/
      setCodeRetentionPeriod: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the dispute period, in number of sessions to keep for disputes.
       **/
      setDisputePeriod: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the dispute post conclusion acceptance period.
       **/
      setDisputePostConclusionAcceptancePeriod: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set PVF executor parameters.
       **/
      setExecutorParams: AugmentedSubmittable<(updated: PolkadotPrimitivesV4ExecutorParams) => SubmittableExtrinsic<ApiType>, [PolkadotPrimitivesV4ExecutorParams]>;
      /**
       * Set the parachain validator-group rotation frequency
       **/
      setGroupRotationFrequency: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum number of messages allowed in an HRMP channel at once.
       **/
      setHrmpChannelMaxCapacity: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum size of a message that could ever be put into an HRMP channel.
       **/
      setHrmpChannelMaxMessageSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum total size of messages in bytes allowed in an HRMP channel at once.
       **/
      setHrmpChannelMaxTotalSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum number of outbound HRMP messages can be sent by a candidate.
       **/
      setHrmpMaxMessageNumPerCandidate: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum number of inbound HRMP channels a parachain is allowed to accept.
       **/
      setHrmpMaxParachainInboundChannels: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum number of outbound HRMP channels a parachain is allowed to open.
       **/
      setHrmpMaxParachainOutboundChannels: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum number of inbound HRMP channels a parathread is allowed to accept.
       **/
      setHrmpMaxParathreadInboundChannels: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum number of outbound HRMP channels a parathread is allowed to open.
       **/
      setHrmpMaxParathreadOutboundChannels: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the number of sessions after which an HRMP open channel request expires.
       **/
      setHrmpOpenRequestTtl: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the amount of funds that the recipient should provide for accepting opening an HRMP
       * channel.
       **/
      setHrmpRecipientDeposit: AugmentedSubmittable<(updated: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Sets the amount of funds that the sender should provide for opening an HRMP channel.
       **/
      setHrmpSenderDeposit: AugmentedSubmittable<(updated: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Set the max validation code size for incoming upgrades.
       **/
      setMaxCodeSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the critical downward message size.
       **/
      setMaxDownwardMessageSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the max head data size for paras.
       **/
      setMaxHeadDataSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the max POV block size for incoming upgrades.
       **/
      setMaxPovSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum number of messages that a candidate can contain.
       **/
      setMaxUpwardMessageNumPerCandidate: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum size of an upward message that can be sent by a candidate.
       **/
      setMaxUpwardMessageSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum items that can present in a upward dispatch queue at once.
       **/
      setMaxUpwardQueueCount: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum total size of items that can present in a upward dispatch queue at once.
       **/
      setMaxUpwardQueueSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the maximum number of validators to use in parachain consensus.
       **/
      setMaxValidators: AugmentedSubmittable<(updated: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * Set the maximum number of validators to assign to any core.
       **/
      setMaxValidatorsPerCore: AugmentedSubmittable<(updated: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * Sets the minimum delay between announcing the upgrade block for a parachain until the
       * upgrade taking place.
       * 
       * See the field documentation for information and constraints for the new value.
       **/
      setMinimumValidationUpgradeDelay: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the total number of delay tranches.
       **/
      setNDelayTranches: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the number of validators needed to approve a block.
       **/
      setNeededApprovals: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the no show slots, in number of number of consensus slots.
       * Must be at least 1.
       **/
      setNoShowSlots: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the number of parathread execution cores.
       **/
      setParathreadCores: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the number of retries for a particular parathread.
       **/
      setParathreadRetries: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Enable or disable PVF pre-checking. Consult the field documentation prior executing.
       **/
      setPvfCheckingEnabled: AugmentedSubmittable<(updated: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * Set the number of session changes after which a PVF pre-checking voting is rejected.
       **/
      setPvfVotingTtl: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the number of samples to do of the `RelayVRFModulo` approval assignment criterion.
       **/
      setRelayVrfModuloSamples: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the scheduling lookahead, in expected number of blocks at peak throughput.
       **/
      setSchedulingLookahead: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the availability period for parathreads.
       **/
      setThreadAvailabilityPeriod: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Sets the maximum amount of weight any individual upward message may consume.
       **/
      setUmpMaxIndividualWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * Sets the soft limit for the phase of dispatching dispatchable upward messages.
       **/
      setUmpServiceTotalWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * Set the validation upgrade cooldown.
       **/
      setValidationUpgradeCooldown: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the validation upgrade delay.
       **/
      setValidationUpgradeDelay: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the zeroth delay tranche width.
       **/
      setZerothDelayTrancheWidth: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    convictionVoting: {
      /**
       * Delegate the voting power (with some given conviction) of the sending account for a
       * particular class of polls.
       * 
       * The balance delegated is locked for as long as it's delegated, and thereafter for the
       * time appropriate for the conviction's lock period.
       * 
       * The dispatch origin of this call must be _Signed_, and the signing account must either:
       * - be delegating already; or
       * - have no voting activity (if there is, then it will need to be removed/consolidated
       * through `reap_vote` or `unvote`).
       * 
       * - `to`: The account whose voting the `target` account's voting power will follow.
       * - `class`: The class of polls to delegate. To delegate multiple classes, multiple calls
       * to this function are required.
       * - `conviction`: The conviction that will be attached to the delegated votes. When the
       * account is undelegated, the funds will be locked for the corresponding period.
       * - `balance`: The amount of the account's balance to be used in delegating. This must not
       * be more than the account's current balance.
       * 
       * Emits `Delegated`.
       * 
       * Weight: `O(R)` where R is the number of polls the voter delegating to has
       * voted on. Weight is initially charged as if maximum votes, but is refunded later.
       **/
      delegate: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array, to: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, conviction: PalletConvictionVotingConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, MultiAddress, PalletConvictionVotingConviction, u128]>;
      /**
       * Remove a vote for a poll.
       * 
       * If the `target` is equal to the signer, then this function is exactly equivalent to
       * `remove_vote`. If not equal to the signer, then the vote must have expired,
       * either because the poll was cancelled, because the voter lost the poll or
       * because the conviction period is over.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `target`: The account of the vote to be removed; this account must have voted for poll
       * `index`.
       * - `index`: The index of poll of the vote to be removed.
       * - `class`: The class of the poll.
       * 
       * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeOtherVote: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, clazz: u16 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u16, u32]>;
      /**
       * Remove a vote for a poll.
       * 
       * If:
       * - the poll was cancelled, or
       * - the poll is ongoing, or
       * - the poll has ended such that
       * - the vote of the account was in opposition to the result; or
       * - there was no conviction to the account's vote; or
       * - the account made a split vote
       * ...then the vote is removed cleanly and a following call to `unlock` may result in more
       * funds being available.
       * 
       * If, however, the poll has ended and:
       * - it finished corresponding to the vote of the account, and
       * - the account made a standard vote with conviction, and
       * - the lock period of the conviction is not over
       * ...then the lock will be aggregated into the overall account's lock, which may involve
       * *overlocking* (where the two locks are combined into a single lock that is the maximum
       * of both the amount locked and the time is it locked for).
       * 
       * The dispatch origin of this call must be _Signed_, and the signer must have a vote
       * registered for poll `index`.
       * 
       * - `index`: The index of poll of the vote to be removed.
       * - `class`: Optional parameter, if given it indicates the class of the poll. For polls
       * which have finished or are cancelled, this must be `Some`.
       * 
       * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeVote: AugmentedSubmittable<(clazz: Option<u16> | null | Uint8Array | u16 | AnyNumber, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u16>, u32]>;
      /**
       * Undelegate the voting power of the sending account for a particular class of polls.
       * 
       * Tokens may be unlocked following once an amount of time consistent with the lock period
       * of the conviction with which the delegation was issued has passed.
       * 
       * The dispatch origin of this call must be _Signed_ and the signing account must be
       * currently delegating.
       * 
       * - `class`: The class of polls to remove the delegation from.
       * 
       * Emits `Undelegated`.
       * 
       * Weight: `O(R)` where R is the number of polls the voter delegating to has
       * voted on. Weight is initially charged as if maximum votes, but is refunded later.
       **/
      undelegate: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * Remove the lock caused by prior voting/delegating which has expired within a particular
       * class.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `class`: The class of polls to unlock.
       * - `target`: The account to remove the lock on.
       * 
       * Weight: `O(R)` with R number of vote of target.
       **/
      unlock: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, MultiAddress]>;
      /**
       * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
       * otherwise it is a vote to keep the status quo.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `poll_index`: The index of the poll to vote for.
       * - `vote`: The vote configuration.
       * 
       * Weight: `O(R)` where R is the number of polls the voter has voted on.
       **/
      vote: AugmentedSubmittable<(pollIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletConvictionVotingVoteAccountVote | { Standard: any } | { Split: any } | { SplitAbstain: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletConvictionVotingVoteAccountVote]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    crowdloan: {
      /**
       * Add an optional memo to an existing crowdloan contribution.
       * 
       * Origin must be Signed, and the user must have contributed to the crowdloan.
       **/
      addMemo: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, memo: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
       * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
       **/
      contribute: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, signature: Option<SpRuntimeMultiSignature> | null | Uint8Array | SpRuntimeMultiSignature | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Option<SpRuntimeMultiSignature>]>;
      /**
       * Contribute your entire balance to a crowd sale. This will transfer the entire balance of a user over to fund a parachain
       * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
       **/
      contributeAll: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, signature: Option<SpRuntimeMultiSignature> | null | Uint8Array | SpRuntimeMultiSignature | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Option<SpRuntimeMultiSignature>]>;
      /**
       * Create a new crowdloaning campaign for a parachain slot with the given lease period range.
       * 
       * This applies a lock to your parachain configuration, ensuring that it cannot be changed
       * by the parachain manager.
       **/
      create: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, cap: Compact<u128> | AnyNumber | Uint8Array, firstPeriod: Compact<u32> | AnyNumber | Uint8Array, lastPeriod: Compact<u32> | AnyNumber | Uint8Array, end: Compact<u32> | AnyNumber | Uint8Array, verifier: Option<SpRuntimeMultiSigner> | null | Uint8Array | SpRuntimeMultiSigner | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Compact<u32>, Compact<u32>, Compact<u32>, Option<SpRuntimeMultiSigner>]>;
      /**
       * Remove a fund after the retirement period has ended and all funds have been returned.
       **/
      dissolve: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Edit the configuration for an in-progress crowdloan.
       * 
       * Can only be called by Root origin.
       **/
      edit: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, cap: Compact<u128> | AnyNumber | Uint8Array, firstPeriod: Compact<u32> | AnyNumber | Uint8Array, lastPeriod: Compact<u32> | AnyNumber | Uint8Array, end: Compact<u32> | AnyNumber | Uint8Array, verifier: Option<SpRuntimeMultiSigner> | null | Uint8Array | SpRuntimeMultiSigner | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Compact<u32>, Compact<u32>, Compact<u32>, Option<SpRuntimeMultiSigner>]>;
      /**
       * Poke the fund into `NewRaise`
       * 
       * Origin must be Signed, and the fund has non-zero raise.
       **/
      poke: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Automatically refund contributors of an ended crowdloan.
       * Due to weight restrictions, this function may need to be called multiple
       * times to fully refund all users. We will refund `RemoveKeysLimit` users at a time.
       * 
       * Origin must be signed, but can come from anyone.
       **/
      refund: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Withdraw full balance of a specific contributor.
       * 
       * Origin must be signed, but can come from anyone.
       * 
       * The fund must be either in, or ready for, retirement. For a fund to be *in* retirement, then the retirement
       * flag must be set. For a fund to be ready for retirement, then:
       * - it must not already be in retirement;
       * - the amount of raised funds must be bigger than the _free_ balance of the account;
       * - and either:
       * - the block number must be at least `end`; or
       * - the current lease period must be greater than the fund's `last_period`.
       * 
       * In this case, the fund's retirement flag is set and its `end` is reset to the current block
       * number.
       * 
       * - `who`: The account whose contribution should be withdrawn.
       * - `index`: The parachain to whose crowdloan the contribution was made.
       **/
      withdraw: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * Trigger the governance fallback.
       * 
       * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
       * calling [`Call::set_emergency_election_result`].
       **/
      governanceFallback: AugmentedSubmittable<(maybeMaxVoters: Option<u32> | null | Uint8Array | u32 | AnyNumber, maybeMaxTargets: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>, Option<u32>]>;
      /**
       * Set a solution in the queue, to be handed out to the client of this pallet in the next
       * call to `ElectionProvider::elect`.
       * 
       * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
       * 
       * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
       * feasibility check itself can in principle cause the election process to fail (due to
       * memory/weight constrains).
       **/
      setEmergencyElectionResult: AugmentedSubmittable<(supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>> | ([AccountId32 | string | Uint8Array, SpNposElectionsSupport | { total?: any; voters?: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>]>;
      /**
       * Set a new value for `MinimumUntrustedScore`.
       * 
       * Dispatch origin must be aligned with `T::ForceOrigin`.
       * 
       * This check can be turned off by setting the value to `None`.
       **/
      setMinimumUntrustedScore: AugmentedSubmittable<(maybeNextScore: Option<SpNposElectionsElectionScore> | null | Uint8Array | SpNposElectionsElectionScore | { minimalStake?: any; sumStake?: any; sumStakeSquared?: any } | string) => SubmittableExtrinsic<ApiType>, [Option<SpNposElectionsElectionScore>]>;
      /**
       * Submit a solution for the signed phase.
       * 
       * The dispatch origin fo this call must be __signed__.
       * 
       * The solution is potentially queued, based on the claimed score and processed at the end
       * of the signed phase.
       * 
       * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
       * might be rewarded, slashed, or get all or a part of the deposit back.
       **/
      submit: AugmentedSubmittable<(rawSolution: PalletElectionProviderMultiPhaseRawSolution | { solution?: any; score?: any; round?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletElectionProviderMultiPhaseRawSolution]>;
      /**
       * Submit a solution for the unsigned phase.
       * 
       * The dispatch origin fo this call must be __none__.
       * 
       * This submission is checked on the fly. Moreover, this unsigned solution is only
       * validated when submitted to the pool from the **local** node. Effectively, this means
       * that only active validators can submit this transaction when authoring a block (similar
       * to an inherent).
       * 
       * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
       * panic if the solution submitted by the validator is invalid in any way, effectively
       * putting their authoring reward at risk.
       * 
       * No deposit or reward is associated with this submission.
       **/
      submitUnsigned: AugmentedSubmittable<(rawSolution: PalletElectionProviderMultiPhaseRawSolution | { solution?: any; score?: any; round?: any } | string | Uint8Array, witness: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize | { voters?: any; targets?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletElectionProviderMultiPhaseRawSolution, PalletElectionProviderMultiPhaseSolutionOrSnapshotSize]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    fastUnstake: {
      /**
       * Control the operation of this pallet.
       * 
       * Dispatch origin must be signed by the [`Config::ControlOrigin`].
       **/
      control: AugmentedSubmittable<(erasToCheck: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Deregister oneself from the fast-unstake.
       * 
       * This is useful if one is registered, they are still waiting, and they change their mind.
       * 
       * Note that the associated stash is still fully unbonded and chilled as a consequence of
       * calling `register_fast_unstake`. This should probably be followed by a call to
       * `Staking::rebond`.
       **/
      deregister: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Register oneself for fast-unstake.
       * 
       * The dispatch origin of this call must be signed by the controller account, similar to
       * `staking::unbond`.
       * 
       * The stash associated with the origin must have no ongoing unlocking chunks. If
       * successful, this will fully unbond and chill the stash. Then, it will enqueue the stash
       * to be checked in further blocks.
       * 
       * If by the time this is called, the stash is actually eligible for fast-unstake, then
       * they are guaranteed to remain eligible, because the call will chill them as well.
       * 
       * If the check works, the entire staking data is removed, i.e. the stash is fully
       * unstaked.
       * 
       * If the check fails, the stash remains chilled and waiting for being unbonded as in with
       * the normal staking system, but they lose part of their unbonding chunks due to consuming
       * the chain's resources.
       **/
      registerFastUnstake: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    fellowshipCollective: {
      /**
       * Introduce a new member.
       * 
       * - `origin`: Must be the `AdminOrigin`.
       * - `who`: Account of non-member which will become a member.
       * - `rank`: The rank to give the new member.
       * 
       * Weight: `O(1)`
       **/
      addMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Remove votes from the given poll. It must have ended.
       * 
       * - `origin`: Must be `Signed` by any account.
       * - `poll_index`: Index of a poll which is completed and for which votes continue to
       * exist.
       * - `max`: Maximum number of vote items from remove in this call.
       * 
       * Transaction fees are waived if the operation is successful.
       * 
       * Weight `O(max)` (less if there are fewer items to remove than `max`).
       **/
      cleanupPoll: AugmentedSubmittable<(pollIndex: u32 | AnyNumber | Uint8Array, max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Decrement the rank of an existing member by one. If the member is already at rank zero,
       * then they are removed entirely.
       * 
       * - `origin`: Must be the `AdminOrigin`.
       * - `who`: Account of existing member of rank greater than zero.
       * 
       * Weight: `O(1)`, less if the member's index is highest in its rank.
       **/
      demoteMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Increment the rank of an existing member by one.
       * 
       * - `origin`: Must be the `AdminOrigin`.
       * - `who`: Account of existing member.
       * 
       * Weight: `O(1)`
       **/
      promoteMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Remove the member entirely.
       * 
       * - `origin`: Must be the `AdminOrigin`.
       * - `who`: Account of existing member of rank greater than zero.
       * - `min_rank`: The rank of the member or greater.
       * 
       * Weight: `O(min_rank)`.
       **/
      removeMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, minRank: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u16]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       * 
       * - `origin`: Must be `Signed` by a member account.
       * - `poll`: Index of a poll which is ongoing.
       * - `aye`: `true` if the vote is to approve the proposal, `false` otherwise.
       * 
       * Transaction fees are be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a
       * fee.
       * 
       * Weight: `O(1)`, less if there was no previous vote on the poll by the member.
       **/
      vote: AugmentedSubmittable<(poll: u32 | AnyNumber | Uint8Array, aye: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    fellowshipReferenda: {
      /**
       * Cancel an ongoing referendum.
       * 
       * - `origin`: must be the `CancelOrigin`.
       * - `index`: The index of the referendum to be cancelled.
       * 
       * Emits `Cancelled`.
       **/
      cancel: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Cancel an ongoing referendum and slash the deposits.
       * 
       * - `origin`: must be the `KillOrigin`.
       * - `index`: The index of the referendum to be cancelled.
       * 
       * Emits `Killed` and `DepositSlashed`.
       **/
      kill: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Advance a referendum onto its next logical state. Only used internally.
       * 
       * - `origin`: must be `Root`.
       * - `index`: the referendum to be advanced.
       **/
      nudgeReferendum: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Advance a track onto its next logical state. Only used internally.
       * 
       * - `origin`: must be `Root`.
       * - `track`: the track to be advanced.
       * 
       * Action item for when there is now one fewer referendum in the deciding phase and the
       * `DecidingCount` is not yet updated. This means that we should either:
       * - begin deciding another referendum (and leave `DecidingCount` alone); or
       * - decrement `DecidingCount`.
       **/
      oneFewerDeciding: AugmentedSubmittable<(track: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * Post the Decision Deposit for a referendum.
       * 
       * - `origin`: must be `Signed` and the account must have funds available for the
       * referendum's track's Decision Deposit.
       * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
       * posted.
       * 
       * Emits `DecisionDepositPlaced`.
       **/
      placeDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Refund the Decision Deposit for a closed referendum back to the depositor.
       * 
       * - `origin`: must be `Signed` or `Root`.
       * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
       * refunded.
       * 
       * Emits `DecisionDepositRefunded`.
       **/
      refundDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Refund the Submission Deposit for a closed referendum back to the depositor.
       * 
       * - `origin`: must be `Signed` or `Root`.
       * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
       * refunded.
       * 
       * Emits `SubmissionDepositRefunded`.
       **/
      refundSubmissionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set or clear metadata of a referendum.
       * 
       * Parameters:
       * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
       * metadata of a finished referendum.
       * - `index`:  The index of a referendum to set or clear metadata for.
       * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
       **/
      setMetadata: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [u32, Option<H256>]>;
      /**
       * Propose a referendum on a privileged action.
       * 
       * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
       * available.
       * - `proposal_origin`: The origin from which the proposal should be executed.
       * - `proposal`: The proposal.
       * - `enactment_moment`: The moment that the proposal should be enacted.
       * 
       * Emits `Submitted`.
       **/
      submit: AugmentedSubmittable<(proposalOrigin: KusamaRuntimeOriginCaller | { system: any } | { Void: any } | { Origins: any } | { ParachainsOrigin: any } | { XcmPallet: any } | string | Uint8Array, proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, enactmentMoment: FrameSupportScheduleDispatchTime | { At: any } | { After: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [KusamaRuntimeOriginCaller, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    grandpa: {
      /**
       * Note that the current authority set of the GRANDPA finality gadget has stalled.
       * 
       * This will trigger a forced authority set change at the beginning of the next session, to
       * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
       * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
       * The block production rate (which may be slowed down because of finality lagging) should
       * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
       * authority will start voting on top of `best_finalized_block_number` for new finalized
       * blocks. `best_finalized_block_number` should be the highest of the latest finalized
       * block of all validators of the new authority set.
       * 
       * Only callable by root.
       **/
      noteStalled: AugmentedSubmittable<(delay: u32 | AnyNumber | Uint8Array, bestFinalizedBlockNumber: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: SpConsensusGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusGrandpaEquivocationProof, SpSessionMembershipProof]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       * 
       * This extrinsic must be called unsigned and it is expected that only
       * block authors will call it (validated in `ValidateUnsigned`), as such
       * if the block author is defined it will be defined as the equivocation
       * reporter.
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpConsensusGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusGrandpaEquivocationProof, SpSessionMembershipProof]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    hrmp: {
      /**
       * This extrinsic triggers the cleanup of all the HRMP storage items that
       * a para may have. Normally this happens once per session, but this allows
       * you to trigger the cleanup immediately for a specific parachain.
       * 
       * Origin must be Root.
       * 
       * Number of inbound and outbound channels for `para` must be provided as witness data of weighing.
       **/
      forceCleanHrmp: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, inbound: u32 | AnyNumber | Uint8Array, outbound: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32]>;
      /**
       * Open a channel from a `sender` to a `recipient` `ParaId` using the Root origin. Although
       * opened by Root, the `max_capacity` and `max_message_size` are still subject to the Relay
       * Chain's configured limits.
       * 
       * Expected use is when one of the `ParaId`s involved in the channel is governed by the
       * Relay Chain, e.g. a common good parachain.
       **/
      forceOpenHrmpChannel: AugmentedSubmittable<(sender: u32 | AnyNumber | Uint8Array, recipient: u32 | AnyNumber | Uint8Array, maxCapacity: u32 | AnyNumber | Uint8Array, maxMessageSize: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u32]>;
      /**
       * Force process HRMP close channel requests.
       * 
       * If there are pending HRMP close channel requests, you can use this
       * function process all of those requests immediately.
       * 
       * Total number of closing channels must be provided as witness data of weighing.
       **/
      forceProcessHrmpClose: AugmentedSubmittable<(channels: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Force process HRMP open channel requests.
       * 
       * If there are pending HRMP open channel requests, you can use this
       * function process all of those requests immediately.
       * 
       * Total number of opening channels must be provided as witness data of weighing.
       **/
      forceProcessHrmpOpen: AugmentedSubmittable<(channels: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Accept a pending open channel request from the given sender.
       * 
       * The channel will be opened only on the next session boundary.
       **/
      hrmpAcceptOpenChannel: AugmentedSubmittable<(sender: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * This cancels a pending open channel request. It can be canceled by either of the sender
       * or the recipient for that request. The origin must be either of those.
       * 
       * The cancellation happens immediately. It is not possible to cancel the request if it is
       * already accepted.
       * 
       * Total number of open requests (i.e. `HrmpOpenChannelRequestsList`) must be provided as
       * witness data.
       **/
      hrmpCancelOpenRequest: AugmentedSubmittable<(channelId: PolkadotParachainPrimitivesHrmpChannelId | { sender?: any; recipient?: any } | string | Uint8Array, openRequests: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotParachainPrimitivesHrmpChannelId, u32]>;
      /**
       * Initiate unilateral closing of a channel. The origin must be either the sender or the
       * recipient in the channel being closed.
       * 
       * The closure can only happen on a session change.
       **/
      hrmpCloseChannel: AugmentedSubmittable<(channelId: PolkadotParachainPrimitivesHrmpChannelId | { sender?: any; recipient?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotParachainPrimitivesHrmpChannelId]>;
      /**
       * Initiate opening a channel from a parachain to a given recipient with given channel
       * parameters.
       * 
       * - `proposed_max_capacity` - specifies how many messages can be in the channel at once.
       * - `proposed_max_message_size` - specifies the maximum size of the messages.
       * 
       * These numbers are a subject to the relay-chain configuration limits.
       * 
       * The channel can be opened only after the recipient confirms it and only on a session
       * change.
       **/
      hrmpInitOpenChannel: AugmentedSubmittable<(recipient: u32 | AnyNumber | Uint8Array, proposedMaxCapacity: u32 | AnyNumber | Uint8Array, proposedMaxMessageSize: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    identity: {
      /**
       * Add a registrar to the system.
       * 
       * The dispatch origin for this call must be `T::RegistrarOrigin`.
       * 
       * - `account`: the account of the registrar.
       * 
       * Emits `RegistrarAdded` if successful.
       * 
       * ## Complexity
       * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
       **/
      addRegistrar: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Add the given account to the sender's subs.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      addSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * Cancel a previous request.
       * 
       * Payment: A previously reserved deposit is returned on success.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a
       * registered identity.
       * 
       * - `reg_index`: The index of the registrar whose judgement is no longer requested.
       * 
       * Emits `JudgementUnrequested` if successful.
       * 
       * ## Complexity
       * - `O(R + X)`.
       * - where `R` registrar-count (governance-bounded).
       * - where `X` additional-field-count (deposit-bounded and code-bounded).
       **/
      cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Clear an account's identity info and all sub-accounts and return all deposits.
       * 
       * Payment: All reserved balances on the account are returned.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * identity.
       * 
       * Emits `IdentityCleared` if successful.
       * 
       * ## Complexity
       * - `O(R + S + X)`
       * - where `R` registrar-count (governance-bounded).
       * - where `S` subs-count (hard- and deposit-bounded).
       * - where `X` additional-field-count (deposit-bounded and code-bounded).
       **/
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove an account's identity and sub-account information and slash the deposits.
       * 
       * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
       * `Slash`. Verification request deposits are not returned; they should be cancelled
       * manually using `cancel_request`.
       * 
       * The dispatch origin for this call must match `T::ForceOrigin`.
       * 
       * - `target`: the account whose identity the judgement is upon. This must be an account
       * with a registered identity.
       * 
       * Emits `IdentityKilled` if successful.
       * 
       * ## Complexity
       * - `O(R + S + X)`
       * - where `R` registrar-count (governance-bounded).
       * - where `S` subs-count (hard- and deposit-bounded).
       * - where `X` additional-field-count (deposit-bounded and code-bounded).
       **/
      killIdentity: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Provide a judgement for an account's identity.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `reg_index`.
       * 
       * - `reg_index`: the index of the registrar whose judgement is being made.
       * - `target`: the account whose identity the judgement is upon. This must be an account
       * with a registered identity.
       * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
       * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
       * 
       * Emits `JudgementGiven` if successful.
       * 
       * ## Complexity
       * - `O(R + X)`.
       * - where `R` registrar-count (governance-bounded).
       * - where `X` additional-field-count (deposit-bounded and code-bounded).
       **/
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, judgement: PalletIdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array, identity: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, PalletIdentityJudgement, H256]>;
      /**
       * Remove the sender as a sub-account.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender (*not* the original depositor).
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * super-identity.
       * 
       * NOTE: This should not normally be used, but is provided in the case that the non-
       * controller of an account is maliciously registered as a sub-account.
       **/
      quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove the given account from the sender's subs.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      removeSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Alter the associated name of the given sub-account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      renameSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * Request a judgement from a registrar.
       * 
       * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
       * given.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a
       * registered identity.
       * 
       * - `reg_index`: The index of the registrar whose judgement is requested.
       * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
       * 
       * ```nocompile
       * Self::registrars().get(reg_index).unwrap().fee
       * ```
       * 
       * Emits `JudgementRequested` if successful.
       * 
       * ## Complexity
       * - `O(R + X)`.
       * - where `R` registrar-count (governance-bounded).
       * - where `X` additional-field-count (deposit-bounded and code-bounded).
       **/
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * Change the account associated with a registrar.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * 
       * - `index`: the index of the registrar whose fee is to be set.
       * - `new`: the new account ID.
       * 
       * ## Complexity
       * - `O(R)`.
       * - where `R` registrar-count (governance-bounded).
       **/
      setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Set the fee required for a judgement to be requested from a registrar.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * 
       * - `index`: the index of the registrar whose fee is to be set.
       * - `fee`: the new fee.
       * 
       * ## Complexity
       * - `O(R)`.
       * - where `R` registrar-count (governance-bounded).
       **/
      setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * Set the field information for a registrar.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * 
       * - `index`: the index of the registrar whose fee is to be set.
       * - `fields`: the fields that the registrar concerns themselves with.
       * 
       * ## Complexity
       * - `O(R)`.
       * - where `R` registrar-count (governance-bounded).
       **/
      setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: PalletIdentityBitFlags) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletIdentityBitFlags]>;
      /**
       * Set an account's identity information and reserve the appropriate deposit.
       * 
       * If the account already has identity information, the deposit is taken as part payment
       * for the new deposit.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `info`: The identity information.
       * 
       * Emits `IdentitySet` if successful.
       * 
       * ## Complexity
       * - `O(X + X' + R)`
       * - where `X` additional-field-count (deposit-bounded and code-bounded)
       * - where `R` judgements-count (registrar-count-bounded)
       **/
      setIdentity: AugmentedSubmittable<(info: PalletIdentityIdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityIdentityInfo]>;
      /**
       * Set the sub-accounts of the sender.
       * 
       * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
       * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * identity.
       * 
       * - `subs`: The identity's (new) sub-accounts.
       * 
       * ## Complexity
       * - `O(P + S)`
       * - where `P` old-subs-count (hard- and deposit-bounded).
       * - where `S` subs-count (hard- and deposit-bounded).
       **/
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | ([AccountId32 | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Data]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    imOnline: {
      /**
       * ## Complexity:
       * - `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is length of
       * `heartbeat.network_state.external_address`
       * - `O(K)`: decoding of length `K`
       * - `O(E)`: decoding/encoding of length `E`
       **/
      heartbeat: AugmentedSubmittable<(heartbeat: PalletImOnlineHeartbeat | { blockNumber?: any; networkState?: any; sessionIndex?: any; authorityIndex?: any; validatorsLen?: any } | string | Uint8Array, signature: PalletImOnlineSr25519AppSr25519Signature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletImOnlineHeartbeat, PalletImOnlineSr25519AppSr25519Signature]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    indices: {
      /**
       * Assign an previously unassigned index.
       * 
       * Payment: `Deposit` is reserved from the sender account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `index`: the index to be claimed. This must not be in use.
       * 
       * Emits `IndexAssigned` if successful.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      claim: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Force an index to an account. This doesn't require a deposit. If the index is already
       * held, then any deposit is reimbursed to its current owner.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `index`: the index to be (re-)assigned.
       * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
       * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
       * 
       * Emits `IndexAssigned` if successful.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      forceTransfer: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array, freeze: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, bool]>;
      /**
       * Free up an index owned by the sender.
       * 
       * Payment: Any previous deposit placed for the index is unreserved in the sender account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must own the index.
       * 
       * - `index`: the index to be freed. This must be owned by the sender.
       * 
       * Emits `IndexFreed` if successful.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      free: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Freeze an index so it will always point to the sender account. This consumes the
       * deposit.
       * 
       * The dispatch origin for this call must be _Signed_ and the signing account must have a
       * non-frozen account `index`.
       * 
       * - `index`: the index to be frozen in place.
       * 
       * Emits `IndexFrozen` if successful.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      freeze: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Assign an index already owned by the sender to another account. The balance reservation
       * is effectively transferred to the new account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `index`: the index to be re-assigned. This must be owned by the sender.
       * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
       * 
       * Emits `IndexAssigned` if successful.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      transfer: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    initializer: {
      /**
       * Issue a signal to the consensus engine to forcibly act as though all parachain
       * blocks in all relay chain blocks up to and including the given number in the current
       * chain are valid and should be finalized.
       **/
      forceApprove: AugmentedSubmittable<(upTo: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multisig: {
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * 
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call_hash`: The hash of the call to be executed.
       * 
       * NOTE: If this is the final approval, you will want to use `as_multi` instead.
       * 
       * ## Complexity
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
       * taken for its lifetime of `DepositBase + threshold * DepositFactor`.
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, callHash: U8aFixed | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, SpWeightsWeightV2Weight]>;
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * 
       * If there are enough, then dispatch the call.
       * 
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call`: The call to be executed.
       * 
       * NOTE: Unless this is the final approval, you will generally want to use
       * `approve_as_multi` instead, since it only requires a hash of the call.
       * 
       * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
       * on success, result is `Ok` and the result from the interior call, if it was executed,
       * may be found in the deposited `MultisigExecuted` event.
       * 
       * ## Complexity
       * - `O(S + Z + Call)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - The weight of the `call`.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
       * taken for its lifetime of `DepositBase + threshold * DepositFactor`.
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, call: Call | IMethod | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Call, SpWeightsWeightV2Weight]>;
      /**
       * Immediately dispatch a multi-signature call using a single approval from the caller.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `other_signatories`: The accounts (other than the sender) who are part of the
       * multi-signature, but do not participate in the approval process.
       * - `call`: The call to be executed.
       * 
       * Result is equivalent to the dispatched result.
       * 
       * ## Complexity
       * O(Z + C) where Z is the length of the call and C its execution weight.
       **/
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Call]>;
      /**
       * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
       * for this operation will be unreserved on success.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `timepoint`: The timepoint (block number and transaction index) of the first approval
       * transaction for this dispatch.
       * - `call_hash`: The hash of the call to be executed.
       * 
       * ## Complexity
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - One event.
       * - I/O: 1 read `O(S)`, one remove.
       * - Storage: removes one item.
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    nis: {
      /**
       * Make a private receipt communal and create fungible counterparts for its owner.
       **/
      communify: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Ensure we have sufficient funding for all potential payouts.
       * 
       * - `origin`: Must be accepted by `FundOrigin`.
       **/
      fundDeficit: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Place a bid.
       * 
       * Origin must be Signed, and account must have at least `amount` in free balance.
       * 
       * - `amount`: The amount of the bid; these funds will be reserved, and if/when
       * consolidated, removed. Must be at least `MinBid`.
       * - `duration`: The number of periods before which the newly consolidated bid may be
       * thawed. Must be greater than 1 and no more than `QueueCount`.
       * 
       * Complexities:
       * - `Queues[duration].len()` (just take max).
       **/
      placeBid: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, duration: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, u32]>;
      /**
       * Make a communal receipt private and burn fungible counterparts from its owner.
       **/
      privatize: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Retract a previously placed bid.
       * 
       * Origin must be Signed, and the account should have previously issued a still-active bid
       * of `amount` for `duration`.
       * 
       * - `amount`: The amount of the previous bid.
       * - `duration`: The duration of the previous bid.
       **/
      retractBid: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, duration: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, u32]>;
      /**
       * Reduce or remove an outstanding receipt, placing the according proportion of funds into
       * the account of the owner.
       * 
       * - `origin`: Must be Signed and the account must be the owner of the fungible counterpart
       * for receipt `index`.
       * - `index`: The index of the receipt.
       **/
      thawCommunal: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Reduce or remove an outstanding receipt, placing the according proportion of funds into
       * the account of the owner.
       * 
       * - `origin`: Must be Signed and the account must be the owner of the receipt `index` as
       * well as any fungible counterpart.
       * - `index`: The index of the receipt.
       * - `portion`: If `Some`, then only the given portion of the receipt should be thawed. If
       * `None`, then all of it should be.
       **/
      thawPrivate: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, maybeProportion: Option<Perquintill> | null | Uint8Array | Perquintill | AnyNumber) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Option<Perquintill>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    nisCounterpartBalances: {
      /**
       * Set the regular balance of a given account.
       * 
       * The dispatch origin for this call is `root`.
       **/
      forceSetBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Exactly as `transfer_allow_death`, except the origin must be root and the source account
       * may be specified.
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Unreserve some balance from a user by force.
       * 
       * Can only be called by ROOT.
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * Set the regular balance of a given account; it also takes a reserved balance but this
       * must be the same as the account's current reserved balance.
       * 
       * The dispatch origin for this call is `root`.
       * 
       * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
       **/
      setBalanceDeprecated: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, oldReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u128>]>;
      /**
       * Alias for `transfer_allow_death`, provided only for name-wise compatibility.
       * 
       * WARNING: DEPRECATED! Will be released in approximately 3 months.
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Transfer the entire transferable balance from the caller account.
       * 
       * NOTE: This function only attempts to transfer _transferable_ balances. This means that
       * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
       * transferred by this function. To ensure that this function results in a killed account,
       * you might need to prepare the account by removing any reference counters, storage
       * deposits, etc...
       * 
       * The dispatch origin of this call must be Signed.
       * 
       * - `dest`: The recipient of the transfer.
       * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
       * of the funds the account has, causing the sender account to be killed (false), or
       * transfer everything except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true).
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       **/
      transferAllowDeath: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
       * kill the origin account.
       * 
       * 99% of the time you want [`transfer_allow_death`] instead.
       * 
       * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Upgrade a specified account.
       * 
       * - `origin`: Must be `Signed`.
       * - `who`: The account to be upgraded.
       * 
       * This will waive the transaction fee if at least all but 10% of the accounts needed to
       * be upgraded. (We let some not have to be upgraded just in order to allow for the
       * possibililty of churn).
       **/
      upgradeAccounts: AugmentedSubmittable<(who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    nominationPools: {
      /**
       * Bond `extra` more funds from `origin` into the pool to which they already belong.
       * 
       * Additional funds can come from either the free balance of the account, of from the
       * accumulated rewards, see [`BondExtra`].
       * 
       * Bonding extra funds implies an automatic payout of all pending rewards as well.
       * See `bond_extra_other` to bond pending rewards of `other` members.
       **/
      bondExtra: AugmentedSubmittable<(extra: PalletNominationPoolsBondExtra | { FreeBalance: any } | { Rewards: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletNominationPoolsBondExtra]>;
      /**
       * `origin` bonds funds from `extra` for some pool member `member` into their respective
       * pools.
       * 
       * `origin` can bond extra funds from free balance or pending rewards when `origin ==
       * other`.
       * 
       * In the case of `origin != other`, `origin` can only bond extra pending rewards of
       * `other` members assuming set_claim_permission for the given member is
       * `PermissionlessAll` or `PermissionlessCompound`.
       **/
      bondExtraOther: AugmentedSubmittable<(member: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, extra: PalletNominationPoolsBondExtra | { FreeBalance: any } | { Rewards: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletNominationPoolsBondExtra]>;
      /**
       * Chill on behalf of the pool.
       * 
       * The dispatch origin of this call must be signed by the pool nominator or the pool
       * root role, same as [`Pallet::nominate`].
       * 
       * This directly forward the call to the staking pallet, on behalf of the pool bonded
       * account.
       **/
      chill: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Claim pending commission.
       * 
       * The dispatch origin of this call must be signed by the `root` role of the pool. Pending
       * commission is paid out and added to total claimed commission`. Total pending commission
       * is reset to zero. the current.
       **/
      claimCommission: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * A bonded member can use this to claim their payout based on the rewards that the pool
       * has accumulated since their last claimed payout (OR since joining if this is their first
       * time claiming rewards). The payout will be transferred to the member's account.
       * 
       * The member will earn rewards pro rata based on the members stake vs the sum of the
       * members in the pools stake. Rewards do not "expire".
       * 
       * See `claim_payout_other` to caim rewards on bahalf of some `other` pool member.
       **/
      claimPayout: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * `origin` can claim payouts on some pool member `other`'s behalf.
       * 
       * Pool member `other` must have a `PermissionlessAll` or `PermissionlessWithdraw` in order
       * for this call to be successful.
       **/
      claimPayoutOther: AugmentedSubmittable<(other: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Create a new delegation pool.
       * 
       * # Arguments
       * 
       * * `amount` - The amount of funds to delegate to the pool. This also acts of a sort of
       * deposit since the pools creator cannot fully unbond funds until the pool is being
       * destroyed.
       * * `index` - A disambiguation index for creating the account. Likely only useful when
       * creating multiple pools in the same extrinsic.
       * * `root` - The account to set as [`PoolRoles::root`].
       * * `nominator` - The account to set as the [`PoolRoles::nominator`].
       * * `bouncer` - The account to set as the [`PoolRoles::bouncer`].
       * 
       * # Note
       * 
       * In addition to `amount`, the caller will transfer the existential deposit; so the caller
       * needs at have at least `amount + existential_deposit` transferrable.
       **/
      create: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, root: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, nominator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, bouncer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress, MultiAddress, MultiAddress]>;
      /**
       * Create a new delegation pool with a previously used pool id
       * 
       * # Arguments
       * 
       * same as `create` with the inclusion of
       * * `pool_id` - `A valid PoolId.
       **/
      createWithPoolId: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, root: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, nominator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, bouncer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress, MultiAddress, MultiAddress, u32]>;
      /**
       * Stake funds with a pool. The amount to bond is transferred from the member to the
       * pools account and immediately increases the pools bond.
       * 
       * # Note
       * 
       * * An account can only be a member of a single pool.
       * * An account cannot join the same pool multiple times.
       * * This call will *not* dust the member account, so the member must have at least
       * `existential deposit + amount` in their account.
       * * Only a pool with [`PoolState::Open`] can be joined
       **/
      join: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, u32]>;
      /**
       * Nominate on behalf of the pool.
       * 
       * The dispatch origin of this call must be signed by the pool nominator or the pool
       * root role.
       * 
       * This directly forward the call to the staking pallet, on behalf of the pool bonded
       * account.
       **/
      nominate: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, validators: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<AccountId32>]>;
      /**
       * Call `withdraw_unbonded` for the pools account. This call can be made by any account.
       * 
       * This is useful if their are too many unlocking chunks to call `unbond`, and some
       * can be cleared by withdrawing. In the case there are too many unlocking chunks, the user
       * would probably see an error like `NoMoreChunks` emitted from the staking system when
       * they attempt to unbond.
       **/
      poolWithdrawUnbonded: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Allows a pool member to set a claim permission to allow or disallow permissionless
       * bonding and withdrawing.
       * 
       * By default, this is `Permissioned`, which implies only the pool member themselves can
       * claim their pending rewards. If a pool member wishes so, they can set this to
       * `PermissionlessAll` to allow any account to claim their rewards and bond extra to the
       * pool.
       * 
       * # Arguments
       * 
       * * `origin` - Member of a pool.
       * * `actor` - Account to claim reward. // improve this
       **/
      setClaimPermission: AugmentedSubmittable<(permission: PalletNominationPoolsClaimPermission | 'Permissioned' | 'PermissionlessCompound' | 'PermissionlessWithdraw' | 'PermissionlessAll' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletNominationPoolsClaimPermission]>;
      /**
       * Set the commission of a pool.
       * Both a commission percentage and a commission payee must be provided in the `current`
       * tuple. Where a `current` of `None` is provided, any current commission will be removed.
       * 
       * - If a `None` is supplied to `new_commission`, existing commission will be removed.
       **/
      setCommission: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, newCommission: Option<ITuple<[Perbill, AccountId32]>> | null | Uint8Array | ITuple<[Perbill, AccountId32]> | [Perbill | AnyNumber | Uint8Array, AccountId32 | string | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[Perbill, AccountId32]>>]>;
      /**
       * Set the commission change rate for a pool.
       * 
       * Initial change rate is not bounded, whereas subsequent updates can only be more
       * restrictive than the current.
       **/
      setCommissionChangeRate: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, changeRate: PalletNominationPoolsCommissionChangeRate | { maxIncrease?: any; minDelay?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletNominationPoolsCommissionChangeRate]>;
      /**
       * Set the maximum commission of a pool.
       * 
       * - Initial max can be set to any `Perbill`, and only smaller values thereafter.
       * - Current commission will be lowered in the event it is higher than a new max
       * commission.
       **/
      setCommissionMax: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, maxCommission: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Perbill]>;
      /**
       * Update configurations for the nomination pools. The origin for this call must be
       * Root.
       * 
       * # Arguments
       * 
       * * `min_join_bond` - Set [`MinJoinBond`].
       * * `min_create_bond` - Set [`MinCreateBond`].
       * * `max_pools` - Set [`MaxPools`].
       * * `max_members` - Set [`MaxPoolMembers`].
       * * `max_members_per_pool` - Set [`MaxPoolMembersPerPool`].
       * * `global_max_commission` - Set [`GlobalMaxCommission`].
       **/
      setConfigs: AugmentedSubmittable<(minJoinBond: PalletNominationPoolsConfigOpU128 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, minCreateBond: PalletNominationPoolsConfigOpU128 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxPools: PalletNominationPoolsConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxMembers: PalletNominationPoolsConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxMembersPerPool: PalletNominationPoolsConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, globalMaxCommission: PalletNominationPoolsConfigOpPerbill | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletNominationPoolsConfigOpU128, PalletNominationPoolsConfigOpU128, PalletNominationPoolsConfigOpU32, PalletNominationPoolsConfigOpU32, PalletNominationPoolsConfigOpU32, PalletNominationPoolsConfigOpPerbill]>;
      /**
       * Set a new metadata for the pool.
       * 
       * The dispatch origin of this call must be signed by the bouncer, or the root role of the
       * pool.
       **/
      setMetadata: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, metadata: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * Set a new state for the pool.
       * 
       * If a pool is already in the `Destroying` state, then under no condition can its state
       * change again.
       * 
       * The dispatch origin of this call must be either:
       * 
       * 1. signed by the bouncer, or the root role of the pool,
       * 2. if the pool conditions to be open are NOT met (as described by `ok_to_be_open`), and
       * then the state of the pool can be permissionlessly changed to `Destroying`.
       **/
      setState: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, state: PalletNominationPoolsPoolState | 'Open' | 'Blocked' | 'Destroying' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletNominationPoolsPoolState]>;
      /**
       * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
       * implicitly collects the rewards one last time, since not doing so would mean some
       * rewards would be forfeited.
       * 
       * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
       * account).
       * 
       * # Conditions for a permissionless dispatch.
       * 
       * * The pool is blocked and the caller is either the root or bouncer. This is refereed to
       * as a kick.
       * * The pool is destroying and the member is not the depositor.
       * * The pool is destroying, the member is the depositor and no other members are in the
       * pool.
       * 
       * ## Conditions for permissioned dispatch (i.e. the caller is also the
       * `member_account`):
       * 
       * * The caller is not the depositor.
       * * The caller is the depositor, the pool is destroying and no other members are in the
       * pool.
       * 
       * # Note
       * 
       * If there are too many unlocking chunks to unbond with the pool account,
       * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks.
       * The [`StakingInterface::unbond`] will implicitly call [`Call::pool_withdraw_unbonded`]
       * to try to free chunks if necessary (ie. if unbound was called and no unlocking chunks
       * are available). However, it may not be possible to release the current unlocking chunks,
       * in which case, the result of this call will likely be the `NoMoreChunks` error from the
       * staking system.
       **/
      unbond: AugmentedSubmittable<(memberAccount: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, unbondingPoints: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Update the roles of the pool.
       * 
       * The root is the only entity that can change any of the roles, including itself,
       * excluding the depositor, who can never change.
       * 
       * It emits an event, notifying UIs of the role change. This event is quite relevant to
       * most pool members and they should be informed of changes to pool roles.
       **/
      updateRoles: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, newRoot: PalletNominationPoolsConfigOpAccountId32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, newNominator: PalletNominationPoolsConfigOpAccountId32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, newBouncer: PalletNominationPoolsConfigOpAccountId32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletNominationPoolsConfigOpAccountId32, PalletNominationPoolsConfigOpAccountId32, PalletNominationPoolsConfigOpAccountId32]>;
      /**
       * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
       * error is returned.
       * 
       * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
       * account).
       * 
       * # Conditions for a permissionless dispatch
       * 
       * * The pool is in destroy mode and the target is not the depositor.
       * * The target is the depositor and they are the only member in the sub pools.
       * * The pool is blocked and the caller is either the root or bouncer.
       * 
       * # Conditions for permissioned dispatch
       * 
       * * The caller is the target and they are not the depositor.
       * 
       * # Note
       * 
       * If the target is the depositor, the pool will be destroyed.
       **/
      withdrawUnbonded: AugmentedSubmittable<(memberAccount: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    paraInclusion: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    paraInherent: {
      /**
       * Enter the paras inherent. This will process bitfields and backed candidates.
       **/
      enter: AugmentedSubmittable<(data: PolkadotPrimitivesV4InherentData | { bitfields?: any; backedCandidates?: any; disputes?: any; parentHeader?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotPrimitivesV4InherentData]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    paras: {
      /**
       * Adds the validation code to the storage.
       * 
       * The code will not be added if it is already present. Additionally, if PVF pre-checking
       * is running for that code, it will be instantly accepted.
       * 
       * Otherwise, the code will be added into the storage. Note that the code will be added
       * into storage with reference count 0. This is to account the fact that there are no users
       * for this code yet. The caller will have to make sure that this code eventually gets
       * used by some parachain or removed from the storage to avoid storage leaks. For the latter
       * prefer to use the `poke_unused_validation_code` dispatchable to raw storage manipulation.
       * 
       * This function is mainly meant to be used for upgrading parachains that do not follow
       * the go-ahead signal while the PVF pre-checking feature is enabled.
       **/
      addTrustedValidationCode: AugmentedSubmittable<(validationCode: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Note a new block head for para within the context of the current block.
       **/
      forceNoteNewHead: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, newHead: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * Put a parachain directly into the next session's action queue.
       * We can't queue it any sooner than this without going into the
       * initializer...
       **/
      forceQueueAction: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Schedule an upgrade as if it was scheduled in the given relay parent block.
       **/
      forceScheduleCodeUpgrade: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, newCode: Bytes | string | Uint8Array, relayParentNumber: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes, u32]>;
      /**
       * Set the storage for the parachain validation code immediately.
       **/
      forceSetCurrentCode: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, newCode: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * Set the storage for the current parachain head data immediately.
       **/
      forceSetCurrentHead: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, newHead: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * Includes a statement for a PVF pre-checking vote. Potentially, finalizes the vote and
       * enacts the results if that was the last vote before achieving the supermajority.
       **/
      includePvfCheckStatement: AugmentedSubmittable<(stmt: PolkadotPrimitivesV4PvfCheckStatement | { accept?: any; subject?: any; sessionIndex?: any; validatorIndex?: any } | string | Uint8Array, signature: PolkadotPrimitivesV4ValidatorAppSignature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotPrimitivesV4PvfCheckStatement, PolkadotPrimitivesV4ValidatorAppSignature]>;
      /**
       * Remove the validation code from the storage iff the reference count is 0.
       * 
       * This is better than removing the storage directly, because it will not remove the code
       * that was suddenly got used by some parachain while this dispatchable was pending
       * dispatching.
       **/
      pokeUnusedValidationCode: AugmentedSubmittable<(validationCodeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parasDisputes: {
      forceUnfreeze: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parasShared: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parasSlashing: {
      reportDisputeLostUnsigned: AugmentedSubmittable<(disputeProof: PolkadotRuntimeParachainsDisputesSlashingDisputeProof | { timeSlot?: any; kind?: any; validatorIndex?: any; validatorId?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotRuntimeParachainsDisputesSlashingDisputeProof, SpSessionMembershipProof]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    preimage: {
      /**
       * Register a preimage on-chain.
       * 
       * If the preimage was previously requested, no fees or deposits are taken for providing
       * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
       **/
      notePreimage: AugmentedSubmittable<(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Request a preimage be uploaded to the chain without paying any fees or deposits.
       * 
       * If the preimage requests has already been provided on-chain, we unreserve any deposit
       * a user may have paid, and take the control of the preimage out of their hands.
       **/
      requestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Clear an unrequested preimage from the runtime storage.
       * 
       * If `len` is provided, then it will be a much cheaper operation.
       * 
       * - `hash`: The hash of the preimage to be removed from the store.
       * - `len`: The length of the preimage of `hash`.
       **/
      unnotePreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Clear a previously made request for a preimage.
       * 
       * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
       **/
      unrequestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    proxy: {
      /**
       * Register a proxy account for the sender that is able to make calls on its behalf.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `proxy`: The account that the `caller` would like to make a proxy.
       * - `proxy_type`: The permissions allowed for this proxy account.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       **/
      addProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: KusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, KusamaRuntimeProxyType, u32]>;
      /**
       * Publish the hash of a proxy-call that will be made in the future.
       * 
       * This must be called some number of blocks before the corresponding `proxy` is attempted
       * if the delay associated with the proxy relationship is greater than zero.
       * 
       * No more than `MaxPending` announcements may be made at any one time.
       * 
       * This will take a deposit of `AnnouncementDepositFactor` as well as
       * `AnnouncementDepositBase` if there are no other pending announcements.
       * 
       * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       **/
      announce: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
       * initialize it with a proxy of `proxy_type` for `origin` sender.
       * 
       * Requires a `Signed` origin.
       * 
       * - `proxy_type`: The type of the proxy that the sender will be registered as over the
       * new account. This will almost always be the most permissive `ProxyType` possible to
       * allow for maximum flexibility.
       * - `index`: A disambiguation index, in case this is called multiple times in the same
       * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
       * want to use `0`.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       * 
       * Fails with `Duplicate` if this has already been called in this transaction, from the
       * same sender, with the same parameters.
       * 
       * Fails if there are insufficient funds to pay for deposit.
       **/
      createPure: AugmentedSubmittable<(proxyType: KusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [KusamaRuntimeProxyType, u32, u16]>;
      /**
       * Removes a previously spawned pure proxy.
       * 
       * WARNING: **All access to this account will be lost.** Any funds held in it will be
       * inaccessible.
       * 
       * Requires a `Signed` origin, and the sender account must have been created by a call to
       * `pure` with corresponding parameters.
       * 
       * - `spawner`: The account that originally called `pure` to create this account.
       * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
       * - `proxy_type`: The proxy type originally passed to `pure`.
       * - `height`: The height of the chain when the call to `pure` was processed.
       * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
       * 
       * Fails with `NoPermission` in case the caller is not a previously created pure
       * account whose `pure` call has corresponding parameters.
       **/
      killPure: AugmentedSubmittable<(spawner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: KusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, KusamaRuntimeProxyType, u16, Compact<u32>, Compact<u32>]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorised for through
       * `add_proxy`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       **/
      proxy: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<KusamaRuntimeProxyType> | null | Uint8Array | KusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Option<KusamaRuntimeProxyType>, Call]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorized for through
       * `add_proxy`.
       * 
       * Removes any corresponding announcement(s).
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<KusamaRuntimeProxyType> | null | Uint8Array | KusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Option<KusamaRuntimeProxyType>, Call]>;
      /**
       * Remove the given announcement of a delegate.
       * 
       * May be called by a target (proxied) account to remove a call that one of their delegates
       * (`delegate`) has announced they want to execute. The deposit is returned.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `delegate`: The account that previously announced the call.
       * - `call_hash`: The hash of the call to be made.
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * Remove a given announcement.
       * 
       * May be called by a proxy account to remove a call they previously announced and return
       * the deposit.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       **/
      removeAnnouncement: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * Unregister all proxy accounts for the sender.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * WARNING: This may be called on accounts created by `pure`, however if done, then
       * the unreserved fees will be inaccessible. **All access to this account will be lost.**
       **/
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unregister a proxy account for the sender.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `proxy`: The account that the `caller` would like to remove as a proxy.
       * - `proxy_type`: The permissions currently enabled for the removed proxy account.
       **/
      removeProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: KusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, KusamaRuntimeProxyType, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    recovery: {
      /**
       * Send a call through a recovered account.
       * 
       * The dispatch origin for this call must be _Signed_ and registered to
       * be able to make calls on behalf of the recovered account.
       * 
       * Parameters:
       * - `account`: The recovered account you want to make a call on-behalf-of.
       * - `call`: The call you want to make with the recovered account.
       **/
      asRecovered: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * Cancel the ability to use `as_recovered` for `account`.
       * 
       * The dispatch origin for this call must be _Signed_ and registered to
       * be able to make calls on behalf of the recovered account.
       * 
       * Parameters:
       * - `account`: The recovered account you are able to call on-behalf-of.
       **/
      cancelRecovered: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Allow a successful rescuer to claim their recovered account.
       * 
       * The dispatch origin for this call must be _Signed_ and must be a "rescuer"
       * who has successfully completed the account recovery process: collected
       * `threshold` or more vouches, waited `delay_period` blocks since initiation.
       * 
       * Parameters:
       * - `account`: The lost account that you want to claim has been successfully recovered by
       * you.
       **/
      claimRecovery: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * As the controller of a recoverable account, close an active recovery
       * process for your account.
       * 
       * Payment: By calling this function, the recoverable account will receive
       * the recovery deposit `RecoveryDeposit` placed by the rescuer.
       * 
       * The dispatch origin for this call must be _Signed_ and must be a
       * recoverable account with an active recovery process for it.
       * 
       * Parameters:
       * - `rescuer`: The account trying to rescue this recoverable account.
       **/
      closeRecovery: AugmentedSubmittable<(rescuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Create a recovery configuration for your account. This makes your account recoverable.
       * 
       * Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
       * will be reserved for storing the recovery configuration. This deposit is returned
       * in full when the user calls `remove_recovery`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `friends`: A list of friends you trust to vouch for recovery attempts. Should be
       * ordered and contain no duplicate values.
       * - `threshold`: The number of friends that must vouch for a recovery attempt before the
       * account can be recovered. Should be less than or equal to the length of the list of
       * friends.
       * - `delay_period`: The number of blocks after a recovery attempt is initialized that
       * needs to pass before the account can be recovered.
       **/
      createRecovery: AugmentedSubmittable<(friends: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], threshold: u16 | AnyNumber | Uint8Array, delayPeriod: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, u16, u32]>;
      /**
       * Initiate the process for recovering a recoverable account.
       * 
       * Payment: `RecoveryDeposit` balance will be reserved for initiating the
       * recovery process. This deposit will always be repatriated to the account
       * trying to be recovered. See `close_recovery`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `account`: The lost account that you want to recover. This account needs to be
       * recoverable (i.e. have a recovery configuration).
       **/
      initiateRecovery: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Remove the recovery process for your account. Recovered accounts are still accessible.
       * 
       * NOTE: The user must make sure to call `close_recovery` on all active
       * recovery attempts before calling this function else it will fail.
       * 
       * Payment: By calling this function the recoverable account will unreserve
       * their recovery configuration deposit.
       * (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
       * 
       * The dispatch origin for this call must be _Signed_ and must be a
       * recoverable account (i.e. has a recovery configuration).
       **/
      removeRecovery: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Allow ROOT to bypass the recovery process and set an a rescuer account
       * for a lost account directly.
       * 
       * The dispatch origin for this call must be _ROOT_.
       * 
       * Parameters:
       * - `lost`: The "lost account" to be recovered.
       * - `rescuer`: The "rescuer account" which can call as the lost account.
       **/
      setRecovered: AugmentedSubmittable<(lost: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, rescuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
      /**
       * Allow a "friend" of a recoverable account to vouch for an active recovery
       * process for that account.
       * 
       * The dispatch origin for this call must be _Signed_ and must be a "friend"
       * for the recoverable account.
       * 
       * Parameters:
       * - `lost`: The lost account that you want to recover.
       * - `rescuer`: The account trying to rescue the lost account that you want to vouch for.
       * 
       * The combination of these two parameters must point to an active recovery
       * process.
       **/
      vouchRecovery: AugmentedSubmittable<(lost: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, rescuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    referenda: {
      /**
       * Cancel an ongoing referendum.
       * 
       * - `origin`: must be the `CancelOrigin`.
       * - `index`: The index of the referendum to be cancelled.
       * 
       * Emits `Cancelled`.
       **/
      cancel: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Cancel an ongoing referendum and slash the deposits.
       * 
       * - `origin`: must be the `KillOrigin`.
       * - `index`: The index of the referendum to be cancelled.
       * 
       * Emits `Killed` and `DepositSlashed`.
       **/
      kill: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Advance a referendum onto its next logical state. Only used internally.
       * 
       * - `origin`: must be `Root`.
       * - `index`: the referendum to be advanced.
       **/
      nudgeReferendum: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Advance a track onto its next logical state. Only used internally.
       * 
       * - `origin`: must be `Root`.
       * - `track`: the track to be advanced.
       * 
       * Action item for when there is now one fewer referendum in the deciding phase and the
       * `DecidingCount` is not yet updated. This means that we should either:
       * - begin deciding another referendum (and leave `DecidingCount` alone); or
       * - decrement `DecidingCount`.
       **/
      oneFewerDeciding: AugmentedSubmittable<(track: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * Post the Decision Deposit for a referendum.
       * 
       * - `origin`: must be `Signed` and the account must have funds available for the
       * referendum's track's Decision Deposit.
       * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
       * posted.
       * 
       * Emits `DecisionDepositPlaced`.
       **/
      placeDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Refund the Decision Deposit for a closed referendum back to the depositor.
       * 
       * - `origin`: must be `Signed` or `Root`.
       * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
       * refunded.
       * 
       * Emits `DecisionDepositRefunded`.
       **/
      refundDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Refund the Submission Deposit for a closed referendum back to the depositor.
       * 
       * - `origin`: must be `Signed` or `Root`.
       * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
       * refunded.
       * 
       * Emits `SubmissionDepositRefunded`.
       **/
      refundSubmissionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set or clear metadata of a referendum.
       * 
       * Parameters:
       * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
       * metadata of a finished referendum.
       * - `index`:  The index of a referendum to set or clear metadata for.
       * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
       **/
      setMetadata: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [u32, Option<H256>]>;
      /**
       * Propose a referendum on a privileged action.
       * 
       * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
       * available.
       * - `proposal_origin`: The origin from which the proposal should be executed.
       * - `proposal`: The proposal.
       * - `enactment_moment`: The moment that the proposal should be enacted.
       * 
       * Emits `Submitted`.
       **/
      submit: AugmentedSubmittable<(proposalOrigin: KusamaRuntimeOriginCaller | { system: any } | { Void: any } | { Origins: any } | { ParachainsOrigin: any } | { XcmPallet: any } | string | Uint8Array, proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, enactmentMoment: FrameSupportScheduleDispatchTime | { At: any } | { After: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [KusamaRuntimeOriginCaller, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    registrar: {
      /**
       * Add a manager lock from a para. This will prevent the manager of a
       * para to deregister or swap a para.
       * 
       * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
       **/
      addLock: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Deregister a Para Id, freeing all data and returning any deposit.
       * 
       * The caller must be Root, the `para` owner, or the `para` itself. The para must be a parathread.
       **/
      deregister: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Force the registration of a Para Id on the relay chain.
       * 
       * This function must be called by a Root origin.
       * 
       * The deposit taken can be specified for this registration. Any `ParaId`
       * can be registered, including sub-1000 IDs which are System Parachains.
       **/
      forceRegister: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, deposit: u128 | AnyNumber | Uint8Array, id: u32 | AnyNumber | Uint8Array, genesisHead: Bytes | string | Uint8Array, validationCode: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128, u32, Bytes, Bytes]>;
      /**
       * Register head data and validation code for a reserved Para Id.
       * 
       * ## Arguments
       * - `origin`: Must be called by a `Signed` origin.
       * - `id`: The para ID. Must be owned/managed by the `origin` signing account.
       * - `genesis_head`: The genesis head data of the parachain/thread.
       * - `validation_code`: The initial validation code of the parachain/thread.
       * 
       * ## Deposits/Fees
       * The origin signed account must reserve a corresponding deposit for the registration. Anything already
       * reserved previously for this para ID is accounted for.
       * 
       * ## Events
       * The `Registered` event is emitted in case of success.
       **/
      register: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, genesisHead: Bytes | string | Uint8Array, validationCode: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes, Bytes]>;
      /**
       * Remove a manager lock from a para. This will allow the manager of a
       * previously locked para to deregister or swap a para without using governance.
       * 
       * Can only be called by the Root origin or the parachain.
       **/
      removeLock: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Reserve a Para Id on the relay chain.
       * 
       * This function will reserve a new Para Id to be owned/managed by the origin account.
       * The origin account is able to register head data and validation code using `register` to create
       * a parathread. Using the Slots pallet, a parathread can then be upgraded to get a parachain slot.
       * 
       * ## Arguments
       * - `origin`: Must be called by a `Signed` origin. Becomes the manager/owner of the new para ID.
       * 
       * ## Deposits/Fees
       * The origin must reserve a deposit of `ParaDeposit` for the registration.
       * 
       * ## Events
       * The `Reserved` event is emitted in case of success, which provides the ID reserved for use.
       **/
      reserve: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Schedule a parachain upgrade.
       * 
       * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
       **/
      scheduleCodeUpgrade: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, newCode: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * Set the parachain's current head.
       * 
       * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
       **/
      setCurrentHead: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, newHead: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * Swap a parachain with another parachain or parathread.
       * 
       * The origin must be Root, the `para` owner, or the `para` itself.
       * 
       * The swap will happen only if there is already an opposite swap pending. If there is not,
       * the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
       * 
       * The `ParaId`s remain mapped to the same head data and code so external code can rely on
       * `ParaId` to be a long-term identifier of a notional "parachain". However, their
       * scheduling info (i.e. whether they're a parathread or parachain), auction information
       * and the auction deposit are switched.
       **/
      swap: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, other: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    scheduler: {
      /**
       * Cancel an anonymously scheduled task.
       **/
      cancel: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Cancel a named scheduled task.
       **/
      cancelNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * Anonymously schedule a task.
       **/
      schedule: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Anonymously schedule a task after a delay.
       **/
      scheduleAfter: AugmentedSubmittable<(after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Schedule a named task.
       **/
      scheduleNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Schedule a named task after a delay.
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * Removes any session key(s) of the function caller.
       * 
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be Signed and the account must be either be
       * convertible to a validator ID using the chain's typical addressing system (this usually
       * means being a controller account) or directly convertible into a validator ID (which
       * usually means being a stash account).
       * 
       * ## Complexity
       * - `O(1)` in number of key types. Actual cost depends on the number of length of
       * `T::Keys::key_ids()` which is fixed.
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Sets the session key(s) of the function caller to `keys`.
       * Allows an account to set its session key prior to becoming a validator.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * ## Complexity
       * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
       * fixed.
       **/
      setKeys: AugmentedSubmittable<(keys: KusamaRuntimeSessionKeys | { grandpa?: any; babe?: any; imOnline?: any; paraValidator?: any; paraAssignment?: any; authorityDiscovery?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [KusamaRuntimeSessionKeys, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    slots: {
      /**
       * Clear all leases for a Para Id, refunding any deposits back to the original owners.
       * 
       * The dispatch origin for this call must match `T::ForceOrigin`.
       **/
      clearAllLeases: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Just a connect into the `lease_out` call, in case Root wants to force some lease to happen
       * independently of any other on-chain mechanism to use it.
       * 
       * The dispatch origin for this call must match `T::ForceOrigin`.
       **/
      forceLease: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, leaser: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, periodBegin: u32 | AnyNumber | Uint8Array, periodCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, AccountId32, u128, u32, u32]>;
      /**
       * Try to onboard a parachain that has a lease for the current lease period.
       * 
       * This function can be useful if there was some state issue with a para that should
       * have onboarded, but was unable to. As long as they have a lease period, we can
       * let them onboard from here.
       * 
       * Origin must be signed, but can be called by anyone.
       **/
      triggerOnboard: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    society: {
      /**
       * A user outside of the society can make a bid for entry.
       * 
       * Payment: `CandidateDeposit` will be reserved for making a bid. It is returned
       * when the bid becomes a member, or if the bid calls `unbid`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `value`: A one time payment the bid would like to receive when joining the society.
       * 
       * ## Complexity
       * - O(M + B + C + logM + logB + X)
       * - B (len of bids)
       * - C (len of candidates)
       * - M (len of members)
       * - X (balance reserve)
       **/
      bid: AugmentedSubmittable<(value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * As a member, vote on the defender.
       * 
       * The dispatch origin for this call must be _Signed_ and a member.
       * 
       * Parameters:
       * - `approve`: A boolean which says if the candidate should be
       * approved (`true`) or rejected (`false`).
       * 
       * ## Complexity
       * - O(M + logM)
       * - M (len of members)
       **/
      defenderVote: AugmentedSubmittable<(approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * Found the society.
       * 
       * This is done as a discrete action in order to allow for the
       * pallet to be included into a running chain and can only be done once.
       * 
       * The dispatch origin for this call must be from the _FounderSetOrigin_.
       * 
       * Parameters:
       * - `founder` - The first member and head of the newly founded society.
       * - `max_members` - The initial max number of members for the society.
       * - `rules` - The rules of this society concerning membership.
       * 
       * ## Complexity
       * - O(1)
       **/
      found: AugmentedSubmittable<(founder: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, maxMembers: u32 | AnyNumber | Uint8Array, rules: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, Bytes]>;
      /**
       * Allow suspended judgement origin to make judgement on a suspended candidate.
       * 
       * If the judgement is `Approve`, we add them to society as a member with the appropriate
       * payment for joining society.
       * 
       * If the judgement is `Reject`, we either slash the deposit of the bid, giving it back
       * to the society treasury, or we ban the voucher from vouching again.
       * 
       * If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go
       * through the induction process again.
       * 
       * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
       * 
       * Parameters:
       * - `who` - The suspended candidate to be judged.
       * - `judgement` - `Approve`, `Reject`, or `Rebid`.
       * 
       * ## Complexity
       * - O(M + logM + B + X)
       * - B (len of bids)
       * - M (len of members)
       * - X (balance action)
       **/
      judgeSuspendedCandidate: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, judgement: PalletSocietyJudgement | 'Rebid' | 'Reject' | 'Approve' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletSocietyJudgement]>;
      /**
       * Allow suspension judgement origin to make judgement on a suspended member.
       * 
       * If a suspended member is forgiven, we simply add them back as a member, not affecting
       * any of the existing storage items for that member.
       * 
       * If a suspended member is rejected, remove all associated storage items, including
       * their payouts, and remove any vouched bids they currently have.
       * 
       * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
       * 
       * Parameters:
       * - `who` - The suspended member to be judged.
       * - `forgive` - A boolean representing whether the suspension judgement origin forgives
       * (`true`) or rejects (`false`) a suspended member.
       * 
       * ## Complexity
       * - O(M + logM + B)
       * - B (len of bids)
       * - M (len of members)
       **/
      judgeSuspendedMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forgive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * Transfer the first matured payout for the sender and remove it from the records.
       * 
       * NOTE: This extrinsic needs to be called multiple times to claim multiple matured
       * payouts.
       * 
       * Payment: The member will receive a payment equal to their first matured
       * payout to their free balance.
       * 
       * The dispatch origin for this call must be _Signed_ and a member with
       * payouts remaining.
       * 
       * ## Complexity
       * - O(M + logM + P + X)
       * - M (len of members)
       * - P (number of payouts for a particular member)
       * - X (currency transfer call)
       **/
      payout: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Allows root origin to change the maximum number of members in society.
       * Max membership count must be greater than 1.
       * 
       * The dispatch origin for this call must be from _ROOT_.
       * 
       * Parameters:
       * - `max` - The maximum number of members for the society.
       * 
       * ## Complexity
       * - O(1)
       **/
      setMaxMembers: AugmentedSubmittable<(max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * A bidder can remove their bid for entry into society.
       * By doing so, they will have their candidate deposit returned or
       * they will unvouch their voucher.
       * 
       * Payment: The bid deposit is unreserved if the user made a bid.
       * 
       * The dispatch origin for this call must be _Signed_ and a bidder.
       * 
       * Parameters:
       * - `pos`: Position in the `Bids` vector of the bid who wants to unbid.
       * 
       * ## Complexity
       * - O(B + X)
       * - B (len of bids)
       * - X (balance unreserve)
       **/
      unbid: AugmentedSubmittable<(pos: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Annul the founding of the society.
       * 
       * The dispatch origin for this call must be Signed, and the signing account must be both
       * the `Founder` and the `Head`. This implies that it may only be done when there is one
       * member.
       * 
       * ## Complexity
       * - O(1)
       **/
      unfound: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * As a vouching member, unvouch a bid. This only works while vouched user is
       * only a bidder (and not a candidate).
       * 
       * The dispatch origin for this call must be _Signed_ and a vouching member.
       * 
       * Parameters:
       * - `pos`: Position in the `Bids` vector of the bid who should be unvouched.
       * 
       * ## Complexity
       * - O(B)
       * - B (len of bids)
       **/
      unvouch: AugmentedSubmittable<(pos: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * As a member, vote on a candidate.
       * 
       * The dispatch origin for this call must be _Signed_ and a member.
       * 
       * Parameters:
       * - `candidate`: The candidate that the member would like to bid on.
       * - `approve`: A boolean which says if the candidate should be approved (`true`) or
       * rejected (`false`).
       * 
       * ## Complexity
       * - O(M + logM + C)
       * - C (len of candidates)
       * - M (len of members)
       **/
      vote: AugmentedSubmittable<(candidate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * As a member, vouch for someone to join society by placing a bid on their behalf.
       * 
       * There is no deposit required to vouch for a new bid, but a member can only vouch for
       * one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
       * the suspension judgement origin, the member will be banned from vouching again.
       * 
       * As a vouching member, you can claim a tip if the candidate is accepted. This tip will
       * be paid as a portion of the reward the member will receive for joining the society.
       * 
       * The dispatch origin for this call must be _Signed_ and a member.
       * 
       * Parameters:
       * - `who`: The user who you would like to vouch for.
       * - `value`: The total reward to be paid between you and the candidate if they become
       * a member in the society.
       * - `tip`: Your cut of the total `value` payout when the candidate is inducted into
       * the society. Tips larger than `value` will be saturated upon payout.
       * 
       * ## Complexity
       * - O(M + B + C + logM + logB + X)
       * - B (len of bids)
       * - C (len of candidates)
       * - M (len of members)
       * - X (balance reserve)
       **/
      vouch: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: u128 | AnyNumber | Uint8Array, tip: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    staking: {
      /**
       * Take the origin account as a stash and lock up `value` of its balance. `controller` will
       * be the account that controls it.
       * 
       * `value` must be more than the `minimum_balance` specified by `T::Currency`.
       * 
       * The dispatch origin for this call must be _Signed_ by the stash account.
       * 
       * Emits `Bonded`.
       * ## Complexity
       * - Independent of the arguments. Moderate complexity.
       * - O(1).
       * - Three extra DB entries.
       * 
       * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
       * unless the `origin` falls below _existential deposit_ and gets removed as dust.
       **/
      bond: AugmentedSubmittable<(controller: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, payee: PalletStakingRewardDestination | { Staked: any } | { Stash: any } | { Controller: any } | { Account: any } | { None: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, PalletStakingRewardDestination]>;
      /**
       * Add some extra amount that have appeared in the stash `free_balance` into the balance up
       * for staking.
       * 
       * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
       * 
       * Use this if there are additional funds in your stash account that you wish to bond.
       * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
       * any limitation on the amount that can be added.
       * 
       * Emits `Bonded`.
       * 
       * ## Complexity
       * - Independent of the arguments. Insignificant complexity.
       * - O(1).
       **/
      bondExtra: AugmentedSubmittable<(maxAdditional: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * Cancel enactment of a deferred slash.
       * 
       * Can be called by the `T::AdminOrigin`.
       * 
       * Parameters: era and indices of the slashes for that era to kill.
       **/
      cancelDeferredSlash: AugmentedSubmittable<(era: u32 | AnyNumber | Uint8Array, slashIndices: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<u32>]>;
      /**
       * Declare no desire to either validate or nominate.
       * 
       * Effects will be felt at the beginning of the next era.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * 
       * ## Complexity
       * - Independent of the arguments. Insignificant complexity.
       * - Contains one read.
       * - Writes are limited to the `origin` account key.
       **/
      chill: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Declare a `controller` to stop participating as either a validator or nominator.
       * 
       * Effects will be felt at the beginning of the next era.
       * 
       * The dispatch origin for this call must be _Signed_, but can be called by anyone.
       * 
       * If the caller is the same as the controller being targeted, then no further checks are
       * enforced, and this function behaves just like `chill`.
       * 
       * If the caller is different than the controller being targeted, the following conditions
       * must be met:
       * 
       * * `controller` must belong to a nominator who has become non-decodable,
       * 
       * Or:
       * 
       * * A `ChillThreshold` must be set and checked which defines how close to the max
       * nominators or validators we must reach before users can start chilling one-another.
       * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
       * how close we are to the threshold.
       * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
       * if this is a person that should be chilled because they have not met the threshold
       * bond required.
       * 
       * This can be helpful if bond requirements are updated, and we need to remove old users
       * who do not satisfy these requirements.
       **/
      chillOther: AugmentedSubmittable<(controller: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Force a validator to have at least the minimum commission. This will not affect a
       * validator who already has a commission greater than or equal to the minimum. Any account
       * can call this.
       **/
      forceApplyMinCommission: AugmentedSubmittable<(validatorStash: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Force there to be a new era at the end of the next session. After this, it will be
       * reset to normal (non-forced) behaviour.
       * 
       * The dispatch origin must be Root.
       * 
       * # Warning
       * 
       * The election process starts multiple blocks before the end of the era.
       * If this is called just before a new era is triggered, the election process may not
       * have enough blocks to get a result.
       * 
       * ## Complexity
       * - No arguments.
       * - Weight: O(1)
       **/
      forceNewEra: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Force there to be a new era at the end of sessions indefinitely.
       * 
       * The dispatch origin must be Root.
       * 
       * # Warning
       * 
       * The election process starts multiple blocks before the end of the era.
       * If this is called just before a new era is triggered, the election process may not
       * have enough blocks to get a result.
       **/
      forceNewEraAlways: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Force there to be no new eras indefinitely.
       * 
       * The dispatch origin must be Root.
       * 
       * # Warning
       * 
       * The election process starts multiple blocks before the end of the era.
       * Thus the election process may be ongoing when this is called. In this case the
       * election will continue until the next era is triggered.
       * 
       * ## Complexity
       * - No arguments.
       * - Weight: O(1)
       **/
      forceNoEras: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Force a current staker to become completely unstaked, immediately.
       * 
       * The dispatch origin must be Root.
       **/
      forceUnstake: AugmentedSubmittable<(stash: AccountId32 | string | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * Increments the ideal number of validators upto maximum of
       * `ElectionProviderBase::MaxWinners`.
       * 
       * The dispatch origin must be Root.
       * 
       * ## Complexity
       * Same as [`Self::set_validator_count`].
       **/
      increaseValidatorCount: AugmentedSubmittable<(additional: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Remove the given nominations from the calling validator.
       * 
       * Effects will be felt at the beginning of the next era.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * 
       * - `who`: A list of nominator stash accounts who are nominating this validator which
       * should no longer be nominating this validator.
       * 
       * Note: Making this call only makes sense if you first set the validator preferences to
       * block any further nominations.
       **/
      kick: AugmentedSubmittable<(who: Vec<MultiAddress> | (MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<MultiAddress>]>;
      /**
       * Declare the desire to nominate `targets` for the origin controller.
       * 
       * Effects will be felt at the beginning of the next era.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * 
       * ## Complexity
       * - The transaction's complexity is proportional to the size of `targets` (N)
       * which is capped at CompactAssignments::LIMIT (T::MaxNominations).
       * - Both the reads and writes follow a similar pattern.
       **/
      nominate: AugmentedSubmittable<(targets: Vec<MultiAddress> | (MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<MultiAddress>]>;
      /**
       * Pay out all the stakers behind a single validator for a single era.
       * 
       * - `validator_stash` is the stash account of the validator. Their nominators, up to
       * `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
       * - `era` may be any era between `[current_era - history_depth; current_era]`.
       * 
       * The origin of this call must be _Signed_. Any account can call this function, even if
       * it is not one of the stakers.
       * 
       * ## Complexity
       * - At most O(MaxNominatorRewardedPerValidator).
       **/
      payoutStakers: AugmentedSubmittable<(validatorStash: AccountId32 | string | Uint8Array, era: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * Remove all data structures concerning a staker/stash once it is at a state where it can
       * be considered `dust` in the staking system. The requirements are:
       * 
       * 1. the `total_balance` of the stash is below existential deposit.
       * 2. or, the `ledger.total` of the stash is below existential deposit.
       * 
       * The former can happen in cases like a slash; the latter when a fully unbonded account
       * is still receiving staking rewards in `RewardDestination::Staked`.
       * 
       * It can be called by anyone, as long as `stash` meets the above requirements.
       * 
       * Refunds the transaction fees upon successful execution.
       **/
      reapStash: AugmentedSubmittable<(stash: AccountId32 | string | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * Rebond a portion of the stash scheduled to be unlocked.
       * 
       * The dispatch origin must be signed by the controller.
       * 
       * ## Complexity
       * - Time complexity: O(L), where L is unlocking chunks
       * - Bounded by `MaxUnlockingChunks`.
       **/
      rebond: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * Scale up the ideal number of validators by a factor upto maximum of
       * `ElectionProviderBase::MaxWinners`.
       * 
       * The dispatch origin must be Root.
       * 
       * ## Complexity
       * Same as [`Self::set_validator_count`].
       **/
      scaleValidatorCount: AugmentedSubmittable<(factor: Percent | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Percent]>;
      /**
       * (Re-)set the controller of a stash.
       * 
       * Effects will be felt instantly (as soon as this function is completed successfully).
       * 
       * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
       * 
       * ## Complexity
       * O(1)
       * - Independent of the arguments. Insignificant complexity.
       * - Contains a limited number of reads.
       * - Writes are limited to the `origin` account key.
       **/
      setController: AugmentedSubmittable<(controller: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Set the validators who cannot be slashed (if any).
       * 
       * The dispatch origin must be Root.
       **/
      setInvulnerables: AugmentedSubmittable<(invulnerables: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Sets the minimum amount of commission that each validators must maintain.
       * 
       * This call has lower privilege requirements than `set_staking_config` and can be called
       * by the `T::AdminOrigin`. Root can always call this.
       **/
      setMinCommission: AugmentedSubmittable<(updated: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * (Re-)set the payment target for a controller.
       * 
       * Effects will be felt instantly (as soon as this function is completed successfully).
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * 
       * ## Complexity
       * - O(1)
       * - Independent of the arguments. Insignificant complexity.
       * - Contains a limited number of reads.
       * - Writes are limited to the `origin` account key.
       * ---------
       **/
      setPayee: AugmentedSubmittable<(payee: PalletStakingRewardDestination | { Staked: any } | { Stash: any } | { Controller: any } | { Account: any } | { None: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStakingRewardDestination]>;
      /**
       * Update the various staking configurations .
       * 
       * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
       * * `min_validator_bond`: The minimum active bond needed to be a validator.
       * * `max_nominator_count`: The max number of users who can be a nominator at once. When
       * set to `None`, no limit is enforced.
       * * `max_validator_count`: The max number of users who can be a validator at once. When
       * set to `None`, no limit is enforced.
       * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
       * should be filled in order for the `chill_other` transaction to work.
       * * `min_commission`: The minimum amount of commission that each validators must maintain.
       * This is checked only upon calling `validate`. Existing validators are not affected.
       * 
       * RuntimeOrigin must be Root to call this function.
       * 
       * NOTE: Existing nominators and validators will not be affected by this update.
       * to kick people under the new limits, `chill_other` should be called.
       **/
      setStakingConfigs: AugmentedSubmittable<(minNominatorBond: PalletStakingPalletConfigOpU128 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, minValidatorBond: PalletStakingPalletConfigOpU128 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxNominatorCount: PalletStakingPalletConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxValidatorCount: PalletStakingPalletConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, chillThreshold: PalletStakingPalletConfigOpPercent | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, minCommission: PalletStakingPalletConfigOpPerbill | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStakingPalletConfigOpU128, PalletStakingPalletConfigOpU128, PalletStakingPalletConfigOpU32, PalletStakingPalletConfigOpU32, PalletStakingPalletConfigOpPercent, PalletStakingPalletConfigOpPerbill]>;
      /**
       * Sets the ideal number of validators.
       * 
       * The dispatch origin must be Root.
       * 
       * ## Complexity
       * O(1)
       **/
      setValidatorCount: AugmentedSubmittable<(updated: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
       * period ends. If this leaves an amount actively bonded less than
       * T::Currency::minimum_balance(), then it is increased to the full amount.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * 
       * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
       * the funds out of management ready for transfer.
       * 
       * No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)
       * can co-exists at the same time. If there are no unlocking chunks slots available
       * [`Call::withdraw_unbonded`] is called to remove some of the chunks (if possible).
       * 
       * If a user encounters the `InsufficientBond` error when calling this extrinsic,
       * they should call `chill` first in order to free up their bonded funds.
       * 
       * Emits `Unbonded`.
       * 
       * See also [`Call::withdraw_unbonded`].
       **/
      unbond: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * Declare the desire to validate for the origin controller.
       * 
       * Effects will be felt at the beginning of the next era.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       **/
      validate: AugmentedSubmittable<(prefs: PalletStakingValidatorPrefs | { commission?: any; blocked?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStakingValidatorPrefs]>;
      /**
       * Remove any unlocked chunks from the `unlocking` queue from our management.
       * 
       * This essentially frees up that balance to be used by the stash account to do
       * whatever it wants.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller.
       * 
       * Emits `Withdrawn`.
       * 
       * See also [`Call::unbond`].
       * 
       * ## Complexity
       * O(S) where S is the number of slashing spans to remove
       * NOTE: Weight annotation is the kill scenario, we refund otherwise.
       **/
      withdrawUnbonded: AugmentedSubmittable<(numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * 
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * Kill some items from storage.
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * Make some on-chain remark.
       * 
       * ## Complexity
       * - `O(1)`
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make some on-chain remark and emit event.
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code.
       * 
       * ## Complexity
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * ## Complexity
       * - `O(C)` where `C` length of `code`
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * Set the current time.
       * 
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * 
       * The timestamp should be greater than the previous one by the amount specified by
       * `MinimumPeriod`.
       * 
       * The dispatch origin for this call must be `Inherent`.
       * 
       * ## Complexity
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
       * `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasury: {
      /**
       * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
       * and the original deposit will be returned.
       * 
       * May only be called from `T::ApproveOrigin`.
       * 
       * ## Complexity
       * - O(1).
       **/
      approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Put forward a suggestion for spending. A deposit proportional to the value
       * is reserved and slashed if the proposal is rejected. It is returned once the
       * proposal is awarded.
       * 
       * ## Complexity
       * - O(1)
       **/
      proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * Reject a proposed spend. The original deposit will be slashed.
       * 
       * May only be called from `T::RejectOrigin`.
       * 
       * ## Complexity
       * - O(1)
       **/
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Force a previously approved proposal to be removed from the approval queue.
       * The original deposit will no longer be returned.
       * 
       * May only be called from `T::RejectOrigin`.
       * - `proposal_id`: The index of a proposal
       * 
       * ## Complexity
       * - O(A) where `A` is the number of approvals
       * 
       * Errors:
       * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
       * i.e., the proposal has not been approved. This could also mean the proposal does not
       * exist altogether, thus there is no way it would have been approved in the first place.
       **/
      removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Propose and approve a spend of treasury funds.
       * 
       * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
       * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
       * - `beneficiary`: The destination account for the transfer.
       * 
       * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
       * beneficiary.
       **/
      spend: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    ump: {
      /**
       * Service a single overweight upward message.
       * 
       * - `origin`: Must pass `ExecuteOverweightOrigin`.
       * - `index`: The index of the overweight message to service.
       * - `weight_limit`: The amount of weight that message execution may take.
       * 
       * Errors:
       * - `UnknownMessageIndex`: Message of `index` is unknown.
       * - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
       * 
       * Events:
       * - `OverweightServiced`: On success.
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    utility: {
      /**
       * Send a call through an indexed pseudonym of the sender.
       * 
       * Filter from origin are passed along. The call will be dispatched with an origin which
       * use the same filter as the origin of this call.
       * 
       * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
       * because you expect `proxy` to have been used prior in the call stack and you do not want
       * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
       * in the Multisig pallet instead.
       * 
       * NOTE: Prior to version *12, this was called `as_limited_sub`.
       * 
       * The dispatch origin for this call must be _Signed_.
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * Send a batch of dispatch calls.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatched without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       * 
       * This will return `Ok` in all circumstances. To determine the success of the batch, an
       * event is deposited. If a call failed and the batch was interrupted, then the
       * `BatchInterrupted` event is deposited, along with the number of successful calls made
       * and the error of the failed call. If all were successful, then the `BatchCompleted`
       * event is deposited.
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Send a batch of dispatch calls and atomically execute them.
       * The whole transaction will rollback and fail if any of the calls failed.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatched without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Dispatches a function call with a provided origin.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * ## Complexity
       * - O(1).
       **/
      dispatchAs: AugmentedSubmittable<(asOrigin: KusamaRuntimeOriginCaller | { system: any } | { Void: any } | { Origins: any } | { ParachainsOrigin: any } | { XcmPallet: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [KusamaRuntimeOriginCaller, Call]>;
      /**
       * Send a batch of dispatch calls.
       * Unlike `batch`, it allows errors and won't interrupt.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatch without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       **/
      forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Dispatch a function call with a specified weight.
       * 
       * This function does not check the weight of the call, and instead allows the
       * Root origin to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Root_.
       **/
      withWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vesting: {
      /**
       * Force a vested transfer.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `source`: The account whose funds should be transferred.
       * - `target`: The account that should be transferred the vested funds.
       * - `schedule`: The vesting schedule attached to the transfer.
       * 
       * Emits `VestingCreated`.
       * 
       * NOTE: This will unlock all schedules through the current block.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      forceVestedTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, PalletVestingVestingInfo]>;
      /**
       * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
       * the highest possible start and end blocks. If both schedules have already started the
       * current block will be used as the schedule start; with the caveat that if one schedule
       * is finished by the current block, the other will be treated as the new merged schedule,
       * unmodified.
       * 
       * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
       * NOTE: This will unlock all schedules through the current block prior to merging.
       * NOTE: If both schedules have ended by the current block, no new schedule will be created
       * and both will be removed.
       * 
       * Merged schedule attributes:
       * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
       * current_block)`.
       * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
       * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `schedule1_index`: index of the first schedule to merge.
       * - `schedule2_index`: index of the second schedule to merge.
       **/
      mergeSchedules: AugmentedSubmittable<(schedule1Index: u32 | AnyNumber | Uint8Array, schedule2Index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Unlock any vested funds of the sender account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have funds still
       * locked under this pallet.
       * 
       * Emits either `VestingCompleted` or `VestingUpdated`.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      vest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Create a vested transfer.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `target`: The account receiving the vested funds.
       * - `schedule`: The vesting schedule attached to the transfer.
       * 
       * Emits `VestingCreated`.
       * 
       * NOTE: This will unlock all schedules through the current block.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      vestedTransfer: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletVestingVestingInfo]>;
      /**
       * Unlock any vested funds of a `target` account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `target`: The account whose vested funds should be unlocked. Must have funds still
       * locked under this pallet.
       * 
       * Emits either `VestingCompleted` or `VestingUpdated`.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      vestOther: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    voterList: {
      /**
       * Move the caller's Id directly in front of `lighter`.
       * 
       * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
       * the account going in front of `lighter`.
       * 
       * Only works if
       * - both nodes are within the same bag,
       * - and `origin` has a greater `Score` than `lighter`.
       **/
      putInFrontOf: AugmentedSubmittable<(lighter: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
       * changed its score that it should properly fall into a different bag than its current
       * one.
       * 
       * Anyone can call this function about any potentially dislocated account.
       * 
       * Will always update the stored score of `dislocated` to the correct score, based on
       * `ScoreProvider`.
       * 
       * If `dislocated` does not exists, it returns an error.
       **/
      rebag: AugmentedSubmittable<(dislocated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    whitelist: {
      dispatchWhitelistedCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array, callEncodedLen: u32 | AnyNumber | Uint8Array, callWeightWitness: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32, SpWeightsWeightV2Weight]>;
      dispatchWhitelistedCallWithPreimage: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      removeWhitelistedCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      whitelistCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xcmPallet: {
      /**
       * Execute an XCM message from a local, signed, origin.
       * 
       * An event is deposited indicating whether `msg` could be executed completely or only
       * partially.
       * 
       * No more than `max_weight` will be used in its attempted execution. If this is less than the
       * maximum amount of weight that the message could take to be executed, then no execution
       * attempt will be made.
       * 
       * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
       * to completion; only that *some* of it was executed.
       **/
      execute: AugmentedSubmittable<(message: XcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedXcm, SpWeightsWeightV2Weight]>;
      /**
       * Set a safe XCM version (the version that XCM should be encoded with if the most recent
       * version a destination can accept is unknown).
       * 
       * - `origin`: Must be Root.
       * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
       **/
      forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * Ask a location to notify us regarding their XCM version and any changes to it.
       * 
       * - `origin`: Must be Root.
       * - `location`: The location to which we should subscribe for XCM version notifications.
       **/
      forceSubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation]>;
      /**
       * Require that a particular destination should no longer notify us regarding any XCM
       * version changes.
       * 
       * - `origin`: Must be Root.
       * - `location`: The location to which we are currently subscribed for XCM version
       * notifications which we no longer desire.
       **/
      forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation]>;
      /**
       * Extoll that a particular destination can be communicated with through a particular
       * version of XCM.
       * 
       * - `origin`: Must be Root.
       * - `location`: The destination that is being described.
       * - `xcm_version`: The latest version of XCM that `location` supports.
       **/
      forceXcmVersion: AugmentedSubmittable<(location: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, xcmVersion: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmV3MultiLocation, u32]>;
      /**
       * Transfer some assets from the local chain to the sovereign account of a destination
       * chain and forward a notification XCM.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
       * is needed than `weight_limit`, then the operation will fail and the assets send may be
       * at risk.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
       * `dest` side.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      limitedReserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV3WeightLimit]>;
      /**
       * Teleport some assets from the local chain to some destination chain.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
       * is needed than `weight_limit`, then the operation will fail and the assets send may be
       * at risk.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
       * `dest` side. May not be empty.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      limitedTeleportAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV3WeightLimit]>;
      /**
       * Transfer some assets from the local chain to the sovereign account of a destination
       * chain and forward a notification XCM.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
       * with all fees taken as needed from the asset.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
       * `dest` side.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]>;
      send: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, message: XcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedXcm]>;
      /**
       * Teleport some assets from the local chain to some destination chain.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
       * with all fees taken as needed from the asset.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
       * `dest` side. May not be empty.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       **/
      teleportAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module
