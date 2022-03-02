import { createDexShareName, getCurrencyObject, unzipDexShareName } from '.';

describe('converter', () => {
  test('dex share name should work', () => {
    const name1 = createDexShareName('SETM', 'SERP');
    const name2 = createDexShareName(name1, 'SERP');
    const name3 = createDexShareName(name1, name2);

    const _name2 = `lp://${encodeURIComponent('lp://SETM/SERP')}/SERP`;

    expect(name1).toEqual('lp://SETM/SERP');
    expect(name2).toEqual(_name2);
    expect(name3).toEqual(`lp://${encodeURIComponent('lp://SETM/SERP')}/${encodeURIComponent(_name2)}`);
  });
  test('unzip dex share name should work', () => {
    const name1 = createDexShareName('SETM', 'SERP');
    const name2 = createDexShareName(name1, 'SERP');
    const name3 = createDexShareName(name1, name2);

    expect(unzipDexShareName(name1)).toEqual(['SETM', 'SERP']);
    expect(unzipDexShareName(name2)).toEqual(['lp://SETM/SERP', 'SERP']);
    expect(unzipDexShareName(name3)).toEqual(['lp://SETM/SERP', 'lp://lp%3A%2F%2FSETM%2FSERP/SERP']);
  });
  test('get Currency Object should work', () => {
    const name1 = createDexShareName('SETM', 'SERP');
    const name2 = createDexShareName(name1, 'SERP');
    const name3 = createDexShareName(name1, name2);

    expect(getCurrencyObject(name1)).toEqual({ DexShare: [{ Token: 'SETM' }, { Token: 'SERP' }] });
    expect(getCurrencyObject(name2)).toEqual({
      DexShare: [{ DexShare: [{ Token: 'SETM' }, { Token: 'SERP' }] }, { Token: 'SERP' }]
    });
    expect(getCurrencyObject(name3)).toEqual({
      DexShare: [
        { DexShare: [{ Token: 'SETM' }, { Token: 'SERP' }] },
        { DexShare: [{ DexShare: [{ Token: 'SETM' }, { Token: 'SERP' }] }, { Token: 'SERP' }] }
      ]
    });
  });
});
