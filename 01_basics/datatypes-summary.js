//  Primitive ( 7 types ) : String, Number, Boolearn, null, undefined, Symbol, BigInt

// Number
const score = 100
const scoreValue = 100.3

// Boolearn
const isLoggedIn = false

// null
const outsideTemp = null

// undefined
let userEmail;

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// BigInt
const bigNumber = 3456543576654356754n





// Reference (Non primitive) : Array, Objects, Functions

// Array
const heros = ["shaktiman", "Iron-Man", "Thor"];

// Objects
let myObj = {
    name: "hitesh",
    age: 22,
}

// Functions
const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof heros);
// console.log(typeof anotherId);



// https://262.ecma-international.org/5.1/#sec-11.4.3



/*
undefined  typeof undefined
null typeof Object
Boolean typeof Boolean
Number typeof Number
String typeof String
function typeof function  (object-function)
Array typeof Object
*/