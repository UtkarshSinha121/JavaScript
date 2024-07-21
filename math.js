console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-5)); // 5 // absolute value
console.log(Math.round(5.5)); // 6 // round off
console.log(Math.ceil(5.1)); // 6 // round up 
console.log(Math.floor(5.9)); // 5 // round down
console.log(Math.pow(2, 3)); // 8 // 2^3
console.log(Math.sqrt(16)); // 4 // square root
console.log(Math.cbrt(27)); // 3 // cube root
console.log(Math.max(1, 2, 3, 4, 5)); // 5 // maximum value
console.log(Math.min(1, 2, 3, 4, 5)); // 1 // minimum value
console.log(Math.random()); // random number between 0 and 1
console.log((Math.random()*10)+1); // random number between 1 and 10
console.log(Math.floor(Math.random()*10)+1); // random number between 1 and 10 (integer)

// random number between 10 and 20 (integer) when min and max both are defined
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min); // random number between 10 and 20 (integer)




