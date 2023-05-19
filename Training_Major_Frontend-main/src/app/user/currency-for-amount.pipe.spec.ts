import { CurrencyForAmountPipe } from './currency-for-amount.pipe';

describe('CurrencyForAmountPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyForAmountPipe();
    expect(pipe).toBeTruthy();
  });
});
