async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch('https://api.exchangerate.host/latest');
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    const data = await response.json();
    if (data && data.rates) {
      const rates = data.rates;
      if (currencyCode in rates) {
        const exchangeRate = rates[currencyCode];
        return Number(exchangeRate.toFixed(4));
      }
    }
    return null;
  } catch (error) {
    throw new Error(`Failed to fetch exchange rate: ${error.message}`);
  }
}

getExchangeRate('USD')
  .then((rate) => {
    console.log(rate); // Output: 1.2133
  })
  .catch((error) => {
    console.error(error);
  });

getExchangeRate('XYZ')
  .then((rate) => {
    console.log(rate); // Output: null
  })
  .catch((error) => {
    console.error(error);
  });


//To test code, copy pase in console in devtools.