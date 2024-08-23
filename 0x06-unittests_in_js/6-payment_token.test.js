const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a successful response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        // Assert the expected result
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        // Indicate that the test is complete
        done();
      })
      .catch(done); // If there's an error, fail the test
  });

  it('should handle the case when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then(() => {
        // This part should not be reached
        done(new Error('Expected promise to be rejected'));
      })
      .catch(error => {
        // Assert the expected error
        expect(error).to.be.an('error').with.property('message', 'Failed response from the API');
        // Indicate that the test is complete
        done();
      });
  });
});
