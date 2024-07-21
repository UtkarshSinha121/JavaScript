const num = 5;

const number = new Number(5); // Number is a object

console.log(num.toString); // 5 // convert number to string
console.log(num.toFixed(2)); // 5.00 // convert number to string with 2 decimal points

const num1 = 51.23456789;
console.log(num1.toFixed(2)); // 51.23 // convert number to string with 2 decimal points
console.log(num1.toPrecision(2)); // 51 // convert number to string with 2 significant digits
console.log(num1.toPrecision(3)); // 51.2 // convert number to string with 2 significant digits

const num2 = 50000000000;
console.log(num2.toLocaleString()); // 50,000,000,000 // convert number to string with comma separated
console.log(num2.toLocaleString("en-IN")); // 5,00,00,00,000 // convert number to string with comma separated in Indian format

