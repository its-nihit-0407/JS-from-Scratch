"use strict"

let Arr = [
    "Nishidh",
    "Anjali",
    "Riki",
    "Anushka",
    "Nilesh",
]

// let newr = [Arr.entries(val=>{
//     return val[0] == "A" ? val : 1
// })];

let newarr = []

Arr.forEach(element => element[0]=="A" ? newarr.push(element): null);

// console.log(newarr)

let obj = {
    name : "nishidh",
    age : 18,
    marks : 20
};

console.log(Object.entries(obj));

Object.entries(obj).forEach((element => {
    console.log(`${element}`)
}))