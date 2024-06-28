import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (amount.constructor !== Number) {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;

    if (currency.constructor !== Currency) {
      throw new TypeError('Currency must be a Currency object');
    }
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (amount.constructor !== Number) {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency.constructor !== Currency) {
      throw new TypeError('Currency must be a Currency object');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return (`${this._amount} ${this.currency._name} (${this._currency._code})`);
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
