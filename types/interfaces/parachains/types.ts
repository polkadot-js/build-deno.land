import { Buffer } from 'node:buffer';

/* eslint-disable */

import type { BTreeMap, BitVec, Bytes, Enum, HashMap, Option, Struct, U8aFixed, Vec, bool, u32, u64 } from 'https://deno.land/x/polkadot/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot/types-codec/types/index.ts';
import type { Signature } from 'https://deno.land/x/polkadot/types/interfaces/extrinsics/index.ts';
import type { AccountId, Balance, BalanceOf, BlockNumber, H256, Hash, Header, StorageProof, ValidatorId, Weight } from 'https://deno.land/x/polkadot/types/interfaces/runtime/index.ts';
import type { MembershipProof, SessionIndex } from 'https://deno.land/x/polkadot/types/interfaces/session/index.ts';
import type { ValidatorIndex } from 'https://deno.land/x/polkadot/types/interfaces/staking/index.ts';

/** @name AbridgedCandidateReceipt */
export interface AbridgedCandidateReceipt extends Struct {
  readonly parachainIndex: ParaId;
  readonly relayParent: Hash;
  readonly headData: HeadData;
  readonly collator: CollatorId;
  readonly signature: CollatorSignature;
  readonly povBlockHash: Hash;
  readonly commitments: CandidateCommitments;
}

/** @name AbridgedHostConfiguration */
export interface AbridgedHostConfiguration extends Struct {
  readonly maxCodeSize: u32;
  readonly maxHeadDataSize: u32;
  readonly maxUpwardQueueCount: u32;
  readonly maxUpwardQueueSize: u32;
  readonly maxUpwardMessageSize: u32;
  readonly maxUpwardMessageNumPerCandidate: u32;
  readonly hrmpMaxMessageNumPerCandidate: u32;
  readonly validationUpgradeFrequency: BlockNumber;
  readonly validationUpgradeDelay: BlockNumber;
}

/** @name AbridgedHrmpChannel */
export interface AbridgedHrmpChannel extends Struct {
  readonly maxCapacity: u32;
  readonly maxTotalSize: u32;
  readonly maxMessageSize: u32;
  readonly msgCount: u32;
  readonly totalSize: u32;
  readonly mqcHead: Option<Hash>;
}

/** @name ApprovalVotingParams */
export interface ApprovalVotingParams extends Struct {
  readonly maxApprovalCoalesceCount: u32;
}

/** @name AssignmentId */
export interface AssignmentId extends AccountId {}

/** @name AssignmentKind */
export interface AssignmentKind extends Enum {
  readonly isParachain: boolean;
  readonly isParathread: boolean;
  readonly asParathread: ITuple<[CollatorId, u32]>;
  readonly type: 'Parachain' | 'Parathread';
}

/** @name AsyncBackingParams */
export interface AsyncBackingParams extends Struct {
  readonly maxCandidateDepth: u32;
  readonly allowedAncestryLen: u32;
}

/** @name AttestedCandidate */
export interface AttestedCandidate extends Struct {
  readonly candidate: AbridgedCandidateReceipt;
  readonly validityVotes: Vec<ValidityAttestation>;
  readonly validatorIndices: BitVec;
}

/** @name AuctionIndex */
export interface AuctionIndex extends u32 {}

/** @name AuthorityDiscoveryId */
export interface AuthorityDiscoveryId extends AccountId {}

/** @name AvailabilityBitfield */
export interface AvailabilityBitfield extends BitVec {}

/** @name AvailabilityBitfieldRecord */
export interface AvailabilityBitfieldRecord extends Struct {
  readonly bitfield: AvailabilityBitfield;
  readonly submittedTt: BlockNumber;
}

/** @name BackedCandidate */
export interface BackedCandidate extends Struct {
  readonly candidate: CommittedCandidateReceipt;
  readonly validityVotes: Vec<ValidityAttestation>;
  readonly validatorIndices: BitVec;
}

/** @name BackingState */
export interface BackingState extends Struct {
  readonly constraints: Constraints;
  readonly pendingAvailability: Vec<CandidatePendingAvailability>;
}

/** @name Bidder */
export interface Bidder extends Enum {
  readonly isNew: boolean;
  readonly asNew: NewBidder;
  readonly isExisting: boolean;
  readonly asExisting: ParaId;
  readonly type: 'New' | 'Existing';
}

/** @name BufferedSessionChange */
export interface BufferedSessionChange extends Struct {
  readonly applyAt: BlockNumber;
  readonly validators: Vec<ValidatorId>;
  readonly queued: Vec<ValidatorId>;
  readonly sessionIndex: SessionIndex;
}

/** @name CandidateCommitments */
export interface CandidateCommitments extends Struct {
  readonly upwardMessages: Vec<UpwardMessage>;
  readonly horizontalMessages: Vec<OutboundHrmpMessage>;
  readonly newValidationCode: Option<ValidationCode>;
  readonly headData: HeadData;
  readonly processedDownwardMessages: u32;
  readonly hrmpWatermark: BlockNumber;
}

/** @name CandidateDescriptor */
export interface CandidateDescriptor extends Struct {
  readonly paraId: ParaId;
  readonly relayParent: RelayChainHash;
  readonly collatorId: CollatorId;
  readonly persistedValidationDataHash: Hash;
  readonly povHash: Hash;
  readonly erasureRoot: Hash;
  readonly signature: CollatorSignature;
  readonly paraHead: Hash;
  readonly validationCodeHash: ValidationCodeHash;
}

/** @name CandidateEvent */
export interface CandidateEvent extends Enum {
  readonly isCandidateBacked: boolean;
  readonly asCandidateBacked: ITuple<[CandidateReceipt, HeadData, CoreIndex, GroupIndex]>;
  readonly isCandidateIncluded: boolean;
  readonly asCandidateIncluded: ITuple<[CandidateReceipt, HeadData, CoreIndex, GroupIndex]>;
  readonly isCandidateTimedOut: boolean;
  readonly asCandidateTimedOut: ITuple<[CandidateReceipt, HeadData, CoreIndex]>;
  readonly type: 'CandidateBacked' | 'CandidateIncluded' | 'CandidateTimedOut';
}

/** @name CandidateHash */
export interface CandidateHash extends Hash {}

/** @name CandidateInfo */
export interface CandidateInfo extends Struct {
  readonly who: AccountId;
  readonly deposit: Balance;
}

/** @name CandidatePendingAvailability */
export interface CandidatePendingAvailability extends Struct {
  readonly core: CoreIndex;
  readonly hash: CandidateHash;
  readonly descriptor: CandidateDescriptor;
  readonly availabilityVotes: BitVec;
  readonly backers: BitVec;
  readonly relayParentNumber: BlockNumber;
  readonly backedInNumber: BlockNumber;
  readonly backingGroup: GroupIndex;
}

/** @name CandidateReceipt */
export interface CandidateReceipt extends Struct {
  readonly descriptor: CandidateDescriptor;
  readonly commitmentsHash: Hash;
}

/** @name CollatorId */
export interface CollatorId extends H256 {}

/** @name CollatorSignature */
export interface CollatorSignature extends Signature {}

/** @name CommittedCandidateReceipt */
export interface CommittedCandidateReceipt extends Struct {
  readonly descriptor: CandidateDescriptor;
  readonly commitments: CandidateCommitments;
}

/** @name Constraints */
export interface Constraints extends Struct {
  readonly minRelayParentNumber: BlockNumber;
  readonly maxPovSize: u32;
  readonly maxCodeSize: u32;
  readonly umpRemaining: u32;
  readonly umpRemainingBytes: u32;
  readonly maxUmpNumPerCandidate: u32;
  readonly dmpRemainingMessages: Vec<BlockNumber>;
  readonly hrmpInbound: InboundHrmpLimitations;
  readonly hrmpChannelsOut: HashMap<ParaId, OutboundHrmpChannelLimitations>;
  readonly maxHrmpNumPerCandidate: u32;
  readonly requiredParent: HeadData;
  readonly validationCodeHash: ValidationCodeHash;
  readonly upgradeRestriction: Option<UpgradeRestriction>;
  readonly futureValidationCode: Option<ITuple<[BlockNumber, ValidationCodeHash]>>;
}

/** @name CoreAssignment */
export interface CoreAssignment extends Struct {
  readonly core: CoreIndex;
  readonly paraId: ParaId;
  readonly kind: AssignmentKind;
  readonly groupIdx: GroupIndex;
}

/** @name CoreIndex */
export interface CoreIndex extends u32 {}

/** @name CoreOccupied */
export interface CoreOccupied extends Enum {
  readonly isParathread: boolean;
  readonly asParathread: ParathreadEntry;
  readonly isParachain: boolean;
  readonly type: 'Parathread' | 'Parachain';
}

/** @name CoreState */
export interface CoreState extends Enum {
  readonly isOccupied: boolean;
  readonly asOccupied: OccupiedCore;
  readonly isScheduled: boolean;
  readonly asScheduled: ScheduledCore;
  readonly isFree: boolean;
  readonly type: 'Occupied' | 'Scheduled' | 'Free';
}

/** @name DisputeLocation */
export interface DisputeLocation extends Enum {
  readonly isLocal: boolean;
  readonly isRemote: boolean;
  readonly type: 'Local' | 'Remote';
}

/** @name DisputeProof */
export interface DisputeProof extends Struct {
  readonly timeSlot: DisputesTimeSlot;
  readonly kind: SlashingOffenceKind;
  readonly validatorIndex: ValidatorIndex;
  readonly validatorId: ValidatorId;
}

/** @name DisputeResult */
export interface DisputeResult extends Enum {
  readonly isValid: boolean;
  readonly isInvalid: boolean;
  readonly type: 'Valid' | 'Invalid';
}

/** @name DisputeState */
export interface DisputeState extends Struct {
  readonly validatorsFor: BitVec;
  readonly validatorsAgainst: BitVec;
  readonly start: BlockNumber;
  readonly concludedAt: Option<BlockNumber>;
}

/** @name DisputeStatement */
export interface DisputeStatement extends Enum {
  readonly isValid: boolean;
  readonly asValid: ValidDisputeStatementKind;
  readonly isInvalid: boolean;
  readonly asInvalid: InvalidDisputeStatementKind;
  readonly type: 'Valid' | 'Invalid';
}

/** @name DisputeStatementSet */
export interface DisputeStatementSet extends Struct {
  readonly candidateHash: CandidateHash;
  readonly session: SessionIndex;
  readonly statements: Vec<ITuple<[DisputeStatement, ParaValidatorIndex, ValidatorSignature]>>;
}

/** @name DisputesTimeSlot */
export interface DisputesTimeSlot extends Struct {
  readonly sessionIndex: SessionIndex;
  readonly candidateHash: CandidateHash;
}

/** @name DoubleVoteReport */
export interface DoubleVoteReport extends Struct {
  readonly identity: ValidatorId;
  readonly first: ITuple<[Statement, ValidatorSignature]>;
  readonly second: ITuple<[Statement, ValidatorSignature]>;
  readonly proof: MembershipProof;
  readonly signingContext: SigningContext;
}

/** @name DownwardMessage */
export interface DownwardMessage extends Bytes {}

/** @name ExecutorParam */
export interface ExecutorParam extends Enum {
  readonly isPhantom: boolean;
  readonly isMaxMemoryPages: boolean;
  readonly asMaxMemoryPages: u32;
  readonly isStackLogicalMax: boolean;
  readonly asStackLogicalMax: u32;
  readonly isStackNativeMax: boolean;
  readonly asStackNativeMax: u32;
  readonly isPrecheckingMaxMemory: boolean;
  readonly asPrecheckingMaxMemory: u64;
  readonly isPvfPrepTimeout: boolean;
  readonly asPvfPrepTimeout: ITuple<[PvfPrepTimeoutKind, u64]>;
  readonly isPvfExecTimeout: boolean;
  readonly asPvfExecTimeout: ITuple<[PvfExecTimeoutKind, u64]>;
  readonly type: 'Phantom' | 'MaxMemoryPages' | 'StackLogicalMax' | 'StackNativeMax' | 'PrecheckingMaxMemory' | 'PvfPrepTimeout' | 'PvfExecTimeout';
}

/** @name ExecutorParams */
export interface ExecutorParams extends Vec<ExecutorParam> {}

/** @name ExecutorParamsHash */
export interface ExecutorParamsHash extends Hash {}

/** @name ExplicitDisputeStatement */
export interface ExplicitDisputeStatement extends Struct {
  readonly valid: bool;
  readonly candidateHash: CandidateHash;
  readonly session: SessionIndex;
}

/** @name GlobalValidationData */
export interface GlobalValidationData extends Struct {
  readonly maxCodeSize: u32;
  readonly maxHeadDataSize: u32;
  readonly blockNumber: BlockNumber;
}

/** @name GlobalValidationSchedule */
export interface GlobalValidationSchedule extends Struct {
  readonly maxCodeSize: u32;
  readonly maxHeadDataSize: u32;
  readonly blockNumber: BlockNumber;
}

/** @name GroupIndex */
export interface GroupIndex extends u32 {}

/** @name GroupRotationInfo */
export interface GroupRotationInfo extends Struct {
  readonly sessionStartBlock: BlockNumber;
  readonly groupRotationFrequency: BlockNumber;
  readonly now: BlockNumber;
}

/** @name HeadData */
export interface HeadData extends Bytes {}

/** @name HostConfiguration */
export interface HostConfiguration extends Struct {
  readonly maxCodeSize: u32;
  readonly maxHeadDataSize: u32;
  readonly maxUpwardQueueCount: u32;
  readonly maxUpwardQueueSize: u32;
  readonly maxUpwardMessageSize: u32;
  readonly maxUpwardMessageNumPerCandidate: u32;
  readonly hrmpMaxMessageNumPerCandidate: u32;
  readonly validationUpgradeFrequency: BlockNumber;
  readonly validationUpgradeDelay: BlockNumber;
  readonly maxPovSize: u32;
  readonly maxDownwardMessageSize: u32;
  readonly preferredDispatchableUpwardMessagesStepWeight: Weight;
  readonly hrmpMaxParachainOutboundChannels: u32;
  readonly hrmpMaxParathreadOutboundChannels: u32;
  readonly hrmpOpenRequestTtl: u32;
  readonly hrmpSenderDeposit: Balance;
  readonly hrmpRecipientDeposit: Balance;
  readonly hrmpChannelMaxCapacity: u32;
  readonly hrmpChannelMaxTotalSize: u32;
  readonly hrmpMaxParachainInboundChannels: u32;
  readonly hrmpMaxParathreadInboundChannels: u32;
  readonly hrmpChannelMaxMessageSize: u32;
  readonly codeRetentionPeriod: BlockNumber;
  readonly parathreadCores: u32;
  readonly parathreadRetries: u32;
  readonly groupRotationFrequency: BlockNumber;
  readonly chainAvailabilityPeriod: BlockNumber;
  readonly threadAvailabilityPeriod: BlockNumber;
  readonly schedulingLookahead: u32;
  readonly maxValidatorsPerCore: Option<u32>;
  readonly maxValidators: Option<u32>;
  readonly disputePeriod: SessionIndex;
  readonly disputePostConclusionAcceptancePeriod: BlockNumber;
  readonly disputeMaxSpamSlots: u32;
  readonly disputeConclusionByTimeOutPeriod: BlockNumber;
  readonly noShowSlots: u32;
  readonly nDelayTranches: u32;
  readonly zerothDelayTrancheWidth: u32;
  readonly neededApprovals: u32;
  readonly relayVrfModuloSamples: u32;
}

/** @name HrmpChannel */
export interface HrmpChannel extends Struct {
  readonly maxCapacity: u32;
  readonly maxTotalSize: u32;
  readonly maxMessageSize: u32;
  readonly msgCount: u32;
  readonly totalSize: u32;
  readonly mqcHead: Option<Hash>;
  readonly senderDeposit: Balance;
  readonly recipientDeposit: Balance;
}

/** @name HrmpChannelId */
export interface HrmpChannelId extends Struct {
  readonly sender: u32;
  readonly receiver: u32;
}

/** @name HrmpOpenChannelRequest */
export interface HrmpOpenChannelRequest extends Struct {
  readonly confirmed: bool;
  readonly age: SessionIndex;
  readonly senderDeposit: Balance;
  readonly maxMessageSize: u32;
  readonly maxCapacity: u32;
  readonly maxTotalSize: u32;
}

/** @name InboundDownwardMessage */
export interface InboundDownwardMessage extends Struct {
  readonly pubSentAt: BlockNumber;
  readonly pubMsg: DownwardMessage;
}

/** @name InboundHrmpLimitations */
export interface InboundHrmpLimitations extends Struct {
  readonly validWatermarks: Vec<BlockNumber>;
}

/** @name InboundHrmpMessage */
export interface InboundHrmpMessage extends Struct {
  readonly sentAt: BlockNumber;
  readonly data: Bytes;
}

/** @name InboundHrmpMessages */
export interface InboundHrmpMessages extends Vec<InboundHrmpMessage> {}

/** @name IncomingParachain */
export interface IncomingParachain extends Enum {
  readonly isUnset: boolean;
  readonly asUnset: NewBidder;
  readonly isFixed: boolean;
  readonly asFixed: IncomingParachainFixed;
  readonly isDeploy: boolean;
  readonly asDeploy: IncomingParachainDeploy;
  readonly type: 'Unset' | 'Fixed' | 'Deploy';
}

/** @name IncomingParachainDeploy */
export interface IncomingParachainDeploy extends Struct {
  readonly code: ValidationCode;
  readonly initialHeadData: HeadData;
}

/** @name IncomingParachainFixed */
export interface IncomingParachainFixed extends Struct {
  readonly codeHash: Hash;
  readonly codeSize: u32;
  readonly initialHeadData: HeadData;
}

/** @name InvalidDisputeStatementKind */
export interface InvalidDisputeStatementKind extends Enum {
  readonly isExplicit: boolean;
  readonly type: 'Explicit';
}

/** @name LeasePeriod */
export interface LeasePeriod extends BlockNumber {}

/** @name LeasePeriodOf */
export interface LeasePeriodOf extends BlockNumber {}

/** @name LocalValidationData */
export interface LocalValidationData extends Struct {
  readonly parentHead: HeadData;
  readonly balance: Balance;
  readonly codeUpgradeAllowed: Option<BlockNumber>;
}

/** @name MessageIngestionType */
export interface MessageIngestionType extends Struct {
  readonly downwardMessages: Vec<InboundDownwardMessage>;
  readonly horizontalMessages: BTreeMap<ParaId, InboundHrmpMessages>;
}

/** @name MessageQueueChain */
export interface MessageQueueChain extends RelayChainHash {}

/** @name MessagingStateSnapshot */
export interface MessagingStateSnapshot extends Struct {
  readonly relayDispatchQueueSize: ITuple<[u32, u32]>;
  readonly egressChannels: Vec<MessagingStateSnapshotEgressEntry>;
}

/** @name MessagingStateSnapshotEgressEntry */
export interface MessagingStateSnapshotEgressEntry extends ITuple<[ParaId, AbridgedHrmpChannel]> {}

/** @name MultiDisputeStatementSet */
export interface MultiDisputeStatementSet extends Vec<DisputeStatementSet> {}

/** @name NewBidder */
export interface NewBidder extends Struct {
  readonly who: AccountId;
  readonly sub: SubId;
}

/** @name NodeFeatures */
export interface NodeFeatures extends BitVec {}

/** @name OccupiedCore */
export interface OccupiedCore extends Struct {
  readonly nextUpOnAvailable: Option<ScheduledCore>;
  readonly occupiedSince: BlockNumber;
  readonly timeOutAt: BlockNumber;
  readonly nextUpOnTimeOut: Option<ScheduledCore>;
  readonly availability: BitVec;
  readonly groupResponsible: GroupIndex;
  readonly candidateHash: CandidateHash;
  readonly candidateDescriptor: CandidateDescriptor;
}

/** @name OccupiedCoreAssumption */
export interface OccupiedCoreAssumption extends Enum {
  readonly isIncluded: boolean;
  readonly isTimedOut: boolean;
  readonly isFree: boolean;
  readonly type: 'Included' | 'TimedOut' | 'Free';
}

/** @name OldV1SessionInfo */
export interface OldV1SessionInfo extends Struct {
  readonly validators: Vec<ValidatorId>;
  readonly discoveryKeys: Vec<AuthorityDiscoveryId>;
  readonly assignmentKeys: Vec<AssignmentId>;
  readonly validatorGroups: Vec<Vec<ParaValidatorIndex>>;
  readonly nCores: u32;
  readonly zerothDelayTrancheWidth: u32;
  readonly relayVrfModuloSamples: u32;
  readonly nDelayTranches: u32;
  readonly noShowSlots: u32;
  readonly neededApprovals: u32;
}

/** @name OutboundHrmpChannelLimitations */
export interface OutboundHrmpChannelLimitations extends Struct {
  readonly bytesRemaining: u32;
  readonly messagesRemaining: u32;
}

/** @name OutboundHrmpMessage */
export interface OutboundHrmpMessage extends Struct {
  readonly recipient: u32;
  readonly data: Bytes;
}

/** @name ParachainDispatchOrigin */
export interface ParachainDispatchOrigin extends Enum {
  readonly isSigned: boolean;
  readonly isParachain: boolean;
  readonly isRoot: boolean;
  readonly type: 'Signed' | 'Parachain' | 'Root';
}

/** @name ParachainInherentData */
export interface ParachainInherentData extends Struct {
  readonly validationData: PersistedValidationData;
  readonly relayChainState: StorageProof;
  readonly downwardMessages: Vec<InboundDownwardMessage>;
  readonly horizontalMessages: BTreeMap<ParaId, VecInboundHrmpMessage>;
}

/** @name ParachainProposal */
export interface ParachainProposal extends Struct {
  readonly proposer: AccountId;
  readonly genesisHead: HeadData;
  readonly validators: Vec<ValidatorId>;
  readonly name: Bytes;
  readonly balance: Balance;
}

/** @name ParachainsInherentData */
export interface ParachainsInherentData extends Struct {
  readonly bitfields: SignedAvailabilityBitfields;
  readonly backedCandidates: Vec<BackedCandidate>;
  readonly disputes: MultiDisputeStatementSet;
  readonly parentHeader: Header;
}

/** @name ParaGenesisArgs */
export interface ParaGenesisArgs extends Struct {
  readonly genesisHead: Bytes;
  readonly validationCode: Bytes;
  readonly parachain: bool;
}

/** @name ParaId */
export interface ParaId extends u32 {}

/** @name ParaInfo */
export interface ParaInfo extends Struct {
  readonly manager: AccountId;
  readonly deposit: Balance;
  readonly locked: bool;
}

/** @name ParaLifecycle */
export interface ParaLifecycle extends Enum {
  readonly isOnboarding: boolean;
  readonly isParathread: boolean;
  readonly isParachain: boolean;
  readonly isUpgradingToParachain: boolean;
  readonly isDowngradingToParathread: boolean;
  readonly isOutgoingParathread: boolean;
  readonly isOutgoingParachain: boolean;
  readonly type: 'Onboarding' | 'Parathread' | 'Parachain' | 'UpgradingToParachain' | 'DowngradingToParathread' | 'OutgoingParathread' | 'OutgoingParachain';
}

/** @name ParaPastCodeMeta */
export interface ParaPastCodeMeta extends Struct {
  readonly upgradeTimes: Vec<ReplacementTimes>;
  readonly lastPruned: Option<BlockNumber>;
}

/** @name ParaScheduling */
export interface ParaScheduling extends Enum {
  readonly isAlways: boolean;
  readonly isDynamic: boolean;
  readonly type: 'Always' | 'Dynamic';
}

/** @name ParathreadClaim */
export interface ParathreadClaim extends ITuple<[ParaId, CollatorId]> {}

/** @name ParathreadClaimQueue */
export interface ParathreadClaimQueue extends Struct {
  readonly queue: Vec<QueuedParathread>;
  readonly nextCoreOffset: u32;
}

/** @name ParathreadEntry */
export interface ParathreadEntry extends Struct {
  readonly claim: ParathreadClaim;
  readonly retries: u32;
}

/** @name ParaValidatorIndex */
export interface ParaValidatorIndex extends u32 {}

/** @name PendingSlashes */
export interface PendingSlashes extends Struct {
  readonly slashKeys: BTreeMap<ValidatorIndex, ValidatorId>;
  readonly kind: SlashingOffenceKind;
}

/** @name PersistedValidationData */
export interface PersistedValidationData extends Struct {
  readonly parentHead: HeadData;
  readonly relayParentNumber: RelayChainBlockNumber;
  readonly relayParentStorageRoot: Hash;
  readonly maxPovSize: u32;
}

/** @name PvfCheckStatement */
export interface PvfCheckStatement extends Struct {
  readonly accept: bool;
  readonly subject: ValidationCodeHash;
  readonly sessionIndex: SessionIndex;
  readonly validatorIndex: ParaValidatorIndex;
}

/** @name PvfExecTimeoutKind */
export interface PvfExecTimeoutKind extends Enum {
  readonly isBacking: boolean;
  readonly isApproval: boolean;
  readonly type: 'Backing' | 'Approval';
}

/** @name PvfPrepTimeoutKind */
export interface PvfPrepTimeoutKind extends Enum {
  readonly isPrecheck: boolean;
  readonly isLenient: boolean;
  readonly type: 'Precheck' | 'Lenient';
}

/** @name QueuedParathread */
export interface QueuedParathread extends Struct {
  readonly claim: ParathreadEntry;
  readonly coreOffset: u32;
}

/** @name RegisteredParachainInfo */
export interface RegisteredParachainInfo extends Struct {
  readonly validators: Vec<ValidatorId>;
  readonly proposer: AccountId;
}

/** @name RelayBlockNumber */
export interface RelayBlockNumber extends u32 {}

/** @name RelayChainBlockNumber */
export interface RelayChainBlockNumber extends RelayBlockNumber {}

/** @name RelayChainHash */
export interface RelayChainHash extends RelayHash {}

/** @name RelayHash */
export interface RelayHash extends Hash {}

/** @name Remark */
export interface Remark extends U8aFixed {}

/** @name ReplacementTimes */
export interface ReplacementTimes extends Struct {
  readonly expectedAt: BlockNumber;
  readonly activatedAt: BlockNumber;
}

/** @name Retriable */
export interface Retriable extends Enum {
  readonly isNever: boolean;
  readonly isWithRetries: boolean;
  readonly asWithRetries: u32;
  readonly type: 'Never' | 'WithRetries';
}

/** @name ScheduledCore */
export interface ScheduledCore extends Struct {
  readonly paraId: ParaId;
  readonly collator: Option<CollatorId>;
}

/** @name Scheduling */
export interface Scheduling extends Enum {
  readonly isAlways: boolean;
  readonly isDynamic: boolean;
  readonly type: 'Always' | 'Dynamic';
}

/** @name ScrapedOnChainVotes */
export interface ScrapedOnChainVotes extends Struct {
  readonly session: SessionIndex;
  readonly backingValidatorsPerCandidate: Vec<ITuple<[CandidateReceipt, Vec<ITuple<[ParaValidatorIndex, ValidityAttestation]>>]>>;
  readonly disputes: MultiDisputeStatementSet;
}

/** @name ServiceQuality */
export interface ServiceQuality extends Enum {
  readonly isOrdered: boolean;
  readonly isFast: boolean;
  readonly type: 'Ordered' | 'Fast';
}

/** @name SessionInfo */
export interface SessionInfo extends Struct {
  readonly activeValidatorIndices: Vec<ParaValidatorIndex>;
  readonly randomSeed: U8aFixed;
  readonly disputePeriod: SessionIndex;
  readonly validators: Vec<ValidatorId>;
  readonly discoveryKeys: Vec<AuthorityDiscoveryId>;
  readonly assignmentKeys: Vec<AssignmentId>;
  readonly validatorGroups: Vec<Vec<ValidatorIndex>>;
  readonly nCores: u32;
  readonly zerothDelayTrancheWidth: u32;
  readonly relayVrfModuloSamples: u32;
  readonly nDelayTranches: u32;
  readonly noShowSlots: u32;
  readonly neededApprovals: u32;
}

/** @name SessionInfoValidatorGroup */
export interface SessionInfoValidatorGroup extends Vec<ParaValidatorIndex> {}

/** @name SignedAvailabilityBitfield */
export interface SignedAvailabilityBitfield extends Struct {
  readonly payload: BitVec;
  readonly validatorIndex: ParaValidatorIndex;
  readonly signature: ValidatorSignature;
}

/** @name SignedAvailabilityBitfields */
export interface SignedAvailabilityBitfields extends Vec<SignedAvailabilityBitfield> {}

/** @name SigningContext */
export interface SigningContext extends Struct {
  readonly sessionIndex: SessionIndex;
  readonly parentHash: Hash;
}

/** @name SlashingOffenceKind */
export interface SlashingOffenceKind extends Enum {
  readonly isForInvalid: boolean;
  readonly isAgainstValid: boolean;
  readonly type: 'ForInvalid' | 'AgainstValid';
}

/** @name SlotRange */
export interface SlotRange extends Enum {
  readonly isZeroZero: boolean;
  readonly isZeroOne: boolean;
  readonly isZeroTwo: boolean;
  readonly isZeroThree: boolean;
  readonly isZeroFour: boolean;
  readonly isZeroFive: boolean;
  readonly isZeroSix: boolean;
  readonly isZeroSeven: boolean;
  readonly isOneOne: boolean;
  readonly isOneTwo: boolean;
  readonly isOneThree: boolean;
  readonly isOneFour: boolean;
  readonly isOneFive: boolean;
  readonly isOneSix: boolean;
  readonly isOneSeven: boolean;
  readonly isTwoTwo: boolean;
  readonly isTwoThree: boolean;
  readonly isTwoFour: boolean;
  readonly isTwoFive: boolean;
  readonly isTwoSix: boolean;
  readonly isTwoSeven: boolean;
  readonly isThreeThree: boolean;
  readonly isThreeFour: boolean;
  readonly isThreeFive: boolean;
  readonly isThreeSix: boolean;
  readonly isThreeSeven: boolean;
  readonly isFourFour: boolean;
  readonly isFourFive: boolean;
  readonly isFourSix: boolean;
  readonly isFourSeven: boolean;
  readonly isFiveFive: boolean;
  readonly isFiveSix: boolean;
  readonly isFiveSeven: boolean;
  readonly isSixSix: boolean;
  readonly isSixSeven: boolean;
  readonly isSevenSeven: boolean;
  readonly type: 'ZeroZero' | 'ZeroOne' | 'ZeroTwo' | 'ZeroThree' | 'ZeroFour' | 'ZeroFive' | 'ZeroSix' | 'ZeroSeven' | 'OneOne' | 'OneTwo' | 'OneThree' | 'OneFour' | 'OneFive' | 'OneSix' | 'OneSeven' | 'TwoTwo' | 'TwoThree' | 'TwoFour' | 'TwoFive' | 'TwoSix' | 'TwoSeven' | 'ThreeThree' | 'ThreeFour' | 'ThreeFive' | 'ThreeSix' | 'ThreeSeven' | 'FourFour' | 'FourFive' | 'FourSix' | 'FourSeven' | 'FiveFive' | 'FiveSix' | 'FiveSeven' | 'SixSix' | 'SixSeven' | 'SevenSeven';
}

/** @name SlotRange10 */
export interface SlotRange10 extends Enum {
  readonly isZeroZero: boolean;
  readonly isZeroOne: boolean;
  readonly isZeroTwo: boolean;
  readonly isZeroThree: boolean;
  readonly isOneOne: boolean;
  readonly isOneTwo: boolean;
  readonly isOneThree: boolean;
  readonly isTwoTwo: boolean;
  readonly isTwoThree: boolean;
  readonly isThreeThree: boolean;
  readonly type: 'ZeroZero' | 'ZeroOne' | 'ZeroTwo' | 'ZeroThree' | 'OneOne' | 'OneTwo' | 'OneThree' | 'TwoTwo' | 'TwoThree' | 'ThreeThree';
}

/** @name Statement */
export interface Statement extends Enum {
  readonly isNever: boolean;
  readonly isCandidate: boolean;
  readonly asCandidate: Hash;
  readonly isValid: boolean;
  readonly asValid: Hash;
  readonly isInvalid: boolean;
  readonly asInvalid: Hash;
  readonly type: 'Never' | 'Candidate' | 'Valid' | 'Invalid';
}

/** @name SubId */
export interface SubId extends u32 {}

/** @name SystemInherentData */
export interface SystemInherentData extends ParachainInherentData {}

/** @name TransientValidationData */
export interface TransientValidationData extends Struct {
  readonly maxCodeSize: u32;
  readonly maxHeadDataSize: u32;
  readonly balance: Balance;
  readonly codeUpgradeAllowed: Option<BlockNumber>;
  readonly dmqLength: u32;
}

/** @name UpgradeGoAhead */
export interface UpgradeGoAhead extends Enum {
  readonly isAbort: boolean;
  readonly isGoAhead: boolean;
  readonly type: 'Abort' | 'GoAhead';
}

/** @name UpgradeRestriction */
export interface UpgradeRestriction extends Enum {
  readonly isPresent: boolean;
  readonly type: 'Present';
}

/** @name UpwardMessage */
export interface UpwardMessage extends Bytes {}

/** @name ValidationCode */
export interface ValidationCode extends Bytes {}

/** @name ValidationCodeHash */
export interface ValidationCodeHash extends Hash {}

/** @name ValidationData */
export interface ValidationData extends Struct {
  readonly persisted: PersistedValidationData;
  readonly transient: TransientValidationData;
}

/** @name ValidationDataType */
export interface ValidationDataType extends Struct {
  readonly validationData: ValidationData;
  readonly relayChainState: Vec<Bytes>;
}

/** @name ValidationFunctionParams */
export interface ValidationFunctionParams extends Struct {
  readonly maxCodeSize: u32;
  readonly relayChainHeight: RelayChainBlockNumber;
  readonly codeUpgradeAllowed: Option<RelayChainBlockNumber>;
}

/** @name ValidatorSignature */
export interface ValidatorSignature extends Signature {}

/** @name ValidDisputeStatementKind */
export interface ValidDisputeStatementKind extends Enum {
  readonly isExplicit: boolean;
  readonly isBackingSeconded: boolean;
  readonly asBackingSeconded: Hash;
  readonly isBackingValid: boolean;
  readonly asBackingValid: Hash;
  readonly isApprovalChecking: boolean;
  readonly type: 'Explicit' | 'BackingSeconded' | 'BackingValid' | 'ApprovalChecking';
}

/** @name ValidityAttestation */
export interface ValidityAttestation extends Enum {
  readonly isNever: boolean;
  readonly isImplicit: boolean;
  readonly asImplicit: ValidatorSignature;
  readonly isExplicit: boolean;
  readonly asExplicit: ValidatorSignature;
  readonly type: 'Never' | 'Implicit' | 'Explicit';
}

/** @name VecInboundHrmpMessage */
export interface VecInboundHrmpMessage extends Vec<InboundHrmpMessage> {}

/** @name WinnersData */
export interface WinnersData extends Vec<WinnersDataTuple> {}

/** @name WinnersData10 */
export interface WinnersData10 extends Vec<WinnersDataTuple10> {}

/** @name WinnersDataTuple */
export interface WinnersDataTuple extends ITuple<[AccountId, ParaId, BalanceOf, SlotRange]> {}

/** @name WinnersDataTuple10 */
export interface WinnersDataTuple10 extends ITuple<[AccountId, ParaId, BalanceOf, SlotRange10]> {}

/** @name WinningData */
export interface WinningData extends Vec<WinningDataEntry> {}

/** @name WinningData10 */
export interface WinningData10 extends Vec<WinningDataEntry> {}

/** @name WinningDataEntry */
export interface WinningDataEntry extends Option<ITuple<[AccountId, ParaId, BalanceOf]>> {}

export type PHANTOM_PARACHAINS = 'parachains';
