import { CurrencyId } from '@setheum.js/types/interfaces';
import { ApiPromise, ApiRx } from '@polkadot/api';
import { AccountId } from '@polkadot/types/interfaces';
import { SetheumPrimitivesCurrencyCurrencyId } from '@polkadot/types/lookup';
import { Codec, Observable } from '@polkadot/types/types';
import { Token } from './token';

export type CHAIN = 'setheum' | unknown;

export type AnyApi = ApiPromise | ApiRx;

export type ObOrPromiseResult<T extends AnyApi, R extends unknown> = T extends ApiRx ? Observable<R> : Promise<R>;

export type MaybeCurrency = number | string | CurrencyId | Token | Codec | [string, string];

export type MaybeAccount = string | AccountId | Codec;

export enum TokenType {
  'BASIC',
  'DEX_SHARE',
  'ERC20'
}

/**
 * CurrencyObject is an object which can as parameters in api.createType('CurrencyId', ...).
 * we can simple pass CurrencyObject to any call as CurrencyId type
 */
export type CurrencyObject =
  | { Token: string }
  | { DexShare: [CurrencyObject, CurrencyObject] }
  | { Erc20: string };

export type CombinedCurrencyId = CurrencyId | SetheumPrimitivesCurrencyCurrencyId;
