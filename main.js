const usdBuy = document.getElementById('usdBuy');
const usdSale = document.getElementById('usdSale');
const eurBuy = document.getElementById('eurBuy');
const eurSale = document.getElementById('eurSale');
const rubBuy = document.getElementById('rubBuy');
const rubSale = document.getElementById('rubSale');

let usdCurrency = 28.3352;
let eurCurrency = 33.4908;
let rubCurrency = 0.3712;

let usdBuyMargin = 0.9981;
let usdSaleMargin = 1.0041;
let eurBuyMargin = 0.9928;
let eurSaleMargin = 1.0036;
let rubBuyMargin = 0.9429;
let rubSaleMargin = 1.0102;

const usdBuyCalculation = usdBuyMargin * usdCurrency;
const usdSaleCalculation = usdSaleMargin * usdCurrency;
const eurBuyCalculation = eurBuyMargin * eurCurrency;
const eurSaleCalculation = eurSaleMargin * eurCurrency;
const rubBuyCalculation = rubBuyMargin * rubCurrency;
const rubSaleCalculation = rubSaleMargin * rubCurrency;

usdBuy.innerText = usdBuyCalculation.toFixed(2);
usdSale.innerText = usdSaleCalculation.toFixed(2);
eurBuy.innerText = eurBuyCalculation.toFixed(2);
eurSale.innerText = eurSaleCalculation.toFixed(2);
rubBuy.innerText = rubBuyCalculation.toFixed(2);
rubSale.innerText = rubSaleCalculation.toFixed(2);

buy.onclick = () => {
    const n = document.getElementById('currencySelect').options.selectedIndex;
    const sel = document.getElementById('currencySelect').options[n].text;
    const val = document.getElementById('input-value').value;
    setResultBuy(sel, val);
}

setResultBuy = (sel, val) => {
    let result;

    switch (sel) {
        case "USD": 
            result = val * usdBuyCalculation;
            break;
        case "EUR": 
            result = val * eurBuyCalculation;
            break;
        case "RUB": 
            result = val * rubBuyCalculation;
            break;   
    }

    document.getElementById('result').innerHTML = `Потрібно: ${result.toFixed(2)} UAN`;
}

sale.onclick = () => {
    const n = document.getElementById('currencySelect').options.selectedIndex;
    const sel = document.getElementById('currencySelect').options[n].text;
    const val = document.getElementById('input-value').value;
    setResultSale(sel, val);
}

setResultSale = (sel, val) => {
    let result;
    
    switch (sel) {
        case "USD": 
            result = val * usdSaleCalculation;
            break;
        case "EUR": 
            result = val * eurSaleCalculation;
            break;
        case "RUB": 
            result = val * rubSaleCalculation;
            break;   
    }

    document.getElementById('result').innerHTML = `Отримаєте: ${result.toFixed(2)} UAN`;
}