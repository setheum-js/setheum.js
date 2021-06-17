// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Vec, u32 } from '@polkadot/types';
import type { Codec, ITuple } from '@polkadot/types/types';
import type { CurrencyId } from '@setheum-js/types/interfaces/primitives';
import type { AccountId, Balance, BlockNumber, PalletId, TransactionPriority } from '@setheum-js/types/interfaces/runtime';
import type { ExchangeRate, Rate, Ratio } from '@setheum-js/types/interfaces/support';
import type { Price } from '@open-web3/orml-types/interfaces/traits';
import type { EraIndex } from '@polkadot/types/interfaces/staking';
import type { ApiTypes } from '@polkadot/api/types';

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
      getStableCurrencyId: CurrencyId & AugmentedConst<ApiType>;
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
       * The default debit exchange rate for all collateral types
       **/
      defaultDebitExchangeRate: ExchangeRate & AugmentedConst<ApiType>;
      /**
       * The default liquidation penalty rate when liquidate unsafe CDP
       **/
      defaultLiquidationPenalty: Rate & AugmentedConst<ApiType>;
      /**
       * The default liquidation ratio for all collateral types of CDP
       **/
      defaultLiquidationRatio: Ratio & AugmentedConst<ApiType>;
      /**
       * Stablecoin currency id
       **/
      getStableCurrencyId: CurrencyId & AugmentedConst<ApiType>;
      /**
       * The max slippage allowed when liquidate an unsafe CDP by swap with
       * DEX
       **/
      maxSlippageSwapWithDex: Ratio & AugmentedConst<ApiType>;
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
      getStableCurrencyId: CurrencyId & AugmentedConst<ApiType>;
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
      treasuryAccount: AccountId & AugmentedConst<ApiType>;
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
       * operation.
       **/
      getExchangeFee: ITuple<[u32, u32]> & AugmentedConst<ApiType>;
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
    prices: {
      /**
       * The liquid currency id, it should be LDOT in Setheum.
       **/
      getLiquidCurrencyId: CurrencyId & AugmentedConst<ApiType>;
      /**
       * The stable currency id, it should be USDJ in Setheum.
       **/
      getStableCurrencyId: CurrencyId & AugmentedConst<ApiType>;
      /**
       * The staking currency id, it should be DOT in Setheum.
       **/
      getStakingCurrencyId: CurrencyId & AugmentedConst<ApiType>;
      /**
       * The fixed prices of stable currency, it should be 1 USD in Setheum.
       **/
      stableCurrencyFixedPrice: Price & AugmentedConst<ApiType>;
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
