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
console.log([...entry_method])
// Object.keys(b).forEach(element => {
//     console.log(`${keys}: ${arr[keys]}`)
// });
numbers = [1, 2, 3, 4, 5];

// every function implementation
function chkage(age){
    age > 19;
};

console.log(numbers.every(chkage)); //like all in python

let arr = [11,2,2,3,5,6];
// console.log(arr.splice(0,3));
// console.log(arr);

let fr = [2,3,4,5];
let tr = fr.copyWithin(arr); // used to make shallow copy ;

let newaar = [23,4,5,6];
let a = newaar.copyWithin(2,1,1); // select the index replace that element with the selected slice
console.log(a);

// fill method => insert the target at every given index last value is inclusive
let new1 = [1, 2, 3, 4];
// console.log(new1.fill(3, 0, 2));
console.log(new1);

// filter method
let a1 = new1.filter(element => element%2 == 0)
console.log(a1)

// find method
let a2 = [1,2,3,4];
let ft = (element) => {
    return element % 2 == 0;
}
console.log(a2.find(ft)); // return the first 
// 
// 
//findIndex method

let a3 = [ 1, 2, 3, 4];
// these method works vice and versa
console.log(a3.findIndex(ft));
console.log(a3.findLast(ft))

console.log(a3.findLastIndex(ft)) // give the last index that suffice the given condition

// flat method 
let a4 = [1,2,3,4,[32,3],[3,3]]
console.log(a4.flat(1))
console.log(a4.flatMap(element => element%2==0)) // return array boolean of every element that suffice the condition

// forEach method to traverse through every element
a4.forEach(element => {
    console.log(element);
})

// includes method
console.log(a4.includes(2));

// indexOf method
console.log(a4.indexOf(2));

// join methodjoin
console.log([1,2,3].join([2,2,3]));

// keys method
console.log([...a4.keys()]); // returns the indexs of every element

// lastIndexOf method
console.log(a4.lastIndexOf(4));

// map method
let new4 = [2,3,4,5,6,7,8];
console.log(new4.map(element => element%2==0))

// pop method
console.log(new4.pop())
console.log(new4)

// push method
new4.push(8);

// reduce method
const getMax = (a, b) => Math.max(a, b);

let numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1.reduce(getMax));

const users = [
    {id: 1, user: 'Nishidh'},
    {id: 2, user: 'Nehha'},
    {id: 3, user: 'Anushka'},
    {id: 4, user: 'Anushka'},

];
const summation = [1, 2, 3, 4, 5];
let sum = summation.reduce((n1, n2) => {
    n1 = n1 + n2;
    return n1;
}, 1);

console.log(sum);

let user = users.reduce((cred1, cred2) => {
    cred1[cred2.id] = cred2.user;
    return cred1;
}, {});

console.log(user);

// que => use reduce method to traverse over an array and calculate the sum of the factors of the element and store those sum in an array

let quen = [2, 12, 16, 3, 4];


function quet(quen){
    let out = [];
    quen.forEach(element => {
        let factors = [];
        for (let i = 0; i < element; i++){
            if (element % i == 0){
                factors.push(i);
            }
        }
        
        let sum = factors.reduceRight((n1, n2) => { // can be replaced by reduce
            n1 = n1 + n2;
            return n1;
        }, 0)
    
        out.push(sum);
    })

    return out;
    
}

console.log(quet(quen));


// reverse method
let forev = [1, 2, 3, 4, 5];
console.log(forev.reverse()) // just reverse the array elements changes done in the some arr


// shift method
console.log(forev.shift()) // removes and returns the first element of an array, if array is empty then the function will return undefined
console.log(forev)

forev = [1, 2, 3, 4, 5];

// slicing methods
console.log(forev.slice(0,3));

// some method
console.log(forev.some(element => element == 0)) // return true and false based on the condition

// sort method
forev.sort()
console.log(forev)

// splice method
console.log(forev.splice(0, 3, 3));

//toLocaleString
console.log(typeof forev.toLocaleString())

// toReversed
console.log(forev.toReversed());

//toSorted
console.log(forev.toSorted());

// toSpliced
console.log(forev.toSpliced(0, 3, 4));

forev = [1, 2, 3, 4, 5];
//unshift 
console.log(forev.unshift(2)); // returns the new length of an array
console.log(forev)

console.log([...forev.values()])

//with
console.log(forev.wi)