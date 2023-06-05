const currencies = {
    EUR: "Euro",
    GBP: "British Pound",
    USD: "United States Dollar",
    ZAR: "South African Rand",
  };
  
  const inputCurrency = document.getElementById("input-1");
  const outputCurrency = document.getElementById("input-2");
  
  inputCurrency.innerHTML = getOptions(currencies);
  outputCurrency.innerHTML = getOptions(currencies);
  
  //making options in select/dropdown (HTML)
  function getOptions(data) {
    return Object.entries(data)
      .map(
        ([country, currency]) => `
        <option value="${country}">${country} | ${currency}</option>
        `
      )
      .join("");
  }