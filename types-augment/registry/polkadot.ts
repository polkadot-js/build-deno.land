import { Buffer } from 'node:buffer';

/* eslint-disable */

import 'https://deno.land/x/polkadot/types/types/registry.ts';

import type { BinaryHeapEnqueuedOrder, BinaryHeapReverseQueueIndex, BitvecOrderLsb0, FrameSupportDispatchDispatchInfo, PalletReferendaReferendumInfo, PalletReferendaReferendumStatus, PalletTransactionPaymentChargeTransactionPayment, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesPrimitivesHrmpChannelId, PolkadotPrimitivesV7ApprovalVotingParams, PolkadotPrimitivesV7AssignmentAppPublic, PolkadotPrimitivesV7AsyncBackingAsyncBackingParams, PolkadotPrimitivesV7AsyncBackingBackingState, PolkadotPrimitivesV7AsyncBackingCandidatePendingAvailability, PolkadotPrimitivesV7AsyncBackingConstraints, PolkadotPrimitivesV7AsyncBackingInboundHrmpLimitations, PolkadotPrimitivesV7AsyncBackingOutboundHrmpChannelLimitations, PolkadotPrimitivesV7BackedCandidate, PolkadotPrimitivesV7CandidateCommitments, PolkadotPrimitivesV7CandidateDescriptor, PolkadotPrimitivesV7CandidateEvent, PolkadotPrimitivesV7CandidateReceipt, PolkadotPrimitivesV7CollatorAppPublic, PolkadotPrimitivesV7CollatorAppSignature, PolkadotPrimitivesV7CommittedCandidateReceipt, PolkadotPrimitivesV7CoreState, PolkadotPrimitivesV7DisputeState, PolkadotPrimitivesV7DisputeStatement, PolkadotPrimitivesV7DisputeStatementSet, PolkadotPrimitivesV7ExecutorParams, PolkadotPrimitivesV7ExecutorParamsExecutorParam, PolkadotPrimitivesV7GroupRotationInfo, PolkadotPrimitivesV7IndexedVecGroupIndex, PolkadotPrimitivesV7IndexedVecValidatorIndex, PolkadotPrimitivesV7InherentData, PolkadotPrimitivesV7InvalidDisputeStatementKind, PolkadotPrimitivesV7OccupiedCore, PolkadotPrimitivesV7OccupiedCoreAssumption, PolkadotPrimitivesV7PersistedValidationData, PolkadotPrimitivesV7PvfCheckStatement, PolkadotPrimitivesV7PvfExecKind, PolkadotPrimitivesV7PvfPrepKind, PolkadotPrimitivesV7ScheduledCore, PolkadotPrimitivesV7ScrapedOnChainVotes, PolkadotPrimitivesV7SessionInfo, PolkadotPrimitivesV7SignedUncheckedSigned, PolkadotPrimitivesV7SlashingDisputeProof, PolkadotPrimitivesV7SlashingDisputesTimeSlot, PolkadotPrimitivesV7SlashingPendingSlashes, PolkadotPrimitivesV7SlashingSlashingOffenceKind, PolkadotPrimitivesV7UpgradeGoAhead, PolkadotPrimitivesV7UpgradeRestriction, PolkadotPrimitivesV7ValidDisputeStatementKind, PolkadotPrimitivesV7ValidatorAppPublic, PolkadotPrimitivesV7ValidatorAppSignature, PolkadotPrimitivesV7ValidityAttestation, PolkadotPrimitivesVstagingSchedulerParams, PolkadotRuntimeCommonAuctionsPalletCall, PolkadotRuntimeCommonAuctionsPalletError, PolkadotRuntimeCommonAuctionsPalletEvent, PolkadotRuntimeCommonClaimsEcdsaSignature, PolkadotRuntimeCommonClaimsPalletCall, PolkadotRuntimeCommonClaimsPalletError, PolkadotRuntimeCommonClaimsPalletEvent, PolkadotRuntimeCommonClaimsPrevalidateAttests, PolkadotRuntimeCommonClaimsStatementKind, PolkadotRuntimeCommonCrowdloanFundInfo, PolkadotRuntimeCommonCrowdloanLastContribution, PolkadotRuntimeCommonCrowdloanPalletCall, PolkadotRuntimeCommonCrowdloanPalletError, PolkadotRuntimeCommonCrowdloanPalletEvent, PolkadotRuntimeCommonImplsVersionedLocatableAsset, PolkadotRuntimeCommonParasRegistrarPalletCall, PolkadotRuntimeCommonParasRegistrarPalletError, PolkadotRuntimeCommonParasRegistrarPalletEvent, PolkadotRuntimeCommonParasRegistrarParaInfo, PolkadotRuntimeCommonSlotsPalletCall, PolkadotRuntimeCommonSlotsPalletError, PolkadotRuntimeCommonSlotsPalletEvent, PolkadotRuntimeDynamicParamsInflationFalloff, PolkadotRuntimeDynamicParamsInflationIdealStake, PolkadotRuntimeDynamicParamsInflationMaxInflation, PolkadotRuntimeDynamicParamsInflationMinInflation, PolkadotRuntimeDynamicParamsInflationParameters, PolkadotRuntimeDynamicParamsInflationParametersKey, PolkadotRuntimeDynamicParamsInflationParametersValue, PolkadotRuntimeDynamicParamsInflationUseAuctionSlots, PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin, PolkadotRuntimeNposCompactSolution16, PolkadotRuntimeOriginCaller, PolkadotRuntimeParachainsAssignerCoretimeAssignmentState, PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor, PolkadotRuntimeParachainsAssignerCoretimePalletError, PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor, PolkadotRuntimeParachainsAssignerCoretimeSchedule, PolkadotRuntimeParachainsAssignerCoretimeWorkState, PolkadotRuntimeParachainsAssignerOnDemandPalletCall, PolkadotRuntimeParachainsAssignerOnDemandPalletError, PolkadotRuntimeParachainsAssignerOnDemandPalletEvent, PolkadotRuntimeParachainsAssignerOnDemandTypesCoreAffinityCount, PolkadotRuntimeParachainsAssignerOnDemandTypesEnqueuedOrder, PolkadotRuntimeParachainsAssignerOnDemandTypesQueueStatusType, PolkadotRuntimeParachainsConfigurationHostConfiguration, PolkadotRuntimeParachainsConfigurationPalletCall, PolkadotRuntimeParachainsConfigurationPalletError, PolkadotRuntimeParachainsCoretimePalletCall, PolkadotRuntimeParachainsCoretimePalletError, PolkadotRuntimeParachainsCoretimePalletEvent, PolkadotRuntimeParachainsDisputesDisputeLocation, PolkadotRuntimeParachainsDisputesDisputeResult, PolkadotRuntimeParachainsDisputesPalletCall, PolkadotRuntimeParachainsDisputesPalletError, PolkadotRuntimeParachainsDisputesPalletEvent, PolkadotRuntimeParachainsDisputesSlashingPalletCall, PolkadotRuntimeParachainsDisputesSlashingPalletError, PolkadotRuntimeParachainsHrmpHrmpChannel, PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest, PolkadotRuntimeParachainsHrmpPalletCall, PolkadotRuntimeParachainsHrmpPalletError, PolkadotRuntimeParachainsHrmpPalletEvent, PolkadotRuntimeParachainsInclusionAggregateMessageOrigin, PolkadotRuntimeParachainsInclusionCandidatePendingAvailability, PolkadotRuntimeParachainsInclusionPalletCall, PolkadotRuntimeParachainsInclusionPalletError, PolkadotRuntimeParachainsInclusionPalletEvent, PolkadotRuntimeParachainsInclusionUmpQueueId, PolkadotRuntimeParachainsInitializerBufferedSessionChange, PolkadotRuntimeParachainsInitializerPalletCall, PolkadotRuntimeParachainsOriginPalletOrigin, PolkadotRuntimeParachainsParasInherentPalletCall, PolkadotRuntimeParachainsParasInherentPalletError, PolkadotRuntimeParachainsParasPalletCall, PolkadotRuntimeParachainsParasPalletError, PolkadotRuntimeParachainsParasPalletEvent, PolkadotRuntimeParachainsParasParaGenesisArgs, PolkadotRuntimeParachainsParasParaLifecycle, PolkadotRuntimeParachainsParasParaPastCodeMeta, PolkadotRuntimeParachainsParasPvfCheckActiveVoteState, PolkadotRuntimeParachainsParasPvfCheckCause, PolkadotRuntimeParachainsParasReplacementTimes, PolkadotRuntimeParachainsParasUpgradeStrategy, PolkadotRuntimeParachainsSchedulerCommonAssignment, PolkadotRuntimeParachainsSchedulerPalletCoreOccupied, PolkadotRuntimeParachainsSchedulerPalletParasEntry, PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker, PolkadotRuntimeParachainsSharedPalletCall, PolkadotRuntimeProxyType, PolkadotRuntimeRuntime, PolkadotRuntimeRuntimeError, PolkadotRuntimeRuntimeFreezeReason, PolkadotRuntimeRuntimeHoldReason, PolkadotRuntimeRuntimeParameters, PolkadotRuntimeRuntimeParametersKey, PolkadotRuntimeRuntimeParametersValue, PolkadotRuntimeSessionKeys, RelayCommonApisInflationInfo, SpRuntimeMultiSigner, StagingXcmExecutorAssetTransferTransferType, StagingXcmV3MultiLocation, StagingXcmV4Asset, StagingXcmV4AssetAssetFilter, StagingXcmV4AssetAssetId, StagingXcmV4AssetAssetInstance, StagingXcmV4AssetAssets, StagingXcmV4AssetFungibility, StagingXcmV4AssetWildAsset, StagingXcmV4AssetWildFungibility, StagingXcmV4Instruction, StagingXcmV4Junction, StagingXcmV4JunctionNetworkId, StagingXcmV4Junctions, StagingXcmV4Location, StagingXcmV4PalletInfo, StagingXcmV4QueryResponseInfo, StagingXcmV4Response, StagingXcmV4TraitsOutcome, StagingXcmV4Xcm, XcmDoubleEncoded, XcmRuntimeApisConversionsError, XcmRuntimeApisDryRunCallDryRunEffects, XcmRuntimeApisDryRunError, XcmRuntimeApisDryRunXcmDryRunEffects, XcmRuntimeApisFeesError, XcmV2BodyId, XcmV2BodyPart, XcmV2Instruction, XcmV2Junction, XcmV2MultiAsset, XcmV2MultiLocation, XcmV2MultiassetAssetId, XcmV2MultiassetAssetInstance, XcmV2MultiassetFungibility, XcmV2MultiassetMultiAssetFilter, XcmV2MultiassetMultiAssets, XcmV2MultiassetWildFungibility, XcmV2MultiassetWildMultiAsset, XcmV2MultilocationJunctions, XcmV2NetworkId, XcmV2OriginKind, XcmV2Response, XcmV2TraitsError, XcmV2WeightLimit, XcmV2Xcm, XcmV3Instruction, XcmV3Junction, XcmV3JunctionBodyId, XcmV3JunctionBodyPart, XcmV3JunctionNetworkId, XcmV3Junctions, XcmV3MaybeErrorCode, XcmV3MultiAsset, XcmV3MultiassetAssetId, XcmV3MultiassetAssetInstance, XcmV3MultiassetFungibility, XcmV3MultiassetMultiAssetFilter, XcmV3MultiassetMultiAssets, XcmV3MultiassetWildFungibility, XcmV3MultiassetWildMultiAsset, XcmV3OriginKind, XcmV3PalletInfo, XcmV3QueryResponseInfo, XcmV3Response, XcmV3TraitsError, XcmV3WeightLimit, XcmV3Xcm, XcmVersionedAssetId, XcmVersionedAssets, XcmVersionedLocation, XcmVersionedResponse, XcmVersionedXcm } from 'https://deno.land/x/polkadot/types/lookup.ts';

declare module 'https://deno.land/x/polkadot/types/types/registry.ts' {
  interface InterfaceTypes {
    BinaryHeapEnqueuedOrder: BinaryHeapEnqueuedOrder;
    BinaryHeapReverseQueueIndex: BinaryHeapReverseQueueIndex;
    BitvecOrderLsb0: BitvecOrderLsb0;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    PalletReferendaReferendumInfo: PalletReferendaReferendumInfo;
    PalletReferendaReferendumStatus: PalletReferendaReferendumStatus;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PalletXcmOrigin: PalletXcmOrigin;
    PalletXcmQueryStatus: PalletXcmQueryStatus;
    PalletXcmRemoteLockedFungibleRecord: PalletXcmRemoteLockedFungibleRecord;
    PalletXcmVersionMigrationStage: PalletXcmVersionMigrationStage;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotParachainPrimitivesPrimitivesHrmpChannelId: PolkadotParachainPrimitivesPrimitivesHrmpChannelId;
    PolkadotPrimitivesV7ApprovalVotingParams: PolkadotPrimitivesV7ApprovalVotingParams;
    PolkadotPrimitivesV7AssignmentAppPublic: PolkadotPrimitivesV7AssignmentAppPublic;
    PolkadotPrimitivesV7AsyncBackingAsyncBackingParams: PolkadotPrimitivesV7AsyncBackingAsyncBackingParams;
    PolkadotPrimitivesV7AsyncBackingBackingState: PolkadotPrimitivesV7AsyncBackingBackingState;
    PolkadotPrimitivesV7AsyncBackingCandidatePendingAvailability: PolkadotPrimitivesV7AsyncBackingCandidatePendingAvailability;
    PolkadotPrimitivesV7AsyncBackingConstraints: PolkadotPrimitivesV7AsyncBackingConstraints;
    PolkadotPrimitivesV7AsyncBackingInboundHrmpLimitations: PolkadotPrimitivesV7AsyncBackingInboundHrmpLimitations;
    PolkadotPrimitivesV7AsyncBackingOutboundHrmpChannelLimitations: PolkadotPrimitivesV7AsyncBackingOutboundHrmpChannelLimitations;
    PolkadotPrimitivesV7BackedCandidate: PolkadotPrimitivesV7BackedCandidate;
    PolkadotPrimitivesV7CandidateCommitments: PolkadotPrimitivesV7CandidateCommitments;
    PolkadotPrimitivesV7CandidateDescriptor: PolkadotPrimitivesV7CandidateDescriptor;
    PolkadotPrimitivesV7CandidateEvent: PolkadotPrimitivesV7CandidateEvent;
    PolkadotPrimitivesV7CandidateReceipt: PolkadotPrimitivesV7CandidateReceipt;
    PolkadotPrimitivesV7CollatorAppPublic: PolkadotPrimitivesV7CollatorAppPublic;
    PolkadotPrimitivesV7CollatorAppSignature: PolkadotPrimitivesV7CollatorAppSignature;
    PolkadotPrimitivesV7CommittedCandidateReceipt: PolkadotPrimitivesV7CommittedCandidateReceipt;
    PolkadotPrimitivesV7CoreState: PolkadotPrimitivesV7CoreState;
    PolkadotPrimitivesV7DisputeState: PolkadotPrimitivesV7DisputeState;
    PolkadotPrimitivesV7DisputeStatement: PolkadotPrimitivesV7DisputeStatement;
    PolkadotPrimitivesV7DisputeStatementSet: PolkadotPrimitivesV7DisputeStatementSet;
    PolkadotPrimitivesV7ExecutorParams: PolkadotPrimitivesV7ExecutorParams;
    PolkadotPrimitivesV7ExecutorParamsExecutorParam: PolkadotPrimitivesV7ExecutorParamsExecutorParam;
    PolkadotPrimitivesV7GroupRotationInfo: PolkadotPrimitivesV7GroupRotationInfo;
    PolkadotPrimitivesV7IndexedVecGroupIndex: PolkadotPrimitivesV7IndexedVecGroupIndex;
    PolkadotPrimitivesV7IndexedVecValidatorIndex: PolkadotPrimitivesV7IndexedVecValidatorIndex;
    PolkadotPrimitivesV7InherentData: PolkadotPrimitivesV7InherentData;
    PolkadotPrimitivesV7InvalidDisputeStatementKind: PolkadotPrimitivesV7InvalidDisputeStatementKind;
    PolkadotPrimitivesV7OccupiedCore: PolkadotPrimitivesV7OccupiedCore;
    PolkadotPrimitivesV7OccupiedCoreAssumption: PolkadotPrimitivesV7OccupiedCoreAssumption;
    PolkadotPrimitivesV7PersistedValidationData: PolkadotPrimitivesV7PersistedValidationData;
    PolkadotPrimitivesV7PvfCheckStatement: PolkadotPrimitivesV7PvfCheckStatement;
    PolkadotPrimitivesV7PvfExecKind: PolkadotPrimitivesV7PvfExecKind;
    PolkadotPrimitivesV7PvfPrepKind: PolkadotPrimitivesV7PvfPrepKind;
    PolkadotPrimitivesV7ScheduledCore: PolkadotPrimitivesV7ScheduledCore;
    PolkadotPrimitivesV7ScrapedOnChainVotes: PolkadotPrimitivesV7ScrapedOnChainVotes;
    PolkadotPrimitivesV7SessionInfo: PolkadotPrimitivesV7SessionInfo;
    PolkadotPrimitivesV7SignedUncheckedSigned: PolkadotPrimitivesV7SignedUncheckedSigned;
    PolkadotPrimitivesV7SlashingDisputeProof: PolkadotPrimitivesV7SlashingDisputeProof;
    PolkadotPrimitivesV7SlashingDisputesTimeSlot: PolkadotPrimitivesV7SlashingDisputesTimeSlot;
    PolkadotPrimitivesV7SlashingPendingSlashes: PolkadotPrimitivesV7SlashingPendingSlashes;
    PolkadotPrimitivesV7SlashingSlashingOffenceKind: PolkadotPrimitivesV7SlashingSlashingOffenceKind;
    PolkadotPrimitivesV7UpgradeGoAhead: PolkadotPrimitivesV7UpgradeGoAhead;
    PolkadotPrimitivesV7UpgradeRestriction: PolkadotPrimitivesV7UpgradeRestriction;
    PolkadotPrimitivesV7ValidDisputeStatementKind: PolkadotPrimitivesV7ValidDisputeStatementKind;
    PolkadotPrimitivesV7ValidatorAppPublic: PolkadotPrimitivesV7ValidatorAppPublic;
    PolkadotPrimitivesV7ValidatorAppSignature: PolkadotPrimitivesV7ValidatorAppSignature;
    PolkadotPrimitivesV7ValidityAttestation: PolkadotPrimitivesV7ValidityAttestation;
    PolkadotPrimitivesVstagingSchedulerParams: PolkadotPrimitivesVstagingSchedulerParams;
    PolkadotRuntimeCommonAuctionsPalletCall: PolkadotRuntimeCommonAuctionsPalletCall;
    PolkadotRuntimeCommonAuctionsPalletError: PolkadotRuntimeCommonAuctionsPalletError;
    PolkadotRuntimeCommonAuctionsPalletEvent: PolkadotRuntimeCommonAuctionsPalletEvent;
    PolkadotRuntimeCommonClaimsEcdsaSignature: PolkadotRuntimeCommonClaimsEcdsaSignature;
    PolkadotRuntimeCommonClaimsPalletCall: PolkadotRuntimeCommonClaimsPalletCall;
    PolkadotRuntimeCommonClaimsPalletError: PolkadotRuntimeCommonClaimsPalletError;
    PolkadotRuntimeCommonClaimsPalletEvent: PolkadotRuntimeCommonClaimsPalletEvent;
    PolkadotRuntimeCommonClaimsPrevalidateAttests: PolkadotRuntimeCommonClaimsPrevalidateAttests;
    PolkadotRuntimeCommonClaimsStatementKind: PolkadotRuntimeCommonClaimsStatementKind;
    PolkadotRuntimeCommonCrowdloanFundInfo: PolkadotRuntimeCommonCrowdloanFundInfo;
    PolkadotRuntimeCommonCrowdloanLastContribution: PolkadotRuntimeCommonCrowdloanLastContribution;
    PolkadotRuntimeCommonCrowdloanPalletCall: PolkadotRuntimeCommonCrowdloanPalletCall;
    PolkadotRuntimeCommonCrowdloanPalletError: PolkadotRuntimeCommonCrowdloanPalletError;
    PolkadotRuntimeCommonCrowdloanPalletEvent: PolkadotRuntimeCommonCrowdloanPalletEvent;
    PolkadotRuntimeCommonImplsVersionedLocatableAsset: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
    PolkadotRuntimeCommonParasRegistrarPalletCall: PolkadotRuntimeCommonParasRegistrarPalletCall;
    PolkadotRuntimeCommonParasRegistrarPalletError: PolkadotRuntimeCommonParasRegistrarPalletError;
    PolkadotRuntimeCommonParasRegistrarPalletEvent: PolkadotRuntimeCommonParasRegistrarPalletEvent;
    PolkadotRuntimeCommonParasRegistrarParaInfo: PolkadotRuntimeCommonParasRegistrarParaInfo;
    PolkadotRuntimeCommonSlotsPalletCall: PolkadotRuntimeCommonSlotsPalletCall;
    PolkadotRuntimeCommonSlotsPalletError: PolkadotRuntimeCommonSlotsPalletError;
    PolkadotRuntimeCommonSlotsPalletEvent: PolkadotRuntimeCommonSlotsPalletEvent;
    PolkadotRuntimeDynamicParamsInflationFalloff: PolkadotRuntimeDynamicParamsInflationFalloff;
    PolkadotRuntimeDynamicParamsInflationIdealStake: PolkadotRuntimeDynamicParamsInflationIdealStake;
    PolkadotRuntimeDynamicParamsInflationMaxInflation: PolkadotRuntimeDynamicParamsInflationMaxInflation;
    PolkadotRuntimeDynamicParamsInflationMinInflation: PolkadotRuntimeDynamicParamsInflationMinInflation;
    PolkadotRuntimeDynamicParamsInflationParameters: PolkadotRuntimeDynamicParamsInflationParameters;
    PolkadotRuntimeDynamicParamsInflationParametersKey: PolkadotRuntimeDynamicParamsInflationParametersKey;
    PolkadotRuntimeDynamicParamsInflationParametersValue: PolkadotRuntimeDynamicParamsInflationParametersValue;
    PolkadotRuntimeDynamicParamsInflationUseAuctionSlots: PolkadotRuntimeDynamicParamsInflationUseAuctionSlots;
    PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin: PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    PolkadotRuntimeNposCompactSolution16: PolkadotRuntimeNposCompactSolution16;
    PolkadotRuntimeOriginCaller: PolkadotRuntimeOriginCaller;
    PolkadotRuntimeParachainsAssignerCoretimeAssignmentState: PolkadotRuntimeParachainsAssignerCoretimeAssignmentState;
    PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor: PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor;
    PolkadotRuntimeParachainsAssignerCoretimePalletError: PolkadotRuntimeParachainsAssignerCoretimePalletError;
    PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor: PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor;
    PolkadotRuntimeParachainsAssignerCoretimeSchedule: PolkadotRuntimeParachainsAssignerCoretimeSchedule;
    PolkadotRuntimeParachainsAssignerCoretimeWorkState: PolkadotRuntimeParachainsAssignerCoretimeWorkState;
    PolkadotRuntimeParachainsAssignerOnDemandPalletCall: PolkadotRuntimeParachainsAssignerOnDemandPalletCall;
    PolkadotRuntimeParachainsAssignerOnDemandPalletError: PolkadotRuntimeParachainsAssignerOnDemandPalletError;
    PolkadotRuntimeParachainsAssignerOnDemandPalletEvent: PolkadotRuntimeParachainsAssignerOnDemandPalletEvent;
    PolkadotRuntimeParachainsAssignerOnDemandTypesCoreAffinityCount: PolkadotRuntimeParachainsAssignerOnDemandTypesCoreAffinityCount;
    PolkadotRuntimeParachainsAssignerOnDemandTypesEnqueuedOrder: PolkadotRuntimeParachainsAssignerOnDemandTypesEnqueuedOrder;
    PolkadotRuntimeParachainsAssignerOnDemandTypesQueueStatusType: PolkadotRuntimeParachainsAssignerOnDemandTypesQueueStatusType;
    PolkadotRuntimeParachainsConfigurationHostConfiguration: PolkadotRuntimeParachainsConfigurationHostConfiguration;
    PolkadotRuntimeParachainsConfigurationPalletCall: PolkadotRuntimeParachainsConfigurationPalletCall;
    PolkadotRuntimeParachainsConfigurationPalletError: PolkadotRuntimeParachainsConfigurationPalletError;
    PolkadotRuntimeParachainsCoretimePalletCall: PolkadotRuntimeParachainsCoretimePalletCall;
    PolkadotRuntimeParachainsCoretimePalletError: PolkadotRuntimeParachainsCoretimePalletError;
    PolkadotRuntimeParachainsCoretimePalletEvent: PolkadotRuntimeParachainsCoretimePalletEvent;
    PolkadotRuntimeParachainsDisputesDisputeLocation: PolkadotRuntimeParachainsDisputesDisputeLocation;
    PolkadotRuntimeParachainsDisputesDisputeResult: PolkadotRuntimeParachainsDisputesDisputeResult;
    PolkadotRuntimeParachainsDisputesPalletCall: PolkadotRuntimeParachainsDisputesPalletCall;
    PolkadotRuntimeParachainsDisputesPalletError: PolkadotRuntimeParachainsDisputesPalletError;
    PolkadotRuntimeParachainsDisputesPalletEvent: PolkadotRuntimeParachainsDisputesPalletEvent;
    PolkadotRuntimeParachainsDisputesSlashingPalletCall: PolkadotRuntimeParachainsDisputesSlashingPalletCall;
    PolkadotRuntimeParachainsDisputesSlashingPalletError: PolkadotRuntimeParachainsDisputesSlashingPalletError;
    PolkadotRuntimeParachainsHrmpHrmpChannel: PolkadotRuntimeParachainsHrmpHrmpChannel;
    PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest: PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest;
    PolkadotRuntimeParachainsHrmpPalletCall: PolkadotRuntimeParachainsHrmpPalletCall;
    PolkadotRuntimeParachainsHrmpPalletError: PolkadotRuntimeParachainsHrmpPalletError;
    PolkadotRuntimeParachainsHrmpPalletEvent: PolkadotRuntimeParachainsHrmpPalletEvent;
    PolkadotRuntimeParachainsInclusionAggregateMessageOrigin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
    PolkadotRuntimeParachainsInclusionCandidatePendingAvailability: PolkadotRuntimeParachainsInclusionCandidatePendingAvailability;
    PolkadotRuntimeParachainsInclusionPalletCall: PolkadotRuntimeParachainsInclusionPalletCall;
    PolkadotRuntimeParachainsInclusionPalletError: PolkadotRuntimeParachainsInclusionPalletError;
    PolkadotRuntimeParachainsInclusionPalletEvent: PolkadotRuntimeParachainsInclusionPalletEvent;
    PolkadotRuntimeParachainsInclusionUmpQueueId: PolkadotRuntimeParachainsInclusionUmpQueueId;
    PolkadotRuntimeParachainsInitializerBufferedSessionChange: PolkadotRuntimeParachainsInitializerBufferedSessionChange;
    PolkadotRuntimeParachainsInitializerPalletCall: PolkadotRuntimeParachainsInitializerPalletCall;
    PolkadotRuntimeParachainsOriginPalletOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
    PolkadotRuntimeParachainsParasInherentPalletCall: PolkadotRuntimeParachainsParasInherentPalletCall;
    PolkadotRuntimeParachainsParasInherentPalletError: PolkadotRuntimeParachainsParasInherentPalletError;
    PolkadotRuntimeParachainsParasPalletCall: PolkadotRuntimeParachainsParasPalletCall;
    PolkadotRuntimeParachainsParasPalletError: PolkadotRuntimeParachainsParasPalletError;
    PolkadotRuntimeParachainsParasPalletEvent: PolkadotRuntimeParachainsParasPalletEvent;
    PolkadotRuntimeParachainsParasParaGenesisArgs: PolkadotRuntimeParachainsParasParaGenesisArgs;
    PolkadotRuntimeParachainsParasParaLifecycle: PolkadotRuntimeParachainsParasParaLifecycle;
    PolkadotRuntimeParachainsParasParaPastCodeMeta: PolkadotRuntimeParachainsParasParaPastCodeMeta;
    PolkadotRuntimeParachainsParasPvfCheckActiveVoteState: PolkadotRuntimeParachainsParasPvfCheckActiveVoteState;
    PolkadotRuntimeParachainsParasPvfCheckCause: PolkadotRuntimeParachainsParasPvfCheckCause;
    PolkadotRuntimeParachainsParasReplacementTimes: PolkadotRuntimeParachainsParasReplacementTimes;
    PolkadotRuntimeParachainsParasUpgradeStrategy: PolkadotRuntimeParachainsParasUpgradeStrategy;
    PolkadotRuntimeParachainsSchedulerCommonAssignment: PolkadotRuntimeParachainsSchedulerCommonAssignment;
    PolkadotRuntimeParachainsSchedulerPalletCoreOccupied: PolkadotRuntimeParachainsSchedulerPalletCoreOccupied;
    PolkadotRuntimeParachainsSchedulerPalletParasEntry: PolkadotRuntimeParachainsSchedulerPalletParasEntry;
    PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker: PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker;
    PolkadotRuntimeParachainsSharedPalletCall: PolkadotRuntimeParachainsSharedPalletCall;
    PolkadotRuntimeProxyType: PolkadotRuntimeProxyType;
    PolkadotRuntimeRuntime: PolkadotRuntimeRuntime;
    PolkadotRuntimeRuntimeError: PolkadotRuntimeRuntimeError;
    PolkadotRuntimeRuntimeFreezeReason: PolkadotRuntimeRuntimeFreezeReason;
    PolkadotRuntimeRuntimeHoldReason: PolkadotRuntimeRuntimeHoldReason;
    PolkadotRuntimeRuntimeParameters: PolkadotRuntimeRuntimeParameters;
    PolkadotRuntimeRuntimeParametersKey: PolkadotRuntimeRuntimeParametersKey;
    PolkadotRuntimeRuntimeParametersValue: PolkadotRuntimeRuntimeParametersValue;
    PolkadotRuntimeSessionKeys: PolkadotRuntimeSessionKeys;
    RelayCommonApisInflationInfo: RelayCommonApisInflationInfo;
    SpRuntimeMultiSigner: SpRuntimeMultiSigner;
    StagingXcmExecutorAssetTransferTransferType: StagingXcmExecutorAssetTransferTransferType;
    StagingXcmV3MultiLocation: StagingXcmV3MultiLocation;
    StagingXcmV4Asset: StagingXcmV4Asset;
    StagingXcmV4AssetAssetFilter: StagingXcmV4AssetAssetFilter;
    StagingXcmV4AssetAssetId: StagingXcmV4AssetAssetId;
    StagingXcmV4AssetAssetInstance: StagingXcmV4AssetAssetInstance;
    StagingXcmV4AssetAssets: StagingXcmV4AssetAssets;
    StagingXcmV4AssetFungibility: StagingXcmV4AssetFungibility;
    StagingXcmV4AssetWildAsset: StagingXcmV4AssetWildAsset;
    StagingXcmV4AssetWildFungibility: StagingXcmV4AssetWildFungibility;
    StagingXcmV4Instruction: StagingXcmV4Instruction;
    StagingXcmV4Junction: StagingXcmV4Junction;
    StagingXcmV4JunctionNetworkId: StagingXcmV4JunctionNetworkId;
    StagingXcmV4Junctions: StagingXcmV4Junctions;
    StagingXcmV4Location: StagingXcmV4Location;
    StagingXcmV4PalletInfo: StagingXcmV4PalletInfo;
    StagingXcmV4QueryResponseInfo: StagingXcmV4QueryResponseInfo;
    StagingXcmV4Response: StagingXcmV4Response;
    StagingXcmV4TraitsOutcome: StagingXcmV4TraitsOutcome;
    StagingXcmV4Xcm: StagingXcmV4Xcm;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmRuntimeApisConversionsError: XcmRuntimeApisConversionsError;
    XcmRuntimeApisDryRunCallDryRunEffects: XcmRuntimeApisDryRunCallDryRunEffects;
    XcmRuntimeApisDryRunError: XcmRuntimeApisDryRunError;
    XcmRuntimeApisDryRunXcmDryRunEffects: XcmRuntimeApisDryRunXcmDryRunEffects;
    XcmRuntimeApisFeesError: XcmRuntimeApisFeesError;
    XcmV2BodyId: XcmV2BodyId;
    XcmV2BodyPart: XcmV2BodyPart;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Junction: XcmV2Junction;
    XcmV2MultiAsset: XcmV2MultiAsset;
    XcmV2MultiLocation: XcmV2MultiLocation;
    XcmV2MultiassetAssetId: XcmV2MultiassetAssetId;
    XcmV2MultiassetAssetInstance: XcmV2MultiassetAssetInstance;
    XcmV2MultiassetFungibility: XcmV2MultiassetFungibility;
    XcmV2MultiassetMultiAssetFilter: XcmV2MultiassetMultiAssetFilter;
    XcmV2MultiassetMultiAssets: XcmV2MultiassetMultiAssets;
    XcmV2MultiassetWildFungibility: XcmV2MultiassetWildFungibility;
    XcmV2MultiassetWildMultiAsset: XcmV2MultiassetWildMultiAsset;
    XcmV2MultilocationJunctions: XcmV2MultilocationJunctions;
    XcmV2NetworkId: XcmV2NetworkId;
    XcmV2OriginKind: XcmV2OriginKind;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
    XcmV3Instruction: XcmV3Instruction;
    XcmV3Junction: XcmV3Junction;
    XcmV3JunctionBodyId: XcmV3JunctionBodyId;
    XcmV3JunctionBodyPart: XcmV3JunctionBodyPart;
    XcmV3JunctionNetworkId: XcmV3JunctionNetworkId;
    XcmV3Junctions: XcmV3Junctions;
    XcmV3MaybeErrorCode: XcmV3MaybeErrorCode;
    XcmV3MultiAsset: XcmV3MultiAsset;
    XcmV3MultiassetAssetId: XcmV3MultiassetAssetId;
    XcmV3MultiassetAssetInstance: XcmV3MultiassetAssetInstance;
    XcmV3MultiassetFungibility: XcmV3MultiassetFungibility;
    XcmV3MultiassetMultiAssetFilter: XcmV3MultiassetMultiAssetFilter;
    XcmV3MultiassetMultiAssets: XcmV3MultiassetMultiAssets;
    XcmV3MultiassetWildFungibility: XcmV3MultiassetWildFungibility;
    XcmV3MultiassetWildMultiAsset: XcmV3MultiassetWildMultiAsset;
    XcmV3OriginKind: XcmV3OriginKind;
    XcmV3PalletInfo: XcmV3PalletInfo;
    XcmV3QueryResponseInfo: XcmV3QueryResponseInfo;
    XcmV3Response: XcmV3Response;
    XcmV3TraitsError: XcmV3TraitsError;
    XcmV3WeightLimit: XcmV3WeightLimit;
    XcmV3Xcm: XcmV3Xcm;
    XcmVersionedAssetId: XcmVersionedAssetId;
    XcmVersionedAssets: XcmVersionedAssets;
    XcmVersionedLocation: XcmVersionedLocation;
    XcmVersionedResponse: XcmVersionedResponse;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
