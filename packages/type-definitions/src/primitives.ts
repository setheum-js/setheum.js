export default {
  rpc: {},
  types: {
    Amount: 'i128',
    AmountOf: 'Amount',
    AuctionId: 'u32',
    AuctionIdOf: 'AuctionId',
    TokenSymbol: {
      _enum: {
        SETM: 0,
        SERP: 1,
        DNAR: 2,
        SETR: 3,
        SETUSD: 4,
        // 121 - 255: External tokens (e.g. bridged)
        RENBTC: 121,
      }
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
    CurrencyIdOf: 'CurrencyId',
    AirDropCurrencyId: {
      _enum: ['SETR', 'SETUSD']
    },
    AuthoritysOriginId: {
      _enum: ['Root', 'Treasury', 'PublicFund']
    },
    SetheumDataProviderId: {
      _enum: ['Aggregated', 'Setheum']
    },
    TradingPair: '(CurrencyId,  CurrencyId)',
    OrmlCurrencyId: 'CurrencyId',
  },
  typesAlias: {
    oracle: {
      DataProviderId: 'SetheumDataProviderId'
    },
  }
};
