// Dates

let myDate = new Date();
console.log(myDate); // Current date and time

// toString() method
console.log(myDate.toString()); // Converts date to string
/*
    {<day> <month> <year> <hour>:<minute>:<second> GMT+<timezone offset>}
    {Mon Oct 23 2023 14:30:00 GMT+0530 (India Standard Time)}
*/

// toDateString() method
console.log(myDate.toDateString()); // Converts date to string without time
/*
    {<day> <month> <year>}
    {Mon Oct 23 2023}
*/

// tolocalString() method
console.log(myDate.toLocaleString()); // Converts date to string in local format
/*
    {<day>/<month>/<year> <hour>:<minute>:<second>}
    {23/10/2023 14:30:00}
*/

// tolocalDateString() method
console.log(myDate.toLocaleDateString()); // Converts date to string in local format
/*
    {<day>/<month>/<year>}
    {23/10/2023}
*/

// tolocalTimeString() method
console.log(myDate.toLocaleTimeString()); // Converts date to string in local format
/*
    {<hour>:<minute>:<second>}
    {14:30:00}
*/

// toISOString() method
console.log(myDate.toISOString()); // Converts date to string in ISO format
/*
    {<year>-<month>-<day>T<hour>:<minute>:<second>Z}
    {2023-10-23T14:30:00.000Z}
*/

console.log(typeof myDate); // object
console.log(myDate instanceof Date); // true
console.log(myDate.getTime()); // Returns the number of milliseconds since January 1, 1970

// createmydate

// let createmydate = new Date(2025, 1, 23);
let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myUtcDate = new Date(Date.UTC(2023, 0, 23, 5, 3));
myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate);
console.log(myCreatedDate.toString())

let myTimeStamp = Date.now() // in milli sec
console.log(myTimeStamp);
console.log(myCreatedDate.getUTCFullYear())

// 
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.toString())

// `${newDate.getDay()} and the time `

let a = newDate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(a)
