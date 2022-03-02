import { FixedPointNumber, MaybeCurrency, Token } from '@setheum.js/sdk-core';
import { Observable } from 'rxjs';
import { PriceProviderType } from '../wallet/price-provider/types';

export interface TokenProvider {
  subscribeToken(token: MaybeCurrency): Observable<Token>;
  subscribePrice?: (token: MaybeCurrency, type?: PriceProviderType) => Observable<FixedPointNumber>;
}
