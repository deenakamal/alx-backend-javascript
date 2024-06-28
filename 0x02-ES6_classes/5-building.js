export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (!this.evacuationWarningMessage) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }

    if (sqft.constructor !== Number) {
      throw new TypeError('SQFT must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (sqft.constructor !== String) {
      throw new TypeError('SQFT must be a number');
    }
    this._sqft = sqft;
  }
}
