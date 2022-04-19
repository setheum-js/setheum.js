import { FixedPointNumber as FN, Token } from '@setheum.js/sdk-core';
import { PriceProvider, PriceProviderType } from './price-provider/types';
import { ChainType } from '../types';
import { WsProvider } from '@polkadot/api';

export type TokenRecord = Record<string, Token>;

export type PriceProviders = Partial<{
  [k in PriceProviderType]: PriceProvider;
}>;

export interface WalletConsts {
  readonly runtimeChain: string;
  readonly nativeCurrency: string;
}

export interface WalletConfigs {
  supportSERP?: Boolean;
  supportDNAR?: Boolean;
  supportHELP?: Boolean;
  supportSETR?: Boolean;
  supportSETUSD?: boolean;
  // overview price providers if need
  priceProviders?: PriceProviders;
  // ws provider for evm adapter
  wsProvider?: WsProvider;
}

export interface BalanceData {
  token: Token;
  free: FN;
  locked: FN;
  reserved: FN;
  available: FN;
}

export interface TransferConfig {
  ed: FN;
}

export interface PresetTokens {
  nativeToken: Token;
  serpToken?: Token;
  dnarToken?: Token;
  helpToken?: Token;
  setrToken?: Token;
  setusdToken?: Token;
}

export type TokenPriceFetchSource = {
  [c in ChainType]: {
    [t in string]: PriceProviderType;
  };
};
