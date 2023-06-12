/* eslint-disable */

import 'https://deno.land/x/polkadot@0.2.41/types/types/registry.ts';

import type { FinalityGrandpaEquivocationPrecommit, FinalityGrandpaEquivocationPrevote, FinalityGrandpaPrecommit, FinalityGrandpaPrevote, FrameBenchmarkingPalletPovCall, FrameBenchmarkingPalletPovEvent, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportDispatchPostDispatchInfo, FrameSupportDispatchRawOrigin, FrameSupportMessagesProcessMessageError, FrameSupportPalletId, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, KitchensinkRuntimeNposSolution16, KitchensinkRuntimeOriginCaller, KitchensinkRuntimeProxyType, KitchensinkRuntimeRuntime, KitchensinkRuntimeRuntimeHoldReason, KitchensinkRuntimeSessionKeys, PalletAllianceCall, PalletAllianceCid, PalletAllianceDisbandWitness, PalletAllianceError, PalletAllianceEvent, PalletAllianceMemberRole, PalletAllianceMultihash, PalletAllianceUnscrupulousItem, PalletAllianceVersion, PalletAssetConversionCall, PalletAssetConversionError, PalletAssetConversionEvent, PalletAssetConversionNativeOrAssetId, PalletAssetConversionPoolInfo, PalletAssetRateCall, PalletAssetRateError, PalletAssetRateEvent, PalletAssetTxPaymentChargeAssetTxPayment, PalletAssetTxPaymentEvent, PalletAssetsAccountStatus, PalletAssetsApproval, PalletAssetsAssetAccount, PalletAssetsAssetDetails, PalletAssetsAssetMetadata, PalletAssetsAssetStatus, PalletAssetsCall, PalletAssetsError, PalletAssetsEvent, PalletAssetsExistenceReason, PalletBabeCall, PalletBabeError, PalletBagsListCall, PalletBagsListError, PalletBagsListEvent, PalletBagsListListBag, PalletBagsListListListError, PalletBagsListListNode, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesIdAmount, PalletBalancesReasons, PalletBalancesReserveData, PalletBountiesBounty, PalletBountiesBountyStatus, PalletBountiesCall, PalletBountiesError, PalletBountiesEvent, PalletChildBountiesCall, PalletChildBountiesChildBounty, PalletChildBountiesChildBountyStatus, PalletChildBountiesError, PalletChildBountiesEvent, PalletCollectiveCall, PalletCollectiveError, PalletCollectiveEvent, PalletCollectiveRawOrigin, PalletCollectiveVotes, PalletContractsCall, PalletContractsError, PalletContractsEvent, PalletContractsOrigin, PalletContractsSchedule, PalletContractsScheduleHostFnWeights, PalletContractsScheduleInstructionWeights, PalletContractsScheduleLimits, PalletContractsStorageContractInfo, PalletContractsStorageDeletionQueueManager, PalletContractsWasmDeterminism, PalletContractsWasmOwnerInfo, PalletContractsWasmPrefabWasmModule, PalletConvictionVotingCall, PalletConvictionVotingConviction, PalletConvictionVotingDelegations, PalletConvictionVotingError, PalletConvictionVotingEvent, PalletConvictionVotingTally, PalletConvictionVotingVoteAccountVote, PalletConvictionVotingVoteCasting, PalletConvictionVotingVoteDelegating, PalletConvictionVotingVotePriorLock, PalletConvictionVotingVoteVoting, PalletCoreFellowshipCall, PalletCoreFellowshipError, PalletCoreFellowshipEvent, PalletCoreFellowshipMemberStatus, PalletCoreFellowshipParamsType, PalletCoreFellowshipWish, PalletDemocracyCall, PalletDemocracyConviction, PalletDemocracyDelegations, PalletDemocracyError, PalletDemocracyEvent, PalletDemocracyMetadataOwner, PalletDemocracyReferendumInfo, PalletDemocracyReferendumStatus, PalletDemocracyTally, PalletDemocracyVoteAccountVote, PalletDemocracyVotePriorLock, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletElectionProviderMultiPhaseCall, PalletElectionProviderMultiPhaseElectionCompute, PalletElectionProviderMultiPhaseError, PalletElectionProviderMultiPhaseEvent, PalletElectionProviderMultiPhasePhase, PalletElectionProviderMultiPhaseRawSolution, PalletElectionProviderMultiPhaseReadySolution, PalletElectionProviderMultiPhaseRoundSnapshot, PalletElectionProviderMultiPhaseSignedSignedSubmission, PalletElectionProviderMultiPhaseSolutionOrSnapshotSize, PalletElectionsPhragmenCall, PalletElectionsPhragmenError, PalletElectionsPhragmenEvent, PalletElectionsPhragmenRenouncing, PalletElectionsPhragmenSeatHolder, PalletElectionsPhragmenVoter, PalletFastUnstakeCall, PalletFastUnstakeError, PalletFastUnstakeEvent, PalletFastUnstakeUnstakeRequest, PalletGluttonCall, PalletGluttonError, PalletGluttonEvent, PalletGrandpaCall, PalletGrandpaError, PalletGrandpaEvent, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletIdentityBitFlags, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletImOnlineBoundedOpaqueNetworkState, PalletImOnlineCall, PalletImOnlineError, PalletImOnlineEvent, PalletImOnlineHeartbeat, PalletImOnlineSr25519AppSr25519Public, PalletImOnlineSr25519AppSr25519Signature, PalletIndicesCall, PalletIndicesError, PalletIndicesEvent, PalletLotteryCall, PalletLotteryError, PalletLotteryEvent, PalletLotteryLotteryConfig, PalletMembershipCall, PalletMembershipError, PalletMembershipEvent, PalletMessageQueueBookState, PalletMessageQueueCall, PalletMessageQueueError, PalletMessageQueueEvent, PalletMessageQueueNeighbours, PalletMessageQueuePage, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletNftFractionalizationCall, PalletNftFractionalizationDetails, PalletNftFractionalizationError, PalletNftFractionalizationEvent, PalletNftFractionalizationHoldReason, PalletNftsAttributeDeposit, PalletNftsAttributeNamespace, PalletNftsCall, PalletNftsCancelAttributesApprovalWitness, PalletNftsCollectionConfig, PalletNftsCollectionDetails, PalletNftsCollectionMetadata, PalletNftsCollectionRole, PalletNftsCollectionSetting, PalletNftsDestroyWitness, PalletNftsError, PalletNftsEvent, PalletNftsItemConfig, PalletNftsItemDeposit, PalletNftsItemDetails, PalletNftsItemMetadata, PalletNftsItemMetadataDeposit, PalletNftsItemSetting, PalletNftsItemTip, PalletNftsMintSettings, PalletNftsMintType, PalletNftsMintWitness, PalletNftsPalletAttributes, PalletNftsPalletFeature, PalletNftsPendingSwap, PalletNftsPreSignedAttributes, PalletNftsPreSignedMint, PalletNftsPriceDirection, PalletNftsPriceWithDirection, PalletNisBid, PalletNisCall, PalletNisError, PalletNisEvent, PalletNisHoldReason, PalletNisReceiptRecord, PalletNisSummaryRecord, PalletNominationPoolsBondExtra, PalletNominationPoolsBondedPoolInner, PalletNominationPoolsCall, PalletNominationPoolsClaimPermission, PalletNominationPoolsCommission, PalletNominationPoolsCommissionChangeRate, PalletNominationPoolsConfigOpAccountId32, PalletNominationPoolsConfigOpPerbill, PalletNominationPoolsConfigOpU128, PalletNominationPoolsConfigOpU32, PalletNominationPoolsDefensiveError, PalletNominationPoolsError, PalletNominationPoolsEvent, PalletNominationPoolsPoolMember, PalletNominationPoolsPoolRoles, PalletNominationPoolsPoolState, PalletNominationPoolsRewardPool, PalletNominationPoolsSubPools, PalletNominationPoolsUnbondPool, PalletOffencesEvent, PalletPreimageCall, PalletPreimageError, PalletPreimageEvent, PalletPreimageRequestStatus, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletRankedCollectiveCall, PalletRankedCollectiveError, PalletRankedCollectiveEvent, PalletRankedCollectiveMemberRecord, PalletRankedCollectiveTally, PalletRankedCollectiveVoteRecord, PalletRecoveryActiveRecovery, PalletRecoveryCall, PalletRecoveryError, PalletRecoveryEvent, PalletRecoveryRecoveryConfig, PalletReferendaCall, PalletReferendaCurve, PalletReferendaDecidingStatus, PalletReferendaDeposit, PalletReferendaError, PalletReferendaEvent, PalletReferendaReferendumInfoConvictionVotingTally, PalletReferendaReferendumInfoRankedCollectiveTally, PalletReferendaReferendumStatusConvictionVotingTally, PalletReferendaReferendumStatusRankedCollectiveTally, PalletReferendaTrackInfo, PalletRemarkCall, PalletRemarkError, PalletRemarkEvent, PalletRootTestingCall, PalletSalaryCall, PalletSalaryClaimState, PalletSalaryClaimantStatus, PalletSalaryError, PalletSalaryEvent, PalletSalaryStatusType, PalletSchedulerCall, PalletSchedulerError, PalletSchedulerEvent, PalletSchedulerScheduled, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletSocietyBid, PalletSocietyBidKind, PalletSocietyCall, PalletSocietyError, PalletSocietyEvent, PalletSocietyJudgement, PalletSocietyVote, PalletSocietyVouchingStatus, PalletStakingActiveEraInfo, PalletStakingEraRewardPoints, PalletStakingExposure, PalletStakingForcing, PalletStakingIndividualExposure, PalletStakingNominations, PalletStakingPalletCall, PalletStakingPalletConfigOpPerbill, PalletStakingPalletConfigOpPercent, PalletStakingPalletConfigOpU128, PalletStakingPalletConfigOpU32, PalletStakingPalletError, PalletStakingPalletEvent, PalletStakingRewardDestination, PalletStakingSlashingSlashingSpans, PalletStakingSlashingSpanRecord, PalletStakingStakingLedger, PalletStakingUnappliedSlash, PalletStakingUnlockChunk, PalletStakingValidatorPrefs, PalletStateTrieMigrationCall, PalletStateTrieMigrationError, PalletStateTrieMigrationEvent, PalletStateTrieMigrationMigrationCompute, PalletStateTrieMigrationMigrationLimits, PalletStateTrieMigrationMigrationTask, PalletStateTrieMigrationProgress, PalletStatementEvent, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletTimestampCall, PalletTipsCall, PalletTipsError, PalletTipsEvent, PalletTipsOpenTip, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletTransactionStorageCall, PalletTransactionStorageError, PalletTransactionStorageEvent, PalletTransactionStorageTransactionInfo, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUniquesCall, PalletUniquesCollectionDetails, PalletUniquesCollectionMetadata, PalletUniquesDestroyWitness, PalletUniquesError, PalletUniquesEvent, PalletUniquesItemDetails, PalletUniquesItemMetadata, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletVestingCall, PalletVestingError, PalletVestingEvent, PalletVestingReleases, PalletVestingVestingInfo, PalletWhitelistCall, PalletWhitelistError, PalletWhitelistEvent, SpArithmeticArithmeticError, SpAuthorityDiscoveryAppPublic, SpConsensusBabeAllowedSlots, SpConsensusBabeAppPublic, SpConsensusBabeBabeEpochConfiguration, SpConsensusBabeDigestsNextConfigDescriptor, SpConsensusBabeDigestsPreDigest, SpConsensusBabeDigestsPrimaryPreDigest, SpConsensusBabeDigestsSecondaryPlainPreDigest, SpConsensusBabeDigestsSecondaryVRFPreDigest, SpConsensusGrandpaAppPublic, SpConsensusGrandpaAppSignature, SpConsensusGrandpaEquivocation, SpConsensusGrandpaEquivocationProof, SpConsensusSlotsEquivocationProof, SpCoreCryptoKeyTypeId, SpCoreEcdsaSignature, SpCoreEd25519Public, SpCoreEd25519Signature, SpCoreOffchainOpaqueNetworkState, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreSr25519VrfVrfSignature, SpCoreVoid, SpNposElectionsElectionScore, SpNposElectionsSupport, SpRuntimeBlakeTwo256, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeDispatchErrorWithPostInfo, SpRuntimeHeader, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpSessionMembershipProof, SpStakingOffenceOffenceDetails, SpStatementStoreProof, SpStatementStoreStatement, SpTransactionStorageProofTransactionStorageProof, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight } from 'https://deno.land/x/polkadot@0.2.41/types/lookup.ts';

declare module 'https://deno.land/x/polkadot@0.2.41/types/types/registry.ts' {
  interface InterfaceTypes {
    FinalityGrandpaEquivocationPrecommit: FinalityGrandpaEquivocationPrecommit;
    FinalityGrandpaEquivocationPrevote: FinalityGrandpaEquivocationPrevote;
    FinalityGrandpaPrecommit: FinalityGrandpaPrecommit;
    FinalityGrandpaPrevote: FinalityGrandpaPrevote;
    FrameBenchmarkingPalletPovCall: FrameBenchmarkingPalletPovCall;
    FrameBenchmarkingPalletPovEvent: FrameBenchmarkingPalletPovEvent;
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    FrameSupportDispatchPays: FrameSupportDispatchPays;
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    FrameSupportDispatchPostDispatchInfo: FrameSupportDispatchPostDispatchInfo;
    FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
    FrameSupportMessagesProcessMessageError: FrameSupportMessagesProcessMessageError;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportPreimagesBounded: FrameSupportPreimagesBounded;
    FrameSupportScheduleDispatchTime: FrameSupportScheduleDispatchTime;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    KitchensinkRuntimeNposSolution16: KitchensinkRuntimeNposSolution16;
    KitchensinkRuntimeOriginCaller: KitchensinkRuntimeOriginCaller;
    KitchensinkRuntimeProxyType: KitchensinkRuntimeProxyType;
    KitchensinkRuntimeRuntime: KitchensinkRuntimeRuntime;
    KitchensinkRuntimeRuntimeHoldReason: KitchensinkRuntimeRuntimeHoldReason;
    KitchensinkRuntimeSessionKeys: KitchensinkRuntimeSessionKeys;
    PalletAllianceCall: PalletAllianceCall;
    PalletAllianceCid: PalletAllianceCid;
    PalletAllianceDisbandWitness: PalletAllianceDisbandWitness;
    PalletAllianceError: PalletAllianceError;
    PalletAllianceEvent: PalletAllianceEvent;
    PalletAllianceMemberRole: PalletAllianceMemberRole;
    PalletAllianceMultihash: PalletAllianceMultihash;
    PalletAllianceUnscrupulousItem: PalletAllianceUnscrupulousItem;
    PalletAllianceVersion: PalletAllianceVersion;
    PalletAssetConversionCall: PalletAssetConversionCall;
    PalletAssetConversionError: PalletAssetConversionError;
    PalletAssetConversionEvent: PalletAssetConversionEvent;
    PalletAssetConversionNativeOrAssetId: PalletAssetConversionNativeOrAssetId;
    PalletAssetConversionPoolInfo: PalletAssetConversionPoolInfo;
    PalletAssetRateCall: PalletAssetRateCall;
    PalletAssetRateError: PalletAssetRateError;
    PalletAssetRateEvent: PalletAssetRateEvent;
    PalletAssetTxPaymentChargeAssetTxPayment: PalletAssetTxPaymentChargeAssetTxPayment;
    PalletAssetTxPaymentEvent: PalletAssetTxPaymentEvent;
    PalletAssetsAccountStatus: PalletAssetsAccountStatus;
    PalletAssetsApproval: PalletAssetsApproval;
    PalletAssetsAssetAccount: PalletAssetsAssetAccount;
    PalletAssetsAssetDetails: PalletAssetsAssetDetails;
    PalletAssetsAssetMetadata: PalletAssetsAssetMetadata;
    PalletAssetsAssetStatus: PalletAssetsAssetStatus;
    PalletAssetsCall: PalletAssetsCall;
    PalletAssetsError: PalletAssetsError;
    PalletAssetsEvent: PalletAssetsEvent;
    PalletAssetsExistenceReason: PalletAssetsExistenceReason;
    PalletBabeCall: PalletBabeCall;
    PalletBabeError: PalletBabeError;
    PalletBagsListCall: PalletBagsListCall;
    PalletBagsListError: PalletBagsListError;
    PalletBagsListEvent: PalletBagsListEvent;
    PalletBagsListListBag: PalletBagsListListBag;
    PalletBagsListListListError: PalletBagsListListListError;
    PalletBagsListListNode: PalletBagsListListNode;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesIdAmount: PalletBalancesIdAmount;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletBountiesBounty: PalletBountiesBounty;
    PalletBountiesBountyStatus: PalletBountiesBountyStatus;
    PalletBountiesCall: PalletBountiesCall;
    PalletBountiesError: PalletBountiesError;
    PalletBountiesEvent: PalletBountiesEvent;
    PalletChildBountiesCall: PalletChildBountiesCall;
    PalletChildBountiesChildBounty: PalletChildBountiesChildBounty;
    PalletChildBountiesChildBountyStatus: PalletChildBountiesChildBountyStatus;
    PalletChildBountiesError: PalletChildBountiesError;
    PalletChildBountiesEvent: PalletChildBountiesEvent;
    PalletCollectiveCall: PalletCollectiveCall;
    PalletCollectiveError: PalletCollectiveError;
    PalletCollectiveEvent: PalletCollectiveEvent;
    PalletCollectiveRawOrigin: PalletCollectiveRawOrigin;
    PalletCollectiveVotes: PalletCollectiveVotes;
    PalletContractsCall: PalletContractsCall;
    PalletContractsError: PalletContractsError;
    PalletContractsEvent: PalletContractsEvent;
    PalletContractsOrigin: PalletContractsOrigin;
    PalletContractsSchedule: PalletContractsSchedule;
    PalletContractsScheduleHostFnWeights: PalletContractsScheduleHostFnWeights;
    PalletContractsScheduleInstructionWeights: PalletContractsScheduleInstructionWeights;
    PalletContractsScheduleLimits: PalletContractsScheduleLimits;
    PalletContractsStorageContractInfo: PalletContractsStorageContractInfo;
    PalletContractsStorageDeletionQueueManager: PalletContractsStorageDeletionQueueManager;
    PalletContractsWasmDeterminism: PalletContractsWasmDeterminism;
    PalletContractsWasmOwnerInfo: PalletContractsWasmOwnerInfo;
    PalletContractsWasmPrefabWasmModule: PalletContractsWasmPrefabWasmModule;
    PalletConvictionVotingCall: PalletConvictionVotingCall;
    PalletConvictionVotingConviction: PalletConvictionVotingConviction;
    PalletConvictionVotingDelegations: PalletConvictionVotingDelegations;
    PalletConvictionVotingError: PalletConvictionVotingError;
    PalletConvictionVotingEvent: PalletConvictionVotingEvent;
    PalletConvictionVotingTally: PalletConvictionVotingTally;
    PalletConvictionVotingVoteAccountVote: PalletConvictionVotingVoteAccountVote;
    PalletConvictionVotingVoteCasting: PalletConvictionVotingVoteCasting;
    PalletConvictionVotingVoteDelegating: PalletConvictionVotingVoteDelegating;
    PalletConvictionVotingVotePriorLock: PalletConvictionVotingVotePriorLock;
    PalletConvictionVotingVoteVoting: PalletConvictionVotingVoteVoting;
    PalletCoreFellowshipCall: PalletCoreFellowshipCall;
    PalletCoreFellowshipError: PalletCoreFellowshipError;
    PalletCoreFellowshipEvent: PalletCoreFellowshipEvent;
    PalletCoreFellowshipMemberStatus: PalletCoreFellowshipMemberStatus;
    PalletCoreFellowshipParamsType: PalletCoreFellowshipParamsType;
    PalletCoreFellowshipWish: PalletCoreFellowshipWish;
    PalletDemocracyCall: PalletDemocracyCall;
    PalletDemocracyConviction: PalletDemocracyConviction;
    PalletDemocracyDelegations: PalletDemocracyDelegations;
    PalletDemocracyError: PalletDemocracyError;
    PalletDemocracyEvent: PalletDemocracyEvent;
    PalletDemocracyMetadataOwner: PalletDemocracyMetadataOwner;
    PalletDemocracyReferendumInfo: PalletDemocracyReferendumInfo;
    PalletDemocracyReferendumStatus: PalletDemocracyReferendumStatus;
    PalletDemocracyTally: PalletDemocracyTally;
    PalletDemocracyVoteAccountVote: PalletDemocracyVoteAccountVote;
    PalletDemocracyVotePriorLock: PalletDemocracyVotePriorLock;
    PalletDemocracyVoteThreshold: PalletDemocracyVoteThreshold;
    PalletDemocracyVoteVoting: PalletDemocracyVoteVoting;
    PalletElectionProviderMultiPhaseCall: PalletElectionProviderMultiPhaseCall;
    PalletElectionProviderMultiPhaseElectionCompute: PalletElectionProviderMultiPhaseElectionCompute;
    PalletElectionProviderMultiPhaseError: PalletElectionProviderMultiPhaseError;
    PalletElectionProviderMultiPhaseEvent: PalletElectionProviderMultiPhaseEvent;
    PalletElectionProviderMultiPhasePhase: PalletElectionProviderMultiPhasePhase;
    PalletElectionProviderMultiPhaseRawSolution: PalletElectionProviderMultiPhaseRawSolution;
    PalletElectionProviderMultiPhaseReadySolution: PalletElectionProviderMultiPhaseReadySolution;
    PalletElectionProviderMultiPhaseRoundSnapshot: PalletElectionProviderMultiPhaseRoundSnapshot;
    PalletElectionProviderMultiPhaseSignedSignedSubmission: PalletElectionProviderMultiPhaseSignedSignedSubmission;
    PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
    PalletElectionsPhragmenCall: PalletElectionsPhragmenCall;
    PalletElectionsPhragmenError: PalletElectionsPhragmenError;
    PalletElectionsPhragmenEvent: PalletElectionsPhragmenEvent;
    PalletElectionsPhragmenRenouncing: PalletElectionsPhragmenRenouncing;
    PalletElectionsPhragmenSeatHolder: PalletElectionsPhragmenSeatHolder;
    PalletElectionsPhragmenVoter: PalletElectionsPhragmenVoter;
    PalletFastUnstakeCall: PalletFastUnstakeCall;
    PalletFastUnstakeError: PalletFastUnstakeError;
    PalletFastUnstakeEvent: PalletFastUnstakeEvent;
    PalletFastUnstakeUnstakeRequest: PalletFastUnstakeUnstakeRequest;
    PalletGluttonCall: PalletGluttonCall;
    PalletGluttonError: PalletGluttonError;
    PalletGluttonEvent: PalletGluttonEvent;
    PalletGrandpaCall: PalletGrandpaCall;
    PalletGrandpaError: PalletGrandpaError;
    PalletGrandpaEvent: PalletGrandpaEvent;
    PalletGrandpaStoredPendingChange: PalletGrandpaStoredPendingChange;
    PalletGrandpaStoredState: PalletGrandpaStoredState;
    PalletIdentityBitFlags: PalletIdentityBitFlags;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityIdentityField: PalletIdentityIdentityField;
    PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletImOnlineBoundedOpaqueNetworkState: PalletImOnlineBoundedOpaqueNetworkState;
    PalletImOnlineCall: PalletImOnlineCall;
    PalletImOnlineError: PalletImOnlineError;
    PalletImOnlineEvent: PalletImOnlineEvent;
    PalletImOnlineHeartbeat: PalletImOnlineHeartbeat;
    PalletImOnlineSr25519AppSr25519Public: PalletImOnlineSr25519AppSr25519Public;
    PalletImOnlineSr25519AppSr25519Signature: PalletImOnlineSr25519AppSr25519Signature;
    PalletIndicesCall: PalletIndicesCall;
    PalletIndicesError: PalletIndicesError;
    PalletIndicesEvent: PalletIndicesEvent;
    PalletLotteryCall: PalletLotteryCall;
    PalletLotteryError: PalletLotteryError;
    PalletLotteryEvent: PalletLotteryEvent;
    PalletLotteryLotteryConfig: PalletLotteryLotteryConfig;
    PalletMembershipCall: PalletMembershipCall;
    PalletMembershipError: PalletMembershipError;
    PalletMembershipEvent: PalletMembershipEvent;
    PalletMessageQueueBookState: PalletMessageQueueBookState;
    PalletMessageQueueCall: PalletMessageQueueCall;
    PalletMessageQueueError: PalletMessageQueueError;
    PalletMessageQueueEvent: PalletMessageQueueEvent;
    PalletMessageQueueNeighbours: PalletMessageQueueNeighbours;
    PalletMessageQueuePage: PalletMessageQueuePage;
    PalletMultisigCall: PalletMultisigCall;
    PalletMultisigError: PalletMultisigError;
    PalletMultisigEvent: PalletMultisigEvent;
    PalletMultisigMultisig: PalletMultisigMultisig;
    PalletMultisigTimepoint: PalletMultisigTimepoint;
    PalletNftFractionalizationCall: PalletNftFractionalizationCall;
    PalletNftFractionalizationDetails: PalletNftFractionalizationDetails;
    PalletNftFractionalizationError: PalletNftFractionalizationError;
    PalletNftFractionalizationEvent: PalletNftFractionalizationEvent;
    PalletNftFractionalizationHoldReason: PalletNftFractionalizationHoldReason;
    PalletNftsAttributeDeposit: PalletNftsAttributeDeposit;
    PalletNftsAttributeNamespace: PalletNftsAttributeNamespace;
    PalletNftsCall: PalletNftsCall;
    PalletNftsCancelAttributesApprovalWitness: PalletNftsCancelAttributesApprovalWitness;
    PalletNftsCollectionConfig: PalletNftsCollectionConfig;
    PalletNftsCollectionDetails: PalletNftsCollectionDetails;
    PalletNftsCollectionMetadata: PalletNftsCollectionMetadata;
    PalletNftsCollectionRole: PalletNftsCollectionRole;
    PalletNftsCollectionSetting: PalletNftsCollectionSetting;
    PalletNftsDestroyWitness: PalletNftsDestroyWitness;
    PalletNftsError: PalletNftsError;
    PalletNftsEvent: PalletNftsEvent;
    PalletNftsItemConfig: PalletNftsItemConfig;
    PalletNftsItemDeposit: PalletNftsItemDeposit;
    PalletNftsItemDetails: PalletNftsItemDetails;
    PalletNftsItemMetadata: PalletNftsItemMetadata;
    PalletNftsItemMetadataDeposit: PalletNftsItemMetadataDeposit;
    PalletNftsItemSetting: PalletNftsItemSetting;
    PalletNftsItemTip: PalletNftsItemTip;
    PalletNftsMintSettings: PalletNftsMintSettings;
    PalletNftsMintType: PalletNftsMintType;
    PalletNftsMintWitness: PalletNftsMintWitness;
    PalletNftsPalletAttributes: PalletNftsPalletAttributes;
    PalletNftsPalletFeature: PalletNftsPalletFeature;
    PalletNftsPendingSwap: PalletNftsPendingSwap;
    PalletNftsPreSignedAttributes: PalletNftsPreSignedAttributes;
    PalletNftsPreSignedMint: PalletNftsPreSignedMint;
    PalletNftsPriceDirection: PalletNftsPriceDirection;
    PalletNftsPriceWithDirection: PalletNftsPriceWithDirection;
    PalletNisBid: PalletNisBid;
    PalletNisCall: PalletNisCall;
    PalletNisError: PalletNisError;
    PalletNisEvent: PalletNisEvent;
    PalletNisHoldReason: PalletNisHoldReason;
    PalletNisReceiptRecord: PalletNisReceiptRecord;
    PalletNisSummaryRecord: PalletNisSummaryRecord;
    PalletNominationPoolsBondExtra: PalletNominationPoolsBondExtra;
    PalletNominationPoolsBondedPoolInner: PalletNominationPoolsBondedPoolInner;
    PalletNominationPoolsCall: PalletNominationPoolsCall;
    PalletNominationPoolsClaimPermission: PalletNominationPoolsClaimPermission;
    PalletNominationPoolsCommission: PalletNominationPoolsCommission;
    PalletNominationPoolsCommissionChangeRate: PalletNominationPoolsCommissionChangeRate;
    PalletNominationPoolsConfigOpAccountId32: PalletNominationPoolsConfigOpAccountId32;
    PalletNominationPoolsConfigOpPerbill: PalletNominationPoolsConfigOpPerbill;
    PalletNominationPoolsConfigOpU128: PalletNominationPoolsConfigOpU128;
    PalletNominationPoolsConfigOpU32: PalletNominationPoolsConfigOpU32;
    PalletNominationPoolsDefensiveError: PalletNominationPoolsDefensiveError;
    PalletNominationPoolsError: PalletNominationPoolsError;
    PalletNominationPoolsEvent: PalletNominationPoolsEvent;
    PalletNominationPoolsPoolMember: PalletNominationPoolsPoolMember;
    PalletNominationPoolsPoolRoles: PalletNominationPoolsPoolRoles;
    PalletNominationPoolsPoolState: PalletNominationPoolsPoolState;
    PalletNominationPoolsRewardPool: PalletNominationPoolsRewardPool;
    PalletNominationPoolsSubPools: PalletNominationPoolsSubPools;
    PalletNominationPoolsUnbondPool: PalletNominationPoolsUnbondPool;
    PalletOffencesEvent: PalletOffencesEvent;
    PalletPreimageCall: PalletPreimageCall;
    PalletPreimageError: PalletPreimageError;
    PalletPreimageEvent: PalletPreimageEvent;
    PalletPreimageRequestStatus: PalletPreimageRequestStatus;
    PalletProxyAnnouncement: PalletProxyAnnouncement;
    PalletProxyCall: PalletProxyCall;
    PalletProxyError: PalletProxyError;
    PalletProxyEvent: PalletProxyEvent;
    PalletProxyProxyDefinition: PalletProxyProxyDefinition;
    PalletRankedCollectiveCall: PalletRankedCollectiveCall;
    PalletRankedCollectiveError: PalletRankedCollectiveError;
    PalletRankedCollectiveEvent: PalletRankedCollectiveEvent;
    PalletRankedCollectiveMemberRecord: PalletRankedCollectiveMemberRecord;
    PalletRankedCollectiveTally: PalletRankedCollectiveTally;
    PalletRankedCollectiveVoteRecord: PalletRankedCollectiveVoteRecord;
    PalletRecoveryActiveRecovery: PalletRecoveryActiveRecovery;
    PalletRecoveryCall: PalletRecoveryCall;
    PalletRecoveryError: PalletRecoveryError;
    PalletRecoveryEvent: PalletRecoveryEvent;
    PalletRecoveryRecoveryConfig: PalletRecoveryRecoveryConfig;
    PalletReferendaCall: PalletReferendaCall;
    PalletReferendaCurve: PalletReferendaCurve;
    PalletReferendaDecidingStatus: PalletReferendaDecidingStatus;
    PalletReferendaDeposit: PalletReferendaDeposit;
    PalletReferendaError: PalletReferendaError;
    PalletReferendaEvent: PalletReferendaEvent;
    PalletReferendaReferendumInfoConvictionVotingTally: PalletReferendaReferendumInfoConvictionVotingTally;
    PalletReferendaReferendumInfoRankedCollectiveTally: PalletReferendaReferendumInfoRankedCollectiveTally;
    PalletReferendaReferendumStatusConvictionVotingTally: PalletReferendaReferendumStatusConvictionVotingTally;
    PalletReferendaReferendumStatusRankedCollectiveTally: PalletReferendaReferendumStatusRankedCollectiveTally;
    PalletReferendaTrackInfo: PalletReferendaTrackInfo;
    PalletRemarkCall: PalletRemarkCall;
    PalletRemarkError: PalletRemarkError;
    PalletRemarkEvent: PalletRemarkEvent;
    PalletRootTestingCall: PalletRootTestingCall;
    PalletSalaryCall: PalletSalaryCall;
    PalletSalaryClaimState: PalletSalaryClaimState;
    PalletSalaryClaimantStatus: PalletSalaryClaimantStatus;
    PalletSalaryError: PalletSalaryError;
    PalletSalaryEvent: PalletSalaryEvent;
    PalletSalaryStatusType: PalletSalaryStatusType;
    PalletSchedulerCall: PalletSchedulerCall;
    PalletSchedulerError: PalletSchedulerError;
    PalletSchedulerEvent: PalletSchedulerEvent;
    PalletSchedulerScheduled: PalletSchedulerScheduled;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletSocietyBid: PalletSocietyBid;
    PalletSocietyBidKind: PalletSocietyBidKind;
    PalletSocietyCall: PalletSocietyCall;
    PalletSocietyError: PalletSocietyError;
    PalletSocietyEvent: PalletSocietyEvent;
    PalletSocietyJudgement: PalletSocietyJudgement;
    PalletSocietyVote: PalletSocietyVote;
    PalletSocietyVouchingStatus: PalletSocietyVouchingStatus;
    PalletStakingActiveEraInfo: PalletStakingActiveEraInfo;
    PalletStakingEraRewardPoints: PalletStakingEraRewardPoints;
    PalletStakingExposure: PalletStakingExposure;
    PalletStakingForcing: PalletStakingForcing;
    PalletStakingIndividualExposure: PalletStakingIndividualExposure;
    PalletStakingNominations: PalletStakingNominations;
    PalletStakingPalletCall: PalletStakingPalletCall;
    PalletStakingPalletConfigOpPerbill: PalletStakingPalletConfigOpPerbill;
    PalletStakingPalletConfigOpPercent: PalletStakingPalletConfigOpPercent;
    PalletStakingPalletConfigOpU128: PalletStakingPalletConfigOpU128;
    PalletStakingPalletConfigOpU32: PalletStakingPalletConfigOpU32;
    PalletStakingPalletError: PalletStakingPalletError;
    PalletStakingPalletEvent: PalletStakingPalletEvent;
    PalletStakingRewardDestination: PalletStakingRewardDestination;
    PalletStakingSlashingSlashingSpans: PalletStakingSlashingSlashingSpans;
    PalletStakingSlashingSpanRecord: PalletStakingSlashingSpanRecord;
    PalletStakingStakingLedger: PalletStakingStakingLedger;
    PalletStakingUnappliedSlash: PalletStakingUnappliedSlash;
    PalletStakingUnlockChunk: PalletStakingUnlockChunk;
    PalletStakingValidatorPrefs: PalletStakingValidatorPrefs;
    PalletStateTrieMigrationCall: PalletStateTrieMigrationCall;
    PalletStateTrieMigrationError: PalletStateTrieMigrationError;
    PalletStateTrieMigrationEvent: PalletStateTrieMigrationEvent;
    PalletStateTrieMigrationMigrationCompute: PalletStateTrieMigrationMigrationCompute;
    PalletStateTrieMigrationMigrationLimits: PalletStateTrieMigrationMigrationLimits;
    PalletStateTrieMigrationMigrationTask: PalletStateTrieMigrationMigrationTask;
    PalletStateTrieMigrationProgress: PalletStateTrieMigrationProgress;
    PalletStatementEvent: PalletStatementEvent;
    PalletSudoCall: PalletSudoCall;
    PalletSudoError: PalletSudoError;
    PalletSudoEvent: PalletSudoEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTipsCall: PalletTipsCall;
    PalletTipsError: PalletTipsError;
    PalletTipsEvent: PalletTipsEvent;
    PalletTipsOpenTip: PalletTipsOpenTip;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTransactionStorageCall: PalletTransactionStorageCall;
    PalletTransactionStorageError: PalletTransactionStorageError;
    PalletTransactionStorageEvent: PalletTransactionStorageEvent;
    PalletTransactionStorageTransactionInfo: PalletTransactionStorageTransactionInfo;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletUniquesCall: PalletUniquesCall;
    PalletUniquesCollectionDetails: PalletUniquesCollectionDetails;
    PalletUniquesCollectionMetadata: PalletUniquesCollectionMetadata;
    PalletUniquesDestroyWitness: PalletUniquesDestroyWitness;
    PalletUniquesError: PalletUniquesError;
    PalletUniquesEvent: PalletUniquesEvent;
    PalletUniquesItemDetails: PalletUniquesItemDetails;
    PalletUniquesItemMetadata: PalletUniquesItemMetadata;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletVestingCall: PalletVestingCall;
    PalletVestingError: PalletVestingError;
    PalletVestingEvent: PalletVestingEvent;
    PalletVestingReleases: PalletVestingReleases;
    PalletVestingVestingInfo: PalletVestingVestingInfo;
    PalletWhitelistCall: PalletWhitelistCall;
    PalletWhitelistError: PalletWhitelistError;
    PalletWhitelistEvent: PalletWhitelistEvent;
    SpArithmeticArithmeticError: SpArithmeticArithmeticError;
    SpAuthorityDiscoveryAppPublic: SpAuthorityDiscoveryAppPublic;
    SpConsensusBabeAllowedSlots: SpConsensusBabeAllowedSlots;
    SpConsensusBabeAppPublic: SpConsensusBabeAppPublic;
    SpConsensusBabeBabeEpochConfiguration: SpConsensusBabeBabeEpochConfiguration;
    SpConsensusBabeDigestsNextConfigDescriptor: SpConsensusBabeDigestsNextConfigDescriptor;
    SpConsensusBabeDigestsPreDigest: SpConsensusBabeDigestsPreDigest;
    SpConsensusBabeDigestsPrimaryPreDigest: SpConsensusBabeDigestsPrimaryPreDigest;
    SpConsensusBabeDigestsSecondaryPlainPreDigest: SpConsensusBabeDigestsSecondaryPlainPreDigest;
    SpConsensusBabeDigestsSecondaryVRFPreDigest: SpConsensusBabeDigestsSecondaryVRFPreDigest;
    SpConsensusGrandpaAppPublic: SpConsensusGrandpaAppPublic;
    SpConsensusGrandpaAppSignature: SpConsensusGrandpaAppSignature;
    SpConsensusGrandpaEquivocation: SpConsensusGrandpaEquivocation;
    SpConsensusGrandpaEquivocationProof: SpConsensusGrandpaEquivocationProof;
    SpConsensusSlotsEquivocationProof: SpConsensusSlotsEquivocationProof;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Public: SpCoreEd25519Public;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreOffchainOpaqueNetworkState: SpCoreOffchainOpaqueNetworkState;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreSr25519VrfVrfSignature: SpCoreSr25519VrfVrfSignature;
    SpCoreVoid: SpCoreVoid;
    SpNposElectionsElectionScore: SpNposElectionsElectionScore;
    SpNposElectionsSupport: SpNposElectionsSupport;
    SpRuntimeBlakeTwo256: SpRuntimeBlakeTwo256;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeDispatchErrorWithPostInfo: SpRuntimeDispatchErrorWithPostInfo;
    SpRuntimeHeader: SpRuntimeHeader;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpSessionMembershipProof: SpSessionMembershipProof;
    SpStakingOffenceOffenceDetails: SpStakingOffenceOffenceDetails;
    SpStatementStoreProof: SpStatementStoreProof;
    SpStatementStoreStatement: SpStatementStoreStatement;
    SpTransactionStorageProofTransactionStorageProof: SpTransactionStorageProofTransactionStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
  } // InterfaceTypes
} // declare module
