/*
🧠 Basic Level (Understanding Object Syntax & Access)
    - Create an object person with name, age, and city properties.
    - Access and print the name and city of the person.
    - Add a new property profession to the person object.
    - Update the age property of the person.
    - Delete the city property.
    - Check if the property name exists in the object.
    - Use a for...in loop to print all keys and values in the object.
*/

// - Create an object person with name, age, and city properties.
let person = {
    name: 'Jackson',
    age: 32,
    city: 'America',
};

// - Access and print the name and city of the person.
console.log(person.name);
console.log(person.city);

// - Add a new property profession to the person object.
// 2 Methods
person["marks"] = 20;
person.new = "new"
console.log(person)

// - Update the age property of the person.
person.age = 23;
console.log(person.age);

// - Delete the city property.
delete person.city;
console.log(person.city); // undefined

// - Check if the property name exists in the object.
console.log(person.name ? true : false);

// - Use a for...in loop to print all keys and values in the object.
for (let per in person) {
    console.log(per, person[per]);
}

/*
🔁 Intermediate Level (Nested Objects & Arrays)
Create an object student with:

{
  name: "Alice",
  grades: { math: 90, science: 85 },
  hobbies: ["reading", "cycling"]
}
    Access the science grade.
    Add a new hobby to the list.
    Change the math grade to 95.

- Write a function printObject(obj) that prints all properties and values of any object (including nested ones).

Create an array of objects users:
[
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" }
]
    Write code to print all names.
    Find the user with id = 2.
    Delete the user with id = 3.
*/

let student = {
    name: "Alice",
    grades: { math: 90, science: 85 },
    hobbies: ["reading", "cycling"]
}

// Access the science grade.
console.log(student.grades.science);

// Add a new hobby to the list.
student.hobbies.push("coding");
console.log(student.hobbies);

// Change the math grade to 95.
student.grades.math = 95;
console.log(student)

// - Write a function printObject(obj) that prints all properties and values of any object (including nested ones).
function printObject(obj) {
    for (let elem in obj) {
        console.log(elem, obj[elem]);
    }
}

printObject(student);

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
]

//  Write code to print all names.
users.forEach(user => {
    console.log(user.name);
})

//  Find the user with id = 2.
users.forEach(user => {
    if (user.id === 2) {
        console.log(user.name);
    }
})

//  Delete the user with id = 3.
users.forEach(user => {
    if (user.id === 3){
        delete users[users.indexOf(user)]
        console.log(users)
    }
})

/*
⚙️ Functional Challenges
    Write a function cloneObject(obj) that returns a shallow copy of the object.
    Write a function mergeObjects(obj1, obj2) that merges two objects into one.
    Write a function countKeys(obj) that returns the number of keys in the object.
    Write a function isEmpty(obj) to check if an object has no properties.
*/

function cloneObject(obj) {
    let newObj = {};
    for (let elem in obj){
        newObj[elem] = obj[elem];
    }
    return newObj;
}

console.log(cloneObject(student))

function mergeObjects(object1, object2) {
    for (let elem in object2) {
        object1[elem] = object2[elem];
    }
    return object1;
}

console.log(mergeObjects(person, student))

function Countkeys(obj){ return Object.keys(obj).length; }

console.log(Object.keys(person))
console.log(Countkeys(person))

function isEmpty(obj) { return obj.length === 0 }

console.log(isEmpty(person))

/*🧩 Advanced Use Cases
    Define a library object with books as keys and each book containing details like author, year, and price.
    Create a createUser(name, age) function that returns a new user object.
    Use Object.keys(), Object.values(), and Object.entries() on a sample object.
    Write a function deepClone(obj) to deeply clone a nested object.
    Create a function groupBy(arr, key) that groups objects in an array by a specific key.
*/

let library = {
    "The Hidden Hindu" : {
        author : "Akshat Gupta",
        year   : 2022,
        price  : 230,
    }
}

function createUser(name, age) {
    let newUser = {};
    newUser.name = name;
    newUser.age = age;
    return newUser;
}

console.log(createUser("Nihit", 18))

console.log(Object.keys(library));
console.log(Object.values(library));
console.log(Object.entries(library));

// - Write a function deepClone(obj) to deeply clone a nested object.
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Array) {
        return obj.map(item => deepClone(item));
    }

    if (obj instanceof Date){
        return new Date(obj.getTime());
    }

    const newOb = {};
    for (let elem in obj){
        if (obj.hasOwnProperty(elem)) {
            newOb[elem] = obj[elem];
        }
    }

    return newOb;
}

console.log(deepClone([1, 2, 3, 4]));

// Create a function groupBy(arr, key) that groups objects in an array by a specific key.
function groupBy(arr, key) {
    return arr.reduce((result, obj) => {
        const groupkey = obj[key];
        if (!result[groupkey]) {
            result[groupkey] = [];
        }
        result[groupkey].push(obj.name);
        return result;
    }, {})
}

const data = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" },
    { name: "Charlie", role: "admin" },
    { name: "David", role: "user" },
    { name: "Eve", role: "guest" }
];

const grouped = groupBy(data, 'role');
console.log(grouped);

