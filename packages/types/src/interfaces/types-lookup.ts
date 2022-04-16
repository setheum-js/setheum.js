// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

declare module '@polkadot/types/lookup' {
  import type { Data } from '@polkadot/types';
  import type { Bytes, Compact, Enum, Null, Option, Struct, U8aFixed, Vec, bool, u16, u32, u64 } from '@polkadot/types-codec';
  import type { ITuple } from '@polkadot/types-codec/types';
  import type { BabeEquivocationProof, NextConfigDescriptor } from '@polkadot/types/interfaces/babe';
  import type { BalanceStatus } from '@polkadot/types/interfaces/balances';
  import type { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
  import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
  import type { Proposal } from '@polkadot/types/interfaces/democracy';
  import type { EvmLog, ExitReason } from '@polkadot/types/interfaces/evm';
  import type { EcdsaSignature, Signature } from '@polkadot/types/interfaces/extrinsics';
  import type { AuthorityList, GrandpaEquivocationProof, KeyOwnerProof } from '@polkadot/types/interfaces/grandpa';
  import type { IdentityFields, IdentityInfo, IdentityJudgement, RegistrarIndex } from '@polkadot/types/interfaces/identity';
  import type { Heartbeat } from '@polkadot/types/interfaces/imOnline';
  import type { Kind, OpaqueTimeSlot } from '@polkadot/types/interfaces/offences';
  import type { ProxyType } from '@polkadot/types/interfaces/proxy';

  import type { Amount,AmountOf,  AsOriginId, Attributes, AuctionId, ChangeBalance, ChangeOptionRate, ChangeOptionRatio, CID, ClassIdOf, CurrencyId, CurrencyIdOf, EvmAddress, OptionRate, OptionRatio, OracleKey, OracleValue, Properties, SerpStableCurrencyId, SwapLimit, TokenId, TokenIdOf, TradingPair, VestingScheduleOf } from '@setheum.js/types/interfaces';
  import type { Price } from '@open-web3/orml-types/interfaces/traits';
  import type { CallOf, DispatchTime, ScheduleTaskIndex } from '@open-web3/orml-types/interfaces/authority';
  import type { EthTransactionAction as TransactionAction } from '@polkadot/types/interfaces/eth';

  import type { AccountId, AccountIndex, Balance, BalanceOf, BlockNumber, Call, CallHash, CallHashOf, ChangesTrieConfiguration, H256, Hash, Header, KeyValue, LookupSource, Moment, OpaqueCall, PalletsOrigin, Perbill, Percent, PhantomData, Weight } from '@polkadot/types/interfaces/runtime';
  import type { Period, Priority, TaskAddress } from '@polkadot/types/interfaces/scheduler';
  import type { IdentificationTuple, Keys, SessionIndex } from '@polkadot/types/interfaces/session';
  import type { EraIndex, RewardDestination, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
  import type { DispatchError, DispatchInfo, DispatchResult, Key } from '@polkadot/types/interfaces/system';
  import type { BountyIndex } from '@polkadot/types/interfaces/treasury';
  import type { ClassId } from '@polkadot/types/interfaces/uniques';
  import type { Timepoint } from '@polkadot/types/interfaces/utility';

  /** @name PalletSystemCall (11) */
  export interface PalletSystemCall extends Enum {
    readonly isFillBlock: boolean;
    readonly asFillBlock: {
      readonly ratio: Perbill;
    } & Struct;
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetChangesTrieConfig: boolean;
    readonly asSetChangesTrieConfig: {
      readonly changesTrieConfig: Option<ChangesTrieConfiguration>;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<KeyValue>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Key>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Key;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'FillBlock' | 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetChangesTrieConfig' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name PalletSystemError (17) */
  export interface PalletSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount';
  }

  /** @name PalletSystemEvent (22) */
  export interface PalletSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: DispatchInfo;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: ITuple<[DispatchError, DispatchInfo]>;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: AccountId;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: AccountId;
    readonly isRemarked: boolean;
    readonly asRemarked: ITuple<[AccountId, Hash]>;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name PalletTimestampCall (34) */
  export interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<Moment>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletSudoCall (39) */
  export interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: LookupSource;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: LookupSource;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name PalletSudoError (40) */
  export interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletSudoEvent (42) */
  export interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: DispatchResult;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: AccountId;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: DispatchResult;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name PalletSchedulerCall (45) */
  export interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: BlockNumber;
      readonly maybePeriodic: Option<Period>;
      readonly priority: Priority;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: BlockNumber;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: Bytes;
      readonly when: BlockNumber;
      readonly maybePeriodic: Option<Period>;
      readonly priority: Priority;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: Bytes;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: BlockNumber;
      readonly maybePeriodic: Option<Period>;
      readonly priority: Priority;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: Bytes;
      readonly after: BlockNumber;
      readonly maybePeriodic: Option<Period>;
      readonly priority: Priority;
      readonly call: Call;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name PalletSchedulerError (46) */
  export interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange';
  }

  /** @name PalletSchedulerEvent (49) */
  export interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: ITuple<[BlockNumber, u32]>;
    readonly isCanceled: boolean;
    readonly asCanceled: ITuple<[BlockNumber, u32]>;
    readonly isDispatched: boolean;
    readonly asDispatched: ITuple<[TaskAddress, Option<Bytes>, DispatchResult]>;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched';
  }

  /** @name PalletPricesCall (53) */
  export interface PalletPricesCall extends Enum {
    readonly isLockPrice: boolean;
    readonly asLockPrice: {
      readonly currencyId: CurrencyId;
    } & Struct;
    readonly isUnlockPrice: boolean;
    readonly asUnlockPrice: {
      readonly currencyId: CurrencyId;
    } & Struct;
    readonly type: 'LockPrice' | 'UnlockPrice';
  }

  /** @name PalletPricesError (55) */
  export interface PalletPricesError extends Enum {
    readonly isAccessPriceFailed: boolean;
    readonly isNoLockedPrice: boolean;
    readonly type: 'AccessPriceFailed' | 'NoLockedPrice';
  }

  /** @name PalletPricesEvent (57) */
  export interface PalletPricesEvent extends Enum {
    readonly isLockPrice: boolean;
    readonly asLockPrice: ITuple<[CurrencyId, Price]>;
    readonly isUnlockPrice: boolean;
    readonly asUnlockPrice: CurrencyId;
    readonly isFetchPrice: boolean;
    readonly asFetchPrice: ITuple<[CurrencyId, Option<Price>]>;
    readonly isRelativePrice: boolean;
    readonly asRelativePrice: ITuple<[CurrencyId, CurrencyId, Option<Price>]>;
    readonly type: 'LockPrice' | 'UnlockPrice' | 'FetchPrice' | 'RelativePrice';
  }

  /** @name PalletDexCall (61) */
  export interface PalletDexCall extends Enum {
    readonly isSwapWithExactSupply: boolean;
    readonly asSwapWithExactSupply: {
      readonly path: Vec<CurrencyId>;
      readonly supplyAmount: Compact<Balance>;
      readonly minTargetAmount: Compact<Balance>;
    } & Struct;
    readonly isSwapWithExactTarget: boolean;
    readonly asSwapWithExactTarget: {
      readonly path: Vec<CurrencyId>;
      readonly targetAmount: Compact<Balance>;
      readonly maxSupplyAmount: Compact<Balance>;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly currencyIdA: CurrencyId;
      readonly currencyIdB: CurrencyId;
      readonly maxAmountA: Compact<Balance>;
      readonly maxAmountB: Compact<Balance>;
      readonly minShareIncrement: Compact<Balance>;
    } & Struct;
    readonly isAddProvision: boolean;
    readonly asAddProvision: {
      readonly currencyIdA: CurrencyId;
      readonly currencyIdB: CurrencyId;
      readonly amountA: Compact<Balance>;
      readonly amountB: Compact<Balance>;
    } & Struct;
    readonly isClaimDexShare: boolean;
    readonly asClaimDexShare: {
      readonly owner: AccountId;
      readonly currencyIdA: CurrencyId;
      readonly currencyIdB: CurrencyId;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly currencyIdA: CurrencyId;
      readonly currencyIdB: CurrencyId;
      readonly removeShare: Compact<Balance>;
      readonly minWithdrawnA: Compact<Balance>;
      readonly minWithdrawnB: Compact<Balance>;
    } & Struct;
    readonly isListProvisioning: boolean;
    readonly asListProvisioning: {
      readonly currencyIdA: CurrencyId;
      readonly currencyIdB: CurrencyId;
      readonly minContributionA: Compact<Balance>;
      readonly minContributionB: Compact<Balance>;
      readonly targetProvisionA: Compact<Balance>;
      readonly targetProvisionB: Compact<Balance>;
      readonly notBefore: Compact<BlockNumber>;
    } & Struct;
    readonly isUpdateProvisioningParameters: boolean;
    readonly asUpdateProvisioningParameters: {
      readonly currencyIdA: CurrencyId;
      readonly currencyIdB: CurrencyId;
      readonly minContributionA: Compact<Balance>;
      readonly minContributionB: Compact<Balance>;
      readonly targetProvisionA: Compact<Balance>;
      readonly targetProvisionB: Compact<Balance>;
      readonly notBefore: Compact<BlockNumber>;
    } & Struct;
    readonly isEndProvisioning: boolean;
    readonly asEndProvisioning: {
      readonly currencyIdA: CurrencyId;
      readonly currencyIdB: CurrencyId;
    } & Struct;
    readonly isEnableTradingPair: boolean;
    readonly asEnableTradingPair: {
      readonly currencyIdA: CurrencyId;
      readonly currencyIdB: CurrencyId;
    } & Struct;
    readonly isDisableTradingPair: boolean;
    readonly asDisableTradingPair: {
      readonly currencyIdA: CurrencyId;
      readonly currencyIdB: CurrencyId;
    } & Struct;
    readonly type: 'SwapWithExactSupply' | 'SwapWithExactTarget' | 'AddLiquidity' | 'AddProvision' | 'ClaimDexShare' | 'RemoveLiquidity' | 'ListProvisioning' | 'UpdateProvisioningParameters' | 'EndProvisioning' | 'EnableTradingPair' | 'DisableTradingPair';
  }

  /** @name PalletDexError (64) */
  export interface PalletDexError extends Enum {
    readonly isAlreadyEnabled: boolean;
    readonly isMustBeEnabled: boolean;
    readonly isMustBeProvisioning: boolean;
    readonly isMustBeDisabled: boolean;
    readonly isNotAllowedList: boolean;
    readonly isInvalidContributionIncrement: boolean;
    readonly isInvalidLiquidityIncrement: boolean;
    readonly isInvalidCurrencyId: boolean;
    readonly isInvalidTradingPathLength: boolean;
    readonly isInsufficientTargetAmount: boolean;
    readonly isExcessiveSupplyAmount: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isZeroSupplyAmount: boolean;
    readonly isZeroTargetAmount: boolean;
    readonly isUnacceptableShareIncrement: boolean;
    readonly isUnacceptableLiquidityWithdrawn: boolean;
    readonly isInvariantCheckFailed: boolean;
    readonly isUnqualifiedProvision: boolean;
    readonly isStillProvisioning: boolean;
    readonly isAssetUnregistered: boolean;
    readonly isInvalidTradingPath: boolean;
    readonly type: 'AlreadyEnabled' | 'MustBeEnabled' | 'MustBeProvisioning' | 'MustBeDisabled' | 'NotAllowedList' | 'InvalidContributionIncrement' | 'InvalidLiquidityIncrement' | 'InvalidCurrencyId' | 'InvalidTradingPathLength' | 'InsufficientTargetAmount' | 'ExcessiveSupplyAmount' | 'InsufficientLiquidity' | 'ZeroSupplyAmount' | 'ZeroTargetAmount' | 'UnacceptableShareIncrement' | 'UnacceptableLiquidityWithdrawn' | 'InvariantCheckFailed' | 'UnqualifiedProvision' | 'StillProvisioning' | 'AssetUnregistered' | 'InvalidTradingPath';
  }

  /** @name PalletDexEvent (68) */
  export interface PalletDexEvent extends Enum {
    readonly isAddProvision: boolean;
    readonly asAddProvision: ITuple<[AccountId, CurrencyId, Balance, CurrencyId, Balance]>;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: ITuple<[AccountId, CurrencyId, Balance, CurrencyId, Balance, Balance]>;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: ITuple<[AccountId, CurrencyId, Balance, CurrencyId, Balance, Balance]>;
    readonly isLiquidityPoolUpdated: boolean;
    readonly asLiquidityPoolUpdated: ITuple<[TradingPair, Balance, Balance]>;
    readonly isSwap: boolean;
    readonly asSwap: ITuple<[AccountId, Vec<CurrencyId>, Vec<Balance>]>;
    readonly isBuyBackSwap: boolean;
    readonly asBuyBackSwap: ITuple<[AccountId, Vec<CurrencyId>, Vec<Balance>]>;
    readonly isEnableTradingPair: boolean;
    readonly asEnableTradingPair: TradingPair;
    readonly isListProvisioning: boolean;
    readonly asListProvisioning: TradingPair;
    readonly isDisableTradingPair: boolean;
    readonly asDisableTradingPair: TradingPair;
    readonly isProvisioningToEnabled: boolean;
    readonly asProvisioningToEnabled: ITuple<[TradingPair, Balance, Balance, Balance]>;
    readonly type: 'AddProvision' | 'AddLiquidity' | 'RemoveLiquidity' | 'LiquidityPoolUpdated' | 'Swap' | 'BuyBackSwap' | 'EnableTradingPair' | 'ListProvisioning' | 'DisableTradingPair' | 'ProvisioningToEnabled';
  }

  /** @name PalletMultisigCall (78) */
  export interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId>;
      readonly maybeTimepoint: Option<Timepoint>;
      readonly call: OpaqueCall;
      readonly storeCall: bool;
      readonly maxWeight: Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId>;
      readonly maybeTimepoint: Option<Timepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId>;
      readonly timepoint: Timepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name PalletMultisigError (80) */
  export interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletMultisigEvent (82) */
  export interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: ITuple<[AccountId, AccountId, CallHash]>;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: ITuple<[AccountId, Timepoint, AccountId, CallHash]>;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: ITuple<[AccountId, Timepoint, AccountId, CallHash, DispatchResult]>;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: ITuple<[AccountId, Timepoint, AccountId, CallHash]>;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletRecoveryCall (86) */
  export interface PalletRecoveryCall extends Enum {
    readonly isAsRecovered: boolean;
    readonly asAsRecovered: {
      readonly account: AccountId;
      readonly call: Call;
    } & Struct;
    readonly isSetRecovered: boolean;
    readonly asSetRecovered: {
      readonly lost: AccountId;
      readonly rescuer: AccountId;
    } & Struct;
    readonly isCreateRecovery: boolean;
    readonly asCreateRecovery: {
      readonly friends: Vec<AccountId>;
      readonly threshold: u16;
      readonly delayPeriod: BlockNumber;
    } & Struct;
    readonly isInitiateRecovery: boolean;
    readonly asInitiateRecovery: {
      readonly account: AccountId;
    } & Struct;
    readonly isVouchRecovery: boolean;
    readonly asVouchRecovery: {
      readonly lost: AccountId;
      readonly rescuer: AccountId;
    } & Struct;
    readonly isClaimRecovery: boolean;
    readonly asClaimRecovery: {
      readonly account: AccountId;
    } & Struct;
    readonly isCloseRecovery: boolean;
    readonly asCloseRecovery: {
      readonly rescuer: AccountId;
    } & Struct;
    readonly isRemoveRecovery: boolean;
    readonly isCancelRecovered: boolean;
    readonly asCancelRecovered: {
      readonly account: AccountId;
    } & Struct;
    readonly type: 'AsRecovered' | 'SetRecovered' | 'CreateRecovery' | 'InitiateRecovery' | 'VouchRecovery' | 'ClaimRecovery' | 'CloseRecovery' | 'RemoveRecovery' | 'CancelRecovered';
  }

  /** @name PalletRecoveryError (87) */
  export interface PalletRecoveryError extends Enum {
    readonly isNotAllowed: boolean;
    readonly isZeroThreshold: boolean;
    readonly isNotEnoughFriends: boolean;
    readonly isMaxFriends: boolean;
    readonly isNotSorted: boolean;
    readonly isNotRecoverable: boolean;
    readonly isAlreadyRecoverable: boolean;
    readonly isAlreadyStarted: boolean;
    readonly isNotStarted: boolean;
    readonly isNotFriend: boolean;
    readonly isDelayPeriod: boolean;
    readonly isAlreadyVouched: boolean;
    readonly isThreshold: boolean;
    readonly isStillActive: boolean;
    readonly isAlreadyProxy: boolean;
    readonly isBadState: boolean;
    readonly type: 'NotAllowed' | 'ZeroThreshold' | 'NotEnoughFriends' | 'MaxFriends' | 'NotSorted' | 'NotRecoverable' | 'AlreadyRecoverable' | 'AlreadyStarted' | 'NotStarted' | 'NotFriend' | 'DelayPeriod' | 'AlreadyVouched' | 'Threshold' | 'StillActive' | 'AlreadyProxy' | 'BadState';
  }

  /** @name PalletRecoveryEvent (88) */
  export interface PalletRecoveryEvent extends Enum {
    readonly isRecoveryCreated: boolean;
    readonly asRecoveryCreated: AccountId;
    readonly isRecoveryInitiated: boolean;
    readonly asRecoveryInitiated: ITuple<[AccountId, AccountId]>;
    readonly isRecoveryVouched: boolean;
    readonly asRecoveryVouched: ITuple<[AccountId, AccountId, AccountId]>;
    readonly isRecoveryClosed: boolean;
    readonly asRecoveryClosed: ITuple<[AccountId, AccountId]>;
    readonly isAccountRecovered: boolean;
    readonly asAccountRecovered: ITuple<[AccountId, AccountId]>;
    readonly isRecoveryRemoved: boolean;
    readonly asRecoveryRemoved: AccountId;
    readonly type: 'RecoveryCreated' | 'RecoveryInitiated' | 'RecoveryVouched' | 'RecoveryClosed' | 'AccountRecovered' | 'RecoveryRemoved';
  }

  /** @name PalletProxyCall (96) */
  export interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: AccountId;
      readonly forceProxyType: Option<ProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: AccountId;
      readonly proxyType: ProxyType;
      readonly delay: BlockNumber;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: AccountId;
      readonly proxyType: ProxyType;
      readonly delay: BlockNumber;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isAnonymous: boolean;
    readonly asAnonymous: {
      readonly proxyType: ProxyType;
      readonly delay: BlockNumber;
      readonly index: u16;
    } & Struct;
    readonly isKillAnonymous: boolean;
    readonly asKillAnonymous: {
      readonly spawner: AccountId;
      readonly proxyType: ProxyType;
      readonly index: u16;
      readonly height: Compact<BlockNumber>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: AccountId;
      readonly callHash: CallHashOf;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: AccountId;
      readonly callHash: CallHashOf;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: AccountId;
      readonly callHash: CallHashOf;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: AccountId;
      readonly real: AccountId;
      readonly forceProxyType: Option<ProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'Anonymous' | 'KillAnonymous' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletProxyError (97) */
  export interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletProxyEvent (98) */
  export interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: DispatchResult;
    readonly isAnonymousCreated: boolean;
    readonly asAnonymousCreated: ITuple<[AccountId, AccountId, ProxyType, u16]>;
    readonly isAnnounced: boolean;
    readonly asAnnounced: ITuple<[AccountId, AccountId, Hash]>;
    readonly type: 'ProxyExecuted' | 'AnonymousCreated' | 'Announced';
  }

  /** @name PalletAuctionCall (102) */
  export interface PalletAuctionCall extends Enum {
    readonly isBid: boolean;
    readonly asBid: {
      readonly id: AuctionId;
      readonly value: Compact<Balance>;
    } & Struct;
    readonly type: 'Bid';
  }

  /** @name PalletAuctionError (103) */
  export interface PalletAuctionError extends Enum {
    readonly isAuctionNotExist: boolean;
    readonly isAuctionNotStarted: boolean;
    readonly isBidNotAccepted: boolean;
    readonly isInvalidBidPrice: boolean;
    readonly isNoAvailableAuctionId: boolean;
    readonly type: 'AuctionNotExist' | 'AuctionNotStarted' | 'BidNotAccepted' | 'InvalidBidPrice' | 'NoAvailableAuctionId';
  }

  /** @name PalletAuctionEvent (104) */
  export interface PalletAuctionEvent extends Enum {
    readonly isBid: boolean;
    readonly asBid: ITuple<[AuctionId, AccountId, Balance]>;
    readonly type: 'Bid';
  }

  /** @name PalletOrmlNFTError (108) */
  export interface PalletOrmlNFTError extends Enum {
    readonly isNoAvailableClassId: boolean;
    readonly isNoAvailableTokenId: boolean;
    readonly isTokenNotFound: boolean;
    readonly isClassNotFound: boolean;
    readonly isNoPermission: boolean;
    readonly isCannotDestroyClass: boolean;
    readonly isMaxMetadataExceeded: boolean;
    readonly type: 'NoAvailableClassId' | 'NoAvailableTokenId' | 'TokenNotFound' | 'ClassNotFound' | 'NoPermission' | 'CannotDestroyClass' | 'MaxMetadataExceeded';
  }

  /** @name PalletShuraCouncilCall (121) */
  export interface PalletShuraCouncilCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId>;
      readonly prime: Option<AccountId>;
      readonly oldCount: MemberCount;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Proposal;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<MemberCount>;
      readonly proposal: Proposal;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: Hash;
      readonly index: Compact<ProposalIndex>;
      readonly approve: bool;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: Hash;
      readonly index: Compact<ProposalIndex>;
      readonly proposalWeightBound: Compact<Weight>;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: Hash;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'Close' | 'DisapproveProposal';
  }

  /** @name PalletShuraCouncilError (122) */
  export interface PalletShuraCouncilError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength';
  }

  /** @name PalletShuraCouncilEvent (124) */
  export interface PalletShuraCouncilEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: ITuple<[AccountId, ProposalIndex, Hash, MemberCount]>;
    readonly isVoted: boolean;
    readonly asVoted: ITuple<[AccountId, Hash, bool, MemberCount, MemberCount]>;
    readonly isApproved: boolean;
    readonly asApproved: Hash;
    readonly isDisapproved: boolean;
    readonly asDisapproved: Hash;
    readonly isExecuted: boolean;
    readonly asExecuted: ITuple<[Hash, DispatchResult]>;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: ITuple<[Hash, DispatchResult]>;
    readonly isClosed: boolean;
    readonly asClosed: ITuple<[Hash, MemberCount, MemberCount]>;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletShuraCouncilMembershipCall (126) */
  export interface PalletShuraCouncilMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: AccountId;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: AccountId;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: AccountId;
      readonly add: AccountId;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: AccountId;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: AccountId;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletShuraCouncilMembershipError (127) */
  export interface PalletShuraCouncilMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly type: 'AlreadyMember' | 'NotMember';
  }

  /** @name PalletShuraCouncilMembershipEvent (129) */
  export interface PalletShuraCouncilMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly asDummy: PhantomData;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletFinancialCouncilCall (130) */
  export interface PalletFinancialCouncilCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId>;
      readonly prime: Option<AccountId>;
      readonly oldCount: MemberCount;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Proposal;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<MemberCount>;
      readonly proposal: Proposal;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: Hash;
      readonly index: Compact<ProposalIndex>;
      readonly approve: bool;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: Hash;
      readonly index: Compact<ProposalIndex>;
      readonly proposalWeightBound: Compact<Weight>;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: Hash;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'Close' | 'DisapproveProposal';
  }

  /** @name PalletFinancialCouncilError (131) */
  export interface PalletFinancialCouncilError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength';
  }

  /** @name PalletFinancialCouncilEvent (132) */
  export interface PalletFinancialCouncilEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: ITuple<[AccountId, ProposalIndex, Hash, MemberCount]>;
    readonly isVoted: boolean;
    readonly asVoted: ITuple<[AccountId, Hash, bool, MemberCount, MemberCount]>;
    readonly isApproved: boolean;
    readonly asApproved: Hash;
    readonly isDisapproved: boolean;
    readonly asDisapproved: Hash;
    readonly isExecuted: boolean;
    readonly asExecuted: ITuple<[Hash, DispatchResult]>;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: ITuple<[Hash, DispatchResult]>;
    readonly isClosed: boolean;
    readonly asClosed: ITuple<[Hash, MemberCount, MemberCount]>;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletFinancialCouncilMembershipCall (133) */
  export interface PalletFinancialCouncilMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: AccountId;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: AccountId;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: AccountId;
      readonly add: AccountId;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: AccountId;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: AccountId;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletFinancialCouncilMembershipError (134) */
  export interface PalletFinancialCouncilMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly type: 'AlreadyMember' | 'NotMember';
  }

  /** @name PalletFinancialCouncilMembershipEvent (135) */
  export interface PalletFinancialCouncilMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly asDummy: PhantomData;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletTechnicalCommitteeCall (136) */
  export interface PalletTechnicalCommitteeCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId>;
      readonly prime: Option<AccountId>;
      readonly oldCount: MemberCount;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Proposal;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<MemberCount>;
      readonly proposal: Proposal;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: Hash;
      readonly index: Compact<ProposalIndex>;
      readonly approve: bool;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: Hash;
      readonly index: Compact<ProposalIndex>;
      readonly proposalWeightBound: Compact<Weight>;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: Hash;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'Close' | 'DisapproveProposal';
  }

  /** @name PalletTechnicalCommitteeError (137) */
  export interface PalletTechnicalCommitteeError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength';
  }

  /** @name PalletTechnicalCommitteeEvent (138) */
  export interface PalletTechnicalCommitteeEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: ITuple<[AccountId, ProposalIndex, Hash, MemberCount]>;
    readonly isVoted: boolean;
    readonly asVoted: ITuple<[AccountId, Hash, bool, MemberCount, MemberCount]>;
    readonly isApproved: boolean;
    readonly asApproved: Hash;
    readonly isDisapproved: boolean;
    readonly asDisapproved: Hash;
    readonly isExecuted: boolean;
    readonly asExecuted: ITuple<[Hash, DispatchResult]>;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: ITuple<[Hash, DispatchResult]>;
    readonly isClosed: boolean;
    readonly asClosed: ITuple<[Hash, MemberCount, MemberCount]>;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletTechnicalCommitteeMembershipCall (139) */
  export interface PalletTechnicalCommitteeMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: AccountId;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: AccountId;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: AccountId;
      readonly add: AccountId;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: AccountId;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: AccountId;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletTechnicalCommitteeMembershipError (140) */
  export interface PalletTechnicalCommitteeMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly type: 'AlreadyMember' | 'NotMember';
  }

  /** @name PalletTechnicalCommitteeMembershipEvent (141) */
  export interface PalletTechnicalCommitteeMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly asDummy: PhantomData;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletAuthorityCall (147) */
  export interface PalletAuthorityCall extends Enum {
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: AsOriginId;
      readonly call: CallOf;
    } & Struct;
    readonly isScheduleDispatch: boolean;
    readonly asScheduleDispatch: {
      readonly when: DispatchTime;
      readonly priority: Priority;
      readonly withDelayedOrigin: bool;
      readonly call: CallOf;
    } & Struct;
    readonly isFastTrackScheduledDispatch: boolean;
    readonly asFastTrackScheduledDispatch: {
      readonly initialOrigin: PalletsOrigin;
      readonly taskId: ScheduleTaskIndex;
      readonly when: DispatchTime;
    } & Struct;
    readonly isDelayScheduledDispatch: boolean;
    readonly asDelayScheduledDispatch: {
      readonly initialOrigin: PalletsOrigin;
      readonly taskId: ScheduleTaskIndex;
      readonly additionalDelay: BlockNumber;
    } & Struct;
    readonly isCancelScheduledDispatch: boolean;
    readonly asCancelScheduledDispatch: {
      readonly initialOrigin: PalletsOrigin;
      readonly taskId: ScheduleTaskIndex;
    } & Struct;
    readonly isAuthorizeCall: boolean;
    readonly asAuthorizeCall: {
      readonly call: CallOf;
      readonly caller: Option<AccountId>;
    } & Struct;
    readonly isRemoveAuthorizedCall: boolean;
    readonly asRemoveAuthorizedCall: {
      readonly hash_: Hash;
    } & Struct;
    readonly isTriggerCall: boolean;
    readonly asTriggerCall: {
      readonly hash_: Hash;
      readonly callWeightBound: Compact<Weight>;
    } & Struct;
    readonly type: 'DispatchAs' | 'ScheduleDispatch' | 'FastTrackScheduledDispatch' | 'DelayScheduledDispatch' | 'CancelScheduledDispatch' | 'AuthorizeCall' | 'RemoveAuthorizedCall' | 'TriggerCall';
  }

  /** @name PalletAuthorityError (148) */
  export interface PalletAuthorityError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isFailedToCancel: boolean;
    readonly isFailedToFastTrack: boolean;
    readonly isFailedToDelay: boolean;
    readonly isCallNotAuthorized: boolean;
    readonly isTriggerCallNotPermitted: boolean;
    readonly isWrongCallWeightBound: boolean;
    readonly type: 'FailedToSchedule' | 'FailedToCancel' | 'FailedToFastTrack' | 'FailedToDelay' | 'CallNotAuthorized' | 'TriggerCallNotPermitted' | 'WrongCallWeightBound';
  }

  /** @name PalletAuthorityEvent (149) */
  export interface PalletAuthorityEvent extends Enum {
    readonly isDispatched: boolean;
    readonly asDispatched: DispatchResult;
    readonly isScheduled: boolean;
    readonly asScheduled: ITuple<[PalletsOrigin, ScheduleTaskIndex]>;
    readonly isFastTracked: boolean;
    readonly asFastTracked: ITuple<[PalletsOrigin, ScheduleTaskIndex, BlockNumber]>;
    readonly isDelayed: boolean;
    readonly asDelayed: ITuple<[PalletsOrigin, ScheduleTaskIndex, BlockNumber]>;
    readonly isCancelled: boolean;
    readonly asCancelled: ITuple<[PalletsOrigin, ScheduleTaskIndex]>;
    readonly isAuthorizedCall: boolean;
    readonly asAuthorizedCall: ITuple<[Hash, Option<AccountId>]>;
    readonly isRemovedAuthorizedCall: boolean;
    readonly asRemovedAuthorizedCall: Hash;
    readonly isTriggeredCallBy: boolean;
    readonly asTriggeredCallBy: ITuple<[Hash, AccountId]>;
    readonly type: 'Dispatched' | 'Scheduled' | 'FastTracked' | 'Delayed' | 'Cancelled' | 'AuthorizedCall' | 'RemovedAuthorizedCall' | 'TriggeredCallBy';
  }

  /** @name PalletUtilityCall (152) */
  export interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll';
  }

  /** @name PalletUtilityError (153) */
  export interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletUtilityEvent (154) */
  export interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: ITuple<[u32, DispatchError]>;
    readonly isBatchCompleted: boolean;
    readonly isItemCompleted: boolean;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'ItemCompleted';
  }

  /** @name PalletSetheumOracleCall (156) */
  export interface PalletSetheumOracleCall extends Enum {
    readonly isFeedValues: boolean;
    readonly asFeedValues: {
      readonly values: Vec<ITuple<[OracleKey, OracleValue]>>;
    } & Struct;
    readonly type: 'FeedValues';
  }

  /** @name PalletSetheumOracleError (157) */
  export interface PalletSetheumOracleError extends Enum {
    readonly isNoPermission: boolean;
    readonly isAlreadyFeeded: boolean;
    readonly type: 'NoPermission' | 'AlreadyFeeded';
  }

  /** @name PalletSetheumOracleEvent (158) */
  export interface PalletSetheumOracleEvent extends Enum {
    readonly isNewFeedData: boolean;
    readonly asNewFeedData: ITuple<[AccountId, Vec<ITuple<[OracleKey, OracleValue]>>]>;
    readonly type: 'NewFeedData';
  }

  /** @name PalletOperatorMembershipSetheumCall (163) */
  export interface PalletOperatorMembershipSetheumCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: AccountId;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: AccountId;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: AccountId;
      readonly add: AccountId;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: AccountId;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: AccountId;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletOperatorMembershipSetheumError (164) */
  export interface PalletOperatorMembershipSetheumError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly type: 'AlreadyMember' | 'NotMember';
  }

  /** @name PalletOperatorMembershipSetheumEvent (165) */
  export interface PalletOperatorMembershipSetheumEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly asDummy: PhantomData;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletAuctionManagerCall (166) */
  export interface PalletAuctionManagerCall extends Enum {
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly id: AuctionId;
    } & Struct;
    readonly type: 'Cancel';
  }

  /** @name PalletAuctionManagerError (169) */
  export interface PalletAuctionManagerError extends Enum {
    readonly isAuctionNotExists: boolean;
    readonly isInReverseStage: boolean;
    readonly isInvalidFeedPrice: boolean;
    readonly isMustAfterShutdown: boolean;
    readonly isInvalidBidPrice: boolean;
    readonly isInvalidAmount: boolean;
    readonly type: 'AuctionNotExists' | 'InReverseStage' | 'InvalidFeedPrice' | 'MustAfterShutdown' | 'InvalidBidPrice' | 'InvalidAmount';
  }

  /** @name PalletAuctionManagerEvent (170) */
  export interface PalletAuctionManagerEvent extends Enum {
    readonly isNewCollateralAuction: boolean;
    readonly asNewCollateralAuction: ITuple<[AuctionId, CurrencyId, Balance, Balance]>;
    readonly isCancelAuction: boolean;
    readonly asCancelAuction: AuctionId;
    readonly isCollateralAuctionDealt: boolean;
    readonly asCollateralAuctionDealt: ITuple<[AuctionId, CurrencyId, Balance, AccountId, Balance]>;
    readonly isDexTakeCollateralAuction: boolean;
    readonly asDexTakeCollateralAuction: ITuple<[AuctionId, CurrencyId, Balance, Balance, Balance]>;
    readonly isCollateralAuctionAborted: boolean;
    readonly asCollateralAuctionAborted: ITuple<[AuctionId, CurrencyId, Balance, Balance, AccountId]>;
    readonly type: 'NewCollateralAuction' | 'CancelAuction' | 'CollateralAuctionDealt' | 'DexTakeCollateralAuction' | 'CollateralAuctionAborted';
  }

  /** @name PalletLoansCall (172) */
  export type PalletLoansCall = Null;

  /** @name PalletLoansError (173) */
  export interface PalletLoansError extends Enum {
    readonly isAmountConvertFailed: boolean;
    readonly type: 'AmountConvertFailed';
  }

  /** @name PalletLoansEvent (175) */
  export interface PalletLoansEvent extends Enum {
    readonly isPositionUpdated: boolean;
    readonly asPositionUpdated: ITuple<[AccountId, CurrencyId, Amount, Amount]>;
    readonly isConfiscateCollateralAndDebit: boolean;
    readonly asConfiscateCollateralAndDebit: ITuple<[AccountId, CurrencyId, Balance, Balance]>;
    readonly isTransferLoan: boolean;
    readonly asTransferLoan: ITuple<[AccountId, AccountId, CurrencyId]>;
    readonly type: 'PositionUpdated' | 'ConfiscateCollateralAndDebit' | 'TransferLoan';
  }

  /** @name PalletSetmintCall (178) */
  export interface PalletSetmintCall extends Enum {
    readonly isAdjustLoan: boolean;
    readonly asAdjustLoan: {
      readonly currencyId: CurrencyId;
      readonly collateralAdjustment: Amount;
      readonly debitAdjustment: Amount;
    } & Struct;
    readonly isCloseLoanHasDebitByDex: boolean;
    readonly asCloseLoanHasDebitByDex: {
      readonly currencyId: CurrencyId;
      readonly maxCollateralAmount: Compact<Balance>;
    } & Struct;
    readonly isTransferLoanFrom: boolean;
    readonly asTransferLoanFrom: {
      readonly currencyId: CurrencyId;
      readonly from: LookupSource;
    } & Struct;
    readonly isAuthorize: boolean;
    readonly asAuthorize: {
      readonly currencyId: CurrencyId;
      readonly to: LookupSource;
    } & Struct;
    readonly isUnauthorize: boolean;
    readonly asUnauthorize: {
      readonly currencyId: CurrencyId;
      readonly to: LookupSource;
    } & Struct;
    readonly isUnauthorizeAll: boolean;
    readonly isExpandPositionCollateral: boolean;
    readonly asExpandPositionCollateral: {
      readonly currencyId: CurrencyId;
      readonly increaseDebitValue: Balance;
      readonly minIncreaseCollateral: Balance;
    } & Struct;
    readonly isShrinkPositionDebit: boolean;
    readonly asShrinkPositionDebit: {
      readonly currencyId: CurrencyId;
      readonly decreaseCollateral: Balance;
      readonly minDecreaseDebitValue: Balance;
    } & Struct;
    readonly type: 'AdjustLoan' | 'CloseLoanHasDebitByDex' | 'TransferLoanFrom' | 'Authorize' | 'Unauthorize' | 'UnauthorizeAll' | 'ExpandPositionCollateral' | 'ShrinkPositionDebit';
  }

  /** @name PalletSetmintError (179) */
  export interface PalletSetmintError extends Enum {
    readonly isNoPermission: boolean;
    readonly isAlreadyShutdown: boolean;
    readonly isAuthorizationNotExists: boolean;
    readonly isAlreadyAuthorized: boolean;
    readonly type: 'NoPermission' | 'AlreadyShutdown' | 'AuthorizationNotExists' | 'AlreadyAuthorized';
  }

  /** @name PalletSetmintEvent (180) */
  export interface PalletSetmintEvent extends Enum {
    readonly isAuthorization: boolean;
    readonly asAuthorization: ITuple<[AccountId, AccountId, CurrencyId]>;
    readonly isUnAuthorization: boolean;
    readonly asUnAuthorization: ITuple<[AccountId, AccountId, CurrencyId]>;
    readonly isUnAuthorizationAll: boolean;
    readonly asUnAuthorizationAll: AccountId;
    readonly type: 'Authorization' | 'UnAuthorization' | 'UnAuthorizationAll';
  }

  /** @name PalletSerpTreasuryCall (184) */
  export interface PalletSerpTreasuryCall extends Enum {
    readonly isSetStableCurrencyInflationRate: boolean;
    readonly asSetStableCurrencyInflationRate: {
      readonly currencyId: SerpStableCurrencyId;
      readonly size_: Balance;
    } & Struct;
    readonly isForceSerpdown: boolean;
    readonly asForceSerpdown: {
      readonly currencyId: CurrencyId;
      readonly size_: Balance;
    } & Struct;
    readonly type: 'SetStableCurrencyInflationRate' | 'ForceSerpdown';
  }

  /** @name PalletSerpTreasuryError (186) */
  export interface PalletSerpTreasuryError extends Enum {
    readonly isCannotDeposit: boolean;
    readonly isCannotSwap: boolean;
    readonly isDexNotAvailable: boolean;
    readonly isPriceIsStableCannotSerp: boolean;
    readonly isInvalidCurrencyType: boolean;
    readonly isInvalidFeedPrice: boolean;
    readonly isInvalidAmount: boolean;
    readonly isMinSupplyReached: boolean;
    readonly isDinarNotEnough: boolean;
    readonly isInvalidSwapPath: boolean;
    readonly type: 'CannotDeposit' | 'CannotSwap' | 'DexNotAvailable' | 'PriceIsStableCannotSerp' | 'InvalidCurrencyType' | 'InvalidFeedPrice' | 'InvalidAmount' | 'MinSupplyReached' | 'DinarNotEnough' | 'InvalidSwapPath';
  }

  /** @name PalletSerpTreasuryEvent (187) */
  export interface PalletSerpTreasuryEvent extends Enum {
    readonly isSerpTes: boolean;
    readonly asSerpTes: CurrencyId;
    readonly isSerpUpDelivery: boolean;
    readonly asSerpUpDelivery: ITuple<[Balance, CurrencyId]>;
    readonly isSerplusDelivery: boolean;
    readonly asSerplusDelivery: ITuple<[Balance, CurrencyId]>;
    readonly isSerpUp: boolean;
    readonly asSerpUp: ITuple<[Balance, CurrencyId]>;
    readonly isSerpDown: boolean;
    readonly asSerpDown: ITuple<[Balance, CurrencyId]>;
    readonly isCashDropClaim: boolean;
    readonly asCashDropClaim: ITuple<[CurrencyId, AccountId, Balance]>;
    readonly isCashDropToVault: boolean;
    readonly asCashDropToVault: ITuple<[Balance, CurrencyId]>;
    readonly isStableCurrencyInflationRateUpdated: boolean;
    readonly asStableCurrencyInflationRateUpdated: ITuple<[SerpStableCurrencyId, Balance]>;
    readonly isInflationDelivery: boolean;
    readonly asInflationDelivery: ITuple<[CurrencyId, Balance]>;
    readonly isSerpSwapDinarToExactSetter: boolean;
    readonly asSerpSwapDinarToExactSetter: ITuple<[CurrencyId, CurrencyId, Balance, Balance]>;
    readonly isSerpSwapSerpToExactSetter: boolean;
    readonly asSerpSwapSerpToExactSetter: ITuple<[CurrencyId, CurrencyId, Balance, Balance]>;
    readonly isSerpSwapDinarToExactStable: boolean;
    readonly asSerpSwapDinarToExactStable: ITuple<[CurrencyId, CurrencyId, Balance, Balance]>;
    readonly isSerpSwapSetterToExactSetDollar: boolean;
    readonly asSerpSwapSetterToExactSetDollar: ITuple<[CurrencyId, CurrencyId, Balance, Balance]>;
    readonly isSerpSwapSerpToExactStable: boolean;
    readonly asSerpSwapSerpToExactStable: ITuple<[CurrencyId, CurrencyId, Balance, Balance]>;
    readonly isSerpSwapExactStableToDinar: boolean;
    readonly asSerpSwapExactStableToDinar: ITuple<[CurrencyId, CurrencyId, Balance, Balance]>;
    readonly isSerpSwapExactStableToSetter: boolean;
    readonly asSerpSwapExactStableToSetter: ITuple<[CurrencyId, CurrencyId, Balance, Balance]>;
    readonly isSerplusSwapExactStableToSetter: boolean;
    readonly asSerplusSwapExactStableToSetter: ITuple<[CurrencyId, CurrencyId, Balance, Balance]>;
    readonly isSerplusSwapExactStableToNative: boolean;
    readonly asSerplusSwapExactStableToNative: ITuple<[CurrencyId, CurrencyId, Balance, Balance]>;
    readonly isSerpSwapExactStableToNative: boolean;
    readonly asSerpSwapExactStableToNative: ITuple<[CurrencyId, CurrencyId, Balance, Balance]>;
    readonly isSerplusSwapExactStableToHelp: boolean;
    readonly asSerplusSwapExactStableToHelp: ITuple<[CurrencyId, CurrencyId, Balance, Balance]>;
    readonly isSerpSwapExactStableToHelp: boolean;
    readonly asSerpSwapExactStableToHelp: ITuple<[CurrencyId, CurrencyId, Balance, Balance]>;
    readonly isSerpSwapExactStableToSerpToken: boolean;
    readonly asSerpSwapExactStableToSerpToken: ITuple<[CurrencyId, CurrencyId, Balance, Balance]>;
    readonly isTopUpCashDropPool: boolean;
    readonly asTopUpCashDropPool: ITuple<[CurrencyId, Balance]>;
    readonly isIssueCashDropFromPool: boolean;
    readonly asIssueCashDropFromPool: ITuple<[AccountId, CurrencyId, Balance]>;
    readonly isForceSerpDown: boolean;
    readonly asForceSerpDown: ITuple<[CurrencyId, Balance]>;
    readonly type: 'SerpTes' | 'SerpUpDelivery' | 'SerplusDelivery' | 'SerpUp' | 'SerpDown' | 'CashDropClaim' | 'CashDropToVault' | 'StableCurrencyInflationRateUpdated' | 'InflationDelivery' | 'SerpSwapDinarToExactSetter' | 'SerpSwapSerpToExactSetter' | 'SerpSwapDinarToExactStable' | 'SerpSwapSetterToExactSetDollar' | 'SerpSwapSerpToExactStable' | 'SerpSwapExactStableToDinar' | 'SerpSwapExactStableToSetter' | 'SerplusSwapExactStableToSetter' | 'SerplusSwapExactStableToNative' | 'SerpSwapExactStableToNative' | 'SerplusSwapExactStableToHelp' | 'SerpSwapExactStableToHelp' | 'SerpSwapExactStableToSerpToken' | 'TopUpCashDropPool' | 'IssueCashDropFromPool' | 'ForceSerpDown';
  }

  /** @name PalletCdpTreasuryCall (189) */
  export interface PalletCdpTreasuryCall extends Enum {
    readonly isExtractSurplusToSerp: boolean;
    readonly asExtractSurplusToSerp: {
      readonly amount: Balance;
    } & Struct;
    readonly isAuctionCollateral: boolean;
    readonly asAuctionCollateral: {
      readonly currencyId: CurrencyId;
      readonly amount: Compact<Balance>;
      readonly target: Compact<Balance>;
      readonly splited: bool;
    } & Struct;
    readonly isExchangeCollateralToStable: boolean;
    readonly asExchangeCollateralToStable: {
      readonly currencyId: CurrencyId;
      readonly swapLimit: SwapLimit;
    } & Struct;
    readonly isSetExpectedCollateralAuctionSize: boolean;
    readonly asSetExpectedCollateralAuctionSize: {
      readonly currencyId: CurrencyId;
      readonly size_: Compact<Balance>;
    } & Struct;
    readonly type: 'ExtractSurplusToSerp' | 'AuctionCollateral' | 'ExchangeCollateralToStable' | 'SetExpectedCollateralAuctionSize';
  }

  /** @name PalletCdpTreasuryError (190) */
  export interface PalletCdpTreasuryError extends Enum {
    readonly isCollateralNotEnough: boolean;
    readonly isSurplusPoolNotEnough: boolean;
    readonly isDebitPoolNotEnough: boolean;
    readonly isCannotSwap: boolean;
    readonly isNotDexShare: boolean;
    readonly type: 'CollateralNotEnough' | 'SurplusPoolNotEnough' | 'DebitPoolNotEnough' | 'CannotSwap' | 'NotDexShare';
  }

  /** @name PalletCdpTreasuryEvent (191) */
  export interface PalletCdpTreasuryEvent extends Enum {
    readonly isExpectedCollateralAuctionSizeUpdated: boolean;
    readonly asExpectedCollateralAuctionSizeUpdated: ITuple<[CurrencyId, Balance]>;
    readonly type: 'ExpectedCollateralAuctionSizeUpdated';
  }

  /** @name PalletCdpEngineCall (195) */
  export interface PalletCdpEngineCall extends Enum {
    readonly isLiquidate: boolean;
    readonly asLiquidate: {
      readonly currencyId: CurrencyId;
      readonly who: LookupSource;
    } & Struct;
    readonly isSettle: boolean;
    readonly asSettle: {
      readonly currencyId: CurrencyId;
      readonly who: LookupSource;
    } & Struct;
    readonly isSetCollateralParams: boolean;
    readonly asSetCollateralParams: {
      readonly currencyId: CurrencyId;
      readonly liquidationRatio: ChangeOptionRatio;
      readonly liquidationPenalty: ChangeOptionRate;
      readonly requiredCollateralRatio: ChangeOptionRatio;
      readonly maximumTotalDebitValue: ChangeBalance;
    } & Struct;
    readonly type: 'Liquidate' | 'Settle' | 'SetCollateralParams';
  }

  /** @name PalletCdpEngineError (198) */
  export interface PalletCdpEngineError extends Enum {
    readonly isExceedDebitValueHardCap: boolean;
    readonly isBelowRequiredCollateralRatio: boolean;
    readonly isBelowLiquidationRatio: boolean;
    readonly isMustBeUnsafe: boolean;
    readonly isMustBeSafe: boolean;
    readonly isInvalidCollateralType: boolean;
    readonly isRemainDebitValueTooSmall: boolean;
    readonly isInvalidFeedPrice: boolean;
    readonly isNoDebitValue: boolean;
    readonly isAlreadyShutdown: boolean;
    readonly isMustAfterShutdown: boolean;
    readonly isCannotSwap: boolean;
    readonly isCollateralNotEnough: boolean;
    readonly isNotEnoughDebitDecrement: boolean;
    readonly isConvertDebitBalanceFailed: boolean;
    readonly type: 'ExceedDebitValueHardCap' | 'BelowRequiredCollateralRatio' | 'BelowLiquidationRatio' | 'MustBeUnsafe' | 'MustBeSafe' | 'InvalidCollateralType' | 'RemainDebitValueTooSmall' | 'InvalidFeedPrice' | 'NoDebitValue' | 'AlreadyShutdown' | 'MustAfterShutdown' | 'CannotSwap' | 'CollateralNotEnough' | 'NotEnoughDebitDecrement' | 'ConvertDebitBalanceFailed';
  }

  /** @name PalletCdpEngineEvent (201) */
  export interface PalletCdpEngineEvent extends Enum {
    readonly isLiquidateUnsafeCDP: boolean;
    readonly asLiquidateUnsafeCDP: ITuple<[CurrencyId, AccountId, Balance, Balance, Balance]>;
    readonly isSettleCDPInDebit: boolean;
    readonly asSettleCDPInDebit: ITuple<[CurrencyId, AccountId]>;
    readonly isCloseCDPInDebitByDEX: boolean;
    readonly asCloseCDPInDebitByDEX: ITuple<[CurrencyId, AccountId, Balance, Balance, Balance]>;
    readonly isLiquidationRatioUpdated: boolean;
    readonly asLiquidationRatioUpdated: ITuple<[CurrencyId, OptionRatio]>;
    readonly isLiquidationPenaltyUpdated: boolean;
    readonly asLiquidationPenaltyUpdated: ITuple<[CurrencyId, OptionRate]>;
    readonly isRequiredCollateralRatioUpdated: boolean;
    readonly asRequiredCollateralRatioUpdated: ITuple<[CurrencyId, OptionRatio]>;
    readonly isMaximumTotalDebitValueUpdated: boolean;
    readonly asMaximumTotalDebitValueUpdated: ITuple<[CurrencyId, Balance]>;
    readonly type: 'LiquidateUnsafeCDP' | 'SettleCDPInDebit' | 'CloseCDPInDebitByDEX' | 'LiquidationRatioUpdated' | 'LiquidationPenaltyUpdated' | 'RequiredCollateralRatioUpdated' | 'MaximumTotalDebitValueUpdated';
  }

  /** @name PalletEmergencyShutdownCall (203) */
  export interface PalletEmergencyShutdownCall extends Enum {
    readonly isEmergencyShutdown: boolean;
    readonly isOpenCollateralRefund: boolean;
    readonly isRefundCollaterals: boolean;
    readonly asRefundCollaterals: {
      readonly amount: Compact<Balance>;
    } & Struct;
    readonly type: 'EmergencyShutdown' | 'OpenCollateralRefund' | 'RefundCollaterals';
  }

  /** @name PalletEmergencyShutdownError (204) */
  export interface PalletEmergencyShutdownError extends Enum {
    readonly isAlreadyShutdown: boolean;
    readonly isMustAfterShutdown: boolean;
    readonly isCanNotRefund: boolean;
    readonly isExistPotentialSurplus: boolean;
    readonly isExistUnhandledDebit: boolean;
    readonly type: 'AlreadyShutdown' | 'MustAfterShutdown' | 'CanNotRefund' | 'ExistPotentialSurplus' | 'ExistUnhandledDebit';
  }

  /** @name PalletEmergencyShutdownEvent (206) */
  export interface PalletEmergencyShutdownEvent extends Enum {
    readonly isShutdown: boolean;
    readonly asShutdown: BlockNumber;
    readonly isOpenRefund: boolean;
    readonly asOpenRefund: BlockNumber;
    readonly isRefund: boolean;
    readonly asRefund: ITuple<[AccountId, Balance, Vec<ITuple<[CurrencyId, Balance]>>]>;
    readonly type: 'Shutdown' | 'OpenRefund' | 'Refund';
  }

  /** @name PalletTreasuryCall (208) */
  export interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<BalanceOf>;
      readonly beneficiary: LookupSource;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<ProposalIndex>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<ProposalIndex>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal';
  }

  /** @name PalletTreasuryError (210) */
  export interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals';
  }

  /** @name PalletTreasuryEvent (211) */
  export interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: ProposalIndex;
    readonly isSpending: boolean;
    readonly asSpending: Balance;
    readonly isAwarded: boolean;
    readonly asAwarded: ITuple<[ProposalIndex, Balance, AccountId]>;
    readonly isRejected: boolean;
    readonly asRejected: ITuple<[ProposalIndex, Balance]>;
    readonly isBurnt: boolean;
    readonly asBurnt: Balance;
    readonly isRollover: boolean;
    readonly asRollover: Balance;
    readonly isDeposit: boolean;
    readonly asDeposit: Balance;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit';
  }

  /** @name PalletBountiesCall (215) */
  export interface PalletBountiesCall extends Enum {
    readonly isProposeBounty: boolean;
    readonly asProposeBounty: {
      readonly value: Compact<BalanceOf>;
      readonly description: Bytes;
    } & Struct;
    readonly isApproveBounty: boolean;
    readonly asApproveBounty: {
      readonly bountyId: Compact<BountyIndex>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly bountyId: Compact<BountyIndex>;
      readonly curator: LookupSource;
      readonly fee: Compact<BalanceOf>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly bountyId: Compact<BountyIndex>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly bountyId: Compact<BountyIndex>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly bountyId: Compact<BountyIndex>;
      readonly beneficiary: LookupSource;
    } & Struct;
    readonly isClaimBounty: boolean;
    readonly asClaimBounty: {
      readonly bountyId: Compact<BountyIndex>;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly bountyId: Compact<BountyIndex>;
    } & Struct;
    readonly isExtendBountyExpiry: boolean;
    readonly asExtendBountyExpiry: {
      readonly bountyId: Compact<BountyIndex>;
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry';
  }

  /** @name PalletBountiesError (216) */
  export interface PalletBountiesError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInvalidValue: boolean;
    readonly isInvalidFee: boolean;
    readonly isPendingPayout: boolean;
    readonly isPremature: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature';
  }

  /** @name PalletBountiesEvent (218) */
  export interface PalletBountiesEvent extends Enum {
    readonly isBountyProposed: boolean;
    readonly asBountyProposed: BountyIndex;
    readonly isBountyRejected: boolean;
    readonly asBountyRejected: ITuple<[BountyIndex, Balance]>;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: BountyIndex;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: ITuple<[BountyIndex, AccountId]>;
    readonly isBountyClaimed: boolean;
    readonly asBountyClaimed: ITuple<[BountyIndex, Balance, AccountId]>;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: BountyIndex;
    readonly isBountyExtended: boolean;
    readonly asBountyExtended: BountyIndex;
    readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended';
  }

  /** @name PalletTipsCall (221) */
  export interface PalletTipsCall extends Enum {
    readonly isReportAwesome: boolean;
    readonly asReportAwesome: {
      readonly reason: Bytes;
      readonly who: AccountId;
    } & Struct;
    readonly isRetractTip: boolean;
    readonly asRetractTip: {
      readonly hash_: Hash;
    } & Struct;
    readonly isTipNew: boolean;
    readonly asTipNew: {
      readonly reason: Bytes;
      readonly who: AccountId;
      readonly tipValue: Compact<BalanceOf>;
    } & Struct;
    readonly isTip: boolean;
    readonly asTip: {
      readonly hash_: Hash;
      readonly tipValue: Compact<BalanceOf>;
    } & Struct;
    readonly isCloseTip: boolean;
    readonly asCloseTip: {
      readonly hash_: Hash;
    } & Struct;
    readonly isSlashTip: boolean;
    readonly asSlashTip: {
      readonly hash_: Hash;
    } & Struct;
    readonly type: 'ReportAwesome' | 'RetractTip' | 'TipNew' | 'Tip' | 'CloseTip' | 'SlashTip';
  }

  /** @name PalletTipsError (223) */
  export interface PalletTipsError extends Enum {
    readonly isReasonTooBig: boolean;
    readonly isAlreadyKnown: boolean;
    readonly isUnknownTip: boolean;
    readonly isNotFinder: boolean;
    readonly isStillOpen: boolean;
    readonly isPremature: boolean;
    readonly type: 'ReasonTooBig' | 'AlreadyKnown' | 'UnknownTip' | 'NotFinder' | 'StillOpen' | 'Premature';
  }

  /** @name PalletTipsEvent (224) */
  export interface PalletTipsEvent extends Enum {
    readonly isNewTip: boolean;
    readonly asNewTip: Hash;
    readonly isTipClosing: boolean;
    readonly asTipClosing: Hash;
    readonly isTipClosed: boolean;
    readonly asTipClosed: ITuple<[Hash, AccountId, Balance]>;
    readonly isTipRetracted: boolean;
    readonly asTipRetracted: Hash;
    readonly isTipSlashed: boolean;
    readonly asTipSlashed: ITuple<[Hash, AccountId, Balance]>;
    readonly type: 'NewTip' | 'TipClosing' | 'TipClosed' | 'TipRetracted' | 'TipSlashed';
  }

  /** @name PalletNftCall (231) */
  export interface PalletNftCall extends Enum {
    readonly isCreateClass: boolean;
    readonly asCreateClass: {
      readonly metadata: CID;
      readonly properties: Properties;
      readonly attributes: Attributes;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly to: LookupSource;
      readonly classId: ClassIdOf;
      readonly metadata: CID;
      readonly attributes: Attributes;
      readonly quantity: Compact<u32>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly to: LookupSource;
      readonly token: ITuple<[ClassIdOf, TokenIdOf]>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly token: ITuple<[ClassIdOf, TokenIdOf]>;
    } & Struct;
    readonly isBurnWithRemark: boolean;
    readonly asBurnWithRemark: {
      readonly token: ITuple<[ClassIdOf, TokenIdOf]>;
      readonly remark: Bytes;
    } & Struct;
    readonly isDestroyClass: boolean;
    readonly asDestroyClass: {
      readonly classId: ClassIdOf;
      readonly dest: LookupSource;
    } & Struct;
    readonly isUpdateClassProperties: boolean;
    readonly asUpdateClassProperties: {
      readonly classId: ClassIdOf;
      readonly properties: Properties;
    } & Struct;
    readonly type: 'CreateClass' | 'Mint' | 'Transfer' | 'Burn' | 'BurnWithRemark' | 'DestroyClass' | 'UpdateClassProperties';
  }

  /** @name PalletNftError (232) */
  export interface PalletNftError extends Enum {
    readonly isClassIdNotFound: boolean;
    readonly isTokenIdNotFound: boolean;
    readonly isNoPermission: boolean;
    readonly isInvalidQuantity: boolean;
    readonly isNonTransferable: boolean;
    readonly isNonBurnable: boolean;
    readonly isNonMintable: boolean;
    readonly isCannotDestroyClass: boolean;
    readonly isImmutable: boolean;
    readonly isAttributesTooLarge: boolean;
    readonly type: 'ClassIdNotFound' | 'TokenIdNotFound' | 'NoPermission' | 'InvalidQuantity' | 'NonTransferable' | 'NonBurnable' | 'NonMintable' | 'CannotDestroyClass' | 'Immutable' | 'AttributesTooLarge';
  }

  /** @name PalletNftEvent (233) */
  export interface PalletNftEvent extends Enum {
    readonly isCreatedClass: boolean;
    readonly asCreatedClass: ITuple<[AccountId, ClassId]>;
    readonly isMintedToken: boolean;
    readonly asMintedToken: ITuple<[AccountId, AccountId, ClassId, u32]>;
    readonly isTransferredToken: boolean;
    readonly asTransferredToken: ITuple<[AccountId, AccountId, ClassId, TokenId]>;
    readonly isBurnedToken: boolean;
    readonly asBurnedToken: ITuple<[AccountId, ClassId, TokenId]>;
    readonly isBurnedTokenWithRemark: boolean;
    readonly asBurnedTokenWithRemark: ITuple<[AccountId, ClassId, TokenId, Hash]>;
    readonly isDestroyedClass: boolean;
    readonly asDestroyedClass: ITuple<[AccountId, ClassId]>;
    readonly type: 'CreatedClass' | 'MintedToken' | 'TransferredToken' | 'BurnedToken' | 'BurnedTokenWithRemark' | 'DestroyedClass';
  }

  /** @name PalletIndicesCall (235) */
  export interface PalletIndicesCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly index: AccountIndex;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly new_: AccountId;
      readonly index: AccountIndex;
    } & Struct;
    readonly isFree: boolean;
    readonly asFree: {
      readonly index: AccountIndex;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly new_: AccountId;
      readonly index: AccountIndex;
      readonly freeze: bool;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly index: AccountIndex;
    } & Struct;
    readonly type: 'Claim' | 'Transfer' | 'Free' | 'ForceTransfer' | 'Freeze';
  }

  /** @name PalletIndicesError (236) */
  export interface PalletIndicesError extends Enum {
    readonly isNotAssigned: boolean;
    readonly isNotOwner: boolean;
    readonly isInUse: boolean;
    readonly isNotTransfer: boolean;
    readonly isPermanent: boolean;
    readonly type: 'NotAssigned' | 'NotOwner' | 'InUse' | 'NotTransfer' | 'Permanent';
  }

  /** @name PalletIndicesEvent (237) */
  export interface PalletIndicesEvent extends Enum {
    readonly isIndexAssigned: boolean;
    readonly asIndexAssigned: ITuple<[AccountId, AccountIndex]>;
    readonly isIndexFreed: boolean;
    readonly asIndexFreed: AccountIndex;
    readonly isIndexFrozen: boolean;
    readonly asIndexFrozen: ITuple<[AccountIndex, AccountId]>;
    readonly type: 'IndexAssigned' | 'IndexFreed' | 'IndexFrozen';
  }

  /** @name PalletBalancesCall (239) */
  export interface PalletBalancesCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: LookupSource;
      readonly value: Compact<Balance>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: LookupSource;
      readonly newFree: Compact<Balance>;
      readonly newReserved: Compact<Balance>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: LookupSource;
      readonly dest: LookupSource;
      readonly value: Compact<Balance>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: LookupSource;
      readonly value: Compact<Balance>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: LookupSource;
      readonly keepAlive: bool;
    } & Struct;
    readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll';
  }

  /** @name PalletBalancesError (240) */
  export interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'KeepAlive' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name PalletBalancesEvent (242) */
  export interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: ITuple<[AccountId, Balance]>;
    readonly isDustLost: boolean;
    readonly asDustLost: ITuple<[AccountId, Balance]>;
    readonly isTransfer: boolean;
    readonly asTransfer: ITuple<[AccountId, AccountId, Balance]>;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: ITuple<[AccountId, Balance, Balance]>;
    readonly isDeposit: boolean;
    readonly asDeposit: ITuple<[AccountId, Balance]>;
    readonly isReserved: boolean;
    readonly asReserved: ITuple<[AccountId, Balance]>;
    readonly isUnreserved: boolean;
    readonly asUnreserved: ITuple<[AccountId, Balance]>;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: ITuple<[AccountId, AccountId, Balance, BalanceStatus]>;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Deposit' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated';
  }

  /** @name PalletCurrenciesCall (248) */
  export interface PalletCurrenciesCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: LookupSource;
      readonly currencyId: CurrencyIdOf;
      readonly amount: Compact<BalanceOf>;
      readonly claim: bool;
    } & Struct;
    readonly isTransferNativeCurrency: boolean;
    readonly asTransferNativeCurrency: {
      readonly dest: LookupSource;
      readonly amount: Compact<BalanceOf>;
    } & Struct;
    readonly isUpdateBalance: boolean;
    readonly asUpdateBalance: {
      readonly who: LookupSource;
      readonly currencyId: CurrencyIdOf;
      readonly amount: AmountOf;
    } & Struct;
    readonly isSweepDust: boolean;
    readonly asSweepDust: {
      readonly currencyId: CurrencyIdOf;
      readonly accounts: Vec<AccountId>;
    } & Struct;
    readonly type: 'Transfer' | 'TransferNativeCurrency' | 'UpdateBalance' | 'SweepDust';
  }

  /** @name PalletCurrenciesError (249) */
  export interface PalletCurrenciesError extends Enum {
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isBalanceTooLow: boolean;
    readonly isErc20InvalidOperation: boolean;
    readonly isEvmAccountNotFound: boolean;
    readonly isRealOriginNotFound: boolean;
    readonly type: 'AmountIntoBalanceFailed' | 'BalanceTooLow' | 'Erc20InvalidOperation' | 'EvmAccountNotFound' | 'RealOriginNotFound';
  }

  /** @name PalletCurrenciesEvent (250) */
  export interface PalletCurrenciesEvent extends Enum {
    readonly isTransferred: boolean;
    readonly asTransferred: ITuple<[CurrencyId, AccountId, AccountId, Balance]>;
    readonly isBalanceUpdated: boolean;
    readonly asBalanceUpdated: ITuple<[CurrencyId, AccountId, AmountOf]>;
    readonly isDeposited: boolean;
    readonly asDeposited: ITuple<[CurrencyId, AccountId, Balance]>;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: ITuple<[CurrencyId, AccountId, Balance]>;
    readonly isDustSwept: boolean;
    readonly asDustSwept: ITuple<[CurrencyId, AccountId, Balance]>;
    readonly type: 'Transferred' | 'BalanceUpdated' | 'Deposited' | 'Withdrawn' | 'DustSwept';
  }

  /** @name PalletTokensError (251) */
  export interface PalletTokensError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isMaxLocksExceeded: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isDeadAccount: boolean;
    readonly type: 'BalanceTooLow' | 'AmountIntoBalanceFailed' | 'LiquidityRestrictions' | 'MaxLocksExceeded' | 'KeepAlive' | 'ExistentialDeposit' | 'DeadAccount';
  }

  /** @name PalletTokensEvent (252) */
  export interface PalletTokensEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: ITuple<[CurrencyId, AccountId, Balance]>;
    readonly isDustLost: boolean;
    readonly asDustLost: ITuple<[CurrencyId, AccountId, Balance]>;
    readonly isTransfer: boolean;
    readonly asTransfer: ITuple<[CurrencyId, AccountId, AccountId, Balance]>;
    readonly isReserved: boolean;
    readonly asReserved: ITuple<[CurrencyId, AccountId, Balance]>;
    readonly isUnreserved: boolean;
    readonly asUnreserved: ITuple<[CurrencyId, AccountId, Balance]>;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: ITuple<[CurrencyId, AccountId, Balance, Balance]>;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'BalanceSet';
  }

  /** @name PalletTransactionPaymentCall (256) */
  export interface PalletTransactionPaymentCall extends Enum {
    readonly isSetAlternativeFeeSwapPath: boolean;
    readonly asSetAlternativeFeeSwapPath: {
      readonly feeSwapPath: Option<Vec<CurrencyId>>;
    } & Struct;
    readonly type: 'SetAlternativeFeeSwapPath';
  }

  /** @name PalletTransactionPaymentError (259) */
  export interface PalletTransactionPaymentError extends Enum {
    readonly isInvalidSwapPath: boolean;
    readonly type: 'InvalidSwapPath';
  }

  /** @name PalletTransactionPauseCall (261) */
  export interface PalletTransactionPauseCall extends Enum {
    readonly isPauseTransaction: boolean;
    readonly asPauseTransaction: {
      readonly palletName: Bytes;
      readonly functionName: Bytes;
    } & Struct;
    readonly isUnpauseTransaction: boolean;
    readonly asUnpauseTransaction: {
      readonly palletName: Bytes;
      readonly functionName: Bytes;
    } & Struct;
    readonly type: 'PauseTransaction' | 'UnpauseTransaction';
  }

  /** @name PalletTransactionPauseError (262) */
  export interface PalletTransactionPauseError extends Enum {
    readonly isCannotPause: boolean;
    readonly isInvalidCharacter: boolean;
    readonly type: 'CannotPause' | 'InvalidCharacter';
  }

  /** @name PalletTransactionPauseEvent (263) */
  export interface PalletTransactionPauseEvent extends Enum {
    readonly isTransactionPaused: boolean;
    readonly asTransactionPaused: ITuple<[Bytes, Bytes]>;
    readonly isTransactionUnpaused: boolean;
    readonly asTransactionUnpaused: ITuple<[Bytes, Bytes]>;
    readonly type: 'TransactionPaused' | 'TransactionUnpaused';
  }

  /** @name PalletVestingCall (267) */
  export interface PalletVestingCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly currencyId: CurrencyIdOf;
    } & Struct;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly currencyId: CurrencyIdOf;
      readonly dest: LookupSource;
      readonly schedule: VestingScheduleOf;
    } & Struct;
    readonly isUpdateVestingSchedules: boolean;
    readonly asUpdateVestingSchedules: {
      readonly currencyId: CurrencyIdOf;
      readonly who: LookupSource;
      readonly vestingSchedules: Vec<VestingScheduleOf>;
    } & Struct;
    readonly isClaimFor: boolean;
    readonly asClaimFor: {
      readonly currencyId: CurrencyIdOf;
      readonly dest: LookupSource;
    } & Struct;
    readonly type: 'Claim' | 'VestedTransfer' | 'UpdateVestingSchedules' | 'ClaimFor';
  }

  /** @name PalletVestingError (268) */
  export interface PalletVestingError extends Enum {
    readonly isZeroVestingPeriod: boolean;
    readonly isZeroVestingPeriodCount: boolean;
    readonly isInsufficientBalanceToLock: boolean;
    readonly isTooManyVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isMaxVestingSchedulesExceeded: boolean;
    readonly type: 'ZeroVestingPeriod' | 'ZeroVestingPeriodCount' | 'InsufficientBalanceToLock' | 'TooManyVestingSchedules' | 'AmountLow' | 'MaxVestingSchedulesExceeded';
  }

  /** @name PalletVestingEvent (269) */
  export interface PalletVestingEvent extends Enum {
    readonly isVestingScheduleAdded: boolean;
    readonly asVestingScheduleAdded: ITuple<[CurrencyIdOf, AccountId, AccountId, VestingScheduleOf]>;
    readonly isClaimed: boolean;
    readonly asClaimed: ITuple<[AccountId, CurrencyIdOf, Balance]>;
    readonly isVestingSchedulesUpdated: boolean;
    readonly asVestingSchedulesUpdated: ITuple<[CurrencyIdOf, AccountId]>;
    readonly type: 'VestingScheduleAdded' | 'Claimed' | 'VestingSchedulesUpdated';
  }

  /** @name PalletIdentityCall (277) */
  export interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: AccountId;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: IdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<RegistrarIndex>;
      readonly maxFee: Compact<BalanceOf>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: RegistrarIndex;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<RegistrarIndex>;
      readonly fee: Compact<BalanceOf>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<RegistrarIndex>;
      readonly new_: AccountId;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<RegistrarIndex>;
      readonly fields: IdentityFields;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<RegistrarIndex>;
      readonly target: LookupSource;
      readonly judgement: IdentityJudgement;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: LookupSource;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: LookupSource;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: LookupSource;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: LookupSource;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
  }

  /** @name PalletIdentityError (278) */
  export interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned';
  }

  /** @name PalletIdentityEvent (279) */
  export interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: AccountId;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: ITuple<[AccountId, Balance]>;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: ITuple<[AccountId, Balance]>;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: ITuple<[AccountId, RegistrarIndex]>;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: ITuple<[AccountId, RegistrarIndex]>;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: ITuple<[AccountId, RegistrarIndex]>;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: RegistrarIndex;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: ITuple<[AccountId, AccountId, Balance]>;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: ITuple<[AccountId, AccountId, Balance]>;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: ITuple<[AccountId, AccountId, Balance]>;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
  }

  /** @name PalletEvmCall (288) */
  export interface PalletEvmCall extends Enum {
    readonly isEthCall: boolean;
    readonly asEthCall: {
      readonly action: TransactionAction;
      readonly input: Bytes;
      readonly value: Compact<BalanceOf>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
      readonly validUntil: Compact<BlockNumber>;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly target: EvmAddress;
      readonly input: Bytes;
      readonly value: Compact<BalanceOf>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
    } & Struct;
    readonly isScheduledCall: boolean;
    readonly asScheduledCall: {
      readonly from: EvmAddress;
      readonly target: EvmAddress;
      readonly input: Bytes;
      readonly value: Compact<BalanceOf>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly init: Bytes;
      readonly value: Compact<BalanceOf>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
    } & Struct;
    readonly isCreate2: boolean;
    readonly asCreate2: {
      readonly init: Bytes;
      readonly salt: H256;
      readonly value: Compact<BalanceOf>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
    } & Struct;
    readonly isCreateNetworkContract: boolean;
    readonly asCreateNetworkContract: {
      readonly init: Bytes;
      readonly value: Compact<BalanceOf>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
    } & Struct;
    readonly isCreatePredeployContract: boolean;
    readonly asCreatePredeployContract: {
      readonly target: EvmAddress;
      readonly init: Bytes;
      readonly value: Compact<BalanceOf>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
    } & Struct;
    readonly isTransferMaintainer: boolean;
    readonly asTransferMaintainer: {
      readonly contract: EvmAddress;
      readonly newMaintainer: EvmAddress;
    } & Struct;
    readonly isDeploy: boolean;
    readonly asDeploy: {
      readonly contract: EvmAddress;
    } & Struct;
    readonly isDeployFree: boolean;
    readonly asDeployFree: {
      readonly contract: EvmAddress;
    } & Struct;
    readonly isEnableContractDevelopment: boolean;
    readonly isDisableContractDevelopment: boolean;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly contract: EvmAddress;
      readonly code: Bytes;
    } & Struct;
    readonly isSelfdestruct: boolean;
    readonly asSelfdestruct: {
      readonly contract: EvmAddress;
    } & Struct;
    readonly type: 'EthCall' | 'Call' | 'ScheduledCall' | 'Create' | 'Create2' | 'CreateNetworkContract' | 'CreatePredeployContract' | 'TransferMaintainer' | 'Deploy' | 'DeployFree' | 'EnableContractDevelopment' | 'DisableContractDevelopment' | 'SetCode' | 'Selfdestruct';
  }

  /** @name PalletEvmError (289) */
  export interface PalletEvmError extends Enum {
    readonly isAddressNotMapped: boolean;
    readonly isContractNotFound: boolean;
    readonly isNoPermission: boolean;
    readonly isContractDevelopmentNotEnabled: boolean;
    readonly isContractDevelopmentAlreadyEnabled: boolean;
    readonly isContractAlreadyDeployed: boolean;
    readonly isContractExceedsMaxCodeSize: boolean;
    readonly isContractAlreadyExisted: boolean;
    readonly isOutOfStorage: boolean;
    readonly isChargeFeeFailed: boolean;
    readonly isCannotKillContract: boolean;
    readonly isReserveStorageFailed: boolean;
    readonly isUnreserveStorageFailed: boolean;
    readonly isChargeStorageFailed: boolean;
    readonly type: 'AddressNotMapped' | 'ContractNotFound' | 'NoPermission' | 'ContractDevelopmentNotEnabled' | 'ContractDevelopmentAlreadyEnabled' | 'ContractAlreadyDeployed' | 'ContractExceedsMaxCodeSize' | 'ContractAlreadyExisted' | 'OutOfStorage' | 'ChargeFeeFailed' | 'CannotKillContract' | 'ReserveStorageFailed' | 'UnreserveStorageFailed' | 'ChargeStorageFailed';
  }

  /** @name PalletEvmEvent (292) */
  export interface PalletEvmEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: ITuple<[EvmAddress, EvmAddress, Vec<EvmLog>]>;
    readonly isCreatedFailed: boolean;
    readonly asCreatedFailed: ITuple<[EvmAddress, EvmAddress, ExitReason, Vec<EvmLog>]>;
    readonly isExecuted: boolean;
    readonly asExecuted: ITuple<[EvmAddress, EvmAddress, Vec<EvmLog>]>;
    readonly isExecutedFailed: boolean;
    readonly asExecutedFailed: ITuple<[EvmAddress, EvmAddress, ExitReason, Bytes, Vec<EvmLog>]>;
    readonly isTransferredMaintainer: boolean;
    readonly asTransferredMaintainer: ITuple<[EvmAddress, EvmAddress]>;
    readonly isContractDevelopmentEnabled: boolean;
    readonly asContractDevelopmentEnabled: AccountId;
    readonly isContractDevelopmentDisabled: boolean;
    readonly asContractDevelopmentDisabled: AccountId;
    readonly isContractDeployed: boolean;
    readonly asContractDeployed: EvmAddress;
    readonly isContractSetCode: boolean;
    readonly asContractSetCode: EvmAddress;
    readonly isContractSelfdestructed: boolean;
    readonly asContractSelfdestructed: EvmAddress;
    readonly type: 'Created' | 'CreatedFailed' | 'Executed' | 'ExecutedFailed' | 'TransferredMaintainer' | 'ContractDevelopmentEnabled' | 'ContractDevelopmentDisabled' | 'ContractDeployed' | 'ContractSetCode' | 'ContractSelfdestructed';
  }

  /** @name PalletEvmAccountsCall (296) */
  export interface PalletEvmAccountsCall extends Enum {
    readonly isClaimAccount: boolean;
    readonly asClaimAccount: {
      readonly ethAddress: EvmAddress;
      readonly ethSignature: EcdsaSignature;
    } & Struct;
    readonly isClaimDefaultAccount: boolean;
    readonly type: 'ClaimAccount' | 'ClaimDefaultAccount';
  }

  /** @name PalletEvmAccountsError (297) */
  export interface PalletEvmAccountsError extends Enum {
    readonly isAccountIdHasMapped: boolean;
    readonly isEthAddressHasMapped: boolean;
    readonly isBadSignature: boolean;
    readonly isInvalidSignature: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly type: 'AccountIdHasMapped' | 'EthAddressHasMapped' | 'BadSignature' | 'InvalidSignature' | 'NonZeroRefCount';
  }

  /** @name PalletEvmAccountsEvent (298) */
  export interface PalletEvmAccountsEvent extends Enum {
    readonly isClaimAccount: boolean;
    readonly asClaimAccount: ITuple<[AccountId, EvmAddress]>;
    readonly type: 'ClaimAccount';
  }

  /** @name PalletEvmBridgeError (299) */
  export interface PalletEvmBridgeError extends Enum {
    readonly isExecutionFail: boolean;
    readonly isExecutionRevert: boolean;
    readonly isExecutionFatal: boolean;
    readonly isExecutionError: boolean;
    readonly isInvalidReturnValue: boolean;
    readonly type: 'ExecutionFail' | 'ExecutionRevert' | 'ExecutionFatal' | 'ExecutionError' | 'InvalidReturnValue';
  }

  /** @name PalletEvmManagerError (300) */
  export interface PalletEvmManagerError extends Enum {
    readonly isCurrencyIdExisted: boolean;
    readonly type: 'CurrencyIdExisted';
  }

  /** @name PalletAuthorshipCall (303) */
  export interface PalletAuthorshipCall extends Enum {
    readonly isSetUncles: boolean;
    readonly asSetUncles: {
      readonly newUncles: Vec<Header>;
    } & Struct;
    readonly type: 'SetUncles';
  }

  /** @name PalletAuthorshipError (304) */
  export interface PalletAuthorshipError extends Enum {
    readonly isInvalidUncleParent: boolean;
    readonly isUnclesAlreadySet: boolean;
    readonly isTooManyUncles: boolean;
    readonly isGenesisUncle: boolean;
    readonly isTooHighUncle: boolean;
    readonly isUncleAlreadyIncluded: boolean;
    readonly isOldUncle: boolean;
    readonly type: 'InvalidUncleParent' | 'UnclesAlreadySet' | 'TooManyUncles' | 'GenesisUncle' | 'TooHighUncle' | 'UncleAlreadyIncluded' | 'OldUncle';
  }

  /** @name PalletBabeCall (309) */
  export interface PalletBabeCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: BabeEquivocationProof;
      readonly keyOwnerProof: KeyOwnerProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: BabeEquivocationProof;
      readonly keyOwnerProof: KeyOwnerProof;
    } & Struct;
    readonly isPlanConfigChange: boolean;
    readonly asPlanConfigChange: {
      readonly config: NextConfigDescriptor;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'PlanConfigChange';
  }

  /** @name PalletBabeError (310) */
  export interface PalletBabeError extends Enum {
    readonly isInvalidEquivocationProof: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'InvalidEquivocationProof' | 'InvalidKeyOwnershipProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletGrandpaCall (319) */
  export interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: GrandpaEquivocationProof;
      readonly keyOwnerProof: KeyOwnerProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: GrandpaEquivocationProof;
      readonly keyOwnerProof: KeyOwnerProof;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: BlockNumber;
      readonly bestFinalizedBlockNumber: BlockNumber;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name PalletGrandpaError (320) */
  export interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletGrandpaEvent (322) */
  export interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: AuthorityList;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name PalletStakingCall (335) */
  export interface PalletStakingCall extends Enum {
    readonly isBond: boolean;
    readonly asBond: {
      readonly controller: LookupSource;
      readonly value: Compact<BalanceOf>;
      readonly payee: RewardDestination;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly maxAdditional: Compact<BalanceOf>;
    } & Struct;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly value: Compact<BalanceOf>;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isValidate: boolean;
    readonly asValidate: {
      readonly prefs: ValidatorPrefs;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly targets: Vec<LookupSource>;
    } & Struct;
    readonly isChill: boolean;
    readonly isSetPayee: boolean;
    readonly asSetPayee: {
      readonly payee: RewardDestination;
    } & Struct;
    readonly isSetController: boolean;
    readonly asSetController: {
      readonly controller: LookupSource;
    } & Struct;
    readonly isSetValidatorCount: boolean;
    readonly asSetValidatorCount: {
      readonly new_: Compact<u32>;
    } & Struct;
    readonly isIncreaseValidatorCount: boolean;
    readonly asIncreaseValidatorCount: {
      readonly additional: Compact<u32>;
    } & Struct;
    readonly isScaleValidatorCount: boolean;
    readonly asScaleValidatorCount: {
      readonly factor: Percent;
    } & Struct;
    readonly isForceNoEras: boolean;
    readonly isForceNewEra: boolean;
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly invulnerables: Vec<AccountId>;
    } & Struct;
    readonly isForceUnstake: boolean;
    readonly asForceUnstake: {
      readonly stash: AccountId;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isForceNewEraAlways: boolean;
    readonly isCancelDeferredSlash: boolean;
    readonly asCancelDeferredSlash: {
      readonly era: EraIndex;
      readonly slashIndices: Vec<u32>;
    } & Struct;
    readonly isPayoutStakers: boolean;
    readonly asPayoutStakers: {
      readonly validatorStash: AccountId;
      readonly era: EraIndex;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly value: Compact<BalanceOf>;
    } & Struct;
    readonly isSetHistoryDepth: boolean;
    readonly asSetHistoryDepth: {
      readonly newHistoryDepth: Compact<EraIndex>;
      readonly eraItemsDeleted: Compact<u32>;
    } & Struct;
    readonly isReapStash: boolean;
    readonly asReapStash: {
      readonly stash: AccountId;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isKick: boolean;
    readonly asKick: {
      readonly who: Vec<LookupSource>;
    } & Struct;
    readonly isSetStakingLimits: boolean;
    readonly asSetStakingLimits: {
      readonly minNominatorBond: BalanceOf;
      readonly minValidatorBond: BalanceOf;
      readonly maxNominatorCount: Option<u32>;
      readonly maxValidatorCount: Option<u32>;
      readonly threshold: Option<Percent>;
    } & Struct;
    readonly isChillOther: boolean;
    readonly asChillOther: {
      readonly controller: AccountId;
    } & Struct;
    readonly type: 'Bond' | 'BondExtra' | 'Unbond' | 'WithdrawUnbonded' | 'Validate' | 'Nominate' | 'Chill' | 'SetPayee' | 'SetController' | 'SetValidatorCount' | 'IncreaseValidatorCount' | 'ScaleValidatorCount' | 'ForceNoEras' | 'ForceNewEra' | 'SetInvulnerables' | 'ForceUnstake' | 'ForceNewEraAlways' | 'CancelDeferredSlash' | 'PayoutStakers' | 'Rebond' | 'SetHistoryDepth' | 'ReapStash' | 'Kick' | 'SetStakingLimits' | 'ChillOther';
  }

  /** @name PalletStakingError (336) */
  export interface PalletStakingError extends Enum {
    readonly isNotController: boolean;
    readonly isNotStash: boolean;
    readonly isAlreadyBonded: boolean;
    readonly isAlreadyPaired: boolean;
    readonly isEmptyTargets: boolean;
    readonly isDuplicateIndex: boolean;
    readonly isInvalidSlashIndex: boolean;
    readonly isInsufficientBond: boolean;
    readonly isNoMoreChunks: boolean;
    readonly isNoUnlockChunk: boolean;
    readonly isFundedTarget: boolean;
    readonly isInvalidEraToReward: boolean;
    readonly isInvalidNumberOfNominations: boolean;
    readonly isNotSortedAndUnique: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isIncorrectHistoryDepth: boolean;
    readonly isIncorrectSlashingSpans: boolean;
    readonly isBadState: boolean;
    readonly isTooManyTargets: boolean;
    readonly isBadTarget: boolean;
    readonly isCannotChillOther: boolean;
    readonly isTooManyNominators: boolean;
    readonly isTooManyValidators: boolean;
    readonly type: 'NotController' | 'NotStash' | 'AlreadyBonded' | 'AlreadyPaired' | 'EmptyTargets' | 'DuplicateIndex' | 'InvalidSlashIndex' | 'InsufficientBond' | 'NoMoreChunks' | 'NoUnlockChunk' | 'FundedTarget' | 'InvalidEraToReward' | 'InvalidNumberOfNominations' | 'NotSortedAndUnique' | 'AlreadyClaimed' | 'IncorrectHistoryDepth' | 'IncorrectSlashingSpans' | 'BadState' | 'TooManyTargets' | 'BadTarget' | 'CannotChillOther' | 'TooManyNominators' | 'TooManyValidators';
  }

  /** @name PalletStakingEvent (337) */
  export interface PalletStakingEvent extends Enum {
    readonly isEraPaid: boolean;
    readonly asEraPaid: ITuple<[EraIndex, Balance, Balance]>;
    readonly isRewarded: boolean;
    readonly asRewarded: ITuple<[AccountId, Balance]>;
    readonly isSlashed: boolean;
    readonly asSlashed: ITuple<[AccountId, Balance]>;
    readonly isOldSlashingReportDiscarded: boolean;
    readonly asOldSlashingReportDiscarded: SessionIndex;
    readonly isStakersElected: boolean;
    readonly isBonded: boolean;
    readonly asBonded: ITuple<[AccountId, Balance]>;
    readonly isUnbonded: boolean;
    readonly asUnbonded: ITuple<[AccountId, Balance]>;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: ITuple<[AccountId, Balance]>;
    readonly isKicked: boolean;
    readonly asKicked: ITuple<[AccountId, AccountId]>;
    readonly isStakingElectionFailed: boolean;
    readonly isChilled: boolean;
    readonly asChilled: AccountId;
    readonly isPayoutStarted: boolean;
    readonly asPayoutStarted: ITuple<[EraIndex, AccountId]>;
    readonly type: 'EraPaid' | 'Rewarded' | 'Slashed' | 'OldSlashingReportDiscarded' | 'StakersElected' | 'Bonded' | 'Unbonded' | 'Withdrawn' | 'Kicked' | 'StakingElectionFailed' | 'Chilled' | 'PayoutStarted';
  }

  /** @name PalletSessionCall (356) */
  export interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: Keys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name PalletSessionError (357) */
  export interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name PalletSessionEvent (358) */
  export interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: SessionIndex;
    readonly type: 'NewSession';
  }

  /** @name PalletOffencesEvent (365) */
  export interface PalletOffencesEvent extends Enum {
    readonly isOffence: boolean;
    readonly asOffence: ITuple<[Kind, OpaqueTimeSlot]>;
    readonly type: 'Offence';
  }

  /** @name PalletImOnlineCall (372) */
  export interface PalletImOnlineCall extends Enum {
    readonly isHeartbeat: boolean;
    readonly asHeartbeat: {
      readonly heartbeat: Heartbeat;
      readonly signature: Signature;
    } & Struct;
    readonly type: 'Heartbeat';
  }

  /** @name PalletImOnlineError (373) */
  export interface PalletImOnlineError extends Enum {
    readonly isInvalidKey: boolean;
    readonly isDuplicatedHeartbeat: boolean;
    readonly type: 'InvalidKey' | 'DuplicatedHeartbeat';
  }

  /** @name PalletImOnlineEvent (376) */
  export interface PalletImOnlineEvent extends Enum {
    readonly isHeartbeatReceived: boolean;
    readonly asHeartbeatReceived: AuthorityId;
    readonly isAllGood: boolean;
    readonly isSomeOffline: boolean;
    readonly asSomeOffline: Vec<IdentificationTuple>;
    readonly type: 'HeartbeatReceived' | 'AllGood' | 'SomeOffline';
  }

} // declare module
