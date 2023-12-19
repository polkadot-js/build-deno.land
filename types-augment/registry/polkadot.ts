/* eslint-disable */

import 'https://deno.land/x/polkadot@0.2.45/types/types/registry.ts';

import type { BitvecOrderLsb0, PalletBalancesIdAmount, PalletIdentityBitFlags, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletReferendaReferendumInfo, PalletReferendaReferendumStatus, PalletStakingExposure, PalletStakingIndividualExposure, PalletTransactionPaymentChargeTransactionPayment, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesHrmpChannelId, PolkadotPrimitivesV5Assignment, PolkadotPrimitivesV5AssignmentAppPublic, PolkadotPrimitivesV5BackedCandidate, PolkadotPrimitivesV5CandidateCommitments, PolkadotPrimitivesV5CandidateDescriptor, PolkadotPrimitivesV5CandidateReceipt, PolkadotPrimitivesV5CollatorAppPublic, PolkadotPrimitivesV5CollatorAppSignature, PolkadotPrimitivesV5CommittedCandidateReceipt, PolkadotPrimitivesV5CoreOccupied, PolkadotPrimitivesV5DisputeState, PolkadotPrimitivesV5DisputeStatement, PolkadotPrimitivesV5DisputeStatementSet, PolkadotPrimitivesV5ExecutorParams, PolkadotPrimitivesV5ExecutorParamsExecutorParam, PolkadotPrimitivesV5IndexedVecGroupIndex, PolkadotPrimitivesV5IndexedVecValidatorIndex, PolkadotPrimitivesV5InherentData, PolkadotPrimitivesV5InvalidDisputeStatementKind, PolkadotPrimitivesV5ParasEntry, PolkadotPrimitivesV5PvfCheckStatement, PolkadotPrimitivesV5PvfExecTimeoutKind, PolkadotPrimitivesV5PvfPrepTimeoutKind, PolkadotPrimitivesV5ScrapedOnChainVotes, PolkadotPrimitivesV5SessionInfo, PolkadotPrimitivesV5SignedUncheckedSigned, PolkadotPrimitivesV5SlashingDisputeProof, PolkadotPrimitivesV5SlashingDisputesTimeSlot, PolkadotPrimitivesV5SlashingPendingSlashes, PolkadotPrimitivesV5SlashingSlashingOffenceKind, PolkadotPrimitivesV5UpgradeGoAhead, PolkadotPrimitivesV5UpgradeRestriction, PolkadotPrimitivesV5ValidDisputeStatementKind, PolkadotPrimitivesV5ValidatorAppPublic, PolkadotPrimitivesV5ValidatorAppSignature, PolkadotPrimitivesV5ValidityAttestation, PolkadotPrimitivesVstagingAsyncBackingParams, PolkadotRuntimeCommonAuctionsPalletCall, PolkadotRuntimeCommonAuctionsPalletError, PolkadotRuntimeCommonAuctionsPalletEvent, PolkadotRuntimeCommonClaimsEcdsaSignature, PolkadotRuntimeCommonClaimsPalletCall, PolkadotRuntimeCommonClaimsPalletError, PolkadotRuntimeCommonClaimsPalletEvent, PolkadotRuntimeCommonClaimsPrevalidateAttests, PolkadotRuntimeCommonClaimsStatementKind, PolkadotRuntimeCommonCrowdloanFundInfo, PolkadotRuntimeCommonCrowdloanLastContribution, PolkadotRuntimeCommonCrowdloanPalletCall, PolkadotRuntimeCommonCrowdloanPalletError, PolkadotRuntimeCommonCrowdloanPalletEvent, PolkadotRuntimeCommonParasRegistrarPalletCall, PolkadotRuntimeCommonParasRegistrarPalletError, PolkadotRuntimeCommonParasRegistrarPalletEvent, PolkadotRuntimeCommonParasRegistrarParaInfo, PolkadotRuntimeCommonSlotsPalletCall, PolkadotRuntimeCommonSlotsPalletError, PolkadotRuntimeCommonSlotsPalletEvent, PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin, PolkadotRuntimeNposCompactSolution16, PolkadotRuntimeOriginCaller, PolkadotRuntimeParachainsConfigurationHostConfiguration, PolkadotRuntimeParachainsConfigurationPalletCall, PolkadotRuntimeParachainsConfigurationPalletError, PolkadotRuntimeParachainsDisputesDisputeLocation, PolkadotRuntimeParachainsDisputesDisputeResult, PolkadotRuntimeParachainsDisputesPalletCall, PolkadotRuntimeParachainsDisputesPalletError, PolkadotRuntimeParachainsDisputesPalletEvent, PolkadotRuntimeParachainsDisputesSlashingPalletCall, PolkadotRuntimeParachainsDisputesSlashingPalletError, PolkadotRuntimeParachainsHrmpHrmpChannel, PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest, PolkadotRuntimeParachainsHrmpPalletCall, PolkadotRuntimeParachainsHrmpPalletError, PolkadotRuntimeParachainsHrmpPalletEvent, PolkadotRuntimeParachainsInclusionAggregateMessageOrigin, PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord, PolkadotRuntimeParachainsInclusionCandidatePendingAvailability, PolkadotRuntimeParachainsInclusionPalletCall, PolkadotRuntimeParachainsInclusionPalletError, PolkadotRuntimeParachainsInclusionPalletEvent, PolkadotRuntimeParachainsInclusionUmpQueueId, PolkadotRuntimeParachainsInitializerBufferedSessionChange, PolkadotRuntimeParachainsInitializerPalletCall, PolkadotRuntimeParachainsOriginPalletOrigin, PolkadotRuntimeParachainsParasInherentPalletCall, PolkadotRuntimeParachainsParasInherentPalletError, PolkadotRuntimeParachainsParasPalletCall, PolkadotRuntimeParachainsParasPalletError, PolkadotRuntimeParachainsParasPalletEvent, PolkadotRuntimeParachainsParasParaGenesisArgs, PolkadotRuntimeParachainsParasParaLifecycle, PolkadotRuntimeParachainsParasParaPastCodeMeta, PolkadotRuntimeParachainsParasPvfCheckActiveVoteState, PolkadotRuntimeParachainsParasPvfCheckCause, PolkadotRuntimeParachainsParasReplacementTimes, PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker, PolkadotRuntimeParachainsSharedPalletCall, PolkadotRuntimeProxyType, PolkadotRuntimeRuntime, PolkadotRuntimeRuntimeHoldReason, PolkadotRuntimeSessionKeys, SpCoreEcdsaPublic, SpRuntimeMultiSigner, XcmDoubleEncoded, XcmV2BodyId, XcmV2BodyPart, XcmV2Instruction, XcmV2Junction, XcmV2MultiAsset, XcmV2MultiLocation, XcmV2MultiassetAssetId, XcmV2MultiassetAssetInstance, XcmV2MultiassetFungibility, XcmV2MultiassetMultiAssetFilter, XcmV2MultiassetMultiAssets, XcmV2MultiassetWildFungibility, XcmV2MultiassetWildMultiAsset, XcmV2MultilocationJunctions, XcmV2NetworkId, XcmV2OriginKind, XcmV2Response, XcmV2TraitsError, XcmV2WeightLimit, XcmV2Xcm, XcmV3Instruction, XcmV3Junction, XcmV3JunctionBodyId, XcmV3JunctionBodyPart, XcmV3JunctionNetworkId, XcmV3Junctions, XcmV3MaybeErrorCode, XcmV3MultiAsset, XcmV3MultiLocation, XcmV3MultiassetAssetId, XcmV3MultiassetAssetInstance, XcmV3MultiassetFungibility, XcmV3MultiassetMultiAssetFilter, XcmV3MultiassetMultiAssets, XcmV3MultiassetWildFungibility, XcmV3MultiassetWildMultiAsset, XcmV3PalletInfo, XcmV3QueryResponseInfo, XcmV3Response, XcmV3TraitsError, XcmV3TraitsOutcome, XcmV3WeightLimit, XcmV3Xcm, XcmVersionedAssetId, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedResponse, XcmVersionedXcm } from 'https://deno.land/x/polkadot@0.2.45/types/lookup.ts';

declare module 'https://deno.land/x/polkadot@0.2.45/types/types/registry.ts' {
  interface InterfaceTypes {
    BitvecOrderLsb0: BitvecOrderLsb0;
    PalletBalancesIdAmount: PalletBalancesIdAmount;
    PalletIdentityBitFlags: PalletIdentityBitFlags;
    PalletIdentityIdentityField: PalletIdentityIdentityField;
    PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
    PalletReferendaReferendumInfo: PalletReferendaReferendumInfo;
    PalletReferendaReferendumStatus: PalletReferendaReferendumStatus;
    PalletStakingExposure: PalletStakingExposure;
    PalletStakingIndividualExposure: PalletStakingIndividualExposure;
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
    PolkadotParachainPrimitivesHrmpChannelId: PolkadotParachainPrimitivesHrmpChannelId;
    PolkadotPrimitivesV5Assignment: PolkadotPrimitivesV5Assignment;
    PolkadotPrimitivesV5AssignmentAppPublic: PolkadotPrimitivesV5AssignmentAppPublic;
    PolkadotPrimitivesV5BackedCandidate: PolkadotPrimitivesV5BackedCandidate;
    PolkadotPrimitivesV5CandidateCommitments: PolkadotPrimitivesV5CandidateCommitments;
    PolkadotPrimitivesV5CandidateDescriptor: PolkadotPrimitivesV5CandidateDescriptor;
    PolkadotPrimitivesV5CandidateReceipt: PolkadotPrimitivesV5CandidateReceipt;
    PolkadotPrimitivesV5CollatorAppPublic: PolkadotPrimitivesV5CollatorAppPublic;
    PolkadotPrimitivesV5CollatorAppSignature: PolkadotPrimitivesV5CollatorAppSignature;
    PolkadotPrimitivesV5CommittedCandidateReceipt: PolkadotPrimitivesV5CommittedCandidateReceipt;
    PolkadotPrimitivesV5CoreOccupied: PolkadotPrimitivesV5CoreOccupied;
    PolkadotPrimitivesV5DisputeState: PolkadotPrimitivesV5DisputeState;
    PolkadotPrimitivesV5DisputeStatement: PolkadotPrimitivesV5DisputeStatement;
    PolkadotPrimitivesV5DisputeStatementSet: PolkadotPrimitivesV5DisputeStatementSet;
    PolkadotPrimitivesV5ExecutorParams: PolkadotPrimitivesV5ExecutorParams;
    PolkadotPrimitivesV5ExecutorParamsExecutorParam: PolkadotPrimitivesV5ExecutorParamsExecutorParam;
    PolkadotPrimitivesV5IndexedVecGroupIndex: PolkadotPrimitivesV5IndexedVecGroupIndex;
    PolkadotPrimitivesV5IndexedVecValidatorIndex: PolkadotPrimitivesV5IndexedVecValidatorIndex;
    PolkadotPrimitivesV5InherentData: PolkadotPrimitivesV5InherentData;
    PolkadotPrimitivesV5InvalidDisputeStatementKind: PolkadotPrimitivesV5InvalidDisputeStatementKind;
    PolkadotPrimitivesV5ParasEntry: PolkadotPrimitivesV5ParasEntry;
    PolkadotPrimitivesV5PvfCheckStatement: PolkadotPrimitivesV5PvfCheckStatement;
    PolkadotPrimitivesV5PvfExecTimeoutKind: PolkadotPrimitivesV5PvfExecTimeoutKind;
    PolkadotPrimitivesV5PvfPrepTimeoutKind: PolkadotPrimitivesV5PvfPrepTimeoutKind;
    PolkadotPrimitivesV5ScrapedOnChainVotes: PolkadotPrimitivesV5ScrapedOnChainVotes;
    PolkadotPrimitivesV5SessionInfo: PolkadotPrimitivesV5SessionInfo;
    PolkadotPrimitivesV5SignedUncheckedSigned: PolkadotPrimitivesV5SignedUncheckedSigned;
    PolkadotPrimitivesV5SlashingDisputeProof: PolkadotPrimitivesV5SlashingDisputeProof;
    PolkadotPrimitivesV5SlashingDisputesTimeSlot: PolkadotPrimitivesV5SlashingDisputesTimeSlot;
    PolkadotPrimitivesV5SlashingPendingSlashes: PolkadotPrimitivesV5SlashingPendingSlashes;
    PolkadotPrimitivesV5SlashingSlashingOffenceKind: PolkadotPrimitivesV5SlashingSlashingOffenceKind;
    PolkadotPrimitivesV5UpgradeGoAhead: PolkadotPrimitivesV5UpgradeGoAhead;
    PolkadotPrimitivesV5UpgradeRestriction: PolkadotPrimitivesV5UpgradeRestriction;
    PolkadotPrimitivesV5ValidDisputeStatementKind: PolkadotPrimitivesV5ValidDisputeStatementKind;
    PolkadotPrimitivesV5ValidatorAppPublic: PolkadotPrimitivesV5ValidatorAppPublic;
    PolkadotPrimitivesV5ValidatorAppSignature: PolkadotPrimitivesV5ValidatorAppSignature;
    PolkadotPrimitivesV5ValidityAttestation: PolkadotPrimitivesV5ValidityAttestation;
    PolkadotPrimitivesVstagingAsyncBackingParams: PolkadotPrimitivesVstagingAsyncBackingParams;
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
    PolkadotRuntimeCommonParasRegistrarPalletCall: PolkadotRuntimeCommonParasRegistrarPalletCall;
    PolkadotRuntimeCommonParasRegistrarPalletError: PolkadotRuntimeCommonParasRegistrarPalletError;
    PolkadotRuntimeCommonParasRegistrarPalletEvent: PolkadotRuntimeCommonParasRegistrarPalletEvent;
    PolkadotRuntimeCommonParasRegistrarParaInfo: PolkadotRuntimeCommonParasRegistrarParaInfo;
    PolkadotRuntimeCommonSlotsPalletCall: PolkadotRuntimeCommonSlotsPalletCall;
    PolkadotRuntimeCommonSlotsPalletError: PolkadotRuntimeCommonSlotsPalletError;
    PolkadotRuntimeCommonSlotsPalletEvent: PolkadotRuntimeCommonSlotsPalletEvent;
    PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin: PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    PolkadotRuntimeNposCompactSolution16: PolkadotRuntimeNposCompactSolution16;
    PolkadotRuntimeOriginCaller: PolkadotRuntimeOriginCaller;
    PolkadotRuntimeParachainsConfigurationHostConfiguration: PolkadotRuntimeParachainsConfigurationHostConfiguration;
    PolkadotRuntimeParachainsConfigurationPalletCall: PolkadotRuntimeParachainsConfigurationPalletCall;
    PolkadotRuntimeParachainsConfigurationPalletError: PolkadotRuntimeParachainsConfigurationPalletError;
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
    PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord: PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord;
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
    PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker: PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker;
    PolkadotRuntimeParachainsSharedPalletCall: PolkadotRuntimeParachainsSharedPalletCall;
    PolkadotRuntimeProxyType: PolkadotRuntimeProxyType;
    PolkadotRuntimeRuntime: PolkadotRuntimeRuntime;
    PolkadotRuntimeRuntimeHoldReason: PolkadotRuntimeRuntimeHoldReason;
    PolkadotRuntimeSessionKeys: PolkadotRuntimeSessionKeys;
    SpCoreEcdsaPublic: SpCoreEcdsaPublic;
    SpRuntimeMultiSigner: SpRuntimeMultiSigner;
    XcmDoubleEncoded: XcmDoubleEncoded;
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
    XcmV3MultiLocation: XcmV3MultiLocation;
    XcmV3MultiassetAssetId: XcmV3MultiassetAssetId;
    XcmV3MultiassetAssetInstance: XcmV3MultiassetAssetInstance;
    XcmV3MultiassetFungibility: XcmV3MultiassetFungibility;
    XcmV3MultiassetMultiAssetFilter: XcmV3MultiassetMultiAssetFilter;
    XcmV3MultiassetMultiAssets: XcmV3MultiassetMultiAssets;
    XcmV3MultiassetWildFungibility: XcmV3MultiassetWildFungibility;
    XcmV3MultiassetWildMultiAsset: XcmV3MultiassetWildMultiAsset;
    XcmV3PalletInfo: XcmV3PalletInfo;
    XcmV3QueryResponseInfo: XcmV3QueryResponseInfo;
    XcmV3Response: XcmV3Response;
    XcmV3TraitsError: XcmV3TraitsError;
    XcmV3TraitsOutcome: XcmV3TraitsOutcome;
    XcmV3WeightLimit: XcmV3WeightLimit;
    XcmV3Xcm: XcmV3Xcm;
    XcmVersionedAssetId: XcmVersionedAssetId;
    XcmVersionedMultiAssets: XcmVersionedMultiAssets;
    XcmVersionedMultiLocation: XcmVersionedMultiLocation;
    XcmVersionedResponse: XcmVersionedResponse;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
