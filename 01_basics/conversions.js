/*
console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean("0")); //true

*/

let str = "123";
let num = Number(str)

console.log(num); // 123
console.log(typeof num);

let str1 = "Hello";
let num1 = Number(str1)

console.log(num1); // NaN
console.log(typeof num1); // number

console.log(Number("")); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(NaN)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// ***************************************Operations***************************************

console.log(1 + "2"); // 12
console.log(1 + 2); // 3
console.log("1" + "2"); // 12
console.log("1" + 2); // 12
console.log("1" + true); // 1true
console.log("1" + false); // 1false
console.log("1" + undefined); // 1undefined
console.log("1" + null); // 1null
console.log("1" + NaN); // 1NaN
console.log("1" + Infinity); // 1Infinity
console.log("1" + -Infinity); // 1-Infinity
console.log("1" + -Infinity); // 1-Infinity
console.log(true + "1")
console.log(true + true) // 2
console.log(false + false) // 0
console.log(false + true) // 1
console.log(+true) // 1
console.log(-false) // -0
console.log(+"")

// ++ and -- operands
let num2 = 0 
console.log(num2++); // first perform the operation after that increment the value
console.log(num2)

let num3 = 0 
console.log(num2--); // first perform the operation after that increment the value
console.log(num2)

//and vice versa for ++num