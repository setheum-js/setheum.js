import { Token, TokenPair } from '@setheum.js/sdk-core';
import { TradeGraph } from './trade-graph';

describe('trade graph', () => {
  const setm = new Token('SETM');
  const setusd = new Token('SETUSD');
  const dnar = new Token('DNAR');
  const serp = new Token('SERP');
  const setr = new Token('SETR');

  test('create trade graph', () => {
    const tradeGraph = new TradeGraph([
      new TokenPair(setm, setusd),
      new TokenPair(setm, dnar),
      new TokenPair(setm, serp),
      new TokenPair(setm, setr),
      new TokenPair(dnar, setr)
    ]);

    expect(tradeGraph.getAdj(setm)).toEqual([setusd, dnar, serp, setr]);
    expect(tradeGraph.getAdj(setusd)).toEqual([setm]);
    expect(tradeGraph.getAdj(setr)).toEqual([setm, dnar]);
  });

  test('get path should be work', () => {
    const tradeGraph = new TradeGraph([
      new TokenPair(setm, setusd),
      new TokenPair(setm, dnar),
      new TokenPair(setm, serp),
      new TokenPair(setm, setr),
      new TokenPair(dnar, setr),
      new TokenPair(dnar, setusd)
    ]);

    const setm2setusd = tradeGraph.getPathes(setm, setusd);

    expect(setm2setusd[0]).toEqual([setm, setusd]);
    expect(setm2setusd[1]).toEqual([setm, dnar, setusd]);
  });
});
