import { Observable, combineLatest } from '@polkadot/x-rxjs';
import { map } from '@polkadot/x-rxjs/operators';

import { ApiInterfaceRx } from '@polkadot/api/types';
import { memo } from '@polkadot/api-derive/util';

import { CurrencyId, Rate, ExchangeRate, Balance, Position, Ratio } from '@setheum-js/types/interfaces';

import { DerivedStandardConstants, DerivedStandardType, DerivedStandardOverView } from '../types/standards';
import { getAllCollateralCurrencyIds } from '../utils';

/**
 * @name standardConstants
 * @description get constants in standard module
 */
function standardConstants(api: ApiInterfaceRx): DerivedStandardConstants {
  return {
    minimumStandardValue: api.consts.settmintEngine.minimumStandardValue as Balance,
    defaultstandardExchangeRate: api.consts.settmintEngine.defaultstandardExchangeRate as ExchangeRate,
  };
}

/**
 * @name standardType
 * @description get standard type
 * @param {(CurrencyId | string)} currency
 */
export function standardType(
  instanceId: string,
  api: ApiInterfaceRx
): (currncy: CurrencyId | string) => Observable<DerivedStandardType> {
  return memo(instanceId, (currency: CurrencyId | string) => {
    return combineLatest([
      api.query.settmintEngine.standardExchangeRate<Rate>(currency),
    ]).pipe(
      map((result) => {
        const constants = standardConstants(api);
        const [standardExchangeRate] = result;

        return {
          currency,
          standardExchangeRate: standardExchangeRate.isEmpty ? constants.defaultstandardExchangeRate : standardExchangeRate,
          minimumStandardValue: constants.minimumStandardValue
        };
      })
    );
  });
}

/**
 * @name allLoanTypes
 * @description  get standard types of all kinds of collateral
 */
export function allLoanTypes(instanceId: string, api: ApiInterfaceRx): () => Observable<DerivedStandardType[]> {
  return memo(instanceId, () => {
    const collateralCurrencyIds = getAllCollateralCurrencyIds(api);
    const standardTypeQuery = standardType(instanceId, api);

    return combineLatest(collateralCurrencyIds.map((currencyId) => standardTypeQuery(currencyId)));
  });
}

/**
 * @name standardOverview
 * @description get standard overview includes total debit, total collateral
 * @param {(CurrencyId | string)} currency
 */
export function standardOverview(
  instanceId: string,
  api: ApiInterfaceRx
): (currency: CurrencyId) => Observable<DerivedStandardOverView> {
  return memo(instanceId, (currency: CurrencyId) =>
    api.query.standards.totalPositions<Position>(currency).pipe(
      map((result) => {
        const { collateral, debit } = result;

        return { currency, totalStandard: debit, totalCollateral: collateral };
      })
    )
  );
}

/**
 * @name allLoanOverview
 * @description get standard overviews of all kinds of collatearl
 */
export function allLoanOverviews(instanceId: string, api: ApiInterfaceRx): () => Observable<DerivedStandardOverView[]> {
  return memo(instanceId, () => {
    const collateralCurrencyIds = getAllCollateralCurrencyIds(api);
    const standardOverViewQuery = standardOverview(instanceId, api);

    return combineLatest(collateralCurrencyIds.map((currencyId) => standardOverViewQuery(currencyId)));
  });
}
