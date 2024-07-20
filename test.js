console.log("Utkarsh") // This is a statement and it will print Utkarsh on console

const accountId = "1234" // This is a constant variable and can't be changed
let accountName = "Utkarsh" // let have block or loacal scope and have multiple value in differtent block
var accountType = "Saving"  // var have global scope and after declaration in other palce its value can be changed
let accountBalance; //undefined

console.table({accountId, accountName, accountType, accountBalance}) // This will print all the variables in table format
// prefer not to use var as it have global scope and can be changed after declaration


// Data Types
// 1. Primitive Data Types
    number  // 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    string  // "Utkarsh", 'Utkarsh'
    boolean // true, false
    undefined  // undefined
    null  // null
    symbol  // symbol
    bigint  // bigint

let score = "100" 
let rollNumber = "12abc" // string

console.log(typeof score) // type of score is string

let valueInNumber = Number(score) // converting string to number   
let valueInNumber1 = Number(rollNumber) // converting string to number 

console.log(typeof valueInNumber) // type of valueInNumber is number
console.log(typeof valueInNumber) // type of valueInNumber1 is Nan(Not a Number)

//boolean conversion
let isLoggedIn = 1

console.log(Boolean(isLoggedIn)) // true

// 0 convert to false in boolean
// 1 convert to true in boolean
// "" convert to false in boolean
// "value" convert to true in boolean


// === is used to check value and type
// == is used to check only value

// 2. Reference Data Types
    // Object
    // Array
    // Function

   // typeof null is object important point to remember* 


