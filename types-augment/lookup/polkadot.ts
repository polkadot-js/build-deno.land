/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup115: polkadot_runtime::SessionKeys
   **/
  PolkadotRuntimeSessionKeys: {
    grandpa: 'SpConsensusGrandpaAppPublic',
    babe: 'SpConsensusBabeAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    paraValidator: 'PolkadotPrimitivesV4ValidatorAppPublic',
    paraAssignment: 'PolkadotPrimitivesV4AssignmentAppPublic',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic'
  },
  /**
   * Lookup116: polkadot_primitives::v4::validator_app::Public
   **/
  PolkadotPrimitivesV4ValidatorAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup117: polkadot_primitives::v4::assignment_app::Public
   **/
  PolkadotPrimitivesV4AssignmentAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup156: polkadot_runtime::OriginCaller
   **/
  PolkadotRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      Void: 'SpCoreVoid',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      Council: 'PalletCollectiveRawOrigin',
      TechnicalCommittee: 'PalletCollectiveRawOrigin',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      Origins: 'PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      ParachainsOrigin: 'PolkadotRuntimeParachainsOriginPalletOrigin',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      __Unused90: 'Null',
      __Unused91: 'Null',
      __Unused92: 'Null',
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
      __Unused98: 'Null',
      XcmPallet: 'PalletXcmOrigin'
    }
  },
  /**
   * Lookup160: polkadot_runtime::governance::origins::pallet_custom_origins::Origin
   **/
  PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
    _enum: ['StakingAdmin', 'Treasurer', 'FellowshipAdmin', 'GeneralAdmin', 'AuctionAdmin', 'LeaseAdmin', 'ReferendumCanceller', 'ReferendumKiller', 'SmallTipper', 'BigTipper', 'SmallSpender', 'MediumSpender', 'BigSpender', 'WhitelistedCaller']
  },
  /**
   * Lookup161: polkadot_runtime_parachains::origin::pallet::Origin
   **/
  PolkadotRuntimeParachainsOriginPalletOrigin: {
    _enum: {
      Parachain: 'u32'
    }
  },
  /**
   * Lookup163: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'XcmV3MultiLocation',
      Response: 'XcmV3MultiLocation'
    }
  },
  /**
   * Lookup164: xcm::v3::multilocation::MultiLocation
   **/
  XcmV3MultiLocation: {
    parents: 'u8',
    interior: 'XcmV3Junctions'
  },
  /**
   * Lookup165: xcm::v3::junctions::Junctions
   **/
  XcmV3Junctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV3Junction',
      X2: '(XcmV3Junction,XcmV3Junction)',
      X3: '(XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X4: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X5: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X6: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X7: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X8: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)'
    }
  },
  /**
   * Lookup166: xcm::v3::junction::Junction
   **/
  XcmV3Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<XcmV3JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<XcmV3JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<XcmV3JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'XcmV3JunctionNetworkId'
    }
  },
  /**
   * Lookup168: xcm::v3::junction::NetworkId
   **/
  XcmV3JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null'
    }
  },
  /**
   * Lookup169: xcm::v3::junction::BodyId
   **/
  XcmV3JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Moniker: '[u8;4]',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup170: xcm::v3::junction::BodyPart
   **/
  XcmV3JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup174: polkadot_runtime_common::claims::pallet::Call<T>
   **/
  PolkadotRuntimeCommonClaimsPalletCall: {
    _enum: {
      claim: {
        dest: 'AccountId32',
        ethereumSignature: 'PolkadotRuntimeCommonClaimsEcdsaSignature',
      },
      mint_claim: {
        who: 'EthereumAddress',
        value: 'u128',
        vestingSchedule: 'Option<(u128,u128,u32)>',
        statement: 'Option<PolkadotRuntimeCommonClaimsStatementKind>',
      },
      claim_attest: {
        dest: 'AccountId32',
        ethereumSignature: 'PolkadotRuntimeCommonClaimsEcdsaSignature',
        statement: 'Bytes',
      },
      attest: {
        statement: 'Bytes',
      },
      move_claim: {
        _alias: {
          new_: 'new',
        },
        old: 'EthereumAddress',
        new_: 'EthereumAddress',
        maybePreclaim: 'Option<AccountId32>'
      }
    }
  },
  /**
   * Lookup175: polkadot_runtime_common::claims::EcdsaSignature
   **/
  PolkadotRuntimeCommonClaimsEcdsaSignature: '[u8;65]',
  /**
   * Lookup181: polkadot_runtime_common::claims::StatementKind
   **/
  PolkadotRuntimeCommonClaimsStatementKind: {
    _enum: ['Regular', 'Saft']
  },
  /**
   * Lookup229: polkadot_runtime::ProxyType
   **/
  PolkadotRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', '__Unused4', 'IdentityJudgement', 'CancelProxy', 'Auction', 'NominationPools']
  },
  /**
   * Lookup238: polkadot_runtime::NposCompactSolution16
   **/
  PolkadotRuntimeNposCompactSolution16: {
    votes1: 'Vec<(Compact<u32>,Compact<u16>)>',
    votes2: 'Vec<(Compact<u32>,(Compact<u16>,Compact<PerU16>),Compact<u16>)>',
    votes3: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);2],Compact<u16>)>',
    votes4: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);3],Compact<u16>)>',
    votes5: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);4],Compact<u16>)>',
    votes6: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);5],Compact<u16>)>',
    votes7: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);6],Compact<u16>)>',
    votes8: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);7],Compact<u16>)>',
    votes9: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);8],Compact<u16>)>',
    votes10: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);9],Compact<u16>)>',
    votes11: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);10],Compact<u16>)>',
    votes12: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);11],Compact<u16>)>',
    votes13: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);12],Compact<u16>)>',
    votes14: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);13],Compact<u16>)>',
    votes15: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);14],Compact<u16>)>',
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>'
  },
  /**
   * Lookup308: polkadot_runtime_parachains::configuration::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsConfigurationPalletCall: {
    _enum: {
      set_validation_upgrade_cooldown: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_validation_upgrade_delay: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_code_retention_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_code_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_pov_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_head_data_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_parathread_cores: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_parathread_retries: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_group_rotation_frequency: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_chain_availability_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_thread_availability_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_scheduling_lookahead: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_validators_per_core: {
        _alias: {
          new_: 'new',
        },
        new_: 'Option<u32>',
      },
      set_max_validators: {
        _alias: {
          new_: 'new',
        },
        new_: 'Option<u32>',
      },
      set_dispute_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_dispute_post_conclusion_acceptance_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused16: 'Null',
      __Unused17: 'Null',
      set_no_show_slots: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_n_delay_tranches: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_zeroth_delay_tranche_width: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_needed_approvals: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_relay_vrf_modulo_samples: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_upward_queue_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_upward_queue_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_downward_message_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused26: 'Null',
      set_max_upward_message_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_upward_message_num_per_candidate: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_open_request_ttl: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_sender_deposit: {
        _alias: {
          new_: 'new',
        },
        new_: 'u128',
      },
      set_hrmp_recipient_deposit: {
        _alias: {
          new_: 'new',
        },
        new_: 'u128',
      },
      set_hrmp_channel_max_capacity: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_channel_max_total_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_max_parachain_inbound_channels: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_max_parathread_inbound_channels: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_channel_max_message_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_max_parachain_outbound_channels: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_max_parathread_outbound_channels: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_max_message_num_per_candidate: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused40: 'Null',
      set_pvf_checking_enabled: {
        _alias: {
          new_: 'new',
        },
        new_: 'bool',
      },
      set_pvf_voting_ttl: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_minimum_validation_upgrade_delay: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_bypass_consistency_check: {
        _alias: {
          new_: 'new',
        },
        new_: 'bool',
      },
      set_async_backing_params: {
        _alias: {
          new_: 'new',
        },
        new_: 'PolkadotPrimitivesVstagingAsyncBackingParams',
      },
      set_executor_params: {
        _alias: {
          new_: 'new',
        },
        new_: 'PolkadotPrimitivesV4ExecutorParams'
      }
    }
  },
  /**
   * Lookup309: polkadot_primitives::vstaging::AsyncBackingParams
   **/
  PolkadotPrimitivesVstagingAsyncBackingParams: {
    maxCandidateDepth: 'u32',
    allowedAncestryLen: 'u32'
  },
  /**
   * Lookup310: polkadot_primitives::v4::executor_params::ExecutorParams
   **/
  PolkadotPrimitivesV4ExecutorParams: 'Vec<PolkadotPrimitivesV4ExecutorParamsExecutorParam>',
  /**
   * Lookup312: polkadot_primitives::v4::executor_params::ExecutorParam
   **/
  PolkadotPrimitivesV4ExecutorParamsExecutorParam: {
    _enum: {
      __Unused0: 'Null',
      MaxMemoryPages: 'u32',
      StackLogicalMax: 'u32',
      StackNativeMax: 'u32',
      PrecheckingMaxMemory: 'u64',
      PvfPrepTimeout: '(PolkadotPrimitivesV4PvfPrepTimeoutKind,u64)',
      PvfExecTimeout: '(PolkadotPrimitivesV4PvfExecTimeoutKind,u64)',
      WasmExtBulkMemory: 'Null'
    }
  },
  /**
   * Lookup313: polkadot_primitives::v4::PvfPrepTimeoutKind
   **/
  PolkadotPrimitivesV4PvfPrepTimeoutKind: {
    _enum: ['Precheck', 'Lenient']
  },
  /**
   * Lookup314: polkadot_primitives::v4::PvfExecTimeoutKind
   **/
  PolkadotPrimitivesV4PvfExecTimeoutKind: {
    _enum: ['Backing', 'Approval']
  },
  /**
   * Lookup315: polkadot_runtime_parachains::shared::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsSharedPalletCall: 'Null',
  /**
   * Lookup316: polkadot_runtime_parachains::inclusion::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsInclusionPalletCall: 'Null',
  /**
   * Lookup317: polkadot_runtime_parachains::paras_inherent::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsParasInherentPalletCall: {
    _enum: {
      enter: {
        data: 'PolkadotPrimitivesV4InherentData'
      }
    }
  },
  /**
   * Lookup318: polkadot_primitives::v4::InherentData<sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>>
   **/
  PolkadotPrimitivesV4InherentData: {
    bitfields: 'Vec<PolkadotPrimitivesV4SignedUncheckedSigned>',
    backedCandidates: 'Vec<PolkadotPrimitivesV4BackedCandidate>',
    disputes: 'Vec<PolkadotPrimitivesV4DisputeStatementSet>',
    parentHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup320: polkadot_primitives::v4::signed::UncheckedSigned<polkadot_primitives::v4::AvailabilityBitfield, polkadot_primitives::v4::AvailabilityBitfield>
   **/
  PolkadotPrimitivesV4SignedUncheckedSigned: {
    payload: 'BitVec',
    validatorIndex: 'u32',
    signature: 'PolkadotPrimitivesV4ValidatorAppSignature'
  },
  /**
   * Lookup323: bitvec::order::Lsb0
   **/
  BitvecOrderLsb0: 'Null',
  /**
   * Lookup325: polkadot_primitives::v4::validator_app::Signature
   **/
  PolkadotPrimitivesV4ValidatorAppSignature: 'SpCoreSr25519Signature',
  /**
   * Lookup327: polkadot_primitives::v4::BackedCandidate<primitive_types::H256>
   **/
  PolkadotPrimitivesV4BackedCandidate: {
    candidate: 'PolkadotPrimitivesV4CommittedCandidateReceipt',
    validityVotes: 'Vec<PolkadotPrimitivesV4ValidityAttestation>',
    validatorIndices: 'BitVec'
  },
  /**
   * Lookup328: polkadot_primitives::v4::CommittedCandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV4CommittedCandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV4CandidateDescriptor',
    commitments: 'PolkadotPrimitivesV4CandidateCommitments'
  },
  /**
   * Lookup329: polkadot_primitives::v4::CandidateDescriptor<primitive_types::H256>
   **/
  PolkadotPrimitivesV4CandidateDescriptor: {
    paraId: 'u32',
    relayParent: 'H256',
    collator: 'PolkadotPrimitivesV4CollatorAppPublic',
    persistedValidationDataHash: 'H256',
    povHash: 'H256',
    erasureRoot: 'H256',
    signature: 'PolkadotPrimitivesV4CollatorAppSignature',
    paraHead: 'H256',
    validationCodeHash: 'H256'
  },
  /**
   * Lookup330: polkadot_primitives::v4::collator_app::Public
   **/
  PolkadotPrimitivesV4CollatorAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup331: polkadot_primitives::v4::collator_app::Signature
   **/
  PolkadotPrimitivesV4CollatorAppSignature: 'SpCoreSr25519Signature',
  /**
   * Lookup333: polkadot_primitives::v4::CandidateCommitments<N>
   **/
  PolkadotPrimitivesV4CandidateCommitments: {
    upwardMessages: 'Vec<Bytes>',
    horizontalMessages: 'Vec<PolkadotCorePrimitivesOutboundHrmpMessage>',
    newValidationCode: 'Option<Bytes>',
    headData: 'Bytes',
    processedDownwardMessages: 'u32',
    hrmpWatermark: 'u32'
  },
  /**
   * Lookup336: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup342: polkadot_primitives::v4::ValidityAttestation
   **/
  PolkadotPrimitivesV4ValidityAttestation: {
    _enum: {
      __Unused0: 'Null',
      Implicit: 'PolkadotPrimitivesV4ValidatorAppSignature',
      Explicit: 'PolkadotPrimitivesV4ValidatorAppSignature'
    }
  },
  /**
   * Lookup344: polkadot_primitives::v4::DisputeStatementSet
   **/
  PolkadotPrimitivesV4DisputeStatementSet: {
    candidateHash: 'H256',
    session: 'u32',
    statements: 'Vec<(PolkadotPrimitivesV4DisputeStatement,u32,PolkadotPrimitivesV4ValidatorAppSignature)>'
  },
  /**
   * Lookup348: polkadot_primitives::v4::DisputeStatement
   **/
  PolkadotPrimitivesV4DisputeStatement: {
    _enum: {
      Valid: 'PolkadotPrimitivesV4ValidDisputeStatementKind',
      Invalid: 'PolkadotPrimitivesV4InvalidDisputeStatementKind'
    }
  },
  /**
   * Lookup349: polkadot_primitives::v4::ValidDisputeStatementKind
   **/
  PolkadotPrimitivesV4ValidDisputeStatementKind: {
    _enum: {
      Explicit: 'Null',
      BackingSeconded: 'H256',
      BackingValid: 'H256',
      ApprovalChecking: 'Null'
    }
  },
  /**
   * Lookup350: polkadot_primitives::v4::InvalidDisputeStatementKind
   **/
  PolkadotPrimitivesV4InvalidDisputeStatementKind: {
    _enum: ['Explicit']
  },
  /**
   * Lookup351: polkadot_runtime_parachains::paras::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsParasPalletCall: {
    _enum: {
      force_set_current_code: {
        para: 'u32',
        newCode: 'Bytes',
      },
      force_set_current_head: {
        para: 'u32',
        newHead: 'Bytes',
      },
      force_schedule_code_upgrade: {
        para: 'u32',
        newCode: 'Bytes',
        relayParentNumber: 'u32',
      },
      force_note_new_head: {
        para: 'u32',
        newHead: 'Bytes',
      },
      force_queue_action: {
        para: 'u32',
      },
      add_trusted_validation_code: {
        validationCode: 'Bytes',
      },
      poke_unused_validation_code: {
        validationCodeHash: 'H256',
      },
      include_pvf_check_statement: {
        stmt: 'PolkadotPrimitivesV4PvfCheckStatement',
        signature: 'PolkadotPrimitivesV4ValidatorAppSignature'
      }
    }
  },
  /**
   * Lookup352: polkadot_primitives::v4::PvfCheckStatement
   **/
  PolkadotPrimitivesV4PvfCheckStatement: {
    accept: 'bool',
    subject: 'H256',
    sessionIndex: 'u32',
    validatorIndex: 'u32'
  },
  /**
   * Lookup353: polkadot_runtime_parachains::initializer::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsInitializerPalletCall: {
    _enum: {
      force_approve: {
        upTo: 'u32'
      }
    }
  },
  /**
   * Lookup354: polkadot_runtime_parachains::hrmp::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsHrmpPalletCall: {
    _enum: {
      hrmp_init_open_channel: {
        recipient: 'u32',
        proposedMaxCapacity: 'u32',
        proposedMaxMessageSize: 'u32',
      },
      hrmp_accept_open_channel: {
        sender: 'u32',
      },
      hrmp_close_channel: {
        channelId: 'PolkadotParachainPrimitivesHrmpChannelId',
      },
      force_clean_hrmp: {
        para: 'u32',
        inbound: 'u32',
        outbound: 'u32',
      },
      force_process_hrmp_open: {
        channels: 'u32',
      },
      force_process_hrmp_close: {
        channels: 'u32',
      },
      hrmp_cancel_open_request: {
        channelId: 'PolkadotParachainPrimitivesHrmpChannelId',
        openRequests: 'u32',
      },
      force_open_hrmp_channel: {
        sender: 'u32',
        recipient: 'u32',
        maxCapacity: 'u32',
        maxMessageSize: 'u32'
      }
    }
  },
  /**
   * Lookup355: polkadot_parachain::primitives::HrmpChannelId
   **/
  PolkadotParachainPrimitivesHrmpChannelId: {
    sender: 'u32',
    recipient: 'u32'
  },
  /**
   * Lookup356: polkadot_runtime_parachains::disputes::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsDisputesPalletCall: {
    _enum: ['force_unfreeze']
  },
  /**
   * Lookup357: polkadot_runtime_parachains::disputes::slashing::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsDisputesSlashingPalletCall: {
    _enum: {
      report_dispute_lost_unsigned: {
        disputeProof: 'PolkadotPrimitivesVstagingSlashingDisputeProof',
        keyOwnerProof: 'SpSessionMembershipProof'
      }
    }
  },
  /**
   * Lookup358: polkadot_primitives::vstaging::slashing::DisputeProof
   **/
  PolkadotPrimitivesVstagingSlashingDisputeProof: {
    timeSlot: 'PolkadotPrimitivesVstagingSlashingDisputesTimeSlot',
    kind: 'PolkadotPrimitivesVstagingSlashingSlashingOffenceKind',
    validatorIndex: 'u32',
    validatorId: 'PolkadotPrimitivesV4ValidatorAppPublic'
  },
  /**
   * Lookup359: polkadot_primitives::vstaging::slashing::DisputesTimeSlot
   **/
  PolkadotPrimitivesVstagingSlashingDisputesTimeSlot: {
    sessionIndex: 'u32',
    candidateHash: 'H256'
  },
  /**
   * Lookup360: polkadot_primitives::vstaging::slashing::SlashingOffenceKind
   **/
  PolkadotPrimitivesVstagingSlashingSlashingOffenceKind: {
    _enum: ['ForInvalid', 'AgainstValid']
  },
  /**
   * Lookup361: polkadot_runtime_common::paras_registrar::pallet::Call<T>
   **/
  PolkadotRuntimeCommonParasRegistrarPalletCall: {
    _enum: {
      register: {
        id: 'u32',
        genesisHead: 'Bytes',
        validationCode: 'Bytes',
      },
      force_register: {
        who: 'AccountId32',
        deposit: 'u128',
        id: 'u32',
        genesisHead: 'Bytes',
        validationCode: 'Bytes',
      },
      deregister: {
        id: 'u32',
      },
      swap: {
        id: 'u32',
        other: 'u32',
      },
      remove_lock: {
        para: 'u32',
      },
      reserve: 'Null',
      add_lock: {
        para: 'u32',
      },
      schedule_code_upgrade: {
        para: 'u32',
        newCode: 'Bytes',
      },
      set_current_head: {
        para: 'u32',
        newHead: 'Bytes'
      }
    }
  },
  /**
   * Lookup362: polkadot_runtime_common::slots::pallet::Call<T>
   **/
  PolkadotRuntimeCommonSlotsPalletCall: {
    _enum: {
      force_lease: {
        para: 'u32',
        leaser: 'AccountId32',
        amount: 'u128',
        periodBegin: 'u32',
        periodCount: 'u32',
      },
      clear_all_leases: {
        para: 'u32',
      },
      trigger_onboard: {
        para: 'u32'
      }
    }
  },
  /**
   * Lookup363: polkadot_runtime_common::auctions::pallet::Call<T>
   **/
  PolkadotRuntimeCommonAuctionsPalletCall: {
    _enum: {
      new_auction: {
        duration: 'Compact<u32>',
        leasePeriodIndex: 'Compact<u32>',
      },
      bid: {
        para: 'Compact<u32>',
        auctionIndex: 'Compact<u32>',
        firstSlot: 'Compact<u32>',
        lastSlot: 'Compact<u32>',
        amount: 'Compact<u128>',
      },
      cancel_auction: 'Null'
    }
  },
  /**
   * Lookup365: polkadot_runtime_common::crowdloan::pallet::Call<T>
   **/
  PolkadotRuntimeCommonCrowdloanPalletCall: {
    _enum: {
      create: {
        index: 'Compact<u32>',
        cap: 'Compact<u128>',
        firstPeriod: 'Compact<u32>',
        lastPeriod: 'Compact<u32>',
        end: 'Compact<u32>',
        verifier: 'Option<SpRuntimeMultiSigner>',
      },
      contribute: {
        index: 'Compact<u32>',
        value: 'Compact<u128>',
        signature: 'Option<SpRuntimeMultiSignature>',
      },
      withdraw: {
        who: 'AccountId32',
        index: 'Compact<u32>',
      },
      refund: {
        index: 'Compact<u32>',
      },
      dissolve: {
        index: 'Compact<u32>',
      },
      edit: {
        index: 'Compact<u32>',
        cap: 'Compact<u128>',
        firstPeriod: 'Compact<u32>',
        lastPeriod: 'Compact<u32>',
        end: 'Compact<u32>',
        verifier: 'Option<SpRuntimeMultiSigner>',
      },
      add_memo: {
        index: 'u32',
        memo: 'Bytes',
      },
      poke: {
        index: 'u32',
      },
      contribute_all: {
        index: 'Compact<u32>',
        signature: 'Option<SpRuntimeMultiSignature>'
      }
    }
  },
  /**
   * Lookup367: sp_runtime::MultiSigner
   **/
  SpRuntimeMultiSigner: {
    _enum: {
      Ed25519: 'SpCoreEd25519Public',
      Sr25519: 'SpCoreSr25519Public',
      Ecdsa: 'SpCoreEcdsaPublic'
    }
  },
  /**
   * Lookup368: sp_core::ecdsa::Public
   **/
  SpCoreEcdsaPublic: '[u8;33]',
  /**
   * Lookup373: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'XcmVersionedMultiLocation',
        message: 'XcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'XcmVersionedXcm',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      force_xcm_version: {
        location: 'XcmV3MultiLocation',
        version: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      force_suspension: {
        suspended: 'bool'
      }
    }
  },
  /**
   * Lookup374: xcm::VersionedMultiLocation
   **/
  XcmVersionedMultiLocation: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiLocation',
      __Unused2: 'Null',
      V3: 'XcmV3MultiLocation'
    }
  },
  /**
   * Lookup375: xcm::v2::multilocation::MultiLocation
   **/
  XcmV2MultiLocation: {
    parents: 'u8',
    interior: 'XcmV2MultilocationJunctions'
  },
  /**
   * Lookup376: xcm::v2::multilocation::Junctions
   **/
  XcmV2MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV2Junction',
      X2: '(XcmV2Junction,XcmV2Junction)',
      X3: '(XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X4: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X5: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X6: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X7: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X8: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)'
    }
  },
  /**
   * Lookup377: xcm::v2::junction::Junction
   **/
  XcmV2Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV2NetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV2NetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV2NetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV2BodyId',
        part: 'XcmV2BodyPart'
      }
    }
  },
  /**
   * Lookup378: xcm::v2::NetworkId
   **/
  XcmV2NetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup380: xcm::v2::BodyId
   **/
  XcmV2BodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup381: xcm::v2::BodyPart
   **/
  XcmV2BodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup382: xcm::VersionedXcm<RuntimeCall>
   **/
  XcmVersionedXcm: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'XcmV2Xcm',
      V3: 'XcmV3Xcm'
    }
  },
  /**
   * Lookup383: xcm::v2::Xcm<RuntimeCall>
   **/
  XcmV2Xcm: 'Vec<XcmV2Instruction>',
  /**
   * Lookup385: xcm::v2::Instruction<RuntimeCall>
   **/
  XcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV2MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV2MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV2MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV2Response',
        maxWeight: 'Compact<u64>',
      },
      TransferAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        beneficiary: 'XcmV2MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      Transact: {
        originType: 'XcmV2OriginKind',
        requireWeightAtMost: 'Compact<u64>',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV2MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'XcmV2MultiLocation',
        maxResponseWeight: 'Compact<u64>',
      },
      DepositAsset: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'XcmV2MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV2MultiassetMultiAssetFilter',
        receive: 'XcmV2MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        reserve: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV2MultiLocation',
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>',
      },
      BuyExecution: {
        fees: 'XcmV2MultiAsset',
        weightLimit: 'XcmV2WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV2Xcm',
      SetAppendix: 'XcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        ticket: 'XcmV2MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup386: xcm::v2::multiasset::MultiAssets
   **/
  XcmV2MultiassetMultiAssets: 'Vec<XcmV2MultiAsset>',
  /**
   * Lookup388: xcm::v2::multiasset::MultiAsset
   **/
  XcmV2MultiAsset: {
    id: 'XcmV2MultiassetAssetId',
    fun: 'XcmV2MultiassetFungibility'
  },
  /**
   * Lookup389: xcm::v2::multiasset::AssetId
   **/
  XcmV2MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV2MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup390: xcm::v2::multiasset::Fungibility
   **/
  XcmV2MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV2MultiassetAssetInstance'
    }
  },
  /**
   * Lookup391: xcm::v2::multiasset::AssetInstance
   **/
  XcmV2MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes'
    }
  },
  /**
   * Lookup392: xcm::v2::Response
   **/
  XcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV2MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
      Version: 'u32'
    }
  },
  /**
   * Lookup395: xcm::v2::traits::Error
   **/
  XcmV2TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'u64',
      Barrier: 'Null',
      WeightNotComputable: 'Null'
    }
  },
  /**
   * Lookup396: xcm::v2::OriginKind
   **/
  XcmV2OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup397: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup398: xcm::v2::multiasset::MultiAssetFilter
   **/
  XcmV2MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV2MultiassetMultiAssets',
      Wild: 'XcmV2MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup399: xcm::v2::multiasset::WildMultiAsset
   **/
  XcmV2MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV2MultiassetAssetId',
        fun: 'XcmV2MultiassetWildFungibility'
      }
    }
  },
  /**
   * Lookup400: xcm::v2::multiasset::WildFungibility
   **/
  XcmV2MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup401: xcm::v2::WeightLimit
   **/
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup402: xcm::v3::Xcm<Call>
   **/
  XcmV3Xcm: 'Vec<XcmV3Instruction>',
  /**
   * Lookup404: xcm::v3::Instruction<Call>
   **/
  XcmV3Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV3MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV3MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV3MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV3Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<XcmV3MultiLocation>',
      },
      TransferAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        beneficiary: 'XcmV3MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        dest: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      Transact: {
        originKind: 'XcmV2OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV3Junctions',
      ReportError: 'XcmV3QueryResponseInfo',
      DepositAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        beneficiary: 'XcmV3MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV3MultiassetMultiAssetFilter',
        want: 'XcmV3MultiassetMultiAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        reserve: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ReportHolding: {
        responseInfo: 'XcmV3QueryResponseInfo',
        assets: 'XcmV3MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'XcmV3MultiAsset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV3Xcm',
      SetAppendix: 'XcmV3Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        ticket: 'XcmV3MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'XcmV3MultiassetMultiAssets',
      ExpectAsset: 'XcmV3MultiassetMultiAssets',
      ExpectOrigin: 'Option<XcmV3MultiLocation>',
      ExpectError: 'Option<(u32,XcmV3TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'XcmV3QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'XcmV3QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'XcmV3Junction',
      ExportMessage: {
        network: 'XcmV3JunctionNetworkId',
        destination: 'XcmV3Junctions',
        xcm: 'XcmV3Xcm',
      },
      LockAsset: {
        asset: 'XcmV3MultiAsset',
        unlocker: 'XcmV3MultiLocation',
      },
      UnlockAsset: {
        asset: 'XcmV3MultiAsset',
        target: 'XcmV3MultiLocation',
      },
      NoteUnlockable: {
        asset: 'XcmV3MultiAsset',
        owner: 'XcmV3MultiLocation',
      },
      RequestUnlock: {
        asset: 'XcmV3MultiAsset',
        locker: 'XcmV3MultiLocation',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'XcmV3MultiLocation',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<XcmV3MultiLocation>'
      }
    }
  },
  /**
   * Lookup405: xcm::v3::multiasset::MultiAssets
   **/
  XcmV3MultiassetMultiAssets: 'Vec<XcmV3MultiAsset>',
  /**
   * Lookup407: xcm::v3::multiasset::MultiAsset
   **/
  XcmV3MultiAsset: {
    id: 'XcmV3MultiassetAssetId',
    fun: 'XcmV3MultiassetFungibility'
  },
  /**
   * Lookup408: xcm::v3::multiasset::AssetId
   **/
  XcmV3MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV3MultiLocation',
      Abstract: '[u8;32]'
    }
  },
  /**
   * Lookup409: xcm::v3::multiasset::Fungibility
   **/
  XcmV3MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV3MultiassetAssetInstance'
    }
  },
  /**
   * Lookup410: xcm::v3::multiasset::AssetInstance
   **/
  XcmV3MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup411: xcm::v3::Response
   **/
  XcmV3Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV3MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<XcmV3PalletInfo>',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup414: xcm::v3::traits::Error
   **/
  XcmV3TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      LocationFull: 'Null',
      LocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      ExpectationFalse: 'Null',
      PalletNotFound: 'Null',
      NameMismatch: 'Null',
      VersionIncompatible: 'Null',
      HoldingWouldOverflow: 'Null',
      ExportError: 'Null',
      ReanchorFailed: 'Null',
      NoDeal: 'Null',
      FeesNotMet: 'Null',
      LockError: 'Null',
      NoPermission: 'Null',
      Unanchored: 'Null',
      NotDepositable: 'Null',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'SpWeightsWeightV2Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  /**
   * Lookup416: xcm::v3::PalletInfo
   **/
  XcmV3PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup419: xcm::v3::MaybeErrorCode
   **/
  XcmV3MaybeErrorCode: {
    _enum: {
      Success: 'Null',
      Error: 'Bytes',
      TruncatedError: 'Bytes'
    }
  },
  /**
   * Lookup422: xcm::v3::QueryResponseInfo
   **/
  XcmV3QueryResponseInfo: {
    destination: 'XcmV3MultiLocation',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup423: xcm::v3::multiasset::MultiAssetFilter
   **/
  XcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV3MultiassetMultiAssets',
      Wild: 'XcmV3MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup424: xcm::v3::multiasset::WildMultiAsset
   **/
  XcmV3MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup425: xcm::v3::multiasset::WildFungibility
   **/
  XcmV3MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup426: xcm::v3::WeightLimit
   **/
  XcmV3WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup427: xcm::VersionedMultiAssets
   **/
  XcmVersionedMultiAssets: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiassetMultiAssets',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetMultiAssets'
    }
  },
  /**
   * Lookup437: polkadot_runtime_parachains::inclusion::AggregateMessageOrigin
   **/
  PolkadotRuntimeParachainsInclusionAggregateMessageOrigin: {
    _enum: {
      Ump: 'PolkadotRuntimeParachainsInclusionUmpQueueId'
    }
  },
  /**
   * Lookup438: polkadot_runtime_parachains::inclusion::UmpQueueId
   **/
  PolkadotRuntimeParachainsInclusionUmpQueueId: {
    _enum: {
      Para: 'u32'
    }
  },
  /**
   * Lookup446: polkadot_runtime_common::claims::pallet::Event<T>
   **/
  PolkadotRuntimeCommonClaimsPalletEvent: {
    _enum: {
      Claimed: {
        who: 'AccountId32',
        ethereumAddress: 'EthereumAddress',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup462: polkadot_runtime_parachains::inclusion::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsInclusionPalletEvent: {
    _enum: {
      CandidateBacked: '(PolkadotPrimitivesV4CandidateReceipt,Bytes,u32,u32)',
      CandidateIncluded: '(PolkadotPrimitivesV4CandidateReceipt,Bytes,u32,u32)',
      CandidateTimedOut: '(PolkadotPrimitivesV4CandidateReceipt,Bytes,u32)',
      UpwardMessagesReceived: {
        from: 'u32',
        count: 'u32'
      }
    }
  },
  /**
   * Lookup463: polkadot_primitives::v4::CandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV4CandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV4CandidateDescriptor',
    commitmentsHash: 'H256'
  },
  /**
   * Lookup466: polkadot_runtime_parachains::paras::pallet::Event
   **/
  PolkadotRuntimeParachainsParasPalletEvent: {
    _enum: {
      CurrentCodeUpdated: 'u32',
      CurrentHeadUpdated: 'u32',
      CodeUpgradeScheduled: 'u32',
      NewHeadNoted: 'u32',
      ActionQueued: '(u32,u32)',
      PvfCheckStarted: '(H256,u32)',
      PvfCheckAccepted: '(H256,u32)',
      PvfCheckRejected: '(H256,u32)'
    }
  },
  /**
   * Lookup467: polkadot_runtime_parachains::hrmp::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsHrmpPalletEvent: {
    _enum: {
      OpenChannelRequested: '(u32,u32,u32,u32)',
      OpenChannelCanceled: '(u32,PolkadotParachainPrimitivesHrmpChannelId)',
      OpenChannelAccepted: '(u32,u32)',
      ChannelClosed: '(u32,PolkadotParachainPrimitivesHrmpChannelId)',
      HrmpChannelForceOpened: '(u32,u32,u32,u32)'
    }
  },
  /**
   * Lookup468: polkadot_runtime_parachains::disputes::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsDisputesPalletEvent: {
    _enum: {
      DisputeInitiated: '(H256,PolkadotRuntimeParachainsDisputesDisputeLocation)',
      DisputeConcluded: '(H256,PolkadotRuntimeParachainsDisputesDisputeResult)',
      Revert: 'u32'
    }
  },
  /**
   * Lookup469: polkadot_runtime_parachains::disputes::DisputeLocation
   **/
  PolkadotRuntimeParachainsDisputesDisputeLocation: {
    _enum: ['Local', 'Remote']
  },
  /**
   * Lookup470: polkadot_runtime_parachains::disputes::DisputeResult
   **/
  PolkadotRuntimeParachainsDisputesDisputeResult: {
    _enum: ['Valid', 'Invalid']
  },
  /**
   * Lookup471: polkadot_runtime_common::paras_registrar::pallet::Event<T>
   **/
  PolkadotRuntimeCommonParasRegistrarPalletEvent: {
    _enum: {
      Registered: {
        paraId: 'u32',
        manager: 'AccountId32',
      },
      Deregistered: {
        paraId: 'u32',
      },
      Reserved: {
        paraId: 'u32',
        who: 'AccountId32',
      },
      Swapped: {
        paraId: 'u32',
        otherId: 'u32'
      }
    }
  },
  /**
   * Lookup472: polkadot_runtime_common::slots::pallet::Event<T>
   **/
  PolkadotRuntimeCommonSlotsPalletEvent: {
    _enum: {
      NewLeasePeriod: {
        leasePeriod: 'u32',
      },
      Leased: {
        paraId: 'u32',
        leaser: 'AccountId32',
        periodBegin: 'u32',
        periodCount: 'u32',
        extraReserved: 'u128',
        totalAmount: 'u128'
      }
    }
  },
  /**
   * Lookup473: polkadot_runtime_common::auctions::pallet::Event<T>
   **/
  PolkadotRuntimeCommonAuctionsPalletEvent: {
    _enum: {
      AuctionStarted: {
        auctionIndex: 'u32',
        leasePeriod: 'u32',
        ending: 'u32',
      },
      AuctionClosed: {
        auctionIndex: 'u32',
      },
      Reserved: {
        bidder: 'AccountId32',
        extraReserved: 'u128',
        totalAmount: 'u128',
      },
      Unreserved: {
        bidder: 'AccountId32',
        amount: 'u128',
      },
      ReserveConfiscated: {
        paraId: 'u32',
        leaser: 'AccountId32',
        amount: 'u128',
      },
      BidAccepted: {
        bidder: 'AccountId32',
        paraId: 'u32',
        amount: 'u128',
        firstSlot: 'u32',
        lastSlot: 'u32',
      },
      WinningOffset: {
        auctionIndex: 'u32',
        blockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup474: polkadot_runtime_common::crowdloan::pallet::Event<T>
   **/
  PolkadotRuntimeCommonCrowdloanPalletEvent: {
    _enum: {
      Created: {
        paraId: 'u32',
      },
      Contributed: {
        who: 'AccountId32',
        fundIndex: 'u32',
        amount: 'u128',
      },
      Withdrew: {
        who: 'AccountId32',
        fundIndex: 'u32',
        amount: 'u128',
      },
      PartiallyRefunded: {
        paraId: 'u32',
      },
      AllRefunded: {
        paraId: 'u32',
      },
      Dissolved: {
        paraId: 'u32',
      },
      HandleBidResult: {
        paraId: 'u32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Edited: {
        paraId: 'u32',
      },
      MemoUpdated: {
        who: 'AccountId32',
        paraId: 'u32',
        memo: 'Bytes',
      },
      AddedToNewRaise: {
        paraId: 'u32'
      }
    }
  },
  /**
   * Lookup475: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: {
        outcome: 'XcmV3TraitsOutcome',
      },
      Sent: {
        origin: 'XcmV3MultiLocation',
        destination: 'XcmV3MultiLocation',
        message: 'XcmV3Xcm',
        messageId: '[u8;32]',
      },
      UnexpectedResponse: {
        origin: 'XcmV3MultiLocation',
        queryId: 'u64',
      },
      ResponseReady: {
        queryId: 'u64',
        response: 'XcmV3Response',
      },
      Notified: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyOverweight: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
        actualWeight: 'SpWeightsWeightV2Weight',
        maxBudgetedWeight: 'SpWeightsWeightV2Weight',
      },
      NotifyDispatchError: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyDecodeFailed: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      InvalidResponder: {
        origin: 'XcmV3MultiLocation',
        queryId: 'u64',
        expectedLocation: 'Option<XcmV3MultiLocation>',
      },
      InvalidResponderVersion: {
        origin: 'XcmV3MultiLocation',
        queryId: 'u64',
      },
      ResponseTaken: {
        queryId: 'u64',
      },
      AssetsTrapped: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'XcmV3MultiLocation',
        assets: 'XcmVersionedMultiAssets',
      },
      VersionChangeNotified: {
        destination: 'XcmV3MultiLocation',
        result: 'u32',
        cost: 'XcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      SupportedVersionChanged: {
        location: 'XcmV3MultiLocation',
        version: 'u32',
      },
      NotifyTargetSendFail: {
        location: 'XcmV3MultiLocation',
        queryId: 'u64',
        error: 'XcmV3TraitsError',
      },
      NotifyTargetMigrationFail: {
        location: 'XcmVersionedMultiLocation',
        queryId: 'u64',
      },
      InvalidQuerierVersion: {
        origin: 'XcmV3MultiLocation',
        queryId: 'u64',
      },
      InvalidQuerier: {
        origin: 'XcmV3MultiLocation',
        queryId: 'u64',
        expectedQuerier: 'XcmV3MultiLocation',
        maybeActualQuerier: 'Option<XcmV3MultiLocation>',
      },
      VersionNotifyStarted: {
        destination: 'XcmV3MultiLocation',
        cost: 'XcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyRequested: {
        destination: 'XcmV3MultiLocation',
        cost: 'XcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyUnrequested: {
        destination: 'XcmV3MultiLocation',
        cost: 'XcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      FeesPaid: {
        paying: 'XcmV3MultiLocation',
        fees: 'XcmV3MultiassetMultiAssets',
      },
      AssetsClaimed: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'XcmV3MultiLocation',
        assets: 'XcmVersionedMultiAssets'
      }
    }
  },
  /**
   * Lookup476: xcm::v3::traits::Outcome
   **/
  XcmV3TraitsOutcome: {
    _enum: {
      Complete: 'SpWeightsWeightV2Weight',
      Incomplete: '(SpWeightsWeightV2Weight,XcmV3TraitsError)',
      Error: 'XcmV3TraitsError'
    }
  },
  /**
   * Lookup532: polkadot_runtime::RuntimeHoldReason
   **/
  PolkadotRuntimeRuntimeHoldReason: 'Null',
  /**
   * Lookup628: pallet_referenda::types::ReferendumInfo<TrackId, polkadot_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<polkadot_runtime::RuntimeCall>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumInfo: {
    _enum: {
      Ongoing: 'PalletReferendaReferendumStatus',
      Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup629: pallet_referenda::types::ReferendumStatus<TrackId, polkadot_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<polkadot_runtime::RuntimeCall>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatus: {
    track: 'u16',
    origin: 'PolkadotRuntimeOriginCaller',
    proposal: 'FrameSupportPreimagesBounded',
    enactment: 'FrameSupportScheduleDispatchTime',
    submitted: 'u32',
    submissionDeposit: 'PalletReferendaDeposit',
    decisionDeposit: 'Option<PalletReferendaDeposit>',
    deciding: 'Option<PalletReferendaDecidingStatus>',
    tally: 'PalletConvictionVotingTally',
    inQueue: 'bool',
    alarm: 'Option<(u32,(u32,u32))>'
  },
  /**
   * Lookup647: polkadot_runtime_common::claims::pallet::Error<T>
   **/
  PolkadotRuntimeCommonClaimsPalletError: {
    _enum: ['InvalidEthereumSignature', 'SignerHasNoClaim', 'SenderHasNoClaim', 'PotUnderflow', 'InvalidStatement', 'VestedBalanceExists']
  },
  /**
   * Lookup723: polkadot_runtime_parachains::configuration::HostConfiguration<BlockNumber>
   **/
  PolkadotRuntimeParachainsConfigurationHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32',
    asyncBackingParams: 'PolkadotPrimitivesVstagingAsyncBackingParams',
    maxPovSize: 'u32',
    maxDownwardMessageSize: 'u32',
    hrmpMaxParachainOutboundChannels: 'u32',
    hrmpMaxParathreadOutboundChannels: 'u32',
    hrmpSenderDeposit: 'u128',
    hrmpRecipientDeposit: 'u128',
    hrmpChannelMaxCapacity: 'u32',
    hrmpChannelMaxTotalSize: 'u32',
    hrmpMaxParachainInboundChannels: 'u32',
    hrmpMaxParathreadInboundChannels: 'u32',
    hrmpChannelMaxMessageSize: 'u32',
    executorParams: 'PolkadotPrimitivesV4ExecutorParams',
    codeRetentionPeriod: 'u32',
    parathreadCores: 'u32',
    parathreadRetries: 'u32',
    groupRotationFrequency: 'u32',
    chainAvailabilityPeriod: 'u32',
    threadAvailabilityPeriod: 'u32',
    schedulingLookahead: 'u32',
    maxValidatorsPerCore: 'Option<u32>',
    maxValidators: 'Option<u32>',
    disputePeriod: 'u32',
    disputePostConclusionAcceptancePeriod: 'u32',
    noShowSlots: 'u32',
    nDelayTranches: 'u32',
    zerothDelayTrancheWidth: 'u32',
    neededApprovals: 'u32',
    relayVrfModuloSamples: 'u32',
    pvfCheckingEnabled: 'bool',
    pvfVotingTtl: 'u32',
    minimumValidationUpgradeDelay: 'u32'
  },
  /**
   * Lookup726: polkadot_runtime_parachains::configuration::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsConfigurationPalletError: {
    _enum: ['InvalidNewValue']
  },
  /**
   * Lookup729: polkadot_runtime_parachains::inclusion::AvailabilityBitfieldRecord<N>
   **/
  PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord: {
    bitfield: 'BitVec',
    submittedAt: 'u32'
  },
  /**
   * Lookup730: polkadot_runtime_parachains::inclusion::CandidatePendingAvailability<primitive_types::H256, N>
   **/
  PolkadotRuntimeParachainsInclusionCandidatePendingAvailability: {
    _alias: {
      hash_: 'hash'
    },
    core: 'u32',
    hash_: 'H256',
    descriptor: 'PolkadotPrimitivesV4CandidateDescriptor',
    availabilityVotes: 'BitVec',
    backers: 'BitVec',
    relayParentNumber: 'u32',
    backedInNumber: 'u32',
    backingGroup: 'u32'
  },
  /**
   * Lookup731: polkadot_runtime_parachains::inclusion::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsInclusionPalletError: {
    _enum: ['UnsortedOrDuplicateValidatorIndices', 'UnsortedOrDuplicateDisputeStatementSet', 'UnsortedOrDuplicateBackedCandidates', 'UnexpectedRelayParent', 'WrongBitfieldSize', 'BitfieldAllZeros', 'BitfieldDuplicateOrUnordered', 'ValidatorIndexOutOfBounds', 'InvalidBitfieldSignature', 'UnscheduledCandidate', 'CandidateScheduledBeforeParaFree', 'WrongCollator', 'ScheduledOutOfOrder', 'HeadDataTooLarge', 'PrematureCodeUpgrade', 'NewCodeTooLarge', 'CandidateNotInParentContext', 'InvalidGroupIndex', 'InsufficientBacking', 'InvalidBacking', 'NotCollatorSigned', 'ValidationDataHashMismatch', 'IncorrectDownwardMessageHandling', 'InvalidUpwardMessages', 'HrmpWatermarkMishandling', 'InvalidOutboundHrmp', 'InvalidValidationCodeHash', 'ParaHeadMismatch', 'BitfieldReferencesFreedCore']
  },
  /**
   * Lookup732: polkadot_primitives::v4::ScrapedOnChainVotes<primitive_types::H256>
   **/
  PolkadotPrimitivesV4ScrapedOnChainVotes: {
    session: 'u32',
    backingValidatorsPerCandidate: 'Vec<(PolkadotPrimitivesV4CandidateReceipt,Vec<(u32,PolkadotPrimitivesV4ValidityAttestation)>)>',
    disputes: 'Vec<PolkadotPrimitivesV4DisputeStatementSet>'
  },
  /**
   * Lookup737: polkadot_runtime_parachains::paras_inherent::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsParasInherentPalletError: {
    _enum: ['TooManyInclusionInherents', 'InvalidParentHeader', 'CandidateConcludedInvalid', 'InherentOverweight', 'DisputeStatementsUnsortedOrDuplicates', 'DisputeInvalid']
  },
  /**
   * Lookup739: polkadot_runtime_parachains::scheduler::ParathreadClaimQueue
   **/
  PolkadotRuntimeParachainsSchedulerParathreadClaimQueue: {
    queue: 'Vec<PolkadotRuntimeParachainsSchedulerQueuedParathread>',
    nextCoreOffset: 'u32'
  },
  /**
   * Lookup741: polkadot_runtime_parachains::scheduler::QueuedParathread
   **/
  PolkadotRuntimeParachainsSchedulerQueuedParathread: {
    claim: 'PolkadotPrimitivesV4ParathreadEntry',
    coreOffset: 'u32'
  },
  /**
   * Lookup742: polkadot_primitives::v4::ParathreadEntry
   **/
  PolkadotPrimitivesV4ParathreadEntry: {
    claim: 'PolkadotPrimitivesV4ParathreadClaim',
    retries: 'u32'
  },
  /**
   * Lookup743: polkadot_primitives::v4::ParathreadClaim
   **/
  PolkadotPrimitivesV4ParathreadClaim: '(u32,PolkadotPrimitivesV4CollatorAppPublic)',
  /**
   * Lookup746: polkadot_primitives::v4::CoreOccupied
   **/
  PolkadotPrimitivesV4CoreOccupied: {
    _enum: {
      Parathread: 'PolkadotPrimitivesV4ParathreadEntry',
      Parachain: 'Null'
    }
  },
  /**
   * Lookup749: polkadot_runtime_parachains::scheduler::CoreAssignment
   **/
  PolkadotRuntimeParachainsSchedulerCoreAssignment: {
    core: 'u32',
    paraId: 'u32',
    kind: 'PolkadotRuntimeParachainsSchedulerAssignmentKind',
    groupIdx: 'u32'
  },
  /**
   * Lookup750: polkadot_runtime_parachains::scheduler::AssignmentKind
   **/
  PolkadotRuntimeParachainsSchedulerAssignmentKind: {
    _enum: {
      Parachain: 'Null',
      Parathread: '(PolkadotPrimitivesV4CollatorAppPublic,u32)'
    }
  },
  /**
   * Lookup751: polkadot_runtime_parachains::paras::PvfCheckActiveVoteState<BlockNumber>
   **/
  PolkadotRuntimeParachainsParasPvfCheckActiveVoteState: {
    votesAccept: 'BitVec',
    votesReject: 'BitVec',
    age: 'u32',
    createdAt: 'u32',
    causes: 'Vec<PolkadotRuntimeParachainsParasPvfCheckCause>'
  },
  /**
   * Lookup753: polkadot_runtime_parachains::paras::PvfCheckCause<BlockNumber>
   **/
  PolkadotRuntimeParachainsParasPvfCheckCause: {
    _enum: {
      Onboarding: 'u32',
      Upgrade: {
        id: 'u32',
        relayParentNumber: 'u32'
      }
    }
  },
  /**
   * Lookup755: polkadot_runtime_parachains::paras::ParaLifecycle
   **/
  PolkadotRuntimeParachainsParasParaLifecycle: {
    _enum: ['Onboarding', 'Parathread', 'Parachain', 'UpgradingParathread', 'DowngradingParachain', 'OffboardingParathread', 'OffboardingParachain']
  },
  /**
   * Lookup757: polkadot_runtime_parachains::paras::ParaPastCodeMeta<N>
   **/
  PolkadotRuntimeParachainsParasParaPastCodeMeta: {
    upgradeTimes: 'Vec<PolkadotRuntimeParachainsParasReplacementTimes>',
    lastPruned: 'Option<u32>'
  },
  /**
   * Lookup759: polkadot_runtime_parachains::paras::ReplacementTimes<N>
   **/
  PolkadotRuntimeParachainsParasReplacementTimes: {
    expectedAt: 'u32',
    activatedAt: 'u32'
  },
  /**
   * Lookup761: polkadot_primitives::v4::UpgradeGoAhead
   **/
  PolkadotPrimitivesV4UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },
  /**
   * Lookup762: polkadot_primitives::v4::UpgradeRestriction
   **/
  PolkadotPrimitivesV4UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup763: polkadot_runtime_parachains::paras::ParaGenesisArgs
   **/
  PolkadotRuntimeParachainsParasParaGenesisArgs: {
    genesisHead: 'Bytes',
    validationCode: 'Bytes',
    paraKind: 'bool'
  },
  /**
   * Lookup764: polkadot_runtime_parachains::paras::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsParasPalletError: {
    _enum: ['NotRegistered', 'CannotOnboard', 'CannotOffboard', 'CannotUpgrade', 'CannotDowngrade', 'PvfCheckStatementStale', 'PvfCheckStatementFuture', 'PvfCheckValidatorIndexOutOfBounds', 'PvfCheckInvalidSignature', 'PvfCheckDoubleVote', 'PvfCheckSubjectInvalid', 'CannotUpgradeCode']
  },
  /**
   * Lookup766: polkadot_runtime_parachains::initializer::BufferedSessionChange
   **/
  PolkadotRuntimeParachainsInitializerBufferedSessionChange: {
    validators: 'Vec<PolkadotPrimitivesV4ValidatorAppPublic>',
    queued: 'Vec<PolkadotPrimitivesV4ValidatorAppPublic>',
    sessionIndex: 'u32'
  },
  /**
   * Lookup768: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup769: polkadot_runtime_parachains::hrmp::HrmpOpenChannelRequest
   **/
  PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest: {
    confirmed: 'bool',
    age: 'u32',
    senderDeposit: 'u128',
    maxMessageSize: 'u32',
    maxCapacity: 'u32',
    maxTotalSize: 'u32'
  },
  /**
   * Lookup771: polkadot_runtime_parachains::hrmp::HrmpChannel
   **/
  PolkadotRuntimeParachainsHrmpHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>',
    senderDeposit: 'u128',
    recipientDeposit: 'u128'
  },
  /**
   * Lookup773: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup776: polkadot_runtime_parachains::hrmp::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsHrmpPalletError: {
    _enum: ['OpenHrmpChannelToSelf', 'OpenHrmpChannelInvalidRecipient', 'OpenHrmpChannelZeroCapacity', 'OpenHrmpChannelCapacityExceedsLimit', 'OpenHrmpChannelZeroMessageSize', 'OpenHrmpChannelMessageSizeExceedsLimit', 'OpenHrmpChannelAlreadyExists', 'OpenHrmpChannelAlreadyRequested', 'OpenHrmpChannelLimitExceeded', 'AcceptHrmpChannelDoesntExist', 'AcceptHrmpChannelAlreadyConfirmed', 'AcceptHrmpChannelLimitExceeded', 'CloseHrmpChannelUnauthorized', 'CloseHrmpChannelDoesntExist', 'CloseHrmpChannelAlreadyUnderway', 'CancelHrmpOpenChannelUnauthorized', 'OpenHrmpChannelDoesntExist', 'OpenHrmpChannelAlreadyConfirmed', 'WrongWitness']
  },
  /**
   * Lookup778: polkadot_primitives::v4::SessionInfo
   **/
  PolkadotPrimitivesV4SessionInfo: {
    activeValidatorIndices: 'Vec<u32>',
    randomSeed: '[u8;32]',
    disputePeriod: 'u32',
    validators: 'PolkadotPrimitivesV4IndexedVecValidatorIndex',
    discoveryKeys: 'Vec<SpAuthorityDiscoveryAppPublic>',
    assignmentKeys: 'Vec<PolkadotPrimitivesV4AssignmentAppPublic>',
    validatorGroups: 'PolkadotPrimitivesV4IndexedVecGroupIndex',
    nCores: 'u32',
    zerothDelayTrancheWidth: 'u32',
    relayVrfModuloSamples: 'u32',
    nDelayTranches: 'u32',
    noShowSlots: 'u32',
    neededApprovals: 'u32'
  },
  /**
   * Lookup779: polkadot_primitives::v4::IndexedVec<polkadot_primitives::v4::ValidatorIndex, polkadot_primitives::v4::validator_app::Public>
   **/
  PolkadotPrimitivesV4IndexedVecValidatorIndex: 'Vec<PolkadotPrimitivesV4ValidatorAppPublic>',
  /**
   * Lookup781: polkadot_primitives::v4::IndexedVec<polkadot_primitives::v4::GroupIndex, V>
   **/
  PolkadotPrimitivesV4IndexedVecGroupIndex: 'Vec<Vec<u32>>',
  /**
   * Lookup783: polkadot_primitives::v4::DisputeState<N>
   **/
  PolkadotPrimitivesV4DisputeState: {
    validatorsFor: 'BitVec',
    validatorsAgainst: 'BitVec',
    start: 'u32',
    concludedAt: 'Option<u32>'
  },
  /**
   * Lookup785: polkadot_runtime_parachains::disputes::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsDisputesPalletError: {
    _enum: ['DuplicateDisputeStatementSets', 'AncientDisputeStatement', 'ValidatorIndexOutOfBounds', 'InvalidSignature', 'DuplicateStatement', 'SingleSidedDispute', 'MaliciousBacker', 'MissingBackingVotes', 'UnconfirmedDispute']
  },
  /**
   * Lookup786: polkadot_primitives::vstaging::slashing::PendingSlashes
   **/
  PolkadotPrimitivesVstagingSlashingPendingSlashes: {
    _alias: {
      keys_: 'keys'
    },
    keys_: 'BTreeMap<u32, PolkadotPrimitivesV4ValidatorAppPublic>',
    kind: 'PolkadotPrimitivesVstagingSlashingSlashingOffenceKind'
  },
  /**
   * Lookup790: polkadot_runtime_parachains::disputes::slashing::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsDisputesSlashingPalletError: {
    _enum: ['InvalidKeyOwnershipProof', 'InvalidSessionIndex', 'InvalidCandidateHash', 'InvalidValidatorIndex', 'ValidatorIndexIdMismatch', 'DuplicateSlashingReport']
  },
  /**
   * Lookup791: polkadot_runtime_common::paras_registrar::ParaInfo<sp_core::crypto::AccountId32, Balance>
   **/
  PolkadotRuntimeCommonParasRegistrarParaInfo: {
    manager: 'AccountId32',
    deposit: 'u128',
    locked: 'bool'
  },
  /**
   * Lookup792: polkadot_runtime_common::paras_registrar::pallet::Error<T>
   **/
  PolkadotRuntimeCommonParasRegistrarPalletError: {
    _enum: ['NotRegistered', 'AlreadyRegistered', 'NotOwner', 'CodeTooLarge', 'HeadDataTooLarge', 'NotParachain', 'NotParathread', 'CannotDeregister', 'CannotDowngrade', 'CannotUpgrade', 'ParaLocked', 'NotReserved', 'EmptyCode', 'CannotSwap']
  },
  /**
   * Lookup794: polkadot_runtime_common::slots::pallet::Error<T>
   **/
  PolkadotRuntimeCommonSlotsPalletError: {
    _enum: ['ParaNotOnboarding', 'LeaseError']
  },
  /**
   * Lookup799: polkadot_runtime_common::auctions::pallet::Error<T>
   **/
  PolkadotRuntimeCommonAuctionsPalletError: {
    _enum: ['AuctionInProgress', 'LeasePeriodInPast', 'ParaNotRegistered', 'NotCurrentAuction', 'NotAuction', 'AuctionEnded', 'AlreadyLeasedOut']
  },
  /**
   * Lookup800: polkadot_runtime_common::crowdloan::FundInfo<sp_core::crypto::AccountId32, Balance, BlockNumber, LeasePeriod>
   **/
  PolkadotRuntimeCommonCrowdloanFundInfo: {
    depositor: 'AccountId32',
    verifier: 'Option<SpRuntimeMultiSigner>',
    deposit: 'u128',
    raised: 'u128',
    end: 'u32',
    cap: 'u128',
    lastContribution: 'PolkadotRuntimeCommonCrowdloanLastContribution',
    firstPeriod: 'u32',
    lastPeriod: 'u32',
    fundIndex: 'u32'
  },
  /**
   * Lookup801: polkadot_runtime_common::crowdloan::LastContribution<BlockNumber>
   **/
  PolkadotRuntimeCommonCrowdloanLastContribution: {
    _enum: {
      Never: 'Null',
      PreEnding: 'u32',
      Ending: 'u32'
    }
  },
  /**
   * Lookup802: polkadot_runtime_common::crowdloan::pallet::Error<T>
   **/
  PolkadotRuntimeCommonCrowdloanPalletError: {
    _enum: ['FirstPeriodInPast', 'FirstPeriodTooFarInFuture', 'LastPeriodBeforeFirstPeriod', 'LastPeriodTooFarInFuture', 'CannotEndInPast', 'EndTooFarInFuture', 'Overflow', 'ContributionTooSmall', 'InvalidParaId', 'CapExceeded', 'ContributionPeriodOver', 'InvalidOrigin', 'NotParachain', 'LeaseActive', 'BidOrLeaseActive', 'FundNotEnded', 'NoContributions', 'NotReadyToDissolve', 'InvalidSignature', 'MemoTooLarge', 'AlreadyInNewRaise', 'VrfDelayInProgress', 'NoLeasePeriod']
  },
  /**
   * Lookup803: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'XcmVersionedMultiLocation',
        maybeMatchQuerier: 'Option<XcmVersionedMultiLocation>',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u32',
      },
      VersionNotifier: {
        origin: 'XcmVersionedMultiLocation',
        isActive: 'bool',
      },
      Ready: {
        response: 'XcmVersionedResponse',
        at: 'u32'
      }
    }
  },
  /**
   * Lookup807: xcm::VersionedResponse
   **/
  XcmVersionedResponse: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'XcmV2Response',
      V3: 'XcmV3Response'
    }
  },
  /**
   * Lookup813: pallet_xcm::pallet::VersionMigrationStage
   **/
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: 'Null',
      MigrateVersionNotifiers: 'Null',
      NotifyCurrentTargets: 'Option<Bytes>',
      MigrateAndNotifyOldTargets: 'Null'
    }
  },
  /**
   * Lookup816: xcm::VersionedAssetId
   **/
  XcmVersionedAssetId: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetAssetId'
    }
  },
  /**
   * Lookup817: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
   **/
  PalletXcmRemoteLockedFungibleRecord: {
    amount: 'u128',
    owner: 'XcmVersionedMultiLocation',
    locker: 'XcmVersionedMultiLocation',
    consumers: 'Vec<(Null,u128)>'
  },
  /**
   * Lookup824: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed', 'InvalidAsset', 'LowBalance', 'TooManyLocks', 'AccountNotSovereign', 'FeesNotMet', 'LockNotFound', 'InUse']
  },
  /**
   * Lookup842: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup843: polkadot_runtime_common::claims::PrevalidateAttests<T>
   **/
  PolkadotRuntimeCommonClaimsPrevalidateAttests: 'Null',
  /**
   * Lookup844: polkadot_runtime::Runtime
   **/
  PolkadotRuntimeRuntime: 'Null'
};
