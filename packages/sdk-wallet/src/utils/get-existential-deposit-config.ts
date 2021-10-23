import { FixedPointNumber } from '@setheum-js/sdk-core';

const MAX = FixedPointNumber.fromInner('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
const ZERO = FixedPointNumber.ZERO;

type ExistentialDepositConfig = {
  [chain in string]: { [token in string]: FixedPointNumber };
};

/**
 * existential deposit is maintained manually, please ensure the config is match the current;
 */
// TODO: Update to match chain impl!
const EXISTENTIAL_DEPOSIT: ExistentialDepositConfig = {
  setheum: {
    SETM: new FixedPointNumber(0.1, 12),
    SERP: new FixedPointNumber(0.01, 12),
    DNAR: new FixedPointNumber(10 * 0.00001, 12),
    SETR: new FixedPointNumber(50 * 0.00001, 12),
    SETUSD: MAX,
    RENBTC: MAX,
  },
  dev: {
    SETM: new FixedPointNumber(0.1, 12),
    SERP: new FixedPointNumber(0.01, 12),
    DNAR: new FixedPointNumber(10 * 0.00001, 12),
    SETR: new FixedPointNumber(50 * 0.00001, 12),
    SETUSD: MAX,
    RENBTC: MAX,
  }
};

// get ed config, return 0 if the config doesn't set.
export const getExistentialDepositConfig = (network: string, currency: string): FixedPointNumber => {
  // use dev config as default
  const config = EXISTENTIAL_DEPOSIT?.[network.toLocaleUpperCase()] || EXISTENTIAL_DEPOSIT.dev;

  return config?.[currency.toUpperCase()].clone() || ZERO.clone();
};
