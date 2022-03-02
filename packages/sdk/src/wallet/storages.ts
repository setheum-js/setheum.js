import { AnyApi, Token, forceToCurrencyName } from '@setheum.js/sdk-core';
import { SetheumAssetMetadata, TradingPair, TradingPairStatus } from '@setheum.js/types/interfaces';
import { Option, StorageKey, u16, U128 } from '@polkadot/types';
import { AccountInfo, Balance } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { OrmlAccountData } from '@open-web3/orml-types/interfaces';
import { Storage } from '../utils/storage';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createStorages = (api: AnyApi) => {
  return {
    assetMetadatas: () =>
      Storage.create<[StorageKey<u16[]>, Option<SetheumAssetMetadata>][]>({
        api: api,
        path: 'query.assetRegistry.assetMetadatas.entries',
        params: []
      }),
    tradingPairs: () =>
      Storage.create<[StorageKey<[TradingPair]>, TradingPairStatus][]>({
        api: api,
        path: 'query.dex.tradingPairStatuses.entries',
        params: []
      }),
    nativeBalance: (address: string) =>
      Storage.create<AccountInfo>({
        api: api,
        path: 'query.system.account',
        params: [address]
      }),
    nonNativeBalance: (token: Token, address: string) =>
      Storage.create<OrmlAccountData>({
        api: api,
        path: 'query.tokens.accounts',
        params: [address, token.toChainData()]
      }),
    issuance: (token: Token) => {
      const nativeTokenName = api.registry.chainTokens[0];

      const isNativeToken = forceToCurrencyName(nativeTokenName) === forceToCurrencyName(token);

      return Storage.create<Balance>({
        api: api,
        path: isNativeToken ? 'query.balances.totalIssuance' : 'query.tokens.totalIssuance',
        params: isNativeToken ? [] : [token.toChainData()]
      });
    },
    liquidityPool: (dexShareToken: Token) => {
      return Storage.create<ITuple<[U128, U128]>>({
        api: api,
        path: 'query.dex.liquidityPool',
        params: [dexShareToken.toTradingPair(api)]
      });
    }
  };
};
