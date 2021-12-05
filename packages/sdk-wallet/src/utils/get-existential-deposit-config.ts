import { FixedPointNumber } from '@setheum.js/sdk-core';

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
    SETM: new FixedPointNumber(0.1, 18),
    SERP: new FixedPointNumber(0.1, 18),
    DNAR: new FixedPointNumber(0.1, 18),
    SETR: new FixedPointNumber(0.1, 18),
    SETUSD: new FixedPointNumber(0.1, 18),
  },
  dev: {
    SETM: new FixedPointNumber(0.1, 18),
    SERP: new FixedPointNumber(0.1, 18),
    DNAR: new FixedPointNumber(0.1, 18),
    SETR: new FixedPointNumber(0.1, 18),
    SETUSD: new FixedPointNumber(0.1, 18),
  }
};

// get ed config, return 0 if the config doesn't set.
export const getExistentialDepositConfig = (network: string, currency: string): FixedPointNumber => {
  // use dev config as default
  const config = EXISTENTIAL_DEPOSIT?.[network.toLocaleUpperCase()] || EXISTENTIAL_DEPOSIT.dev;

  return config?.[currency.toUpperCase()].clone() || ZERO.clone();
};
