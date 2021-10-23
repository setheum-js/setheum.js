/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { OverrideVersionedType } from '@polkadot/types/types';
import { rpc as ormlRpc, types as ormlTypes, typesAlias as ormlAlias } from '@open-web3/orml-type-definitions';
import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';
import accounts from './accounts';
import auctionManager from './auctionManager';
import cdpEngine from './cdpEngine';
import dex from './dex';
import evm from './evm';
import loans from './loans';
import nft from './nft';
import primitives from './primitives';

// ecosystem
import renvmBridge from './renvmBridge';

import runtime from './runtime';
import { signedExtensions as setheumSignedExtensions } from './signedExtensions';
import support from './support';

import setheumVersioned from './spec/setheum';
import newromeVersioned from './spec/newrome';

// FIXME: currently we cannot override this in runtime definations because the code generation script cannot handle overrides
// This will make it behave correctly in runtime, but wrong types in TS defination.
const additionalOverride = {
  Keys: 'SessionKeys1'
};

const setheumDefs = {
  primitives,
  accounts,
  auctionManager,
  cdpEngine,
  dex,
  evm,
  loans,
  nft,
  runtime,
  support,

  // bridges
  renvmBridge,
};

export const types = {
  ...ormlTypes,
  ...typesFromDefs(setheumDefs),
  ...additionalOverride
};

export const rpc = jsonrpcFromDefs(setheumDefs, { ...ormlRpc });
export const typesAlias = typesAliasFromDefs(setheumDefs, { ...ormlAlias });

function getBundle(versioned: OverrideVersionedType[]) {
  return {
    rpc,
    instances: {
      council: ['shuraCouncil']
    },
    types: [...versioned].map((version) => {
      return {
        minmax: version.minmax,
        types: {
          ...types,
          ...version.types
        }
      };
    }),
    alias: typesAlias
  };
}

export const typesBundle = {
  spec: {
    setheum: getBundle(setheumVersioned),
    newrome: getBundle(newromeVersioned),
  }
};

// Type overrides have priority issues
export const typesBundleForPolkadot = {
  spec: {
    setheum: getBundle(setheumVersioned),
    newrome: getBundle(newromeVersioned),
  }
};

export const signedExtensions = setheumSignedExtensions;
