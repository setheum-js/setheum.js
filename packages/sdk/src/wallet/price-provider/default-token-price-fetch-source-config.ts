import { ChainType } from '../../types';
import { TokenPriceFetchSource } from '../type';
// import { PriceProviderType } from './types';

export const defaultTokenPriceFetchSource: TokenPriceFetchSource = {
  [ChainType.SETHEUM]: {
    // WBTC: PriceProviderType.MARKET,
    // WETH: PriceProviderType.MARKET,
    // DOT: PriceProviderType.MARKET
  }
};
