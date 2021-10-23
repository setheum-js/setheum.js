import { DeriveCustom } from '@polkadot/api-derive';

import * as loan from './loan';
import * as dex from './dex';

export const derive: DeriveCustom = {
  loan: loan as unknown as DeriveCustom[string],
  dex: dex as unknown as DeriveCustom[string],
};

export * from './types';
