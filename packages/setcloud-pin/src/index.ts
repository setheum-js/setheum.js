import {ApiPromise} from '@polkadot/api';
import {WsProvider} from '@polkadot/rpc-provider';
import {options} from '@setheum.js/api';
import {sendTx} from './util';

export default class CrustPinner {
  readonly seeds: string;
  readonly setheumApi: ApiPromise;

  constructor(s: string, chainAddr = 'wss://api.setheum.xyz') {
    this.seeds = s;
    this.setheumApi = new ApiPromise(options({
      provider: new WsProvider(chainAddr),
    }));
  }

  async pin(cid: string): Promise<boolean> {
    try {
      // 1. Check Api is ready
      await this.setheumApi.isReadyOrError;

      // 2. Place storage order
      const tx = this.setheumApi.tx.market.placeStorageOrder(
        cid,
        200 * 1024 * 1024 /* 200MB */,
        0
      );

      const res = await sendTx(tx, this.seeds);

      // 3. Disconnect chain
      this.setheumApi.disconnect();

      return res;
    } catch (e) {
      console.error(
        `Error happens on calling Crust Chain, details: ${e.message}`
      );
      return false;
    }
  }
}
