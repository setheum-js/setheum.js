import { Token } from './token';

describe('token', () => {
  const t1 = new Token('SETM', { decimal: 18 });

  test('token constructor should work', () => {
    expect(t1.name).toEqual('SETM');
    expect(t1.decimal).toEqual(18);
  });

  test('clone tokens should work', () => {
    const t2 = t1.clone();

    expect(t2.name).toEqual('SETM');
    expect(t2.decimal).toEqual(18);
  });

  test('fromCurrencyId set default token decimal should work', () => {
    const mockSETM = { asToken: { toString: () => 'SETM' }, isToken: true };
    const mockSERP = { asToken: { toString: () => 'SERP' }, isToken: true };
    const mockDNAR = { asToken: { toString: () => 'DNAR' }, isToken: true };
    const mockHELP = { asToken: { toString: () => 'HELP' }, isToken: true };
    const mockSETR = { asToken: { toString: () => 'SETR' }, isToken: true };
    const mockSETUSD = { asToken: { toString: () => 'SETUSD' }, isToken: true };

    expect(Token.fromCurrencyId(mockSETM as any).name).toEqual('SETM');
    expect(Token.fromCurrencyId(mockSERP as any).name).toEqual('SERP');
    expect(Token.fromCurrencyId(mockDNAR as any).name).toEqual('DNAR');
    expect(Token.fromCurrencyId(mockHELP as any).name).toEqual('HELP');
    expect(Token.fromCurrencyId(mockSETR as any).name).toEqual('SETR');
    expect(Token.fromCurrencyId(mockSETUSD as any).name).toEqual('SETUSD');
  });

  test('toChainData should work', () => {
    expect(t1.toChainData()).toEqual({ Token: 'SETM' });
  });

  test('isEqual should work', () => {
    const t2 = t1.clone();
    const t3 = new Token('SETM', { decimal: 18 });
    const t4 = new Token('SETUSD', { decimal: 18 });

    expect(t1.isEqual(t2)).toEqual(true);
    expect(t1.isEqual(t3)).toEqual(true);
    expect(t1.isEqual(t4)).toEqual(false);
  });

  test('toString should work', () => {
    expect(t1.toString()).toEqual('SETM');
  });

  test('sort tokens should work', () => {
    const setm = new Token('SETM');
    const dnar = new Token('DNAR');
    const setmsetusd = new Token('lp://SETM/SETUSD');

    // basic symbol & basic symbol
    expect(Token.sort(setm, dnar)).toEqual([setm, dnar]);
    expect(Token.sort(dnar, setm)).toEqual([setm, dnar]);
    // basic symbol & lp
    expect(Token.sort(setmsetusd, setm)).toEqual([setm, setmsetusd]);
    expect(Token.sort(setm, setmsetusd)).toEqual([setm, setmsetusd]);
  });
});
