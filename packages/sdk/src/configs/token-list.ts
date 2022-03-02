import { FixedPointNumber } from '@setheum.js/sdk-core';
import { ChainType } from '../types';
import { getChainType } from '../utils/get-chain-type';

interface TokenConfig {
  readonly decimals: number;
  readonly symbol: string;
  readonly display: string;
  readonly ed: FixedPointNumber;
}

type TokenMap = Readonly<Record<string, TokenConfig>>;

interface TokenListConfig {
  readonly [ChainType.SETHEUM]: TokenMap;
}

function createTokenConfig(symbol: string, display: string, decimals: number, ed: FixedPointNumber) {
  return {
    decimals,
    symbol,
    display,
    ed
  };
}

const DEFAULT_TOKEN_LIST: TokenListConfig = {
  [ChainType.SETHEUM]: {
    SETM: createTokenConfig('SETM', 'SETM', 18, new FixedPointNumber(0.1, 18)),
    SERP: createTokenConfig('SERP', 'SERP', 18, new FixedPointNumber(0.1, 18)),
    DNAR: createTokenConfig('DNAR', 'DNAR', 18, new FixedPointNumber(0.1, 18)),
    HELP: createTokenConfig('HELP', 'HELP', 18, new FixedPointNumber(0.1, 18)),
    SETR: createTokenConfig('SETR', 'SETR', 18, new FixedPointNumber(0.1, 18)),
    SETUSD: createTokenConfig('SETUSD', 'setUSD', 18, new FixedPointNumber(0.1, 18)),
  }
};

class TokenList {
  public getToken(name: string, chain: string) {
    const chainType = getChainType(chain);

    // unsopport chain
    if (!chainType) return;

    const data = DEFAULT_TOKEN_LIST?.[chainType]?.[name];

    return data;
  }
}

export default new TokenList();
