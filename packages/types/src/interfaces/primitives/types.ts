// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { EvmAddress } from '@setheum.js/types/interfaces/evm';
import type { Enum, i128, u32, u8 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';

/** @name SetheumDataProviderId */
export interface SetheumDataProviderId extends Enum {
  readonly isAggregated: boolean;
  readonly isSetheum: boolean;
}

/** @name AirDropCurrencyId */
export interface AirDropCurrencyId extends Enum {
  readonly isSetr: boolean;
  readonly isSetusd: boolean;
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
  readonly isPublicFund: boolean;
}

/** @name CurrencyId */
export interface CurrencyId extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isDexShare: boolean;
  readonly asDexShare: ITuple<[DexShare, DexShare]>;
  readonly isErc20: boolean;
  readonly asErc20: EvmAddress;
}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends CurrencyId {}

/** @name DexShare */
export interface DexShare extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isErc20: boolean;
  readonly asErc20: EvmAddress;
}

/** @name OrmlCurrencyId */
export interface OrmlCurrencyId extends CurrencyId {}

/** @name TokenSymbol */
export interface TokenSymbol extends Enum {
  readonly isSetm: boolean;
  readonly isSerp: boolean;
  readonly isDnar: boolean;
  readonly isSetr: boolean;
  readonly isSetusd: boolean;
  readonly isRenbtc: boolean;
}

/** @name TradingPair */
export interface TradingPair extends ITuple<[CurrencyId, CurrencyId]> {}

export type PHANTOM_PRIMITIVES = 'primitives';
