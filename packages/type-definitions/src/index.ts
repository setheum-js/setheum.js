/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { OverrideVersionedType } from '@polkadot/types/types';
import { rpc as ormlRpc, types as ormlTypes, typesAlias as ormlAlias } from '@open-web3/orml-type-definitions';
import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';
import accounts from './accounts';
import auctionManager from './auctionManager';
import cdpEngine from './cdpEngine';
import dex from './dex';
import incentives from './incentives';
import loans from './loans';
import nft from './nft';
import primitives from './primitives';

// ecosystem
import renvmBridge from './renvmBridge';
import { chainBridge, chainSafeTransfer } from './chainSafe';

import runtime from './runtime';
import { signedExtensions as setheumSignedExtensions } from './signedExtensions';
import support from './support';

import setheumVersioned from './spec/setheum';
import newromeVersioned from './spec/newrome';
import neomVersioned from './spec/neom';

// FIXME: currently we cannot override this in runtime definations because the code generation script cannot handle overrides
// This will make it behave correctly in runtime, but wrong types in TS defination.
const additionalOverride = {
  Keys: 'SessionKeys1',
  PalletsOrigin: {
    _enum: {
      System: 'SystemOrigin',
      Timestamp: 'Null',
      RandomnessCollectiveFlip: 'Null',
      Balances: 'Null',
      Accounts: 'Null',
      Currencies: 'Null',
      Tokens: 'Null',
      Vesting: 'Null',
      SetheumTreasury: 'Null',
      Utility: 'Null',
      Multisig: 'Null',
      Recovery: 'Null',
      Proxy: 'Null',
      Scheduler: 'Null',
      Indices: 'Null',
      GraduallyUpdate: 'Null',
      Authorship: 'Null',
      Babe: 'Null',
      Grandpa: 'Null',
      Staking: 'Null',
      Session: 'Null',
      Historical: 'Null',
      GeneralCouncil: 'CollectiveOrigin',
      GeneralCouncilMembership: 'Null',
      HonzonCouncil: 'CollectiveOrigin',
      HonzonCouncilMembership: 'Null',
      TechnicalCommittee: 'CollectiveOrigin',
      TechnicalCommitteeMembership: 'Null',
      Authority: 'DelayedOrigin',
      ElectionsPhragmen: 'Null',
      SetheumOracle: 'Null',
      BandOracle: 'Null',
      OperatorMembershipSetheum: 'Null',
      OperatorMembershipBand: 'Null',
      Auction: 'Null',
      Rewards: 'Null',
      OrmlNFT: 'Null',
      Prices: 'Null',
      Dex: 'Null',
      AuctionManager: 'Null',
      Loans: 'Null',
      Honzon: 'Null',
      CdpTreasury: 'Null',
      CdpEngine: 'Null',
      EmergencyShutdown: 'Null',
      NomineesElection: 'Null',
      StakingPool: 'Null',
      PolkadotBridge: 'Null',
      Incentives: 'Null',
      AirDrop: 'Null',
      NFT: 'Null',
      RenVmBridge: 'Null',
      Contracts: 'Null',
      EVM: 'Null',
      Sudo: 'Null',
      TransactionPayment: 'Null'
    }
  }
};

const setheumDefs = {
  accounts,
  auctionManager,
  cdpEngine,
  dex,
  incentives,
  loans,
  nft,
  primitives,
  runtime,
  support,

  // ecosystem
  renvmBridge,
  chainBridge,
  chainSafeTransfer
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
    neom: getBundle(neomVersioned)
  }
};

// Type overrides have priority issues
export const typesBundleForPolkadot = {
  spec: {
    setheum: getBundle(setheumVersioned),
    newrome: getBundle(newromeVersioned),
    neom: getBundle(neomVersioned)
  }
};

export const signedExtensions = setheumSignedExtensions;
