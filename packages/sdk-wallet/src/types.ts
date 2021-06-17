import { Token, FixedPointNumber } from '@setheum-js/sdk-core';

export interface TokenProvider {
  getAllTokens: () => Token[];
}

export interface PriceData {
  token: Token;
  price: FixedPointNumber;
}

export type PriceDataWithTimestamp = PriceData & { timestamp: Date };
