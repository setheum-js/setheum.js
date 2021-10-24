// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { CurrencyId } from '@setheum.js/types/interfaces/primitives';
import type { AccountId, Balance, BalanceOf, BlockNumber, ModuleId, Permill, TransactionPriority } from '@setheum.js/types/interfaces/runtime';
import type { ExchangeRate, Rate, Ratio } from '@setheum.js/types/interfaces/support';
import type { Price } from '@open-web3/orml-types/interfaces/traits';
import type { ApiTypes } from '@polkadot/api/types';
import type { Vec, u32 } from '@polkadot/types';
import type { Codec } from '@polkadot/types/types';

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
       * The stable currency id
       **/
      getSetUSDCurrencyId: CurrencyId & AugmentedConst<ApiType>;
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
       * The minimum debit value to avoid debit dust
       **/
      minimumDebitValue: Balance & AugmentedConst<ApiType>;
      /**
       * Stablecoin currency id
       **/
      getSetUSDCurrencyId: CurrencyId & AugmentedConst<ApiType>;
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
       getSetUSDCurrencyId: CurrencyId & AugmentedConst<ApiType>;
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
      moduleId: ModuleId & AugmentedConst<ApiType>;
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
       * The vault account to keep the Cashdrops for claiming.
       **/
       buyBackPoolAccountId: AccountId & AugmentedConst<ApiType>;
      /**
       * The limit for length of trading path
       **/
      tradingPathLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The DEX's module id, keep all assets in DEX.
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    evm: {
      /**
       * Charge extra bytes for creating a contract, would be reserved until
       * the contract deleted.
       **/
      newContractExtraBytes: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    loans: {
      /**
       * The loan's module id, keep all collaterals of CDPs.
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
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
       * The NFT's module id
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    prices: {
      /**
       * The stable currency id, it should be SETUSD in Setheum.
       **/
      getSetUSDCurrencyId: CurrencyId & AugmentedConst<ApiType>;
      /**
       * The stable currency id, it should be SETR in Setheum.
       **/
      setterCurrencyId: CurrencyId & AugmentedConst<ApiType>;
      /**
       * The fixed prices of stable currency, it should be 1 USD in Setheum.
       **/
      setUSDFixedPrice: Price & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    serpTreasury: {
      /**
       * Native (SETM) currency Stablecoin currency id
       **/
       getNativeCurrencyId: CurrencyId & AugmentedConst<ApiType>;
      /**
      /**
       * The Dinar (DNAR) currency Stablecoin currency id
       **/
       getDinarCurrencyId: CurrencyId & AugmentedConst<ApiType>;
       /**
      /**
       * Setter (SETR) currency Stablecoin currency id
       **/
       setterCurrencyId: CurrencyId & AugmentedConst<ApiType>;
       /**
      /**
       * The SetUSD currency id, it should be SETUSD in Setheum.
       **/
       getSetUSDCurrencyId: CurrencyId & AugmentedConst<ApiType>;
       /**
        * The vault account to keep the Cashdrops for claiming.
        **/
       cashDropPoolAccountId: AccountId & AugmentedConst<ApiType>;
        /**
         * The vault account to keep the Cashdrops for claiming.
         **/
       charityFundAccountId: AccountId & AugmentedConst<ApiType>;
       /**
        * The limit for length of trading path
        **/
       tradingPathLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The SERP treasury's module id, keep surplus and collateral assets
       * from liquidation.
       **/
      moduleId: ModuleId & AugmentedConst<ApiType>;
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
  }

  export interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
    [key: string]: QueryableModuleConsts;
  }
}
