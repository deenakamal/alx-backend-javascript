function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // Optionally handle the case where the promise is rejected
      reject(new Error('Failed response from the API'));
    }
  });
}

module.exports = getPaymentTokenFromAPI;
