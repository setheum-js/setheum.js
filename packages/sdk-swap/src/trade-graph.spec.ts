import { Token, TokenPair } from '@setheum.js/sdk-core';
import { TradeGraph } from './trade-graph';

describe('trade graph', () => {
  const setm = new Token('SETM');
  const setusd = new Token('SETUSD');
  const dnar = new Token('DNAR');
  const serp = new Token('SERP');
  const renbtc = new Token('RENBTC');

  test('create trade graph', () => {
    const tradeGraph = new TradeGraph([
      new TokenPair(setm, setusd),
      new TokenPair(setm, dnar),
      new TokenPair(setm, serp),
      new TokenPair(setm, renbtc),
      new TokenPair(dnar, renbtc)
    ]);

    expect(tradeGraph.getAdj(setm)).toEqual([setusd, dnar, serp, renbtc]);
    expect(tradeGraph.getAdj(setusd)).toEqual([setm]);
    expect(tradeGraph.getAdj(renbtc)).toEqual([setm, dnar]);
  });

  test('get path should be work', () => {
    const tradeGraph = new TradeGraph([
      new TokenPair(setm, setusd),
      new TokenPair(setm, dnar),
      new TokenPair(setm, serp),
      new TokenPair(setm, renbtc),
      new TokenPair(dnar, renbtc),
      new TokenPair(dnar, setusd)
    ]);

    const _dnar = new Token('DNAR');

    const dnar2renbtc = tradeGraph.getPathes(_dnar, renbtc);

    expect(dnar2renbtc[0]).toEqual([_dnar, setm, renbtc]);
    expect(dnar2renbtc[1]).toEqual([_dnar, renbtc]);
    expect(dnar2renbtc[2]).toEqual([_dnar, setusd, setm, renbtc]);

    const setm2setusd = tradeGraph.getPathes(setm, setusd);

    expect(setm2setusd[0]).toEqual([setm, setusd]);
    expect(setm2setusd[1]).toEqual([setm, dnar, setusd]);
    expect(setm2setusd[2]).toEqual([setm, renbtc, dnar, setusd]);
  });
});
