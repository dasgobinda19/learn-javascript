// Covert in Number
let score = null     //null is a type of object
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)

//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN     (NaN typeof => number)
// "gobinda" => NaN
// null => 0
// true => 1
// false => 0




// Convert in boolean
let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "gobinda" => true





// Convert in String
let someNumber = 33

let stringNumber = String(someNumber)

//console.log(stringNumber)
// console.log(typeof stringNumber);




// ******************************************** Operations ************************************************************

let value = 3
let negValue = -value
//console.log(negValue);


// console.log(2+2);
// console.log(4-2);
// console.log(2*2);
// console.log(5**2);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello "
let str2 = "gobinda"
let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


// console.log(true);
// console.log(+true);
// // console.log(true+);   //error
// console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// gameCounter++;  //postincrement
++gameCounter;  //preincrement
console.log(gameCounter);


// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion