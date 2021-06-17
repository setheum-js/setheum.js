// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, U8aFixed, i128, u128, u32 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';

/** @name Amount */
export interface Amount extends i128 {}

/** @name AmountOf */
export interface AmountOf extends Amount {}

/** @name AuctionId */
export interface AuctionId extends u32 {}

/** @name AuctionIdOf */
export interface AuctionIdOf extends AuctionId {}

/** @name AuthoritysOriginId */
export interface AuthoritysOriginId extends Enum {
  readonly isRoot: boolean;
  readonly isSetheumTreasury: boolean;
  // readonly isExchangeTreasury: boolean;
  readonly isSif: boolean;
}

/** @name CurrencyId */
export interface CurrencyId extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isDexShare: boolean;
  readonly asDexShare: ITuple<[DexShare, DexShare]>;
  // readonly isErc20: boolean;
  // readonly asErc20: EvmAddress;
  readonly isChainSafe: boolean;
  readonly asChainSafe: U8aFixed;
}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends CurrencyId {}

/** @name DataProviderId */
export interface DataProviderId extends Enum {
  readonly isAggregated: boolean;
  readonly isSetheum: boolean;
  readonly isBand: boolean;
}

/** @name DexShare */
export interface DexShare extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  // readonly isErc20: boolean;
  // readonly asErc20: EvmAddress;
}

/** @name NFTBalance */
export interface NFTBalance extends u128 {}

/** @name Share */
export interface Share extends u128 {}

/** @name TokenSymbol */
export interface TokenSymbol extends Enum {
  readonly isDnar: boolean;
  readonly isSett: boolean;
  readonly isJusd: boolean;
  // readonly isRenbtc: boolean;
  readonly isNeom: boolean;
  readonly isNsett: boolean;
  readonly isUsdj: boolean;
}

/** @name TradingPair */
export interface TradingPair extends ITuple<[CurrencyId, CurrencyId]> {}

export type PHANTOM_PRIMITIVES = 'primitives';
