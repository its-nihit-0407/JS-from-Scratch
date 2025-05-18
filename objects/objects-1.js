// Objects part1

// objects in js

// singletion => when objects created with constructor
// Object.create()

// object literals
const mysym = Symbol("key1")


const JsUser ={
    name: "nishidh",
    age: 18,
    gmail: "nishidh@google.com",
    // to define a symbol in object
    [mysym]: "dkey1",
    location: "Jaipur",
    isloggedIN: "false",
    lastloginDays: ["Monday", "Saturday"]
}

// by default keys in string from


//access keys
console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser[mysym])

// freeze() to stop modification in js

JsUser.age = 12
console.log(JsUser)
// Object.freeze(JsUser) // changes will not propogate after this
JsUser.age = 13
console.log(JsUser)

JsUser.greeting = function () {
    console.log(`Hello, ${this.name}`) // String interpulation
}

console.log(JsUser.greeting())

// 

