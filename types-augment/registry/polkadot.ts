/* eslint-disable */

import 'https://deno.land/x/polkadot@0.2.30/types/types/registry.ts';

import type { BitvecOrderLsb0, PalletTransactionPaymentChargeTransactionPayment, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesHrmpChannelId, PolkadotPrimitivesV2AssignmentAppPublic, PolkadotPrimitivesV2BackedCandidate, PolkadotPrimitivesV2CandidateCommitments, PolkadotPrimitivesV2CandidateDescriptor, PolkadotPrimitivesV2CandidateReceipt, PolkadotPrimitivesV2CollatorAppPublic, PolkadotPrimitivesV2CollatorAppSignature, PolkadotPrimitivesV2CommittedCandidateReceipt, PolkadotPrimitivesV2CoreOccupied, PolkadotPrimitivesV2DisputeState, PolkadotPrimitivesV2DisputeStatement, PolkadotPrimitivesV2DisputeStatementSet, PolkadotPrimitivesV2IndexedVecGroupIndex, PolkadotPrimitivesV2IndexedVecValidatorIndex, PolkadotPrimitivesV2InherentData, PolkadotPrimitivesV2InvalidDisputeStatementKind, PolkadotPrimitivesV2ParathreadClaim, PolkadotPrimitivesV2ParathreadEntry, PolkadotPrimitivesV2PvfCheckStatement, PolkadotPrimitivesV2PvfExecTimeoutKind, PolkadotPrimitivesV2PvfPrepTimeoutKind, PolkadotPrimitivesV2ScrapedOnChainVotes, PolkadotPrimitivesV2SessionInfo, PolkadotPrimitivesV2SignedUncheckedSigned, PolkadotPrimitivesV2UpgradeGoAhead, PolkadotPrimitivesV2UpgradeRestriction, PolkadotPrimitivesV2ValidDisputeStatementKind, PolkadotPrimitivesV2ValidatorAppPublic, PolkadotPrimitivesV2ValidatorAppSignature, PolkadotPrimitivesV2ValidityAttestation, PolkadotPrimitivesVstagingExecutorParams, PolkadotPrimitivesVstagingExecutorParamsExecutorParam, PolkadotRuntimeCommonAuctionsPalletCall, PolkadotRuntimeCommonAuctionsPalletError, PolkadotRuntimeCommonAuctionsPalletEvent, PolkadotRuntimeCommonClaimsEcdsaSignature, PolkadotRuntimeCommonClaimsPalletCall, PolkadotRuntimeCommonClaimsPalletError, PolkadotRuntimeCommonClaimsPalletEvent, PolkadotRuntimeCommonClaimsPrevalidateAttests, PolkadotRuntimeCommonClaimsStatementKind, PolkadotRuntimeCommonCrowdloanFundInfo, PolkadotRuntimeCommonCrowdloanLastContribution, PolkadotRuntimeCommonCrowdloanPalletCall, PolkadotRuntimeCommonCrowdloanPalletError, PolkadotRuntimeCommonCrowdloanPalletEvent, PolkadotRuntimeCommonParasRegistrarPalletCall, PolkadotRuntimeCommonParasRegistrarPalletError, PolkadotRuntimeCommonParasRegistrarPalletEvent, PolkadotRuntimeCommonParasRegistrarParaInfo, PolkadotRuntimeCommonSlotsPalletCall, PolkadotRuntimeCommonSlotsPalletError, PolkadotRuntimeCommonSlotsPalletEvent, PolkadotRuntimeNposCompactSolution16, PolkadotRuntimeOriginCaller, PolkadotRuntimeParachainsConfigurationHostConfiguration, PolkadotRuntimeParachainsConfigurationPalletCall, PolkadotRuntimeParachainsConfigurationPalletError, PolkadotRuntimeParachainsDisputesDisputeLocation, PolkadotRuntimeParachainsDisputesDisputeResult, PolkadotRuntimeParachainsDisputesPalletCall, PolkadotRuntimeParachainsDisputesPalletError, PolkadotRuntimeParachainsDisputesPalletEvent, PolkadotRuntimeParachainsDmpPalletCall, PolkadotRuntimeParachainsHrmpHrmpChannel, PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest, PolkadotRuntimeParachainsHrmpPalletCall, PolkadotRuntimeParachainsHrmpPalletError, PolkadotRuntimeParachainsHrmpPalletEvent, PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord, PolkadotRuntimeParachainsInclusionCandidatePendingAvailability, PolkadotRuntimeParachainsInclusionPalletCall, PolkadotRuntimeParachainsInclusionPalletError, PolkadotRuntimeParachainsInclusionPalletEvent, PolkadotRuntimeParachainsInitializerBufferedSessionChange, PolkadotRuntimeParachainsInitializerPalletCall, PolkadotRuntimeParachainsOriginPalletOrigin, PolkadotRuntimeParachainsParasInherentPalletCall, PolkadotRuntimeParachainsParasInherentPalletError, PolkadotRuntimeParachainsParasPalletCall, PolkadotRuntimeParachainsParasPalletError, PolkadotRuntimeParachainsParasPalletEvent, PolkadotRuntimeParachainsParasParaGenesisArgs, PolkadotRuntimeParachainsParasParaLifecycle, PolkadotRuntimeParachainsParasParaPastCodeMeta, PolkadotRuntimeParachainsParasPvfCheckActiveVoteState, PolkadotRuntimeParachainsParasPvfCheckCause, PolkadotRuntimeParachainsParasReplacementTimes, PolkadotRuntimeParachainsSchedulerAssignmentKind, PolkadotRuntimeParachainsSchedulerCoreAssignment, PolkadotRuntimeParachainsSchedulerParathreadClaimQueue, PolkadotRuntimeParachainsSchedulerQueuedParathread, PolkadotRuntimeParachainsSharedPalletCall, PolkadotRuntimeParachainsUmpPalletCall, PolkadotRuntimeParachainsUmpPalletError, PolkadotRuntimeParachainsUmpPalletEvent, PolkadotRuntimeProxyType, PolkadotRuntimeRuntime, PolkadotRuntimeSessionKeys, SpCoreEcdsaPublic, SpRuntimeMultiSigner, XcmDoubleEncoded, XcmV2BodyId, XcmV2BodyPart, XcmV2Instruction, XcmV2Junction, XcmV2MultiAsset, XcmV2MultiLocation, XcmV2MultiassetAssetId, XcmV2MultiassetAssetInstance, XcmV2MultiassetFungibility, XcmV2MultiassetMultiAssetFilter, XcmV2MultiassetMultiAssets, XcmV2MultiassetWildFungibility, XcmV2MultiassetWildMultiAsset, XcmV2MultilocationJunctions, XcmV2NetworkId, XcmV2OriginKind, XcmV2Response, XcmV2TraitsError, XcmV2WeightLimit, XcmV2Xcm, XcmV3Instruction, XcmV3Junction, XcmV3JunctionBodyId, XcmV3JunctionBodyPart, XcmV3JunctionNetworkId, XcmV3Junctions, XcmV3MaybeErrorCode, XcmV3MultiAsset, XcmV3MultiLocation, XcmV3MultiassetAssetId, XcmV3MultiassetAssetInstance, XcmV3MultiassetFungibility, XcmV3MultiassetMultiAssetFilter, XcmV3MultiassetMultiAssets, XcmV3MultiassetWildFungibility, XcmV3MultiassetWildMultiAsset, XcmV3PalletInfo, XcmV3QueryResponseInfo, XcmV3Response, XcmV3TraitsError, XcmV3TraitsOutcome, XcmV3WeightLimit, XcmV3Xcm, XcmVersionedAssetId, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedResponse, XcmVersionedXcm } from 'https://deno.land/x/polkadot@0.2.30/types/lookup.ts';

declare module 'https://deno.land/x/polkadot@0.2.30/types/types/registry.ts' {
  interface InterfaceTypes {
    BitvecOrderLsb0: BitvecOrderLsb0;
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
    PolkadotPrimitivesV2AssignmentAppPublic: PolkadotPrimitivesV2AssignmentAppPublic;
    PolkadotPrimitivesV2BackedCandidate: PolkadotPrimitivesV2BackedCandidate;
    PolkadotPrimitivesV2CandidateCommitments: PolkadotPrimitivesV2CandidateCommitments;
    PolkadotPrimitivesV2CandidateDescriptor: PolkadotPrimitivesV2CandidateDescriptor;
    PolkadotPrimitivesV2CandidateReceipt: PolkadotPrimitivesV2CandidateReceipt;
    PolkadotPrimitivesV2CollatorAppPublic: PolkadotPrimitivesV2CollatorAppPublic;
    PolkadotPrimitivesV2CollatorAppSignature: PolkadotPrimitivesV2CollatorAppSignature;
    PolkadotPrimitivesV2CommittedCandidateReceipt: PolkadotPrimitivesV2CommittedCandidateReceipt;
    PolkadotPrimitivesV2CoreOccupied: PolkadotPrimitivesV2CoreOccupied;
    PolkadotPrimitivesV2DisputeState: PolkadotPrimitivesV2DisputeState;
    PolkadotPrimitivesV2DisputeStatement: PolkadotPrimitivesV2DisputeStatement;
    PolkadotPrimitivesV2DisputeStatementSet: PolkadotPrimitivesV2DisputeStatementSet;
    PolkadotPrimitivesV2IndexedVecGroupIndex: PolkadotPrimitivesV2IndexedVecGroupIndex;
    PolkadotPrimitivesV2IndexedVecValidatorIndex: PolkadotPrimitivesV2IndexedVecValidatorIndex;
    PolkadotPrimitivesV2InherentData: PolkadotPrimitivesV2InherentData;
    PolkadotPrimitivesV2InvalidDisputeStatementKind: PolkadotPrimitivesV2InvalidDisputeStatementKind;
    PolkadotPrimitivesV2ParathreadClaim: PolkadotPrimitivesV2ParathreadClaim;
    PolkadotPrimitivesV2ParathreadEntry: PolkadotPrimitivesV2ParathreadEntry;
    PolkadotPrimitivesV2PvfCheckStatement: PolkadotPrimitivesV2PvfCheckStatement;
    PolkadotPrimitivesV2PvfExecTimeoutKind: PolkadotPrimitivesV2PvfExecTimeoutKind;
    PolkadotPrimitivesV2PvfPrepTimeoutKind: PolkadotPrimitivesV2PvfPrepTimeoutKind;
    PolkadotPrimitivesV2ScrapedOnChainVotes: PolkadotPrimitivesV2ScrapedOnChainVotes;
    PolkadotPrimitivesV2SessionInfo: PolkadotPrimitivesV2SessionInfo;
    PolkadotPrimitivesV2SignedUncheckedSigned: PolkadotPrimitivesV2SignedUncheckedSigned;
    PolkadotPrimitivesV2UpgradeGoAhead: PolkadotPrimitivesV2UpgradeGoAhead;
    PolkadotPrimitivesV2UpgradeRestriction: PolkadotPrimitivesV2UpgradeRestriction;
    PolkadotPrimitivesV2ValidDisputeStatementKind: PolkadotPrimitivesV2ValidDisputeStatementKind;
    PolkadotPrimitivesV2ValidatorAppPublic: PolkadotPrimitivesV2ValidatorAppPublic;
    PolkadotPrimitivesV2ValidatorAppSignature: PolkadotPrimitivesV2ValidatorAppSignature;
    PolkadotPrimitivesV2ValidityAttestation: PolkadotPrimitivesV2ValidityAttestation;
    PolkadotPrimitivesVstagingExecutorParams: PolkadotPrimitivesVstagingExecutorParams;
    PolkadotPrimitivesVstagingExecutorParamsExecutorParam: PolkadotPrimitivesVstagingExecutorParamsExecutorParam;
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
    PolkadotRuntimeParachainsDmpPalletCall: PolkadotRuntimeParachainsDmpPalletCall;
    PolkadotRuntimeParachainsHrmpHrmpChannel: PolkadotRuntimeParachainsHrmpHrmpChannel;
    PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest: PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest;
    PolkadotRuntimeParachainsHrmpPalletCall: PolkadotRuntimeParachainsHrmpPalletCall;
    PolkadotRuntimeParachainsHrmpPalletError: PolkadotRuntimeParachainsHrmpPalletError;
    PolkadotRuntimeParachainsHrmpPalletEvent: PolkadotRuntimeParachainsHrmpPalletEvent;
    PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord: PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord;
    PolkadotRuntimeParachainsInclusionCandidatePendingAvailability: PolkadotRuntimeParachainsInclusionCandidatePendingAvailability;
    PolkadotRuntimeParachainsInclusionPalletCall: PolkadotRuntimeParachainsInclusionPalletCall;
    PolkadotRuntimeParachainsInclusionPalletError: PolkadotRuntimeParachainsInclusionPalletError;
    PolkadotRuntimeParachainsInclusionPalletEvent: PolkadotRuntimeParachainsInclusionPalletEvent;
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
    PolkadotRuntimeParachainsSchedulerAssignmentKind: PolkadotRuntimeParachainsSchedulerAssignmentKind;
    PolkadotRuntimeParachainsSchedulerCoreAssignment: PolkadotRuntimeParachainsSchedulerCoreAssignment;
    PolkadotRuntimeParachainsSchedulerParathreadClaimQueue: PolkadotRuntimeParachainsSchedulerParathreadClaimQueue;
    PolkadotRuntimeParachainsSchedulerQueuedParathread: PolkadotRuntimeParachainsSchedulerQueuedParathread;
    PolkadotRuntimeParachainsSharedPalletCall: PolkadotRuntimeParachainsSharedPalletCall;
    PolkadotRuntimeParachainsUmpPalletCall: PolkadotRuntimeParachainsUmpPalletCall;
    PolkadotRuntimeParachainsUmpPalletError: PolkadotRuntimeParachainsUmpPalletError;
    PolkadotRuntimeParachainsUmpPalletEvent: PolkadotRuntimeParachainsUmpPalletEvent;
    PolkadotRuntimeProxyType: PolkadotRuntimeProxyType;
    PolkadotRuntimeRuntime: PolkadotRuntimeRuntime;
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
