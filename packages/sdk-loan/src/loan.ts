import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { assert } from '@polkadot/util';
import { FixedPointNumber, forceToCurrencyId, MaybeCurrency, Token } from '@setheum.js/sdk-core';
import { CurrencyId, Position } from '@setheum.js/types/interfaces';
import { DerivedLoanType } from '@setheum.js/api-derive';
import { ApiRx } from '@polkadot/api';
import { WalletRx } from '@setheum.js/sdk-wallet';
import { memoize } from 'lodash';

export interface LoanParams {
  debitExchangeRate: FixedPointNumber;
  liquidationRatio: FixedPointNumber;
  requiredCollateralRatio: FixedPointNumber;
}

export interface LoanPosition extends LoanParams {
  collateral: FixedPointNumber;
  debit: FixedPointNumber;
  debitAmount: FixedPointNumber;
  collateralAmount: FixedPointNumber;
  collateralRatio: FixedPointNumber;
  requiredCollateral: FixedPointNumber;
  liquidationPrice: FixedPointNumber;
  liquidationRatio: FixedPointNumber;
  canGenerate: FixedPointNumber;
  canPayBack: FixedPointNumber;
  canWithdraw: FixedPointNumber;
  maxGenerate: FixedPointNumber;
}

export class LoanRx {
  private api: ApiRx;
  private readonly currency: CurrencyId;
  private collateralToken: Token;
  private stableCoinToken: Token;
  private readonly address: string;
  private wallet: WalletRx;
  private loanPosition$: Observable<Position>;
  private readonly loanParams$: Observable<LoanParams>;

  constructor(api: ApiRx, currency: MaybeCurrency, address: string, wallet: WalletRx) {
    const collateralToken = wallet.getToken(currency);
    const stableCoinToken = wallet.getToken(api.consts.cdpEngine.getSetUSDId);

    assert(collateralToken && stableCoinToken, `init the loan sdk failed, can't find useable token in currency chain`);

    this.api = api;
    this.currency = forceToCurrencyId(api, currency);
    this.address = address;
    this.collateralToken = collateralToken;
    this.stableCoinToken = stableCoinToken;
    this.wallet = wallet;

    this.loanPosition$ = this.getLoanPosition();
    this.loanParams$ = this.getLoanParams();
  }

  get position(): Observable<LoanPosition> {
    return this.getPositionWithChanged(FixedPointNumber.ZERO, FixedPointNumber.ZERO);
  }

  get params(): Observable<LoanParams> {
    return this.loanParams$;
  }

  public updatePosition(
    debitAmountChange: FixedPointNumber,
    collateralChange: FixedPointNumber
  ): Observable<LoanPosition> {
    return this.getPositionWithChanged(debitAmountChange, collateralChange);
  }

  /**
   * get the position information of the loan
   */
  private getPositionWithChanged = memoize(
    (debitAmountChange: FixedPointNumber, collateralChange: FixedPointNumber): Observable<LoanPosition> => {
      return combineLatest([this.loanParams$, this.loanPosition$, this.wallet.queryPrice(this.currency)]).pipe(
        map(([params, position, price]) => {
          const { debit, collateral } = position;
          const {
            debitExchangeRate,
            requiredCollateralRatio,
            liquidationRatio,
          } = params;
          // trade debit decimal with stable coin decimal
          const _debit = FixedPointNumber.fromInner(debit.toString(), this.stableCoinToken.decimal);

          // apply change to collateral and debit
          const _collateral = FixedPointNumber.fromInner(collateral.toString(), this.collateralToken.decimal).plus(
            collateralChange
          );
          const debitAmount = _debit.times(debitExchangeRate).plus(debitAmountChange);
          const collateralAmount = _collateral.times(price.price);

          const requiredCollateral = this.getRequiredCollateral(debitAmount, requiredCollateralRatio, price.price);

          const canGenerate = this.getCanGenerate(
            collateralAmount,
            debitAmount,
            requiredCollateralRatio,
            FixedPointNumber.ONE,
            FixedPointNumber.ZERO
          );

          const maxGenerate = this.getMaxGenerate(collateralAmount, requiredCollateralRatio);

          return {
            collateral: _collateral,
            debit: _debit,
            debitAmount: debitAmount,
            collateralAmount: collateralAmount,
            collateralRatio: collateralAmount.div(debitAmount),
            requiredCollateral,
            liquidationPrice: this.getLiquidationPrice(_collateral, debitAmount, liquidationRatio),
            canGenerate,
            canPayBack: debitAmount,
            canWithdraw: _collateral.minus(requiredCollateral).min(FixedPointNumber.ZERO),
            maxGenerate,
            ...params
          };
        })
      );
    }
  );

  private getMaxGenerate(collateralAmount: FixedPointNumber, requiredCollateralRatio: FixedPointNumber) {
    return collateralAmount.div(requiredCollateralRatio);
  }

  private getRequiredCollateral(
    debitAmount: FixedPointNumber,
    requiredCollateralRatio: FixedPointNumber,
    price: FixedPointNumber
  ): FixedPointNumber {
    const result = debitAmount.times(requiredCollateralRatio).div(price);

    if (result.isLessThan(FixedPointNumber.ZERO) || !result.isFinaite()) {
      return FixedPointNumber.ZERO;
    }

    return result;
  }

  private getLiquidationPrice(
    collateral: FixedPointNumber,
    debitAmount: FixedPointNumber,
    liquidationRatio: FixedPointNumber
  ): FixedPointNumber {
    const result = debitAmount.times(liquidationRatio).div(collateral);

    if (result.isLessThan(FixedPointNumber.ZERO) || result.isEqualTo(FixedPointNumber.ZERO) || !result.isFinaite()) {
      return new FixedPointNumber(NaN);
    }

    return result;
  }

  private getLoanPosition() {
    return this.api.query.loans.positions(this.currency, this.address) as Observable<Position>;
  }

  private getCanGenerate(
    collateralAmount: FixedPointNumber,
    currentDebitAmount: FixedPointNumber,
    requiredCollateralRatio: FixedPointNumber,
    stableCoinPrice: FixedPointNumber,
    slippage = FixedPointNumber.ZERO
  ): FixedPointNumber {
    const result = collateralAmount
      .div(requiredCollateralRatio)
      .minus(currentDebitAmount)
      .div(stableCoinPrice)
      .minus(slippage);

    if (result.isLessThan(FixedPointNumber.ZERO) || !result.isFinaite()) return FixedPointNumber.ZERO;

    return result;
  }

  private getLoanParams() {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */
    return ((this.api.derive as any).loan.loanType(this.currency) as Observable<DerivedLoanType>).pipe(
      map((params: DerivedLoanType): LoanParams => {
        return {
          debitExchangeRate: FixedPointNumber.fromInner(params.debitExchangeRate.toString()),
          liquidationRatio: FixedPointNumber.fromInner(params.liquidationRatio.toString()),
          requiredCollateralRatio: FixedPointNumber.fromInner(params.requiredCollateralRatio.toString()),
        };
      })
    );
  }
}
