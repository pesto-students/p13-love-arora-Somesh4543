async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch(`https://api.ratesapi.io/api/latest?base=EUR`);

    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }

    const data = await response.json();

    if (data.rates.hasOwnProperty(currencyCode)) {
      const exchangeRate = data.rates[currencyCode].toFixed(4);
      return parseFloat(exchangeRate);
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(`Error fetching exchange rate: ${error.message}`);
  }
}

getExchangeRate("USD")
  .then((rate) => {
    console.log(rate);
  })
  .catch((error) => {
    console.error(error);
  });

getExchangeRate("XYZ")
  .then((rate) => {
    console.log(rate);
  })
  .catch((error) => {
    console.error(error);
  });
