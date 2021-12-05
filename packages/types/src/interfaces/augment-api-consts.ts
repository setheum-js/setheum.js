// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { EvmAddress } from '@setheum.js/types/interfaces/evm';
import type { CurrencyId } from '@setheum.js/types/interfaces/primitives';
import type { AccountId, Balance, BalanceOf, BlockNumber, PalletId, Permill, TransactionPriority } from '@setheum.js/types/interfaces/runtime';
import type { ExchangeRate, Rate, Ratio } from '@setheum.js/types/interfaces/support';
import type { Price } from '@open-web3/orml-types/interfaces/traits';
import type { ApiTypes } from '@polkadot/api/types';
import type { Vec, u32, u64 } from '@polkadot/types';
import type { Codec, ITuple } from '@polkadot/types/types';

declare module '@polkadot/api/types/consts' {
  export interface AugmentedConsts<ApiType> {
    auctionManager: {
      /**
       * When the total duration of the auction exceeds this soft cap, push
       * the auction to end more faster
       **/
      auctionDurationSoftCap: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The extended time for the auction to end after each successful bid
       **/
      auctionTimeToClose: BlockNumber & AugmentedConst<ApiType>;
      /**
       * The default parital path list for DEX to directly take auction,
       * Note: the path is parital, the whole swap path is collateral currency id concat
       * the partial path. And the list is sorted, DEX try to take auction by order.
       **/
      defaultSwapParitalPathList: Vec<Vec<CurrencyId>> & AugmentedConst<ApiType>;
      /**
       * The stable currency id
       **/
      getSetUSDId: CurrencyId & AugmentedConst<ApiType>;
      /**
       * The minimum increment size of each bid compared to the previous one
       **/
      minimumIncrementSize: Rate & AugmentedConst<ApiType>;
      /**
       * A configuration for base priority of unsigned transactions.
       * 
       * This is exposed so that it can be tuned for particular runtime, when
       * multiple modules send unsigned transactions.
       **/
      unsignedPriority: TransactionPriority & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    cdpEngine: {
      /**
       * The list of valid collateral currency types
       **/
      collateralCurrencyIds: Vec<CurrencyId> & AugmentedConst<ApiType>;
      /**
       * The default liquidation ratio for all collateral types of CDP
       **/
      defaultLiquidationRatio: Ratio & AugmentedConst<ApiType>;
      /**
       * The default debit exchange rate for all collateral types
       **/
      defaultDebitExchangeRate: ExchangeRate & AugmentedConst<ApiType>;
      /**
       * The default liquidation penalty rate when liquidate unsafe CDP
       **/
      defaultLiquidationPenalty: Rate & AugmentedConst<ApiType>;
      /**
       * The default parital path list for CDP engine to swap collateral to stable,
       * Note: the path is parital, the whole swap path is collateral currency id concat
       * the partial path. And the list is sorted, CDP engine trys to swap stable by order.
       **/
      defaultSwapParitalPathList: Vec<Vec<CurrencyId>> & AugmentedConst<ApiType>;
      /**
       * Stablecoin currency id
       **/
      getSetUSDId: CurrencyId & AugmentedConst<ApiType>;
      /**
       * When swap with DEX, the acceptable max slippage for the price from oracle.
       **/
      maxSwapSlippageCompareToOracle: Ratio & AugmentedConst<ApiType>;
      /**
       * The minimum debit value to avoid debit dust
       **/
      minimumDebitValue: Balance & AugmentedConst<ApiType>;
      /**
       * A configuration for base priority of unsigned transactions.
       * 
       * This is exposed so that it can be tuned for particular runtime, when
       * multiple modules send unsigned transactions.
       **/
      unsignedPriority: TransactionPriority & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    cdpTreasury: {
      /**
       * Stablecoin currency id
       **/
       getSetUSDId: CurrencyId & AugmentedConst<ApiType>;
      /**
       * The cap of lots number when create collateral auction on a
       * liquidation or to create debit/surplus auction on block end.
       * If set to 0, does not work.
       **/
      maxAuctionsCount: u32 & AugmentedConst<ApiType>;
      /**
       * The CDP treasury's module id, keep surplus and collateral assets
       * from liquidation.
       **/
      palletId: PalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    currencies: {
      /**
       * The native currency id
       **/
      getNativeCurrencyId: CurrencyId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    dex: {
      /**
       * Trading fee rate
       * The first item of the tuple is the numerator of the fee rate, second
       * item is the denominator, fee_rate = numerator / denominator,
       * use (u32, u32) over `Rate` type to minimize internal division
       * operation. ExchangeFee and EFE.
       **/
      getExchangeFee: ITuple<[u32, u32]> & AugmentedConst<ApiType>;
      getStableCurrencyExchangeFee: ITuple<[u32, u32]> & AugmentedConst<ApiType>;
      /**
       * The DEX's module id, keep all assets in DEX.
       **/
      palletId: PalletId & AugmentedConst<ApiType>;
      /**
       * The limit for length of trading path
       **/
      tradingPathLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    emergencyShutdown: {
      /**
       * The list of valid collateral currency types
       **/
      collateralCurrencyIds: Vec<CurrencyId> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    evm: {
      /**
       * Chain ID of EVM.
       **/
      chainId: u64 & AugmentedConst<ApiType>;
      /**
       * The fee for deploying the contract.
       **/
      deploymentFee: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Deposit for the developer.
       **/
      developerDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The EVM address for creating system contract.
       **/
      networkContractSource: EvmAddress & AugmentedConst<ApiType>;
      /**
       * Charge extra bytes for creating a contract, would be reserved until
       * the contract deleted.
       **/
      newContractExtraBytes: u32 & AugmentedConst<ApiType>;
      /**
       * Storage required for per byte.
       **/
      storageDepositPerByte: BalanceOf & AugmentedConst<ApiType>;
      treasuryAccount: AccountId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    setmint: {
      /**
       * Reserved amount per authorization.
       **/
      depositPerAuthorization: Balance & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    loans: {
      /**
       * The loan's module id, keep all collaterals of CDPs.
       **/
      palletId: PalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    nft: {
      /**
       * The minimum balance to create class
       **/
      createClassDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * The minimum balance to create token
       **/
      createTokenDeposit: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Deposit required for per byte.
       **/
      dataDepositPerByte: BalanceOf & AugmentedConst<ApiType>;
      /**
       * Maximum number of bytes in attributes
       **/
      maxAttributesBytes: u32 & AugmentedConst<ApiType>;
      /**
       * The NFT's module id
       **/
      palletId: PalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    prices: {
      /**
       * The stable currency id, it should be SETUSD in Setheum.
       **/
      getSetUSDId: CurrencyId & AugmentedConst<ApiType>;
      /**
       * The stable currency id, it should be SETR in Setheum.
       **/
      setterCurrencyId: CurrencyId & AugmentedConst<ApiType>;
      /**
       * The fixed prices of stable currency, it should be 1 USD in Setheum.
       **/
      setUSDFixedPrice: Price & AugmentedConst<ApiType>;
      /**
       * The fixed prices of Setter stable currency, it should be 2 USD in Setheum.
       **/
      setterFixedPrice: Price & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    tokens: {
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    serpTreasury: {
       /**
        * The list of valid stable currency types
        **/
       stableCurrencyIds: Vec<CurrencyId> & AugmentedConst<ApiType>;
       /**
        * The inflation period for stable currencies
        **/
       stableCurrencyInflationPeriod: BlockNumber & AugmentedConst<ApiType>;
       /**
        * The minimum supply for stable currencies
        **/
        getStableCurrencyMinimumSupply: Balance & AugmentedConst<ApiType>;
       /**
       * Native (SETM) currency id
       **/
       getNativeCurrencyId: CurrencyId & AugmentedConst<ApiType>;
       /**
       * The Serp (DNAR) currency id
       **/
       getSerpCurrencyId: CurrencyId & AugmentedConst<ApiType>;
       /**
       * The Dinar (DNAR) currency id
       **/
       getDinarCurrencyId: CurrencyId & AugmentedConst<ApiType>;
       /**
       * Setter (SETR) currency id
       **/
       setterCurrencyId: CurrencyId & AugmentedConst<ApiType>;
       /**
       * The SetUSD currency id, it should be SETUSD in Setheum.
       **/
       getSetUSDId: CurrencyId & AugmentedConst<ApiType>;
       /**
        * The vault account to keep the Cashdrops for claiming.
        **/
       cashDropPoolAccountId: AccountId & AugmentedConst<ApiType>;
       /**
        * CDP-Treasury account for processing serplus funds 
        **/
       cdpTreasuryAccountId: AccountId & AugmentedConst<ApiType>;
       /**
        * SerpUp pool/account for receiving Treasury funds
        **/
       setheumTreasuryAccountId: AccountId & AugmentedConst<ApiType>;
       /**
        * The default path list for SertTreasury to swap on DEX for buybacks
        **/
       defaultSwapPathList: Vec<Vec<CurrencyId>> & AugmentedConst<ApiType>;
       /**
        * When swap with DEX, the acceptable max slippage for the price from oracle.
        **/
       maxSwapSlippageCompareToOracle: Ratio & AugmentedConst<ApiType>;
       /**
        * The limit for length of trading path
        **/
       tradingPathLimit: u32 & AugmentedConst<ApiType>;
       /**
       * The minimum  cashdrop claimable transfer for SETR
       **/
       setterMinimumClaimableTransferAmounts: Balance & AugmentedConst<ApiType>;
      /**
       * The maximum  cashdrop claimable transfer for SETR
       **/
       setterMaximumClaimableTransferAmounts: Balance & AugmentedConst<ApiType>;
      /**
       * The minimum  cashdrop claimable transfer for SETUSD
       **/
       setDollarMinimumClaimableTransferAmounts: Balance & AugmentedConst<ApiType>;
      /**
       * The maximum  cashdrop claimable transfer for SETUSD
       **/
       setDollarMaximumClaimableTransferAmounts: Balance & AugmentedConst<ApiType>;
      /**
       * The SERP treasury's module id, keep surplus and collateral assets
       * from liquidation.
       **/
      palletId: PalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  }

  export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
    [key: string]: QueryableModuleConsts;
  }
}
