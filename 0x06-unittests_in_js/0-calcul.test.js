const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  it('return 4 when inputs are 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('return 5 when inputs are 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('return 5 when inputs are 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('return 6 when inputs are 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Additional edge cases
  it('return 0 when inputs are 0 and 0', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('return 0 when inputs are 0.4 and 0.4', function() {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });

  it('return 2 when inputs are 0.5 and 0.5', function() {
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });
});

