export default {
  rpc: {},
  types: {
    PoolId: {
      _enum: {
        LoansIncentive: 'CurrencyId',
        DexIncentive: 'CurrencyId',
        // DexPremium et al
        DexBonus: 'CurrencyId',
      }
    }
  }
};
