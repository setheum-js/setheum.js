import { Observable } from 'rxjs';
import { FixedPointNumber as FN, Token } from '@setheum.js/sdk-core';

export interface PriceProvider {
  subscribe(currency: Token): Observable<FN>;
  query(currency: Token): Promise<FN>;
}

export enum PriceProviderType {
  'AGGREGATE',
  'DEX',     // query price from dex
  'MARKET', // query price form market
  'ORACLE', // query oracle feed prices
}
