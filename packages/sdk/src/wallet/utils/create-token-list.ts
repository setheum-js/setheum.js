import {
  Token,
  TokenType,
  FixedPointNumber as FN,
  forceToCurrencyName,
  createERC20Name
} from '@setheum.js/sdk-core';
import { TradingPair, TradingPairStatus, SetheumAssetMetadata } from '@setheum.js/types/interfaces';
import { Option, StorageKey, u16 } from '@polkadot/types';
import { hexToString } from '@polkadot/util';
import { TokenRecord } from '../type';

export function createTokenList(
  basicTokens: TokenRecord,
  tradingPairs: [StorageKey<[TradingPair]>, TradingPairStatus][],
  erc20: [StorageKey<u16[]>, Option<SetheumAssetMetadata>][]
): TokenRecord {
  // tokens list temp
  let temp: TokenRecord = { ...basicTokens };

  const erc20Tokens = Object.fromEntries(
    erc20.map((item) => {
      const key = item[0].args[0].toString();
      const value = item[1].unwrapOrDefault();
      const name = createERC20Name(key);
      const decimals = value.decimals.toNumber();

      return [
        name,
        Token.create(name, {
          type: TokenType.ERC20,
          display: hexToString(value.name.toHex()),
          symbol: hexToString(value.symbol.toHex()),
          decimals,
          ed: FN.fromInner(value.minimalBalance.toString(), decimals)
        })
      ];
    })
  );

  // insert foreign tokens to temp
  temp = { ...temp, ...erc20Tokens };

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

        const token = Token.fromTokens(token1, token2, {
          display: `LP ${token1.display}-${token2.display}`
        });

        return [token.name, token];
      })
  );

  // insert dex share tokens to temp
  temp = { ...temp, ...dexShareTokens };

  return temp;
}
