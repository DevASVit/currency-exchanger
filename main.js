const usdBuy = document.getElementById('usdBuy');
const usdSale = document.getElementById('usdSale');
const eurBuy = document.getElementById('eurBuy');
const eurSale = document.getElementById('eurSale');
const rubBuy = document.getElementById('rubBuy');
const rubSale = document.getElementById('rubSale');

let usdCurrency = 28.3352;
let eurCurrency = 33.4908;
let rubCurrency = 0.3712;

const usdBuyCalculation = 0.9981 * usdCurrency;
const usdSaleCalculation = 1.0041 * usdCurrency;
const eurBuyCalculation = 0.9928 * eurCurrency;
const eurSaleCalculation = 1.0036 * eurCurrency;
const rubBuyCalculation = 0.9429 * rubCurrency;
const rubSaleCalculation = 1.0102 * rubCurrency;

usdBuy.innerText = usdBuyCalculation.toFixed(2);
usdSale.innerText = usdSaleCalculation.toFixed(2);
eurBuy.innerText = eurBuyCalculation.toFixed(2);
eurSale.innerText = eurSaleCalculation.toFixed(2);
rubBuy.innerText = rubBuyCalculation.toFixed(2);
rubSale.innerText = rubSaleCalculation.toFixed(2);