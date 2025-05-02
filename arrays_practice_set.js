"use strict";
/*  🔰 Beginner Level
    - Create and Access
    - Create an array of 5 colors and print the third one.
    - Print the length of an array.
    - Replace the first element in an array with a new value.
    - Basic Operations
    - Add an element to the end and beginning of an array
    - Remove the last and first element of an array.
    - Find the index of a specific element.
    - Check if an element exists in an array.
    - Looping through Arrays
        - Print all elements using a for loop.
        - Print all elements using forEach.
*/

let arr = [1, 2, 3, 4, 5]; 

let colors = ["Green", "Red", "Yellow", "Silver", "Gold"];
console.log(colors.slice(2, 3));
console.log(colors.length);
colors[0] = "Violet";
console.log(colors);
console.log(arr + colors);
console.log(arr + 1);
console.log(arr + true + 2);
console.log(arr + undefined);

let arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
console.log(arr1);
arr1.unshift(0)
console.log(arr1);

arr1 = [1, 2, 3, 4, 5];
arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);

arr1 = [1, 2, 3, 4, 5];
console.log(arr1.indexOf(2));
console.log(arr1.includes(2));

arr1 = [1, 2, 3, 4, 5];

// from for loop
for (let element in arr1){
    console.log(element + ":" + arr1[element]);
};

// via each loop
arr1.forEach(element => {
    console.log(element);
});

/*
⚙️ Intermediate Level
Array Methods
    Use .map() to square each number in an array.
    Use .filter() to keep only even numbers.
    Use .reduce() to find the sum of all numbers.
    Use .sort() to sort an array of numbers ascending and descending.
    Use .find() to get the first element greater than 10.

Splice and Slice
    Use .slice() to get the first 3 elements.
    Use .splice() to insert elements in the middle of an array.

String and Array Conversion
    Convert a comma-separated string into an array.
    Convert an array into a dash-separated string.

Multidimensional Arrays
    Create a 2D array and access an element.
    Flatten a 2D array to 1D using .flat().
*/

// map method
arr1 = [1, 2, 3, 4, 5];
let new1 = arr1.map(element => element * element);
console.log(new1)

// filter method
let even = arr1.filter(element => element % 2 ==0);
console.log(`Even numbers in the array: ${even}` );

// reduce method
arr1 = [1, 2, 3, 4, 5];
let newt = arr1.reduce((n1, n2)=>{
    n1 = n1 + n2;
    return n1
}, 0);

console.log(newt)

arr1 = [1, 2, 3, 4, 5];
// sort -> ascending
console.log(arr1.sort((a, b) => a-b));
// sort -> descending
console.log(arr1.sort((a, b) => b-a));
console.log(arr1);

//  to get the first element greater than 10
arr1 = [1, 2, 3, 4, 5, 12];
console.log(arr1.find(element => element > 10));

//Splice and Slice
arr1 = [1, 2, 3, 4, 5, 12];
console.log(arr1.slice(0,3));
arr1.splice(Math.ceil(arr1.length/2),0, "Nt")
console.log(arr1)

//String and Array Conversion
let str = "1,2,3,4";
console.log(Array(str))

arr1 = [1, 2, 3, 4, 5, 12]
console.log(arr1.join("-"));

// Multidimensional Arrays
let Multidimensional = [1, 2, 3, 4, 5, [3, 4], [3, 4]];
console.log(Multidimensional[Multidimensional.length-1][1])

console.log(Multidimensional.flat(1)) // flatened

/*
🚀 Advanced Level
    Complex Transformations
        Group numbers in an array by even and odd.
        Remove duplicates from an array.
        Find the intersection of two arrays.
        Rotate an array by k steps to the right.
        Find the second largest number.

    Real-World Use Cases
        Given an array of objects (users), sort them by age.
        Extract names from an array of objects.
        Merge two arrays and remove duplicates.
        Count occurrences of elements in an array.
    
    Challenges
        Write a function to chunk an array into subarrays of length n.
        Reverse an array without using .reverse().
        Implement your own .map(), .filter(), or .reduce().
*/

// Complex Transactions
let numbers = [1, 3, 2, 6, 4, 5]

let grouped = numbers.reduce((n1, n2) => {
    if (n2 % 2 == 0){
        n1.even.push(n2);
    }else{
        n1.odd.push(n2);
    }

    return n1;

}, {even:[], odd: []});

console.log(grouped);

let duplicates = [2, 3, 4, 5, 4, 6, 3, 9, 8]
let sortedD = [];

duplicates.forEach(element => {
    if (!(sortedD.includes(element))){
        sortedD.push(element);
    }else{
        let hehe = "hehe";
    }
});

console.log(sortedD);

let arr2 = [3,4,8,2];
let arr3 = [3,9,1,8];

function _common(arr1, arr2){
    let common = [];
    for (let element in arr1){
        if (arr2.includes(arr1[element])){
            if (!(common.includes(arr1[element]))){
                common.push(arr1[element]);
            } 
        }
    }
    return common
}

console.log(_common(arr2, arr3))

// Rotate an array by k steps to the right.

function rotate(nums, k){
    const len = nums.length;
    k = k % len;
    nums.unshift(...nums.splice(len-k, k));
}

let arr4 = [1,2,3,4,5,6]
rotate(arr4, 4)
console.log(arr4)

function secondlar(arr){
    let max = arr.reduce((a, b) =>{
        return a > b ? a : b
    })

    arr.splice(arr.indexOf(max), 1);

    let secondmax = arr.reduce((a, b) =>{
        return a > b ? a : b
    })

    return secondmax
    // arr.sort((a, b) => b - a)
    // return arr[1];
}

console.log(secondlar([1,2,3,4,5,6]))

//  Real-World Use Cases
// Given an array of objects (users), sort them by age

let people = [
    {age: 16, name: "Anushka"},
    {age: 12, name: "John"},
    {age: 17, name: "SpongeBOB"},
    {age: 11, name: "Aditya"},
    {age: 9, name: "Shydev"},
]

people.sort((a, b) => a.age - b.age);

console.log(people)

// Extract names from an array of objects.
let sorted = [];
people.forEach(element => {
    sorted.push(element.name);
})
console.log(sorted)

// Merge two arrays and remove duplicates.
let first = [2, 4, 5, 7, 2];
let second = [3, 4, 5, 0, 1];
let merge = [...first, ...second];
sorted = [];
merge.forEach(element => {
    if (!(sorted.includes(element))){
        sorted.push(element);
    }
})
console.log(sorted)

// Count occurrences of elements in an array.
let foroccu = [1,2,3,4,5,2,3,5,4,3,24,5,45,6,2,1];
let occurrences = {};
foroccu.forEach(n => {
    if (occurrences[n]){
        occurrences[n] += 1;
    }else{
        occurrences[n] = 1;
    }
})
console.log(occurrences)

// Challenges
//  Write a function to chunk an array into subarrays of length n.
let chunk = [1,2,3,4,5,6,7];

function subarrays(chunk, n){
    if (n<=0) throw new Error("Chunk size must be greater than 0");
    
    let result = [];
    for (let i = 0; i < chunk.length; i+=n){
        result.push([...chunk.slice(i, i+n)]);
    };

    return result;
}

console.log(subarrays(chunk, 1))

// Reverse an array without using .reverse().
let forrev = [1,2,3,4,5];
let tick = forrev.reduceRight((n1, n2) => {
    n1.push(n2);
    return n1
}, []);

console.log(tick);

// Implement your own .map(), .filter(), or .reduce().
// map function implementation

function mapalt(arr, callback){
    let result = [];
    for (let i=0; i < arr.length; i++){
        result.push(callback(arr[i]))
    }
    return result
}

let new2 = [1,2,3,4]
function dmap(x){
    return x*2
}
let doubled = mapalt(new2, dmap);
console.log(doubled)

// filter method
function filteralt(arr, callback){
    let result = [];
    for (let i=0; i<arr.length; i++){
        if (callback(arr[i])){
            result.push(arr[i]);
        };
    };
    return result;
}

console.log(filteralt([1,2,3,4,5], x => x%2==0))

// reduce method

function reducealt(Arr, Callback, InitialValue){
    let accumulator = InitialValue
    for (let i=0; i<Arr.length; i++){
        accumulator = Callback(accumulator, Arr[i], i, Arr); 
    };
    return accumulator;
}

console.log(reducealt([1,2,3,4,5], (acc, curr) => acc + curr, 0));