import {
  Token,
  forceToCurrencyName
} from '@setheum.js/sdk-core';
import { TradingPair, TradingPairStatus } from '@setheum.js/types/interfaces';
import { StorageKey } from '@polkadot/types';
// import { hexToString } from '@polkadot/util';
import { TokenRecord } from '../type';

export function createTokenList(
  basicTokens: TokenRecord,
  tradingPairs: [StorageKey<[TradingPair]>, TradingPairStatus][]
): TokenRecord {
  // tokens list temp
  let temp: TokenRecord = { ...basicTokens };

  // TODO: need support stable coin assets & erc20
  // handle dex share at latest
  const dexShareTokens = Object.fromEntries(
    tradingPairs
      .filter((item) => [item[1].isEnabled])
      .map((item) => {
        const pair = item[0].args[0];
        const token1Name = forceToCurrencyName(pair[0]);
        const token2Name = forceToCurrencyName(pair[1]);
        const token1 = temp[token1Name];
        const token2 = temp[token2Name];

        const token = Token.fromTokens(token1, token2);

        return [token.name, token];
      })
  );

  // insert dex share tokens to temp
  temp = { ...temp, ...dexShareTokens };

  return temp;
}
