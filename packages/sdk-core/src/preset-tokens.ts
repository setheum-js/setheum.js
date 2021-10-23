interface Token {
  symbol: string;
  display: string;
  decimal: number;
}

type PresetTokens = Record<string, Record<string, Token>>;

export default {
  setheum: {
    SETM: {
      symbol: 'SETM',
      display: 'SETM',
      decimal: 12
    },
    SERP: {
      symbol: 'SERP',
      display: 'SERP',
      decimal: 12
    },
    DNAR: {
      symbol: 'DNAR',
      display: 'DNAR',
      decimal: 12
    },
    SETR: {
      symbol: 'SETR',
      display: 'SETR',
      decimal: 12
    },
    SETUSD: {
      symbol: 'SETUSD',
      display: 'SETUSD',
      decimal: 12
    },
  }
} as PresetTokens;
