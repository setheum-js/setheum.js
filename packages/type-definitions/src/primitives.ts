export default {
  rpc: {},
  types: {
    Amount: 'i128',
    AmountOf: 'Amount',
    AuctionId: 'u32',
    AuctionIdOf: 'AuctionId',
    AuthoritysOriginId: {
      _enum: ['Root', 'Treasury']
    },
    DexShare: {
      _enum: {
        Token: 'TokenSymbol',
        Erc20: 'EvmAddress'
      }
    },
    CurrencyId: {
      _enum: {
        Token: 'TokenSymbol',
        DEXShare: '(DexShare, DexShare)',
        ERC20: 'EvmAddress',
      }
    },
    TradingPair: '(CurrencyId,  CurrencyId)',
    CurrencyIdOf: 'CurrencyId',
    OrmlCurrencyId: 'CurrencyId',
    TokenSymbol: {
      _enum: {
        SETM: 0,
        SERP: 1,
        DNAR: 2,
        HELP: 3,
        SETR: 4,
        SETUSD: 5,
      }
    },
    TokenInfo: {
      currency_id: 'Option<u8>',
      name: 'Option<u8>',
      symbol: 'Option<u8>',
      decimals: 'Option<u8>'
    },
    SerpStableCurrencyId: {
      _enum: ['SETR', 'SETUSD']
    },
    SetheumAssetMetadata: {
      name: 'Vec<u8>',
      symbol: 'Vec<u8>',
      decimals: 'u8',
      minimalBalance: 'Balance'
    },
    SetheumDataProviderId: {
      _enum: ['Aggregated', 'Setheum']
    },
  },
  typesAlias: {
    oracle: {
      DataProviderId: 'SetheumDataProviderId'
    },
  }
};
