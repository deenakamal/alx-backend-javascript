const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should return 5 when inputs are 1.4 and 3.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.5), 5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('should return -3 when inputs are 1.4 and 3.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.5), -3);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return "Error" when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('should return 2 when inputs are 4.4 and 2.1', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 4.4, 2.1), 2);
    });
  });

  describe('Invalid operation', function() {
    it('should throw an error for invalid operation type', function() {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), {
        message: 'Invalid operation type'
      });
    });
  });
});