const accountID = 1232234;
let name = "Nishidh";
var isLoggedIn = false;

//var can be used to declare a variable that can be accessed globally before its declaration
//var is not used in modern javascript
//let and const are used in modern javascript
//let is used to declare a variable that can be changed
name = "Jason";
//const is used to declare a constant variable that cannot be changed
// const will throw an error if you try to change it
console.log(accountID);
console.log(name);      
console.log(isLoggedIn);
console.table({accountID, name, isLoggedIn});

// accountID = 2; // This will throw an error because accountID is a constant
// name = "John"; // This will throw an error because name is a let
// isLoggedIn = true; // This will throw an error because isLoggedIn is a var

