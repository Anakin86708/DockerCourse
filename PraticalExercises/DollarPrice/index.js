function convert(money1, money2) {
  return (1/money1)*money2
}

fetch('https://api.exchangeratesapi.io/latest?symbols=RUB,BRL,USD')
  .then(response => response.json())
  .then(json => {

    var BRL = json.rates.BRL;
    var USD = json.rates.USD;
    var RUB = json.rates.RUB;


    document.getElementById("rublo").innerHTML = RUB.toFixed(3);
    document.getElementById("real_rublo").innerHTML = convert(RUB,BRL).toFixed(3);
    document.getElementById("dolar").innerHTML = USD.toFixed(3);
    document.getElementById("real_dolar").innerHTML = convert(USD,BRL).toFixed(3);
  })
