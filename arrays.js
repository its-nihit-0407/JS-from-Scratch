"use strict"

let cars = ["Volvo", "RR", "Honda"];
// console.log(cars);

const fruits = ["Banana", "Apple", "Oranges"];
fruits[2] = "Pineapple" 
// console.log(fruits);

// how to typecast to array
const newarr = new Array("Nishidh", "Neha", "Virushka") // typeof array is object 
// console.log(newarr);
// console.log(typeof newarr)

//Operations with arrays
let singers = ["Arjit", "Ed", "Iqlipse"];
let songs = ["Chaana Mareya", "Perfect", "Mera Safar"];

console.log(1 + 1 + singers);

//methods with arrays
let numbers = [1, 2, 3, 4, 5];

console.log(numbers.at(2)); // returns the element affilated to corresponding index
console.log(numbers.concat(singers)); // joins two arrays 
// console.log(numbers.copyWithin(3, 0, 1)) // targets an element and swap the corresponding elements with the element that comes after the target
let entry_method = numbers.entries() // gives the itreator from an arr
// Object.keys(b).forEach(element => {
//     console.log(`${keys}: ${arr[keys]}`)
// });
numbers = [1, 2, 3, 4, 5];

// every function implementation
function chkage(age){
    age > 19
};

console.log(numbers.every(chkage));


let arr = [11,2,2]
console.log(arr.splice(1,3))
console.log(arr)