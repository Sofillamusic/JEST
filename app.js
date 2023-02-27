let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const DollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * oneEuroIs.JPY;
    return valueInYen;
}

const YenToPound = function(valueInYen){
    let valueInPound = valueInYen * oneEuroIs.GBP;
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, DollarToYen, YenToPound };
