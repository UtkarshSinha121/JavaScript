const name = "John";
const age = 25;

console.log("My name is " + name + " and I am " + age); // old way of concatenation
console.log(`My name is ${name} and I am ${age}`); // new way of concatenation

const name1 = new String(" John Doe  "); // String is a object
console.log(name1);

console.log(name1[0]); // J
console.log(name1.length); // 8
console.log(name1.toUpperCase()); // JOHN DOE
console.log(name1.toLowerCase()); // john doe
console.log(name1.substring(0, 4)); // John
console.log(name1.split(" ")); // ["John", "Doe"]
console.log(name1.charAt(0)); // J
console.log(name1.indexOf("D")); // 5
console.log(name1.includes("D")); // true
console.log(name1.includes("d")); // false
console.log(name1.trim()); // John Doe // remove white spaces from start and end
console.log(name1.replace("John", "Jane")); // Jane Doe

const name2 = "John-Doe-Jane";
console.log(name2.split("-")); // ["John", "Doe", "Jane"]
