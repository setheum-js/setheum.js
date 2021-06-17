import { DeriveCustom } from '@polkadot/api-derive';

import * as loan from './loan';
import * as dex from './dex';

export const derive: DeriveCustom = { loan, dex };

export * from './types';
