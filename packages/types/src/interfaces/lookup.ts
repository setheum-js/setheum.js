// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup11: pallet_System::pallet::Call
   **/
  PalletSystemCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill',
      },
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_changes_trie_config: {
        changesTrieConfig: 'Option<ChangesTrieConfiguration>',
      },
      set_storage: {
        items: 'Vec<KeyValue>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Key>',
      },
      kill_prefix: {
        prefix: 'Key',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup17: pallet_System::pallet::Error
   **/
  PalletSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount']
  },
  /**
   * Lookup22: pallet_System::pallet::Event
   **/
  PalletSystemEvent: {
    _enum: {
      ExtrinsicSuccess: 'DispatchInfo',
      ExtrinsicFailed: '(DispatchError,DispatchInfo)',
      CodeUpdated: 'Null',
      NewAccount: 'AccountId',
      KilledAccount: 'AccountId',
      Remarked: '(AccountId,Hash)'
    }
  },
  /**
   * Lookup34: pallet_Timestamp::pallet::Call
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<Moment>'
      }
    }
  },
  /**
   * Lookup39: pallet_Sudo::pallet::Call
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'LookupSource',
      },
      sudo_as: {
        who: 'LookupSource',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup40: pallet_Sudo::pallet::Error
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup42: pallet_Sudo::pallet::Event
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: 'DispatchResult',
      KeyChanged: 'AccountId',
      SudoAsDone: 'DispatchResult'
    }
  },
  /**
   * Lookup45: pallet_Scheduler::pallet::Call
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'BlockNumber',
        maybePeriodic: 'Option<Period>',
        priority: 'Priority',
        call: 'Call',
      },
      cancel: {
        when: 'BlockNumber',
        index: 'u32',
      },
      schedule_named: {
        id: 'Bytes',
        when: 'BlockNumber',
        maybePeriodic: 'Option<Period>',
        priority: 'Priority',
        call: 'Call',
      },
      cancel_named: {
        id: 'Bytes',
      },
      schedule_after: {
        after: 'BlockNumber',
        maybePeriodic: 'Option<Period>',
        priority: 'Priority',
        call: 'Call',
      },
      schedule_named_after: {
        id: 'Bytes',
        after: 'BlockNumber',
        maybePeriodic: 'Option<Period>',
        priority: 'Priority',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup46: pallet_Scheduler::pallet::Error
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange']
  },
  /**
   * Lookup49: pallet_Scheduler::pallet::Event
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: '(BlockNumber,u32)',
      Canceled: '(BlockNumber,u32)',
      Dispatched: '(TaskAddress,Option<Bytes>,DispatchResult)'
    }
  },
  /**
   * Lookup53: pallet_Prices::pallet::Call
   **/
  PalletPricesCall: {
    _enum: {
      lock_price: {
        currencyId: 'CurrencyId',
      },
      unlock_price: {
        currencyId: 'CurrencyId'
      }
    }
  },
  /**
   * Lookup55: pallet_Prices::pallet::Error
   **/
  PalletPricesError: {
    _enum: ['AccessPriceFailed', 'NoLockedPrice']
  },
  /**
   * Lookup57: pallet_Prices::pallet::Event
   **/
  PalletPricesEvent: {
    _enum: {
      LockPrice: '(CurrencyId,Price)',
      UnlockPrice: 'CurrencyId',
      FetchPrice: '(CurrencyId,Option<Price>)',
      RelativePrice: '(CurrencyId,CurrencyId,Option<Price>)'
    }
  },
  /**
   * Lookup61: pallet_Dex::pallet::Call
   **/
  PalletDexCall: {
    _enum: {
      swap_with_exact_supply: {
        path: 'Vec<CurrencyId>',
        supplyAmount: 'Compact<Balance>',
        minTargetAmount: 'Compact<Balance>',
      },
      swap_with_exact_target: {
        path: 'Vec<CurrencyId>',
        targetAmount: 'Compact<Balance>',
        maxSupplyAmount: 'Compact<Balance>',
      },
      add_liquidity: {
        currencyIdA: 'CurrencyId',
        currencyIdB: 'CurrencyId',
        maxAmountA: 'Compact<Balance>',
        maxAmountB: 'Compact<Balance>',
        minShareIncrement: 'Compact<Balance>',
      },
      add_provision: {
        currencyIdA: 'CurrencyId',
        currencyIdB: 'CurrencyId',
        amountA: 'Compact<Balance>',
        amountB: 'Compact<Balance>',
      },
      claim_dex_share: {
        owner: 'AccountId',
        currencyIdA: 'CurrencyId',
        currencyIdB: 'CurrencyId',
      },
      remove_liquidity: {
        currencyIdA: 'CurrencyId',
        currencyIdB: 'CurrencyId',
        removeShare: 'Compact<Balance>',
        minWithdrawnA: 'Compact<Balance>',
        minWithdrawnB: 'Compact<Balance>',
      },
      list_provisioning: {
        currencyIdA: 'CurrencyId',
        currencyIdB: 'CurrencyId',
        minContributionA: 'Compact<Balance>',
        minContributionB: 'Compact<Balance>',
        targetProvisionA: 'Compact<Balance>',
        targetProvisionB: 'Compact<Balance>',
        notBefore: 'Compact<BlockNumber>',
      },
      update_provisioning_parameters: {
        currencyIdA: 'CurrencyId',
        currencyIdB: 'CurrencyId',
        minContributionA: 'Compact<Balance>',
        minContributionB: 'Compact<Balance>',
        targetProvisionA: 'Compact<Balance>',
        targetProvisionB: 'Compact<Balance>',
        notBefore: 'Compact<BlockNumber>',
      },
      end_provisioning: {
        currencyIdA: 'CurrencyId',
        currencyIdB: 'CurrencyId',
      },
      enable_trading_pair: {
        currencyIdA: 'CurrencyId',
        currencyIdB: 'CurrencyId',
      },
      disable_trading_pair: {
        currencyIdA: 'CurrencyId',
        currencyIdB: 'CurrencyId'
      }
    }
  },
  /**
   * Lookup64: pallet_Dex::pallet::Error
   **/
  PalletDexError: {
    _enum: ['AlreadyEnabled', 'MustBeEnabled', 'MustBeProvisioning', 'MustBeDisabled', 'NotAllowedList', 'InvalidContributionIncrement', 'InvalidLiquidityIncrement', 'InvalidCurrencyId', 'InvalidTradingPathLength', 'InsufficientTargetAmount', 'ExcessiveSupplyAmount', 'InsufficientLiquidity', 'ZeroSupplyAmount', 'ZeroTargetAmount', 'UnacceptableShareIncrement', 'UnacceptableLiquidityWithdrawn', 'InvariantCheckFailed', 'UnqualifiedProvision', 'StillProvisioning', 'AssetUnregistered', 'InvalidTradingPath']
  },
  /**
   * Lookup68: pallet_Dex::pallet::Event
   **/
  PalletDexEvent: {
    _enum: {
      AddProvision: '(AccountId,CurrencyId,Balance,CurrencyId,Balance)',
      AddLiquidity: '(AccountId,CurrencyId,Balance,CurrencyId,Balance,Balance)',
      RemoveLiquidity: '(AccountId,CurrencyId,Balance,CurrencyId,Balance,Balance)',
      LiquidityPoolUpdated: '(TradingPair,Balance,Balance)',
      Swap: '(AccountId,Vec<CurrencyId>,Vec<Balance>)',
      BuyBackSwap: '(AccountId,Vec<CurrencyId>,Vec<Balance>)',
      EnableTradingPair: 'TradingPair',
      ListProvisioning: 'TradingPair',
      DisableTradingPair: 'TradingPair',
      ProvisioningToEnabled: '(TradingPair,Balance,Balance,Balance)'
    }
  },
  /**
   * Lookup78: pallet_Multisig::pallet::Call
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId>',
        maybeTimepoint: 'Option<Timepoint>',
        call: 'OpaqueCall',
        storeCall: 'bool',
        maxWeight: 'Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId>',
        maybeTimepoint: 'Option<Timepoint>',
        callHash: '[u8;32]',
        maxWeight: 'Weight',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId>',
        timepoint: 'Timepoint',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup80: pallet_Multisig::pallet::Error
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup82: pallet_Multisig::pallet::Event
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: '(AccountId,AccountId,CallHash)',
      MultisigApproval: '(AccountId,Timepoint,AccountId,CallHash)',
      MultisigExecuted: '(AccountId,Timepoint,AccountId,CallHash,DispatchResult)',
      MultisigCancelled: '(AccountId,Timepoint,AccountId,CallHash)'
    }
  },
  /**
   * Lookup86: pallet_Recovery::pallet::Call
   **/
  PalletRecoveryCall: {
    _enum: {
      as_recovered: {
        account: 'AccountId',
        call: 'Call',
      },
      set_recovered: {
        lost: 'AccountId',
        rescuer: 'AccountId',
      },
      create_recovery: {
        friends: 'Vec<AccountId>',
        threshold: 'u16',
        delayPeriod: 'BlockNumber',
      },
      initiate_recovery: {
        account: 'AccountId',
      },
      vouch_recovery: {
        lost: 'AccountId',
        rescuer: 'AccountId',
      },
      claim_recovery: {
        account: 'AccountId',
      },
      close_recovery: {
        rescuer: 'AccountId',
      },
      remove_recovery: 'Null',
      cancel_recovered: {
        account: 'AccountId'
      }
    }
  },
  /**
   * Lookup87: pallet_Recovery::pallet::Error
   **/
  PalletRecoveryError: {
    _enum: ['NotAllowed', 'ZeroThreshold', 'NotEnoughFriends', 'MaxFriends', 'NotSorted', 'NotRecoverable', 'AlreadyRecoverable', 'AlreadyStarted', 'NotStarted', 'NotFriend', 'DelayPeriod', 'AlreadyVouched', 'Threshold', 'StillActive', 'AlreadyProxy', 'BadState']
  },
  /**
   * Lookup88: pallet_Recovery::pallet::Event
   **/
  PalletRecoveryEvent: {
    _enum: {
      RecoveryCreated: 'AccountId',
      RecoveryInitiated: '(AccountId,AccountId)',
      RecoveryVouched: '(AccountId,AccountId,AccountId)',
      RecoveryClosed: '(AccountId,AccountId)',
      AccountRecovered: '(AccountId,AccountId)',
      RecoveryRemoved: 'AccountId'
    }
  },
  /**
   * Lookup96: pallet_Proxy::pallet::Call
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'AccountId',
        forceProxyType: 'Option<ProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'AccountId',
        proxyType: 'ProxyType',
        delay: 'BlockNumber',
      },
      remove_proxy: {
        delegate: 'AccountId',
        proxyType: 'ProxyType',
        delay: 'BlockNumber',
      },
      remove_proxies: 'Null',
      anonymous: {
        proxyType: 'ProxyType',
        delay: 'BlockNumber',
        index: 'u16',
      },
      kill_anonymous: {
        spawner: 'AccountId',
        proxyType: 'ProxyType',
        index: 'u16',
        height: 'Compact<BlockNumber>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'AccountId',
        callHash: 'CallHashOf',
      },
      remove_announcement: {
        real: 'AccountId',
        callHash: 'CallHashOf',
      },
      reject_announcement: {
        delegate: 'AccountId',
        callHash: 'CallHashOf',
      },
      proxy_announced: {
        delegate: 'AccountId',
        real: 'AccountId',
        forceProxyType: 'Option<ProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup97: pallet_Proxy::pallet::Error
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup98: pallet_Proxy::pallet::Event
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: 'DispatchResult',
      AnonymousCreated: '(AccountId,AccountId,ProxyType,u16)',
      Announced: '(AccountId,AccountId,Hash)'
    }
  },
  /**
   * Lookup102: pallet_Auction::pallet::Call
   **/
  PalletAuctionCall: {
    _enum: {
      bid: {
        id: 'AuctionId',
        value: 'Compact<Balance>'
      }
    }
  },
  /**
   * Lookup103: pallet_Auction::pallet::Error
   **/
  PalletAuctionError: {
    _enum: ['AuctionNotExist', 'AuctionNotStarted', 'BidNotAccepted', 'InvalidBidPrice', 'NoAvailableAuctionId']
  },
  /**
   * Lookup104: pallet_Auction::pallet::Event
   **/
  PalletAuctionEvent: {
    _enum: {
      Bid: '(AuctionId,AccountId,Balance)'
    }
  },
  /**
   * Lookup108: pallet_OrmlNFT::pallet::Error
   **/
  PalletOrmlNFTError: {
    _enum: ['NoAvailableClassId', 'NoAvailableTokenId', 'TokenNotFound', 'ClassNotFound', 'NoPermission', 'CannotDestroyClass', 'MaxMetadataExceeded']
  },
  /**
   * Lookup121: pallet_ShuraCouncil::pallet::Call
   **/
  PalletShuraCouncilCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId>',
        prime: 'Option<AccountId>',
        oldCount: 'MemberCount',
      },
      execute: {
        proposal: 'Proposal',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<MemberCount>',
        proposal: 'Proposal',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'Hash',
        index: 'Compact<ProposalIndex>',
        approve: 'bool',
      },
      close: {
        proposalHash: 'Hash',
        index: 'Compact<ProposalIndex>',
        proposalWeightBound: 'Compact<Weight>',
        lengthBound: 'Compact<u32>',
      },
      disapprove_proposal: {
        proposalHash: 'Hash'
      }
    }
  },
  /**
   * Lookup122: pallet_ShuraCouncil::pallet::Error
   **/
  PalletShuraCouncilError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup124: pallet_ShuraCouncil::pallet::Event
   **/
  PalletShuraCouncilEvent: {
    _enum: {
      Proposed: '(AccountId,ProposalIndex,Hash,MemberCount)',
      Voted: '(AccountId,Hash,bool,MemberCount,MemberCount)',
      Approved: 'Hash',
      Disapproved: 'Hash',
      Executed: '(Hash,DispatchResult)',
      MemberExecuted: '(Hash,DispatchResult)',
      Closed: '(Hash,MemberCount,MemberCount)'
    }
  },
  /**
   * Lookup126: pallet_ShuraCouncilMembership::pallet::Call
   **/
  PalletShuraCouncilMembershipCall: {
    _enum: {
      add_member: {
        who: 'AccountId',
      },
      remove_member: {
        who: 'AccountId',
      },
      swap_member: {
        remove: 'AccountId',
        add: 'AccountId',
      },
      reset_members: {
        members: 'Vec<AccountId>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId',
      },
      set_prime: {
        who: 'AccountId',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup127: pallet_ShuraCouncilMembership::pallet::Error
   **/
  PalletShuraCouncilMembershipError: {
    _enum: ['AlreadyMember', 'NotMember']
  },
  /**
   * Lookup129: pallet_ShuraCouncilMembership::pallet::Event
   **/
  PalletShuraCouncilMembershipEvent: {
    _enum: {
      MemberAdded: 'Null',
      MemberRemoved: 'Null',
      MembersSwapped: 'Null',
      MembersReset: 'Null',
      KeyChanged: 'Null',
      Dummy: 'PhantomData'
    }
  },
  /**
   * Lookup130: pallet_FinancialCouncil::pallet::Call
   **/
  PalletFinancialCouncilCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId>',
        prime: 'Option<AccountId>',
        oldCount: 'MemberCount',
      },
      execute: {
        proposal: 'Proposal',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<MemberCount>',
        proposal: 'Proposal',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'Hash',
        index: 'Compact<ProposalIndex>',
        approve: 'bool',
      },
      close: {
        proposalHash: 'Hash',
        index: 'Compact<ProposalIndex>',
        proposalWeightBound: 'Compact<Weight>',
        lengthBound: 'Compact<u32>',
      },
      disapprove_proposal: {
        proposalHash: 'Hash'
      }
    }
  },
  /**
   * Lookup131: pallet_FinancialCouncil::pallet::Error
   **/
  PalletFinancialCouncilError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup132: pallet_FinancialCouncil::pallet::Event
   **/
  PalletFinancialCouncilEvent: {
    _enum: {
      Proposed: '(AccountId,ProposalIndex,Hash,MemberCount)',
      Voted: '(AccountId,Hash,bool,MemberCount,MemberCount)',
      Approved: 'Hash',
      Disapproved: 'Hash',
      Executed: '(Hash,DispatchResult)',
      MemberExecuted: '(Hash,DispatchResult)',
      Closed: '(Hash,MemberCount,MemberCount)'
    }
  },
  /**
   * Lookup133: pallet_FinancialCouncilMembership::pallet::Call
   **/
  PalletFinancialCouncilMembershipCall: {
    _enum: {
      add_member: {
        who: 'AccountId',
      },
      remove_member: {
        who: 'AccountId',
      },
      swap_member: {
        remove: 'AccountId',
        add: 'AccountId',
      },
      reset_members: {
        members: 'Vec<AccountId>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId',
      },
      set_prime: {
        who: 'AccountId',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup134: pallet_FinancialCouncilMembership::pallet::Error
   **/
  PalletFinancialCouncilMembershipError: {
    _enum: ['AlreadyMember', 'NotMember']
  },
  /**
   * Lookup135: pallet_FinancialCouncilMembership::pallet::Event
   **/
  PalletFinancialCouncilMembershipEvent: {
    _enum: {
      MemberAdded: 'Null',
      MemberRemoved: 'Null',
      MembersSwapped: 'Null',
      MembersReset: 'Null',
      KeyChanged: 'Null',
      Dummy: 'PhantomData'
    }
  },
  /**
   * Lookup136: pallet_TechnicalCommittee::pallet::Call
   **/
  PalletTechnicalCommitteeCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId>',
        prime: 'Option<AccountId>',
        oldCount: 'MemberCount',
      },
      execute: {
        proposal: 'Proposal',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<MemberCount>',
        proposal: 'Proposal',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'Hash',
        index: 'Compact<ProposalIndex>',
        approve: 'bool',
      },
      close: {
        proposalHash: 'Hash',
        index: 'Compact<ProposalIndex>',
        proposalWeightBound: 'Compact<Weight>',
        lengthBound: 'Compact<u32>',
      },
      disapprove_proposal: {
        proposalHash: 'Hash'
      }
    }
  },
  /**
   * Lookup137: pallet_TechnicalCommittee::pallet::Error
   **/
  PalletTechnicalCommitteeError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup138: pallet_TechnicalCommittee::pallet::Event
   **/
  PalletTechnicalCommitteeEvent: {
    _enum: {
      Proposed: '(AccountId,ProposalIndex,Hash,MemberCount)',
      Voted: '(AccountId,Hash,bool,MemberCount,MemberCount)',
      Approved: 'Hash',
      Disapproved: 'Hash',
      Executed: '(Hash,DispatchResult)',
      MemberExecuted: '(Hash,DispatchResult)',
      Closed: '(Hash,MemberCount,MemberCount)'
    }
  },
  /**
   * Lookup139: pallet_TechnicalCommitteeMembership::pallet::Call
   **/
  PalletTechnicalCommitteeMembershipCall: {
    _enum: {
      add_member: {
        who: 'AccountId',
      },
      remove_member: {
        who: 'AccountId',
      },
      swap_member: {
        remove: 'AccountId',
        add: 'AccountId',
      },
      reset_members: {
        members: 'Vec<AccountId>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId',
      },
      set_prime: {
        who: 'AccountId',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup140: pallet_TechnicalCommitteeMembership::pallet::Error
   **/
  PalletTechnicalCommitteeMembershipError: {
    _enum: ['AlreadyMember', 'NotMember']
  },
  /**
   * Lookup141: pallet_TechnicalCommitteeMembership::pallet::Event
   **/
  PalletTechnicalCommitteeMembershipEvent: {
    _enum: {
      MemberAdded: 'Null',
      MemberRemoved: 'Null',
      MembersSwapped: 'Null',
      MembersReset: 'Null',
      KeyChanged: 'Null',
      Dummy: 'PhantomData'
    }
  },
  /**
   * Lookup147: pallet_Authority::pallet::Call
   **/
  PalletAuthorityCall: {
    _enum: {
      dispatch_as: {
        asOrigin: 'AsOriginId',
        call: 'CallOf',
      },
      schedule_dispatch: {
        when: 'DispatchTime',
        priority: 'Priority',
        withDelayedOrigin: 'bool',
        call: 'CallOf',
      },
      fast_track_scheduled_dispatch: {
        initialOrigin: 'PalletsOrigin',
        taskId: 'ScheduleTaskIndex',
        when: 'DispatchTime',
      },
      delay_scheduled_dispatch: {
        initialOrigin: 'PalletsOrigin',
        taskId: 'ScheduleTaskIndex',
        additionalDelay: 'BlockNumber',
      },
      cancel_scheduled_dispatch: {
        initialOrigin: 'PalletsOrigin',
        taskId: 'ScheduleTaskIndex',
      },
      authorize_call: {
        call: 'CallOf',
        caller: 'Option<AccountId>',
      },
      remove_authorized_call: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'Hash',
      },
      trigger_call: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'Hash',
        callWeightBound: 'Compact<Weight>'
      }
    }
  },
  /**
   * Lookup148: pallet_Authority::pallet::Error
   **/
  PalletAuthorityError: {
    _enum: ['FailedToSchedule', 'FailedToCancel', 'FailedToFastTrack', 'FailedToDelay', 'CallNotAuthorized', 'TriggerCallNotPermitted', 'WrongCallWeightBound']
  },
  /**
   * Lookup149: pallet_Authority::pallet::Event
   **/
  PalletAuthorityEvent: {
    _enum: {
      Dispatched: 'DispatchResult',
      Scheduled: '(PalletsOrigin,ScheduleTaskIndex)',
      FastTracked: '(PalletsOrigin,ScheduleTaskIndex,BlockNumber)',
      Delayed: '(PalletsOrigin,ScheduleTaskIndex,BlockNumber)',
      Cancelled: '(PalletsOrigin,ScheduleTaskIndex)',
      AuthorizedCall: '(Hash,Option<AccountId>)',
      RemovedAuthorizedCall: 'Hash',
      TriggeredCallBy: '(Hash,AccountId)'
    }
  },
  /**
   * Lookup152: pallet_Utility::pallet::Call
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>'
      }
    }
  },
  /**
   * Lookup153: pallet_Utility::pallet::Error
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup154: pallet_Utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: '(u32,DispatchError)',
      BatchCompleted: 'Null',
      ItemCompleted: 'Null'
    }
  },
  /**
   * Lookup156: pallet_SetheumOracle::pallet::Call
   **/
  PalletSetheumOracleCall: {
    _enum: {
      feed_values: {
        values: 'Vec<(OracleKey,OracleValue)>'
      }
    }
  },
  /**
   * Lookup157: pallet_SetheumOracle::pallet::Error
   **/
  PalletSetheumOracleError: {
    _enum: ['NoPermission', 'AlreadyFeeded']
  },
  /**
   * Lookup158: pallet_SetheumOracle::pallet::Event
   **/
  PalletSetheumOracleEvent: {
    _enum: {
      NewFeedData: '(AccountId,Vec<(OracleKey,OracleValue)>)'
    }
  },
  /**
   * Lookup163: pallet_OperatorMembershipSetheum::pallet::Call
   **/
  PalletOperatorMembershipSetheumCall: {
    _enum: {
      add_member: {
        who: 'AccountId',
      },
      remove_member: {
        who: 'AccountId',
      },
      swap_member: {
        remove: 'AccountId',
        add: 'AccountId',
      },
      reset_members: {
        members: 'Vec<AccountId>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId',
      },
      set_prime: {
        who: 'AccountId',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup164: pallet_OperatorMembershipSetheum::pallet::Error
   **/
  PalletOperatorMembershipSetheumError: {
    _enum: ['AlreadyMember', 'NotMember']
  },
  /**
   * Lookup165: pallet_OperatorMembershipSetheum::pallet::Event
   **/
  PalletOperatorMembershipSetheumEvent: {
    _enum: {
      MemberAdded: 'Null',
      MemberRemoved: 'Null',
      MembersSwapped: 'Null',
      MembersReset: 'Null',
      KeyChanged: 'Null',
      Dummy: 'PhantomData'
    }
  },
  /**
   * Lookup166: pallet_AuctionManager::pallet::Call
   **/
  PalletAuctionManagerCall: {
    _enum: {
      cancel: {
        id: 'AuctionId'
      }
    }
  },
  /**
   * Lookup169: pallet_AuctionManager::pallet::Error
   **/
  PalletAuctionManagerError: {
    _enum: ['AuctionNotExists', 'InReverseStage', 'InvalidFeedPrice', 'MustAfterShutdown', 'InvalidBidPrice', 'InvalidAmount']
  },
  /**
   * Lookup170: pallet_AuctionManager::pallet::Event
   **/
  PalletAuctionManagerEvent: {
    _enum: {
      NewCollateralAuction: '(AuctionId,CurrencyId,Balance,Balance)',
      CancelAuction: 'AuctionId',
      CollateralAuctionDealt: '(AuctionId,CurrencyId,Balance,AccountId,Balance)',
      DEXTakeCollateralAuction: '(AuctionId,CurrencyId,Balance,Balance,Balance)',
      CollateralAuctionAborted: '(AuctionId,CurrencyId,Balance,Balance,AccountId)'
    }
  },
  /**
   * Lookup172: pallet_Loans::pallet::Call
   **/
  PalletLoansCall: 'Null',
  /**
   * Lookup173: pallet_Loans::pallet::Error
   **/
  PalletLoansError: {
    _enum: ['AmountConvertFailed']
  },
  /**
   * Lookup175: pallet_Loans::pallet::Event
   **/
  PalletLoansEvent: {
    _enum: {
      PositionUpdated: '(AccountId,CurrencyId,Amount,Amount)',
      ConfiscateCollateralAndDebit: '(AccountId,CurrencyId,Balance,Balance)',
      TransferLoan: '(AccountId,AccountId,CurrencyId)'
    }
  },
  /**
   * Lookup178: pallet_Setmint::pallet::Call
   **/
  PalletSetmintCall: {
    _enum: {
      adjust_loan: {
        currencyId: 'CurrencyId',
        collateralAdjustment: 'Amount',
        debitAdjustment: 'Amount',
      },
      close_loan_has_debit_by_dex: {
        currencyId: 'CurrencyId',
        maxCollateralAmount: 'Compact<Balance>',
      },
      transfer_loan_from: {
        currencyId: 'CurrencyId',
        from: 'LookupSource',
      },
      authorize: {
        currencyId: 'CurrencyId',
        to: 'LookupSource',
      },
      unauthorize: {
        currencyId: 'CurrencyId',
        to: 'LookupSource',
      },
      unauthorize_all: 'Null',
      expand_position_collateral: {
        currencyId: 'CurrencyId',
        increaseDebitValue: 'Balance',
        minIncreaseCollateral: 'Balance',
      },
      shrink_position_debit: {
        currencyId: 'CurrencyId',
        decreaseCollateral: 'Balance',
        minDecreaseDebitValue: 'Balance'
      }
    }
  },
  /**
   * Lookup179: pallet_Setmint::pallet::Error
   **/
  PalletSetmintError: {
    _enum: ['NoPermission', 'AlreadyShutdown', 'AuthorizationNotExists', 'AlreadyAuthorized']
  },
  /**
   * Lookup180: pallet_Setmint::pallet::Event
   **/
  PalletSetmintEvent: {
    _enum: {
      Authorization: '(AccountId,AccountId,CurrencyId)',
      UnAuthorization: '(AccountId,AccountId,CurrencyId)',
      UnAuthorizationAll: 'AccountId'
    }
  },
  /**
   * Lookup184: pallet_SerpTreasury::pallet::Call
   **/
  PalletSerpTreasuryCall: {
    _enum: {
      set_stable_currency_inflation_rate: {
        _alias: {
          size_: 'size',
        },
        currencyId: 'SerpStableCurrencyId',
        size_: 'Balance',
      },
      force_serpdown: {
        _alias: {
          size_: 'size',
        },
        currencyId: 'CurrencyId',
        size_: 'Balance'
      }
    }
  },
  /**
   * Lookup186: pallet_SerpTreasury::pallet::Error
   **/
  PalletSerpTreasuryError: {
    _enum: ['CannotDeposit', 'CannotSwap', 'DexNotAvailable', 'PriceIsStableCannotSerp', 'InvalidCurrencyType', 'InvalidFeedPrice', 'InvalidAmount', 'MinSupplyReached', 'DinarNotEnough', 'InvalidSwapPath']
  },
  /**
   * Lookup187: pallet_SerpTreasury::pallet::Event
   **/
  PalletSerpTreasuryEvent: {
    _enum: {
      SerpTes: 'CurrencyId',
      SerpUpDelivery: '(Balance,CurrencyId)',
      SerplusDelivery: '(Balance,CurrencyId)',
      SerpUp: '(Balance,CurrencyId)',
      SerpDown: '(Balance,CurrencyId)',
      CashDropClaim: '(CurrencyId,AccountId,Balance)',
      CashDropToVault: '(Balance,CurrencyId)',
      StableCurrencyInflationRateUpdated: '(SerpStableCurrencyId,Balance)',
      InflationDelivery: '(CurrencyId,Balance)',
      SerpSwapDinarToExactSetter: '(CurrencyId,CurrencyId,Balance,Balance)',
      SerpSwapSerpToExactSetter: '(CurrencyId,CurrencyId,Balance,Balance)',
      SerpSwapDinarToExactStable: '(CurrencyId,CurrencyId,Balance,Balance)',
      SerpSwapSetterToExactSetDollar: '(CurrencyId,CurrencyId,Balance,Balance)',
      SerpSwapSerpToExactStable: '(CurrencyId,CurrencyId,Balance,Balance)',
      SerpSwapExactStableToDinar: '(CurrencyId,CurrencyId,Balance,Balance)',
      SerpSwapExactStableToSetter: '(CurrencyId,CurrencyId,Balance,Balance)',
      SerplusSwapExactStableToSetter: '(CurrencyId,CurrencyId,Balance,Balance)',
      SerplusSwapExactStableToNative: '(CurrencyId,CurrencyId,Balance,Balance)',
      SerpSwapExactStableToNative: '(CurrencyId,CurrencyId,Balance,Balance)',
      SerplusSwapExactStableToHelp: '(CurrencyId,CurrencyId,Balance,Balance)',
      SerpSwapExactStableToHelp: '(CurrencyId,CurrencyId,Balance,Balance)',
      SerpSwapExactStableToSerpToken: '(CurrencyId,CurrencyId,Balance,Balance)',
      TopUpCashDropPool: '(CurrencyId,Balance)',
      IssueCashDropFromPool: '(AccountId,CurrencyId,Balance)',
      ForceSerpDown: '(CurrencyId,Balance)'
    }
  },
  /**
   * Lookup189: pallet_CdpTreasury::pallet::Call
   **/
  PalletCdpTreasuryCall: {
    _enum: {
      extract_surplus_to_serp: {
        amount: 'Balance',
      },
      auction_collateral: {
        currencyId: 'CurrencyId',
        amount: 'Compact<Balance>',
        target: 'Compact<Balance>',
        splited: 'bool',
      },
      exchange_collateral_to_stable: {
        currencyId: 'CurrencyId',
        swapLimit: 'SwapLimit',
      },
      set_expected_collateral_auction_size: {
        _alias: {
          size_: 'size',
        },
        currencyId: 'CurrencyId',
        size_: 'Compact<Balance>'
      }
    }
  },
  /**
   * Lookup190: pallet_CdpTreasury::pallet::Error
   **/
  PalletCdpTreasuryError: {
    _enum: ['CollateralNotEnough', 'SurplusPoolNotEnough', 'DebitPoolNotEnough', 'CannotSwap', 'NotDexShare']
  },
  /**
   * Lookup191: pallet_CdpTreasury::pallet::Event
   **/
  PalletCdpTreasuryEvent: {
    _enum: {
      ExpectedCollateralAuctionSizeUpdated: '(CurrencyId,Balance)'
    }
  },
  /**
   * Lookup195: pallet_CdpEngine::pallet::Call
   **/
  PalletCdpEngineCall: {
    _enum: {
      liquidate: {
        currencyId: 'CurrencyId',
        who: 'LookupSource',
      },
      settle: {
        currencyId: 'CurrencyId',
        who: 'LookupSource',
      },
      set_collateral_params: {
        currencyId: 'CurrencyId',
        liquidationRatio: 'ChangeOptionRatio',
        liquidationPenalty: 'ChangeOptionRate',
        requiredCollateralRatio: 'ChangeOptionRatio',
        maximumTotalDebitValue: 'ChangeBalance'
      }
    }
  },
  /**
   * Lookup198: pallet_CdpEngine::pallet::Error
   **/
  PalletCdpEngineError: {
    _enum: ['ExceedDebitValueHardCap', 'BelowRequiredCollateralRatio', 'BelowLiquidationRatio', 'MustBeUnsafe', 'MustBeSafe', 'InvalidCollateralType', 'RemainDebitValueTooSmall', 'InvalidFeedPrice', 'NoDebitValue', 'AlreadyShutdown', 'MustAfterShutdown', 'CannotSwap', 'CollateralNotEnough', 'NotEnoughDebitDecrement', 'ConvertDebitBalanceFailed']
  },
  /**
   * Lookup201: pallet_CdpEngine::pallet::Event
   **/
  PalletCdpEngineEvent: {
    _enum: {
      LiquidateUnsafeCDP: '(CurrencyId,AccountId,Balance,Balance,Balance)',
      SettleCDPInDebit: '(CurrencyId,AccountId)',
      CloseCDPInDebitByDEX: '(CurrencyId,AccountId,Balance,Balance,Balance)',
      LiquidationRatioUpdated: '(CurrencyId,OptionRatio)',
      LiquidationPenaltyUpdated: '(CurrencyId,OptionRate)',
      RequiredCollateralRatioUpdated: '(CurrencyId,OptionRatio)',
      MaximumTotalDebitValueUpdated: '(CurrencyId,Balance)'
    }
  },
  /**
   * Lookup203: pallet_EmergencyShutdown::pallet::Call
   **/
  PalletEmergencyShutdownCall: {
    _enum: {
      emergency_shutdown: 'Null',
      open_collateral_refund: 'Null',
      refund_collaterals: {
        amount: 'Compact<Balance>'
      }
    }
  },
  /**
   * Lookup204: pallet_EmergencyShutdown::pallet::Error
   **/
  PalletEmergencyShutdownError: {
    _enum: ['AlreadyShutdown', 'MustAfterShutdown', 'CanNotRefund', 'ExistPotentialSurplus', 'ExistUnhandledDebit']
  },
  /**
   * Lookup206: pallet_EmergencyShutdown::pallet::Event
   **/
  PalletEmergencyShutdownEvent: {
    _enum: {
      Shutdown: 'BlockNumber',
      OpenRefund: 'BlockNumber',
      Refund: '(AccountId,Balance,Vec<(CurrencyId,Balance)>)'
    }
  },
  /**
   * Lookup208: pallet_Treasury::pallet::Call
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<BalanceOf>',
        beneficiary: 'LookupSource',
      },
      reject_proposal: {
        proposalId: 'Compact<ProposalIndex>',
      },
      approve_proposal: {
        proposalId: 'Compact<ProposalIndex>'
      }
    }
  },
  /**
   * Lookup210: pallet_Treasury::pallet::Error
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals']
  },
  /**
   * Lookup211: pallet_Treasury::pallet::Event
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: 'ProposalIndex',
      Spending: 'Balance',
      Awarded: '(ProposalIndex,Balance,AccountId)',
      Rejected: '(ProposalIndex,Balance)',
      Burnt: 'Balance',
      Rollover: 'Balance',
      Deposit: 'Balance'
    }
  },
  /**
   * Lookup215: pallet_Bounties::pallet::Call
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<BalanceOf>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<BountyIndex>',
      },
      propose_curator: {
        bountyId: 'Compact<BountyIndex>',
        curator: 'LookupSource',
        fee: 'Compact<BalanceOf>',
      },
      unassign_curator: {
        bountyId: 'Compact<BountyIndex>',
      },
      accept_curator: {
        bountyId: 'Compact<BountyIndex>',
      },
      award_bounty: {
        bountyId: 'Compact<BountyIndex>',
        beneficiary: 'LookupSource',
      },
      claim_bounty: {
        bountyId: 'Compact<BountyIndex>',
      },
      close_bounty: {
        bountyId: 'Compact<BountyIndex>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<BountyIndex>',
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup216: pallet_Bounties::pallet::Error
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature']
  },
  /**
   * Lookup218: pallet_Bounties::pallet::Event
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: 'BountyIndex',
      BountyRejected: '(BountyIndex,Balance)',
      BountyBecameActive: 'BountyIndex',
      BountyAwarded: '(BountyIndex,AccountId)',
      BountyClaimed: '(BountyIndex,Balance,AccountId)',
      BountyCanceled: 'BountyIndex',
      BountyExtended: 'BountyIndex'
    }
  },
  /**
   * Lookup221: pallet_Tips::pallet::Call
   **/
  PalletTipsCall: {
    _enum: {
      report_awesome: {
        reason: 'Bytes',
        who: 'AccountId',
      },
      retract_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'Hash',
      },
      tip_new: {
        reason: 'Bytes',
        who: 'AccountId',
        tipValue: 'Compact<BalanceOf>',
      },
      tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'Hash',
        tipValue: 'Compact<BalanceOf>',
      },
      close_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'Hash',
      },
      slash_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'Hash'
      }
    }
  },
  /**
   * Lookup223: pallet_Tips::pallet::Error
   **/
  PalletTipsError: {
    _enum: ['ReasonTooBig', 'AlreadyKnown', 'UnknownTip', 'NotFinder', 'StillOpen', 'Premature']
  },
  /**
   * Lookup224: pallet_Tips::pallet::Event
   **/
  PalletTipsEvent: {
    _enum: {
      NewTip: 'Hash',
      TipClosing: 'Hash',
      TipClosed: '(Hash,AccountId,Balance)',
      TipRetracted: 'Hash',
      TipSlashed: '(Hash,AccountId,Balance)'
    }
  },
  /**
   * Lookup231: pallet_NFT::pallet::Call
   **/
  PalletNftCall: {
    _enum: {
      create_class: {
        metadata: 'CID',
        properties: 'Properties',
        attributes: 'Attributes',
      },
      mint: {
        to: 'LookupSource',
        classId: 'ClassIdOf',
        metadata: 'CID',
        attributes: 'Attributes',
        quantity: 'Compact<u32>',
      },
      transfer: {
        to: 'LookupSource',
        token: '(ClassIdOf,TokenIdOf)',
      },
      burn: {
        token: '(ClassIdOf,TokenIdOf)',
      },
      burn_with_remark: {
        token: '(ClassIdOf,TokenIdOf)',
        remark: 'Bytes',
      },
      destroy_class: {
        classId: 'ClassIdOf',
        dest: 'LookupSource',
      },
      update_class_properties: {
        classId: 'ClassIdOf',
        properties: 'Properties'
      }
    }
  },
  /**
   * Lookup232: pallet_NFT::pallet::Error
   **/
  PalletNftError: {
    _enum: ['ClassIdNotFound', 'TokenIdNotFound', 'NoPermission', 'InvalidQuantity', 'NonTransferable', 'NonBurnable', 'NonMintable', 'CannotDestroyClass', 'Immutable', 'AttributesTooLarge']
  },
  /**
   * Lookup233: pallet_NFT::pallet::Event
   **/
  PalletNftEvent: {
    _enum: {
      CreatedClass: '(AccountId,ClassId)',
      MintedToken: '(AccountId,AccountId,ClassId,u32)',
      TransferredToken: '(AccountId,AccountId,ClassId,TokenId)',
      BurnedToken: '(AccountId,ClassId,TokenId)',
      BurnedTokenWithRemark: '(AccountId,ClassId,TokenId,Hash)',
      DestroyedClass: '(AccountId,ClassId)'
    }
  },
  /**
   * Lookup235: pallet_Indices::pallet::Call
   **/
  PalletIndicesCall: {
    _enum: {
      claim: {
        index: 'AccountIndex',
      },
      transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId',
        index: 'AccountIndex',
      },
      free: {
        index: 'AccountIndex',
      },
      force_transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'AccountId',
        index: 'AccountIndex',
        freeze: 'bool',
      },
      freeze: {
        index: 'AccountIndex'
      }
    }
  },
  /**
   * Lookup236: pallet_Indices::pallet::Error
   **/
  PalletIndicesError: {
    _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
  },
  /**
   * Lookup237: pallet_Indices::pallet::Event
   **/
  PalletIndicesEvent: {
    _enum: {
      IndexAssigned: '(AccountId,AccountIndex)',
      IndexFreed: 'AccountIndex',
      IndexFrozen: '(AccountIndex,AccountId)'
    }
  },
  /**
   * Lookup239: pallet_Balances::pallet::Call
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'LookupSource',
        value: 'Compact<Balance>',
      },
      set_balance: {
        who: 'LookupSource',
        newFree: 'Compact<Balance>',
        newReserved: 'Compact<Balance>',
      },
      force_transfer: {
        source: 'LookupSource',
        dest: 'LookupSource',
        value: 'Compact<Balance>',
      },
      transfer_keep_alive: {
        dest: 'LookupSource',
        value: 'Compact<Balance>',
      },
      transfer_all: {
        dest: 'LookupSource',
        keepAlive: 'bool'
      }
    }
  },
  /**
   * Lookup240: pallet_Balances::pallet::Error
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup242: pallet_Balances::pallet::Event
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: '(AccountId,Balance)',
      DustLost: '(AccountId,Balance)',
      Transfer: '(AccountId,AccountId,Balance)',
      BalanceSet: '(AccountId,Balance,Balance)',
      Deposit: '(AccountId,Balance)',
      Reserved: '(AccountId,Balance)',
      Unreserved: '(AccountId,Balance)',
      ReserveRepatriated: '(AccountId,AccountId,Balance,BalanceStatus)'
    }
  },
  /**
   * Lookup248: pallet_Currencies::pallet::Call
   **/
  PalletCurrenciesCall: {
    _enum: {
      transfer: {
        dest: 'LookupSource',
        currencyId: 'CurrencyIdOf',
        amount: 'Compact<BalanceOf>',
        claim: 'bool',
      },
      transfer_native_currency: {
        dest: 'LookupSource',
        amount: 'Compact<BalanceOf>',
      },
      update_balance: {
        who: 'LookupSource',
        currencyId: 'CurrencyIdOf',
        amount: 'AmountOf',
      },
      sweep_dust: {
        currencyId: 'CurrencyIdOf',
        accounts: 'Vec<AccountId>'
      }
    }
  },
  /**
   * Lookup249: pallet_Currencies::pallet::Error
   **/
  PalletCurrenciesError: {
    _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'Erc20InvalidOperation', 'EvmAccountNotFound', 'RealOriginNotFound']
  },
  /**
   * Lookup250: pallet_Currencies::pallet::Event
   **/
  PalletCurrenciesEvent: {
    _enum: {
      Transferred: '(CurrencyId,AccountId,AccountId,Balance)',
      BalanceUpdated: '(CurrencyId,AccountId,AmountOf)',
      Deposited: '(CurrencyId,AccountId,Balance)',
      Withdrawn: '(CurrencyId,AccountId,Balance)',
      DustSwept: '(CurrencyId,AccountId,Balance)'
    }
  },
  /**
   * Lookup251: pallet_Tokens::pallet::Error
   **/
  PalletTokensError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount']
  },
  /**
   * Lookup252: pallet_Tokens::pallet::Event
   **/
  PalletTokensEvent: {
    _enum: {
      Endowed: '(CurrencyId,AccountId,Balance)',
      DustLost: '(CurrencyId,AccountId,Balance)',
      Transfer: '(CurrencyId,AccountId,AccountId,Balance)',
      Reserved: '(CurrencyId,AccountId,Balance)',
      Unreserved: '(CurrencyId,AccountId,Balance)',
      BalanceSet: '(CurrencyId,AccountId,Balance,Balance)'
    }
  },
  /**
   * Lookup256: pallet_TransactionPayment::pallet::Call
   **/
  PalletTransactionPaymentCall: {
    _enum: {
      set_alternative_fee_swap_path: {
        feeSwapPath: 'Option<Vec<CurrencyId>>'
      }
    }
  },
  /**
   * Lookup259: pallet_TransactionPayment::pallet::Error
   **/
  PalletTransactionPaymentError: {
    _enum: ['InvalidSwapPath']
  },
  /**
   * Lookup261: pallet_TransactionPause::pallet::Call
   **/
  PalletTransactionPauseCall: {
    _enum: {
      pause_transaction: {
        palletName: 'Bytes',
        functionName: 'Bytes',
      },
      unpause_transaction: {
        palletName: 'Bytes',
        functionName: 'Bytes'
      }
    }
  },
  /**
   * Lookup262: pallet_TransactionPause::pallet::Error
   **/
  PalletTransactionPauseError: {
    _enum: ['CannotPause', 'InvalidCharacter']
  },
  /**
   * Lookup263: pallet_TransactionPause::pallet::Event
   **/
  PalletTransactionPauseEvent: {
    _enum: {
      TransactionPaused: '(Bytes,Bytes)',
      TransactionUnpaused: '(Bytes,Bytes)'
    }
  },
  /**
   * Lookup267: pallet_Vesting::pallet::Call
   **/
  PalletVestingCall: {
    _enum: {
      claim: {
        currencyId: 'CurrencyIdOf',
      },
      vested_transfer: {
        currencyId: 'CurrencyIdOf',
        dest: 'LookupSource',
        schedule: 'VestingScheduleOf',
      },
      update_vesting_schedules: {
        currencyId: 'CurrencyIdOf',
        who: 'LookupSource',
        vestingSchedules: 'Vec<VestingScheduleOf>',
      },
      claim_for: {
        currencyId: 'CurrencyIdOf',
        dest: 'LookupSource'
      }
    }
  },
  /**
   * Lookup268: pallet_Vesting::pallet::Error
   **/
  PalletVestingError: {
    _enum: ['ZeroVestingPeriod', 'ZeroVestingPeriodCount', 'InsufficientBalanceToLock', 'TooManyVestingSchedules', 'AmountLow', 'MaxVestingSchedulesExceeded']
  },
  /**
   * Lookup269: pallet_Vesting::pallet::Event
   **/
  PalletVestingEvent: {
    _enum: {
      VestingScheduleAdded: '(CurrencyIdOf,AccountId,AccountId,VestingScheduleOf)',
      Claimed: '(AccountId,CurrencyIdOf,Balance)',
      VestingSchedulesUpdated: '(CurrencyIdOf,AccountId)'
    }
  },
  /**
   * Lookup277: pallet_Identity::pallet::Call
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'AccountId',
      },
      set_identity: {
        info: 'IdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<RegistrarIndex>',
        maxFee: 'Compact<BalanceOf>',
      },
      cancel_request: {
        regIndex: 'RegistrarIndex',
      },
      set_fee: {
        index: 'Compact<RegistrarIndex>',
        fee: 'Compact<BalanceOf>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<RegistrarIndex>',
        new_: 'AccountId',
      },
      set_fields: {
        index: 'Compact<RegistrarIndex>',
        fields: 'IdentityFields',
      },
      provide_judgement: {
        regIndex: 'Compact<RegistrarIndex>',
        target: 'LookupSource',
        judgement: 'IdentityJudgement',
      },
      kill_identity: {
        target: 'LookupSource',
      },
      add_sub: {
        sub: 'LookupSource',
        data: 'Data',
      },
      rename_sub: {
        sub: 'LookupSource',
        data: 'Data',
      },
      remove_sub: {
        sub: 'LookupSource',
      },
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup278: pallet_Identity::pallet::Error
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned']
  },
  /**
   * Lookup279: pallet_Identity::pallet::Event
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: 'AccountId',
      IdentityCleared: '(AccountId,Balance)',
      IdentityKilled: '(AccountId,Balance)',
      JudgementRequested: '(AccountId,RegistrarIndex)',
      JudgementUnrequested: '(AccountId,RegistrarIndex)',
      JudgementGiven: '(AccountId,RegistrarIndex)',
      RegistrarAdded: 'RegistrarIndex',
      SubIdentityAdded: '(AccountId,AccountId,Balance)',
      SubIdentityRemoved: '(AccountId,AccountId,Balance)',
      SubIdentityRevoked: '(AccountId,AccountId,Balance)'
    }
  },
  /**
   * Lookup288: pallet_EVM::pallet::Call
   **/
  PalletEvmCall: {
    _enum: {
      eth_call: {
        action: 'TransactionAction',
        input: 'Bytes',
        value: 'Compact<BalanceOf>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
        validUntil: 'Compact<BlockNumber>',
      },
      call: {
        target: 'EvmAddress',
        input: 'Bytes',
        value: 'Compact<BalanceOf>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
      },
      scheduled_call: {
        from: 'EvmAddress',
        target: 'EvmAddress',
        input: 'Bytes',
        value: 'Compact<BalanceOf>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
      },
      create: {
        init: 'Bytes',
        value: 'Compact<BalanceOf>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
      },
      create2: {
        init: 'Bytes',
        salt: 'H256',
        value: 'Compact<BalanceOf>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
      },
      create_network_contract: {
        init: 'Bytes',
        value: 'Compact<BalanceOf>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
      },
      create_predeploy_contract: {
        target: 'EvmAddress',
        init: 'Bytes',
        value: 'Compact<BalanceOf>',
        gasLimit: 'Compact<u64>',
        storageLimit: 'Compact<u32>',
      },
      transfer_maintainer: {
        contract: 'EvmAddress',
        newMaintainer: 'EvmAddress',
      },
      deploy: {
        contract: 'EvmAddress',
      },
      deploy_free: {
        contract: 'EvmAddress',
      },
      enable_contract_development: 'Null',
      disable_contract_development: 'Null',
      set_code: {
        contract: 'EvmAddress',
        code: 'Bytes',
      },
      selfdestruct: {
        contract: 'EvmAddress'
      }
    }
  },
  /**
   * Lookup289: pallet_EVM::pallet::Error
   **/
  PalletEvmError: {
    _enum: ['AddressNotMapped', 'ContractNotFound', 'NoPermission', 'ContractDevelopmentNotEnabled', 'ContractDevelopmentAlreadyEnabled', 'ContractAlreadyDeployed', 'ContractExceedsMaxCodeSize', 'ContractAlreadyExisted', 'OutOfStorage', 'ChargeFeeFailed', 'CannotKillContract', 'ReserveStorageFailed', 'UnreserveStorageFailed', 'ChargeStorageFailed']
  },
  /**
   * Lookup292: pallet_EVM::pallet::Event
   **/
  PalletEvmEvent: {
    _enum: {
      Created: '(EvmAddress,EvmAddress,Vec<EvmLog>)',
      CreatedFailed: '(EvmAddress,EvmAddress,ExitReason,Vec<EvmLog>)',
      Executed: '(EvmAddress,EvmAddress,Vec<EvmLog>)',
      ExecutedFailed: '(EvmAddress,EvmAddress,ExitReason,Bytes,Vec<EvmLog>)',
      TransferredMaintainer: '(EvmAddress,EvmAddress)',
      ContractDevelopmentEnabled: 'AccountId',
      ContractDevelopmentDisabled: 'AccountId',
      ContractDeployed: 'EvmAddress',
      ContractSetCode: 'EvmAddress',
      ContractSelfdestructed: 'EvmAddress'
    }
  },
  /**
   * Lookup296: pallet_EvmAccounts::pallet::Call
   **/
  PalletEvmAccountsCall: {
    _enum: {
      claim_account: {
        ethAddress: 'EvmAddress',
        ethSignature: 'EcdsaSignature',
      },
      claim_default_account: 'Null'
    }
  },
  /**
   * Lookup297: pallet_EvmAccounts::pallet::Error
   **/
  PalletEvmAccountsError: {
    _enum: ['AccountIdHasMapped', 'EthAddressHasMapped', 'BadSignature', 'InvalidSignature', 'NonZeroRefCount']
  },
  /**
   * Lookup298: pallet_EvmAccounts::pallet::Event
   **/
  PalletEvmAccountsEvent: {
    _enum: {
      ClaimAccount: '(AccountId,EvmAddress)'
    }
  },
  /**
   * Lookup299: pallet_EVMBridge::pallet::Error
   **/
  PalletEvmBridgeError: {
    _enum: ['ExecutionFail', 'ExecutionRevert', 'ExecutionFatal', 'ExecutionError', 'InvalidReturnValue']
  },
  /**
   * Lookup300: pallet_EvmManager::pallet::Error
   **/
  PalletEvmManagerError: {
    _enum: ['CurrencyIdExisted']
  },
  /**
   * Lookup303: pallet_Authorship::pallet::Call
   **/
  PalletAuthorshipCall: {
    _enum: {
      set_uncles: {
        newUncles: 'Vec<Header>'
      }
    }
  },
  /**
   * Lookup304: pallet_Authorship::pallet::Error
   **/
  PalletAuthorshipError: {
    _enum: ['InvalidUncleParent', 'UnclesAlreadySet', 'TooManyUncles', 'GenesisUncle', 'TooHighUncle', 'UncleAlreadyIncluded', 'OldUncle']
  },
  /**
   * Lookup309: pallet_Babe::pallet::Call
   **/
  PalletBabeCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'BabeEquivocationProof',
        keyOwnerProof: 'KeyOwnerProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'BabeEquivocationProof',
        keyOwnerProof: 'KeyOwnerProof',
      },
      plan_config_change: {
        config: 'NextConfigDescriptor'
      }
    }
  },
  /**
   * Lookup310: pallet_Babe::pallet::Error
   **/
  PalletBabeError: {
    _enum: ['InvalidEquivocationProof', 'InvalidKeyOwnershipProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup319: pallet_Grandpa::pallet::Call
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'GrandpaEquivocationProof',
        keyOwnerProof: 'KeyOwnerProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'GrandpaEquivocationProof',
        keyOwnerProof: 'KeyOwnerProof',
      },
      note_stalled: {
        delay: 'BlockNumber',
        bestFinalizedBlockNumber: 'BlockNumber'
      }
    }
  },
  /**
   * Lookup320: pallet_Grandpa::pallet::Error
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup322: pallet_Grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: 'AuthorityList',
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup335: pallet_Staking::pallet::Call
   **/
  PalletStakingCall: {
    _enum: {
      bond: {
        controller: 'LookupSource',
        value: 'Compact<BalanceOf>',
        payee: 'RewardDestination',
      },
      bond_extra: {
        maxAdditional: 'Compact<BalanceOf>',
      },
      unbond: {
        value: 'Compact<BalanceOf>',
      },
      withdraw_unbonded: {
        numSlashingSpans: 'u32',
      },
      validate: {
        prefs: 'ValidatorPrefs',
      },
      nominate: {
        targets: 'Vec<LookupSource>',
      },
      chill: 'Null',
      set_payee: {
        payee: 'RewardDestination',
      },
      set_controller: {
        controller: 'LookupSource',
      },
      set_validator_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u32>',
      },
      increase_validator_count: {
        additional: 'Compact<u32>',
      },
      scale_validator_count: {
        factor: 'Percent',
      },
      force_no_eras: 'Null',
      force_new_era: 'Null',
      set_invulnerables: {
        invulnerables: 'Vec<AccountId>',
      },
      force_unstake: {
        stash: 'AccountId',
        numSlashingSpans: 'u32',
      },
      force_new_era_always: 'Null',
      cancel_deferred_slash: {
        era: 'EraIndex',
        slashIndices: 'Vec<u32>',
      },
      payout_stakers: {
        validatorStash: 'AccountId',
        era: 'EraIndex',
      },
      rebond: {
        value: 'Compact<BalanceOf>',
      },
      set_history_depth: {
        newHistoryDepth: 'Compact<EraIndex>',
        eraItemsDeleted: 'Compact<u32>',
      },
      reap_stash: {
        stash: 'AccountId',
        numSlashingSpans: 'u32',
      },
      kick: {
        who: 'Vec<LookupSource>',
      },
      set_staking_limits: {
        minNominatorBond: 'BalanceOf',
        minValidatorBond: 'BalanceOf',
        maxNominatorCount: 'Option<u32>',
        maxValidatorCount: 'Option<u32>',
        threshold: 'Option<Percent>',
      },
      chill_other: {
        controller: 'AccountId'
      }
    }
  },
  /**
   * Lookup336: pallet_Staking::pallet::Error
   **/
  PalletStakingError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashIndex', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'NotSortedAndUnique', 'AlreadyClaimed', 'IncorrectHistoryDepth', 'IncorrectSlashingSpans', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators']
  },
  /**
   * Lookup337: pallet_Staking::pallet::Event
   **/
  PalletStakingEvent: {
    _enum: {
      EraPaid: '(EraIndex,Balance,Balance)',
      Rewarded: '(AccountId,Balance)',
      Slashed: '(AccountId,Balance)',
      OldSlashingReportDiscarded: 'SessionIndex',
      StakersElected: 'Null',
      Bonded: '(AccountId,Balance)',
      Unbonded: '(AccountId,Balance)',
      Withdrawn: '(AccountId,Balance)',
      Kicked: '(AccountId,AccountId)',
      StakingElectionFailed: 'Null',
      Chilled: 'AccountId',
      PayoutStarted: '(EraIndex,AccountId)'
    }
  },
  /**
   * Lookup356: pallet_Session::pallet::Call
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Keys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup357: pallet_Session::pallet::Error
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup358: pallet_Session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: 'SessionIndex'
    }
  },
  /**
   * Lookup365: pallet_Offences::pallet::Event
   **/
  PalletOffencesEvent: {
    _enum: {
      Offence: '(Kind,OpaqueTimeSlot)'
    }
  },
  /**
   * Lookup372: pallet_ImOnline::pallet::Call
   **/
  PalletImOnlineCall: {
    _enum: {
      heartbeat: {
        heartbeat: 'Heartbeat',
        signature: 'Signature'
      }
    }
  },
  /**
   * Lookup373: pallet_ImOnline::pallet::Error
   **/
  PalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat']
  },
  /**
   * Lookup376: pallet_ImOnline::pallet::Event
   **/
  PalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: 'AuthorityId',
      AllGood: 'Null',
      SomeOffline: 'Vec<IdentificationTuple>'
    }
  }
};
