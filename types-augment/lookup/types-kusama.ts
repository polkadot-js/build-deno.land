/* eslint-disable */

import 'https://deno.land/x/polkadot@0.2.39/types/lookup.ts';

import type { Compact, Enum, Null, Struct, Vec, u16, u32 } from 'https://deno.land/x/polkadot@0.2.39/types-codec/mod.ts';
import type { ITuple } from 'https://deno.land/x/polkadot@0.2.39/types-codec/types/index.ts';
import type { PerU16 } from 'https://deno.land/x/polkadot@0.2.39/types/interfaces/runtime/index.ts';

declare module 'https://deno.land/x/polkadot@0.2.39/types/lookup.ts' {
  /** @name KusamaRuntimeSessionKeys (96) */
  interface KusamaRuntimeSessionKeys extends Struct {
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
    readonly paraValidator: PolkadotPrimitivesV4ValidatorAppPublic;
    readonly paraAssignment: PolkadotPrimitivesV4AssignmentAppPublic;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
  }

  /** @name KusamaRuntimeOriginCaller (127) */
  interface KusamaRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isOrigins: boolean;
    readonly asOrigins: KusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly isParachainsOrigin: boolean;
    readonly asParachainsOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PalletXcmOrigin;
    readonly type: 'System' | 'Void' | 'Origins' | 'ParachainsOrigin' | 'XcmPallet';
  }

  /** @name KusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin (129) */
  interface KusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin extends Enum {
    readonly isStakingAdmin: boolean;
    readonly isTreasurer: boolean;
    readonly isFellowshipAdmin: boolean;
    readonly isGeneralAdmin: boolean;
    readonly isAuctionAdmin: boolean;
    readonly isLeaseAdmin: boolean;
    readonly isReferendumCanceller: boolean;
    readonly isReferendumKiller: boolean;
    readonly isSmallTipper: boolean;
    readonly isBigTipper: boolean;
    readonly isSmallSpender: boolean;
    readonly isMediumSpender: boolean;
    readonly isBigSpender: boolean;
    readonly isWhitelistedCaller: boolean;
    readonly isFellowshipInitiates: boolean;
    readonly isFellows: boolean;
    readonly isFellowshipExperts: boolean;
    readonly isFellowshipMasters: boolean;
    readonly isFellowship1Dan: boolean;
    readonly isFellowship2Dan: boolean;
    readonly isFellowship3Dan: boolean;
    readonly isFellowship4Dan: boolean;
    readonly isFellowship5Dan: boolean;
    readonly isFellowship6Dan: boolean;
    readonly isFellowship7Dan: boolean;
    readonly isFellowship8Dan: boolean;
    readonly isFellowship9Dan: boolean;
    readonly type: 'StakingAdmin' | 'Treasurer' | 'FellowshipAdmin' | 'GeneralAdmin' | 'AuctionAdmin' | 'LeaseAdmin' | 'ReferendumCanceller' | 'ReferendumKiller' | 'SmallTipper' | 'BigTipper' | 'SmallSpender' | 'MediumSpender' | 'BigSpender' | 'WhitelistedCaller' | 'FellowshipInitiates' | 'Fellows' | 'FellowshipExperts' | 'FellowshipMasters' | 'Fellowship1Dan' | 'Fellowship2Dan' | 'Fellowship3Dan' | 'Fellowship4Dan' | 'Fellowship5Dan' | 'Fellowship6Dan' | 'Fellowship7Dan' | 'Fellowship8Dan' | 'Fellowship9Dan';
  }

  /** @name KusamaRuntimeProxyType (208) */
  interface KusamaRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isIdentityJudgement: boolean;
    readonly isCancelProxy: boolean;
    readonly isAuction: boolean;
    readonly isSociety: boolean;
    readonly isNominationPools: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools';
  }

  /** @name KusamaRuntimeNposCompactSolution24 (217) */
  interface KusamaRuntimeNposCompactSolution24 extends Struct {
    readonly votes1: Vec<ITuple<[Compact<u32>, Compact<u16>]>>;
    readonly votes2: Vec<ITuple<[Compact<u32>, ITuple<[Compact<u16>, Compact<PerU16>]>, Compact<u16>]>>;
    readonly votes3: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes4: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes5: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes6: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes7: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes8: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes9: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes10: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes11: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes12: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes13: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes14: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes15: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes16: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes17: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes18: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes19: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes20: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes21: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes22: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes23: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes24: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  }

  /** @name KusamaRuntimeRuntimeHoldReason (540) */
  interface KusamaRuntimeRuntimeHoldReason extends Enum {
    readonly isNis: boolean;
    readonly asNis: PalletNisHoldReason;
    readonly type: 'Nis';
  }

  /** @name PalletNisHoldReason (541) */
  interface PalletNisHoldReason extends Enum {
    readonly isNftReceipt: boolean;
    readonly type: 'NftReceipt';
  }

  /** @name KusamaRuntimeRuntime (860) */
  type KusamaRuntimeRuntime = Null;

} // declare module
