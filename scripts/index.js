

const apiKey = "dec0b15aedf2eb7df49d0841";

// fetch currency options

fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
  .then((response) => response.json()) //converts to object - array and other way
  .then((data) => {
    const { supported_codes } = data; //declare data
    const selectElements = document.querySelectorAll("select");

    supported_codes.forEach((code) => { //givind each code the name of code
      const optionElement = document.createElement("option");
      optionElement.value = code; //give the currency names in drop down (value of)
      optionElement.text = code; //just the text in drop down

      selectElements.forEach((select) => {
        select.appendChild(optionElement.cloneNode(true)); //cloning the select element children (option tag)
      });
    });
  })
  .catch((error) => {
    console.log("Error fetching currency options:", error); //when error happen error name 
  });

function convertCurrency() {
  const amountInput = document.getElementById("amount");
  const fromCurrency = document.getElementById("input-1").value;
  const toCurrency = document.getElementById("input-2").value;
  const resultElement = document.getElementById("result");

  fetch(
    `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`
  ) //get formula for exchange from wbs
    .then((response) => response.json()) //data storing, object - array and other way
    .then((data) => {
      const { conversion_rate } = data; //declare data
      const convertedAmount = (amountInput.value * conversion_rate).toFixed(2); //formula/ math

      resultElement.innerHTML = `${amountInput.value} ${fromCurrency} = ${convertedAmount} ${toCurrency}`; //display output
    })
    // console.log(conversion_rate)

    .catch((error) => {
      console.log("Error fetching exchange rate:", error); //if error happens error name
    });
}

const convertBtn = document.getElementById("convertBtn");
convertBtn.addEventListener("click", convertCurrency);