/* eslint-disable */

import 'https://deno.land/x/polkadot/api-base/types/calls.ts';

import type { ApiTypes, AugmentedCall, DecoratedCallBase } from 'https://deno.land/x/polkadot/api-base/types/index.ts';
import type { Bytes, Null, Option, Result, U64, Vec, bool, u128, u32 } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { AnyNumber, IMethod, ITuple } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { TAssetBalance } from 'https://deno.land/x/polkadot/types/interfaces/assets/index.ts';
import type { BabeEquivocationProof, BabeGenesisConfiguration, Epoch, OpaqueKeyOwnershipProof } from 'https://deno.land/x/polkadot/types/interfaces/babe/index.ts';
import type { ValidatorSet, ValidatorSetId } from 'https://deno.land/x/polkadot/types/interfaces/beefy/index.ts';
import type { CheckInherentsResult, InherentData } from 'https://deno.land/x/polkadot/types/interfaces/blockbuilder/index.ts';
import type { BlockHash } from 'https://deno.land/x/polkadot/types/interfaces/chain/index.ts';
import type { AuthorityId } from 'https://deno.land/x/polkadot/types/interfaces/consensus/index.ts';
import type { CodeSource, CodeUploadResult, ContractExecResult, ContractInstantiateResult } from 'https://deno.land/x/polkadot/types/interfaces/contracts/index.ts';
import type { Extrinsic } from 'https://deno.land/x/polkadot/types/interfaces/extrinsics/index.ts';
import type { GenesisBuildErr } from 'https://deno.land/x/polkadot/types/interfaces/genesisBuilder/index.ts';
import type { AuthorityList, GrandpaEquivocationProof, SetId } from 'https://deno.land/x/polkadot/types/interfaces/grandpa/index.ts';
import type { OpaqueMetadata } from 'https://deno.land/x/polkadot/types/interfaces/metadata/index.ts';
import type { Mixnode, MixnodesErr, SessionStatus } from 'https://deno.land/x/polkadot/types/interfaces/mixnet/index.ts';
import type { MmrBatchProof, MmrEncodableOpaqueLeaf, MmrError } from 'https://deno.land/x/polkadot/types/interfaces/mmr/index.ts';
import type { NftCollectionId, NftItemId } from 'https://deno.land/x/polkadot/types/interfaces/nfts/index.ts';
import type { NpPoolId } from 'https://deno.land/x/polkadot/types/interfaces/nompools/index.ts';
import type { FeeDetails, RuntimeDispatchInfo } from 'https://deno.land/x/polkadot/types/interfaces/payment/index.ts';
import type { AccountId, Balance, Block, BlockNumber, Call, ExtrinsicInclusionMode, Hash, Header, Index, KeyTypeId, Slot, Weight, WeightV2 } from 'https://deno.land/x/polkadot/types/interfaces/runtime/index.ts';
import type { RuntimeVersion } from 'https://deno.land/x/polkadot/types/interfaces/state/index.ts';
import type { StatementStoreInvalidStatement, StatementStoreStatementSource, StatementStoreValidStatement } from 'https://deno.land/x/polkadot/types/interfaces/statement/index.ts';
import type { ApplyExtrinsicResult } from 'https://deno.land/x/polkadot/types/interfaces/system/index.ts';
import type { TransactionSource, TransactionValidity } from 'https://deno.land/x/polkadot/types/interfaces/txqueue/index.ts';
import type { SpConsensusBeefyDoubleVotingProof, SpStatementStoreStatement, StagingXcmV3MultiLocation } from 'https://deno.land/x/polkadot/types/lookup.ts';
import type { IExtrinsic, Observable } from 'https://deno.land/x/polkadot/types/types/index.ts';

export type __AugmentedCall<ApiType extends ApiTypes> = AugmentedCall<ApiType>;
export type __DecoratedCallBase<ApiType extends ApiTypes> = DecoratedCallBase<ApiType>;

declare module 'https://deno.land/x/polkadot/api-base/types/calls.ts' {
  interface AugmentedCalls<ApiType extends ApiTypes> {
    /** 0xbc9d89904f5b923f/1 */
    accountNonceApi: {
      /**
       * The API to query account nonce (aka transaction index)
       **/
      accountNonce: AugmentedCall<ApiType, (accountId: AccountId | string | Uint8Array) => Observable<Index>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x8a8047a53a8277ec/1 */
    assetConversionApi: {
      /**
       * Get pool reserves
       **/
      getReserves: AugmentedCall<ApiType, (asset1: StagingXcmV3MultiLocation, asset2: StagingXcmV3MultiLocation) => Observable<Option<ITuple<[Balance, Balance]>>>>;
      /**
       * Quote price: exact tokens for tokens
       **/
      quotePriceExactTokensForTokens: AugmentedCall<ApiType, (asset1: StagingXcmV3MultiLocation, asset2: StagingXcmV3MultiLocation, amount: u128 | AnyNumber | Uint8Array, include_fee: bool | boolean | Uint8Array) => Observable<Option<Balance>>>;
      /**
       * Quote price: tokens for exact tokens
       **/
      quotePriceTokensForExactTokens: AugmentedCall<ApiType, (asset1: StagingXcmV3MultiLocation, asset2: StagingXcmV3MultiLocation, amount: u128 | AnyNumber | Uint8Array, include_fee: bool | boolean | Uint8Array) => Observable<Option<Balance>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x8453b50b22293977/1 */
    assetsApi: {
      /**
       * Return the current set of authorities.
       **/
      accountBalances: AugmentedCall<ApiType, (account: AccountId | string | Uint8Array) => Observable<Vec<ITuple<[u32, TAssetBalance]>>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x687ad44ad37f03c2/1 */
    authorityDiscoveryApi: {
      /**
       * Retrieve authority identifiers of the current and next authority set.
       **/
      authorities: AugmentedCall<ApiType, () => Observable<Vec<AuthorityId>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xcbca25e39f142387/2 */
    babeApi: {
      /**
       * Return the genesis configuration for BABE. The configuration is only read on genesis.
       **/
      configuration: AugmentedCall<ApiType, () => Observable<BabeGenesisConfiguration>>;
      /**
       * Returns information regarding the current epoch.
       **/
      currentEpoch: AugmentedCall<ApiType, () => Observable<Epoch>>;
      /**
       * Returns the slot that started the current epoch.
       **/
      currentEpochStart: AugmentedCall<ApiType, () => Observable<Slot>>;
      /**
       * Generates a proof of key ownership for the given authority in the current epoch.
       **/
      generateKeyOwnershipProof: AugmentedCall<ApiType, (slot: Slot | AnyNumber | Uint8Array, authorityId: AuthorityId | string | Uint8Array) => Observable<Option<OpaqueKeyOwnershipProof>>>;
      /**
       * Returns information regarding the next epoch (which was already previously announced).
       **/
      nextEpoch: AugmentedCall<ApiType, () => Observable<Epoch>>;
      /**
       * Submits an unsigned extrinsic to report an equivocation.
       **/
      submitReportEquivocationUnsignedExtrinsic: AugmentedCall<ApiType, (equivocationProof: BabeEquivocationProof | { offender?: any; slotNumber?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: OpaqueKeyOwnershipProof | string | Uint8Array) => Observable<Option<Null>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x49eaaf1b548a0cb0/4 */
    beefyApi: {
      /**
       * Return the block number where BEEFY consensus is enabled/started
       **/
      beefyGenesis: AugmentedCall<ApiType, () => Observable<Option<BlockNumber>>>;
      /**
       * Generates a proof of key ownership for the given authority in the given set.
       **/
      generateKeyOwnershipProof: AugmentedCall<ApiType, (setId: ValidatorSetId | AnyNumber | Uint8Array, authorityId: AuthorityId | string | Uint8Array) => Observable<Option<OpaqueKeyOwnershipProof>>>;
      /**
       * Submits an unsigned extrinsic to report a double voting equivocation.
       **/
      submitReportDoubleVotingUnsignedExtrinsic: AugmentedCall<ApiType, (equivocationProof: SpConsensusBeefyDoubleVotingProof | { first?: any; second?: any } | string | Uint8Array, keyOwnerProof: OpaqueKeyOwnershipProof | string | Uint8Array) => Observable<Option<Null>>>;
      /**
       * Return the current active BEEFY validator set
       **/
      validatorSet: AugmentedCall<ApiType, () => Observable<Option<ValidatorSet>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x40fe3ad401f8959a/6 */
    blockBuilder: {
      /**
       * Apply the given extrinsic.
       **/
      applyExtrinsic: AugmentedCall<ApiType, (extrinsic: Extrinsic | IExtrinsic | string | Uint8Array) => Observable<ApplyExtrinsicResult>>;
      /**
       * Check that the inherents are valid.
       **/
      checkInherents: AugmentedCall<ApiType, (block: Block | { header?: any; extrinsics?: any } | string | Uint8Array, data: InherentData | { data?: any } | string | Uint8Array) => Observable<CheckInherentsResult>>;
      /**
       * Finish the current block.
       **/
      finalizeBlock: AugmentedCall<ApiType, () => Observable<Header>>;
      /**
       * Generate inherent extrinsics.
       **/
      inherentExtrinsics: AugmentedCall<ApiType, (inherent: InherentData | { data?: any } | string | Uint8Array) => Observable<Vec<Extrinsic>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x68b66ba122c93fa7/2 */
    contractsApi: {
      /**
       * Perform a call from a specified account to a given contract.
       **/
      call: AugmentedCall<ApiType, (origin: AccountId | string | Uint8Array, dest: AccountId | string | Uint8Array, value: Balance | AnyNumber | Uint8Array, gasLimit: Option<WeightV2> | null | Uint8Array | WeightV2 | { refTime?: any; proofSize?: any } | string, storageDepositLimit: Option<Balance> | null | Uint8Array | Balance | AnyNumber, inputData: Bytes | string | Uint8Array) => Observable<ContractExecResult>>;
      /**
       * Query a given storage key in a given contract.
       **/
      getStorage: AugmentedCall<ApiType, (address: AccountId | string | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * Instantiate a new contract.
       **/
      instantiate: AugmentedCall<ApiType, (origin: AccountId | string | Uint8Array, value: Balance | AnyNumber | Uint8Array, gasLimit: Option<WeightV2> | null | Uint8Array | WeightV2 | { refTime?: any; proofSize?: any } | string, storageDepositLimit: Option<Balance> | null | Uint8Array | Balance | AnyNumber, code: CodeSource | { Upload: any } | { Existing: any } | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Bytes | string | Uint8Array) => Observable<ContractInstantiateResult>>;
      /**
       * Upload new code without instantiating a contract from it.
       **/
      uploadCode: AugmentedCall<ApiType, (origin: AccountId | string | Uint8Array, code: Bytes | string | Uint8Array, storageDepositLimit: Option<Balance> | null | Uint8Array | Balance | AnyNumber) => Observable<CodeUploadResult>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xdf6acb689907609b/5 */
    core: {
      /**
       * Execute the given block.
       **/
      executeBlock: AugmentedCall<ApiType, (block: Block | { header?: any; extrinsics?: any } | string | Uint8Array) => Observable<Null>>;
      /**
       * Initialize a block with the given header.
       **/
      initializeBlock: AugmentedCall<ApiType, (header: Header | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array) => Observable<ExtrinsicInclusionMode>>;
      /**
       * Returns the version of the runtime.
       **/
      version: AugmentedCall<ApiType, () => Observable<RuntimeVersion>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xfbc577b9d747efd6/1 */
    genesisBuilder: {
      /**
       * Build `RuntimeGenesisConfig` from a JSON blob not using any defaults and store it in the storage.
       **/
      buildConfig: AugmentedCall<ApiType, (json: Bytes | string | Uint8Array) => Observable<Result<ITuple<[]>, GenesisBuildErr>>>;
      /**
       * Creates the default `RuntimeGenesisConfig` and returns it as a JSON blob.
       **/
      createDefaultConfig: AugmentedCall<ApiType, () => Observable<Bytes>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xed99c5acb25eedf5/3 */
    grandpaApi: {
      /**
       * Get current GRANDPA authority set id.
       **/
      currentSetId: AugmentedCall<ApiType, () => Observable<SetId>>;
      /**
       * Generates a proof of key ownership for the given authority in the given set.
       **/
      generateKeyOwnershipProof: AugmentedCall<ApiType, (setId: SetId | AnyNumber | Uint8Array, authorityId: AuthorityId | string | Uint8Array) => Observable<Option<OpaqueKeyOwnershipProof>>>;
      /**
       * Get the current GRANDPA authorities and weights. This should not change except for when changes are scheduled and the corresponding delay has passed.
       **/
      grandpaAuthorities: AugmentedCall<ApiType, () => Observable<AuthorityList>>;
      /**
       * Submits an unsigned extrinsic to report an equivocation.
       **/
      submitReportEquivocationUnsignedExtrinsic: AugmentedCall<ApiType, (equivocationProof: GrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: OpaqueKeyOwnershipProof | string | Uint8Array) => Observable<Option<Null>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x37e397fc7c91f5e4/2 */
    metadata: {
      /**
       * Returns the metadata of a runtime
       **/
      metadata: AugmentedCall<ApiType, () => Observable<OpaqueMetadata>>;
      /**
       * Returns the metadata at a given version.
       **/
      metadataAtVersion: AugmentedCall<ApiType, (version: u32 | AnyNumber | Uint8Array) => Observable<Option<OpaqueMetadata>>>;
      /**
       * Returns the supported metadata versions.
       **/
      metadataVersions: AugmentedCall<ApiType, () => Observable<Vec<u32>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x6fd7c327202e4a8d/1 */
    mixnetApi: {
      /**
       * Get the index and phase of the current session.
       **/
      currentMixnodes: AugmentedCall<ApiType, () => Observable<Result<Mixnode, MixnodesErr>>>;
      /**
       * Try to register a mixnode for the next session.
       **/
      maybeRegister: AugmentedCall<ApiType, (session_index: u32 | AnyNumber | Uint8Array, mixnode: Mixnode | { externalAddresses?: any; kxPublic?: any; peerId?: any } | string | Uint8Array) => Observable<bool>>;
      /**
       * Get the index and phase of the current session.
       **/
      prevMixnodes: AugmentedCall<ApiType, () => Observable<Result<Mixnode, MixnodesErr>>>;
      /**
       * Get the index and phase of the current session.
       **/
      sessionStatus: AugmentedCall<ApiType, () => Observable<SessionStatus>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x91d5df18b0d2cf58/2 */
    mmrApi: {
      /**
       * Generate MMR proof for the given block numbers.
       **/
      generateProof: AugmentedCall<ApiType, (blockNumbers: Vec<BlockNumber> | (BlockNumber | AnyNumber | Uint8Array)[], bestKnownBlockNumber: Option<BlockNumber> | null | Uint8Array | BlockNumber | AnyNumber) => Observable<Result<ITuple<[Vec<MmrEncodableOpaqueLeaf>, MmrBatchProof]>, MmrError>>>;
      /**
       * Return the number of MMR blocks in the chain.
       **/
      mmrLeafCount: AugmentedCall<ApiType, () => Observable<Result<U64, MmrError>>>;
      /**
       * Return the on-chain MMR root hash.
       **/
      mmrRoot: AugmentedCall<ApiType, () => Observable<Result<Hash, MmrError>>>;
      /**
       * Verify MMR proof against on-chain MMR.
       **/
      verifyProof: AugmentedCall<ApiType, (leaves: Vec<MmrEncodableOpaqueLeaf> | (MmrEncodableOpaqueLeaf | string | Uint8Array)[], proof: MmrBatchProof | { leafIndices?: any; leafCount?: any; items?: any } | string | Uint8Array) => Observable<Result<ITuple<[]>, MmrError>>>;
      /**
       * Verify MMR proof against given root hash.
       **/
      verifyProofStateless: AugmentedCall<ApiType, (root: Hash | string | Uint8Array, leaves: Vec<MmrEncodableOpaqueLeaf> | (MmrEncodableOpaqueLeaf | string | Uint8Array)[], proof: MmrBatchProof | { leafIndices?: any; leafCount?: any; items?: any } | string | Uint8Array) => Observable<Result<ITuple<[]>, MmrError>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x899a250cbe84f250/1 */
    nftsApi: {
      /**
       * An attribute
       **/
      attribute: AugmentedCall<ApiType, (collection: NftCollectionId | AnyNumber | Uint8Array, item: NftItemId | AnyNumber | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * A collection attribute
       **/
      collectionAttribute: AugmentedCall<ApiType, (collection: NftCollectionId | AnyNumber | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * A collection owner
       **/
      collectionOwner: AugmentedCall<ApiType, (collection: NftCollectionId | AnyNumber | Uint8Array) => Observable<Option<AccountId>>>;
      /**
       * A custom attribute
       **/
      customAttribute: AugmentedCall<ApiType, (account: AccountId | string | Uint8Array, collection: NftCollectionId | AnyNumber | Uint8Array, item: NftItemId | AnyNumber | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * Collection owner
       **/
      owner: AugmentedCall<ApiType, (collection: NftCollectionId | AnyNumber | Uint8Array, item: NftItemId | AnyNumber | Uint8Array) => Observable<Option<AccountId>>>;
      /**
       * System attribute
       **/
      systemAttribute: AugmentedCall<ApiType, (collection: NftCollectionId | AnyNumber | Uint8Array, item: NftItemId | AnyNumber | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x17a6bc0d0062aeb3/1 */
    nominationPoolsApi: {
      /**
       * Returns the equivalent points of `new_funds` for a given pool.
       **/
      balanceToPoints: AugmentedCall<ApiType, (poolId: NpPoolId | AnyNumber | Uint8Array, newFunds: Balance | AnyNumber | Uint8Array) => Observable<Balance>>;
      /**
       * Returns the pending rewards for the given member.
       **/
      pendingRewards: AugmentedCall<ApiType, (member: AccountId | string | Uint8Array) => Observable<Balance>>;
      /**
       * Returns the equivalent balance of `points` for a given pool.
       **/
      pointsToBalance: AugmentedCall<ApiType, (poolId: NpPoolId | AnyNumber | Uint8Array, points: Balance | AnyNumber | Uint8Array) => Observable<Balance>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xf78b278be53f454c/2 */
    offchainWorkerApi: {
      /**
       * Starts the off-chain task for given block header.
       **/
      offchainWorker: AugmentedCall<ApiType, (header: Header | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array) => Observable<Null>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xab3c0572291feb8b/1 */
    sessionKeys: {
      /**
       * Decode the given public session keys.
       **/
      decodeSessionKeys: AugmentedCall<ApiType, (encoded: Bytes | string | Uint8Array) => Observable<Option<Vec<ITuple<[Bytes, KeyTypeId]>>>>>;
      /**
       * Generate a set of session keys with optionally using the given seed.
       **/
      generateSessionKeys: AugmentedCall<ApiType, (seed: Option<Bytes> | null | Uint8Array | Bytes | string) => Observable<Bytes>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x18ef58a3b67ba770/1 */
    stakingApi: {
      /**
       * Returns the nominations quota for a nominator with a given balance.
       **/
      nominationsQuota: AugmentedCall<ApiType, (balance: Balance | AnyNumber | Uint8Array) => Observable<u32>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xd2bc9897eed08f15/3 */
    taggedTransactionQueue: {
      /**
       * Validate the transaction.
       **/
      validateTransaction: AugmentedCall<ApiType, (source: TransactionSource | 'InBlock' | 'Local' | 'External' | number | Uint8Array, tx: Extrinsic | IExtrinsic | string | Uint8Array, blockHash: BlockHash | string | Uint8Array) => Observable<TransactionValidity>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x37c8bb1350a9a2a8/4 */
    transactionPaymentApi: {
      /**
       * The transaction fee details
       **/
      queryFeeDetails: AugmentedCall<ApiType, (uxt: Extrinsic | IExtrinsic | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<FeeDetails>>;
      /**
       * The transaction info
       **/
      queryInfo: AugmentedCall<ApiType, (uxt: Extrinsic | IExtrinsic | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<RuntimeDispatchInfo>>;
      /**
       * Query the output of the current LengthToFee given some input
       **/
      queryLengthToFee: AugmentedCall<ApiType, (length: u32 | AnyNumber | Uint8Array) => Observable<Balance>>;
      /**
       * Query the output of the current WeightToFee given some input
       **/
      queryWeightToFee: AugmentedCall<ApiType, (weight: Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => Observable<Balance>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xf3ff14d5ab527059/3 */
    transactionPaymentCallApi: {
      /**
       * The call fee details
       **/
      queryCallFeeDetails: AugmentedCall<ApiType, (call: Call | IMethod | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<FeeDetails>>;
      /**
       * The call info
       **/
      queryCallInfo: AugmentedCall<ApiType, (call: Call | IMethod | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<RuntimeDispatchInfo>>;
      /**
       * Query the output of the current LengthToFee given some input
       **/
      queryLengthToFee: AugmentedCall<ApiType, (length: u32 | AnyNumber | Uint8Array) => Observable<Balance>>;
      /**
       * Query the output of the current WeightToFee given some input
       **/
      queryWeightToFee: AugmentedCall<ApiType, (weight: Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => Observable<Balance>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xbe9fb0c91a8046cf/1 */
    validateStatement: {
      /**
       * Validate the statement.
       **/
      valdateStatement: AugmentedCall<ApiType, (source: StatementStoreStatementSource | 'Chain' | 'Network' | 'Local' | number | Uint8Array, statement: SpStatementStoreStatement | { proof?: any; decryptionKey?: any; channel?: any; priority?: any; numTopics?: any; topics?: any; data?: any } | string | Uint8Array) => Observable<Result<StatementStoreValidStatement, StatementStoreInvalidStatement>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
  } // AugmentedCalls
} // declare module
