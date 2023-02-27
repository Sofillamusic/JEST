// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dollars, then 3.5 euros should be = (3.5 * 1.2)
})


// DollarToYen
test("One dollar should be 106.58 yens", function(){
    
    const { fromDollarToYen } = require('./app.js')

   
    const yens = fromDollarToYen(2.5)

    // is 1 dollar son 106.58, entonces 2.5 dollar deberian ser = (2.5 * 127.9)
    const expected = 2.5 * 127.9; 
    
   
    expect(expected).toBe(yens);
})


// YenToPound

test("One pond should be 0.0062", function(){
    
    const { fromYenToPound } = require('./app.js')

   
    const pounds = fromYenToPound(3.5)

    // is 1 yen son 0.0062, entonces 2.5 dollar deberian ser = (2.5 * 0.0062)
    const expected = 3.5 * 0.8; 
    
   
    expect(expected).toBe(pounds);
})