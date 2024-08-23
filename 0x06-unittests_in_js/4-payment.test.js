const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  let stub;
  let consoleLogSpy;

  beforeEach(function () {
    // Stub Utils.calculateNumber to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the stub and the spy
    stub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with the correct arguments', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called with the correct arguments
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called with the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
