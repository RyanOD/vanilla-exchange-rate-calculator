// function calculate() {
//     let currency1 = document.getElementById("currency-one");
//     let currency2 = document.getElementById("currency-two");
    
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://v6.exchangerate-api.com/v6/5f9fc0bf6c0558d96d37a087/latest/" + currency1.value, true);

//     // .onload is an event handler, not a function
//     xhr.onload = function() {
//         let amount = document.getElementById("amount-two");
//         // Within this function, xhr can be referred to with "this"..."xhr" works as well.
//         // The JSON response from the end point needs to be parsed in order to convert it 
//         // from JSON into a JavaScript object.
//         amount.value = JSON.parse(this.responseText).conversion_rates[currency2.value];
//     };
//     xhr.send();
// }

function calculate() {
  const currency1 = document.getElementById("currency-one").value;
  const currency2 = document.getElementById("currency-two").value;
  
  const amount1 = document.getElementById("amount-one");
  const amount2 = document.getElementById("amount-two");

  fetch(`https://v6.exchangerate-api.com/v6/5f9fc0bf6c0558d96d37a087/latest/${currency1}`)
  .then(res => res.json())
  .then(function(data) {
    const exchangeRate = data.conversion_rates[currency2];
    amount2.value = (amount1.value * exchangeRate).toFixed(2);
  })
  .catch(error => amount2.value = error)
}