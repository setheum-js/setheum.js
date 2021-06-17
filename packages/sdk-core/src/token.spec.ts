import { Token } from './token';

describe('token', () => {
  const t1 = new Token('DOT', { decimal: 18 });

  test('token constructor should work', () => {
    expect(t1.name).toEqual('DOT');
    expect(t1.decimal).toEqual(18);
  });

  test('clone tokens should work', () => {
    const t2 = t1.clone();

    expect(t2.name).toEqual('DOT');
    expect(t2.decimal).toEqual(18);
  });

  test('fromCurrencyId set default token decimal should work', () => {
    const mockDNAR = { asToken: { toString: () => 'DNAR' }, isToken: true };
    const mockUSDJ = { asToken: { toString: () => 'USDJ' }, isToken: true };
    const mockDOT = { asToken: { toString: () => 'DOT' }, isToken: true };

    expect(Token.fromCurrencyId(mockDNAR as any).name).toEqual('DNAR');
    expect(Token.fromCurrencyId(mockUSDJ as any).name).toEqual('USDJ');
    expect(Token.fromCurrencyId(mockDOT as any).name).toEqual('DOT');
  });

  test('toChainData should work', () => {
    expect(t1.toChainData()).toEqual({ Token: 'DOT' });
  });

  test('isEqual should work', () => {
    const t2 = t1.clone();
    const t3 = new Token('DOT', { decimal: 17 });
    const t4 = new Token('USDJ', { decimal: 18 });

    expect(t1.isEqual(t2)).toEqual(true);
    expect(t1.isEqual(t3)).toEqual(false);
    expect(t1.isEqual(t4)).toEqual(false);
  });

  test('toString should work', () => {
    expect(t1.toString()).toEqual('DOT');
  });

  test('sort tokens should work', () => {
    const DNAR = new Token('DNAR');
    const dot = new Token('DOT');
    const ausd = new Token('USDJ');

    expect(Token.sort(DNAR, dot)).toEqual([DNAR, dot]);
    expect(Token.sort(dot, DNAR)).toEqual([DNAR, dot]);
    expect(Token.sort(dot, ausd, DNAR)).toEqual([DNAR, ausd, dot]);
  });
});
