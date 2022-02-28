// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, i128, u32, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { EvmAddress } from '@setheum.js/types/interfaces/evm';
import type { Balance } from '@setheum.js/types/interfaces/runtime';

/** @name AirDropCurrencyId */
export interface AirDropCurrencyId extends Enum {
  readonly isSetr: boolean;
  readonly isSetusd: boolean;
  readonly isSetm: boolean;
  readonly isSerp: boolean;
  readonly isDnar: boolean;
  readonly isHelp: boolean;
  readonly type: 'Setr' | 'Setusd' | 'Setm' | 'Serp' | 'Dnar' | 'Help';
}

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
  readonly isTreasury: boolean;
  readonly type: 'Root' | 'Treasury';
}

/** @name CurrencyId */
export interface CurrencyId extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isDexShare: boolean;
  readonly asDexShare: ITuple<[DexShare, DexShare]>;
  readonly isErc20: boolean;
  readonly asErc20: EvmAddress;
  readonly type: 'Token' | 'DexShare' | 'Erc20';
}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends CurrencyId {}

/** @name DexShare */
export interface DexShare extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isErc20: boolean;
  readonly asErc20: EvmAddress;
  readonly type: 'Token' | 'Erc20';
}

/** @name OrmlCurrencyId */
export interface OrmlCurrencyId extends CurrencyId {}

/** @name SerpStableCurrencyId */
export interface SerpStableCurrencyId extends Enum {
  readonly isSetr: boolean;
  readonly isSetusd: boolean;
  readonly type: 'Setr' | 'Setusd';
}

/** @name SetheumAssetMetadata */
export interface SetheumAssetMetadata extends Struct {
  readonly name: Bytes;
  readonly symbol: Bytes;
  readonly decimals: u8;
  readonly minimalBalance: Balance;
}

/** @name SetheumDataProviderId */
export interface SetheumDataProviderId extends Enum {
  readonly isAggregated: boolean;
  readonly isSetheum: boolean;
  readonly type: 'Aggregated' | 'Setheum';
}

/** @name TokenInfo */
export interface TokenInfo extends Struct {
  readonly currency_id: Option<u8>;
  readonly name: Option<u8>;
  readonly symbol: Option<u8>;
  readonly decimals: Option<u8>;
}

/** @name TokenSymbol */
export interface TokenSymbol extends Enum {
  readonly isSetm: boolean;
  readonly isSerp: boolean;
  readonly isDnar: boolean;
  readonly isHelp: boolean;
  readonly isSetr: boolean;
  readonly isSetusd: boolean;
  readonly type: 'Setm' | 'Serp' | 'Dnar' | 'Help' | 'Setr' | 'Setusd';
}

/** @name TradingPair */
export interface TradingPair extends ITuple<[CurrencyId, CurrencyId]> {}

export type PHANTOM_PRIMITIVES = 'primitives';
