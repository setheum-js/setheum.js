import { ChainType } from '../types';

export function getChainType(type: string): ChainType {
  const tests = new Map([
    [/dev/i, ChainType.SETHEUM],
    [/setheum/i, ChainType.SETHEUM],
  ]);

  for (const [test, chainTyep] of tests.entries()) {
    if (test.test(type)) return chainTyep;
  }

  return ChainType.SETHEUM;
}
