import { Token, TokenPair } from '@setheum-js/sdk-core';
import { TradeGraph } from './trade-graph';

describe('trade graph', () => {
  const dnar = new Token('DNAR');
  const ausd = new Token('USDJ');
  const dot = new Token('DOT');
  const xbtc = new Token('XBTC');
  const renbtc = new Token('RENBTC');

  test('create trade graph', () => {
    const tradeGraph = new TradeGraph([
      new TokenPair(dnar, ausd),
      new TokenPair(dnar, dot),
      new TokenPair(dnar, xbtc),
      new TokenPair(dnar, renbtc),
      new TokenPair(dot, renbtc)
    ]);

    expect(tradeGraph.getAdj(dnar)).toEqual([ausd, dot, xbtc, renbtc]);
    expect(tradeGraph.getAdj(ausd)).toEqual([dnar]);
    expect(tradeGraph.getAdj(renbtc)).toEqual([dnar, dot]);
  });

  test('get path should be work', () => {
    const tradeGraph = new TradeGraph([
      new TokenPair(dnar, ausd),
      new TokenPair(dnar, dot),
      new TokenPair(dnar, xbtc),
      new TokenPair(dnar, renbtc),
      new TokenPair(dot, renbtc),
      new TokenPair(dot, ausd)
    ]);

    const _dot = new Token('DOT');

    const dot2renbtc = tradeGraph.getPathes(_dot, renbtc);

    expect(dot2renbtc[0]).toEqual([_dot, dnar, renbtc]);
    expect(dot2renbtc[1]).toEqual([_dot, renbtc]);
    expect(dot2renbtc[2]).toEqual([_dot, ausd, dnar, renbtc]);

    const dnar2ausd = tradeGraph.getPathes(dnar, ausd);

    expect(dnar2ausd[0]).toEqual([dnar, ausd]);
    expect(dnar2ausd[1]).toEqual([dnar, dot, ausd]);
    expect(dnar2ausd[2]).toEqual([dnar, renbtc, dot, ausd]);
  });
});
