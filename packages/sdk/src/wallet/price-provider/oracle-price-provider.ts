import { Observable, BehaviorSubject, lastValueFrom, Subscription, combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { PriceProvider } from './types';
import { TimestampedValue } from '@open-web3/orml-types/interfaces';
import { AnyApi, FixedPointNumber, FixedPointNumber as FN, forceToCurrencyName, MaybeCurrency } from '@setheum.js/sdk-core';
import { OracleKey } from '@setheum.js/types/interfaces';
import { Storage } from '../../utils/storage';

export class OraclePriceProvider implements PriceProvider {
  private api: AnyApi;
  private oracleProvider: string;
  private subject: BehaviorSubject<Record<string, FN>>;
  private processSubscriber: Subscription;

  constructor(api: AnyApi, oracleProvider = 'Aggregated') {
    this.api = api;
    this.oracleProvider = oracleProvider;
    this.subject = new BehaviorSubject({});

    this.processSubscriber = this.process();
  }

  public unsub(): void {
    this.processSubscriber.unsubscribe();
  }

  private process = () => {
    const storage$ = Storage.create<[[OracleKey, TimestampedValue]]>({
      api: this.api,
      path: 'rpc.oracle.getAllValues',
      params: [this.oracleProvider],
      triggleEvents: [{ section: '*', method: 'NewFeedData' }]
    }).observable;

    return storage$.subscribe({
      next: (result) => {
        const formated = Object.fromEntries(
          result.map((item) => {
            const currency = forceToCurrencyName(item[0]);
            const price = FN.fromInner(
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              (item[1]?.value as any)?.value.toString() || '0'
            );
            return [currency, price];
          })
        );
        this.subject.next(formated);
      }
    });
  };

  subscribe(currency: MaybeCurrency): Observable<FN> {
    return combineLatest({
      oracle: this.subject,
    }).pipe(
      filter(({ oracle }) => oracle !== undefined),
      map(({ oracle }) => {
        const name = forceToCurrencyName(currency);

        // TODO: should check the token symbol
        if (name === 'SETM') {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          return oracle!.SETM || FixedPointNumber.ZERO;
        }

        // TODO: should check the token symbol
        if (name === 'SERP') {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          return oracle!.SERP || FixedPointNumber.ZERO;
        }

        // TODO: should check the token symbol
        if (name === 'DNAR') {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          return oracle!.DNAR || FixedPointNumber.ZERO;
        }

        // TODO: should check the token symbol
        if (name === 'HELP') {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          return oracle!.HELP || FixedPointNumber.ZERO;
        }

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return oracle![forceToCurrencyName(currency)] || FixedPointNumber.ZERO;
      })
    );
  }

  async query(currency: MaybeCurrency): Promise<FN> {
    return lastValueFrom(this.subscribe(currency));
  }
}
