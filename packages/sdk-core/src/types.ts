import { CurrencyId } from '@setheum-js/types/interfaces';
import { ApiPromise, ApiRx } from '@polkadot/api';
import { AccountId } from '@polkadot/types/interfaces';
import { Codec, Observable } from '@polkadot/types/types';
import { Token } from './token';

export type CHAIN = 'setheum' | unknown;

export type AnyApi = ApiPromise | ApiRx;

export type ObOrPromiseResult<T extends AnyApi, R extends unknown> = T extends ApiRx ? Observable<R> : Promise<R>;

export type MaybeCurrency = string | CurrencyId | Token | Codec | [string, string];

export type MaybeAccount = string | AccountId | Codec;
