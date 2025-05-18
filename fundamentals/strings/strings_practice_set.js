"use strict";

// 1: How do you declare a string in JavaScript?
let str = "Hello World"; // This is a String

// 2: What's the difference between single quotes (`'`), double quotes (`"`) and backticks (`` ` ``)?
let alphabet = "alphabet";
let number = 'number';
let formattedstr = `${number}`;

// 3: How can you find the length of a string?
let length = alphabet.length;
console.log(length); // 8

// 4: How do you access the first character of a string?
let firstchar = alphabet[0];
console.log(firstchar);

// 5: How do you convert a string to uppercase? 
let lower = "nishidh";
console.log(lower.toUpperCase()); // "NISHIDH"

// 6: How do you check if a string includes another sub string? 
console.log(lower.substring())

// 7: How do you find the position of a sub string inside a string? 
console.log(lower.indexOf("s", 2))

// 8: How can you extract part of a string (e.g., first 5 characters)? 
console.log(lower.slice(1,6))

// 9: How do you replace part of a string with something else?
console.log(lower.replace("i", "t"));

// 10: How do you remove whitespace from the beginning and end of a string?
let spacesstr = "  Nishidh  ";
console.log(spacesstr.trim());

// 11: How can you split a string into an array of words?
let forsplit = "Anjali";
console.log(forsplit.split("A"));

// 12: How do you join an array of words back into a single string?
let Anjali = ["A", "n", "j", "a", "l", "i"];
let word = ""
Anjali.forEach(element => {
    word += element
})
console.log(word);

// 13: How can you repeat a string multiple times?
let rep = "repeat";
console.log(rep.repeat(3)) // "repeatrepeatrepeat"

// 14: How can you reverse a string? _(tip: it's a little trickier!)_
let rev = "Nihit";
let reversed = ""
console.log(rev.slice(3,4))
for (let i = rev.length - 1; i >=0; i--){
    reversed += rev.slice(i, i+1);
}
console.log(reversed);

// 15: Write a function that capitalizes the first letter of a string
let for_capita = "nishidh";
let capita = function capita(for_capita){
    return for_capita.replace(for_capita.slice(0,1), for_capita.slice(0,1).toUpperCase());
}

console.log(capita(for_capita));

// 16: . Check if a string is a palindrome (reads the same forward and backward). 
let nan = "Nishidh";

function palindrome(nan){
    let temp = "";
    for (let i = nan.length-1; i >= 0; i--){
        temp += nan.slice(i, i+1);
    }
    console.log(temp);
    return (temp == nan) ? true : false;
}

console.log(palindrome(nan));

// 17: Count the number of vowels in a string. 
let string = "istring";
let count_v = 0
let splited = string.split("")
splited.forEach(letter => {
    let vowels = ["a","e","i","o","u"];
    if (vowels.includes(letter)){
        count_v += 1;
    }
})
console.log(count_v);

// 18: Replace all spaces in a string with `-`
let spacedstr = " nishid h";
console.log(spacedstr.replaceAll(" ", "-"));

// 19: Create a function that returns the number of times a certain character appears in a string.
function count(nic){
    let count_w = "A"
    let count = 0
    nic.split("").forEach(element => {
        if (element == count_w){
            count += 1
        }
    })
    return count
}
console.log(count("AellAo"));

function strength_chk(password) {
    if (password.length >= 8) {
        let special_chr = ["&", "@", "$", "#", "*", "!"];
        let splited = password.split("");
        
        for (let letter of splited) {
            console.log(letter);
            if (special_chr.includes(letter)) {
                return "Strong";
            }
        }
        // If no special character found
        return "Medium";
    } else {
        console.log("hii");
        return "Weak";
    }
}


console.log(strength_chk("Ni1d@23"))
// console.log(strength_chk("Nishsa123"))

// 📚 Practice / Assignments for JavaScript String Mastery

/* Task 1:
 Create a string and use .charAt(), .charCodeAt(), and .codePointAt() to:
 - Get the character at 4th position.
 - Get the ASCII value of 2nd character.
 - Get Unicode of the last character.
 */

 string = "string";
 console.log(string.charAt(3));
 console.log(string.charCodeAt(1));
 console.log(string.codePointAt(string.length-1))

 /* Task 2:
    Use .concat() to merge 3 different strings into a single sentence.
 */

let newstring = " newstring";
let third = " third";
console.log(string.concat(newstring).concat(third));

/*  Task 3:
    Write a function that checks if a string:
    Starts with "Hello"
    Ends with "World"
    (using .startsWith() and .endsWith())
*/

const chkstring = function chkstring(string){
    return string.startsWith("Hello") && string.endsWith("World") ? true : false
}

/*  Task 4:
    Take a string and pad it to the right and left using .padEnd() and .padStart() to reach a length of 20 characters.
*/
const pad20 = function pad20(string, num, sep){
    if (string.length != num){
        let difference = num - string.length;
        string = string + sep.repeat(difference);
        return string;
    }else{
        return string;
    }
}
//shortcut
console.log("Hello".padEnd(20, " "));

/*  Task 5:
    Create a menu generator:
    You have short dish names like "Pasta", "Burger", "Soup".
    Add spaces using .padEnd(15, '.') to make all names align properly.
*/

const menu_gen = function menu_gen(menu_items){
    menu_items.forEach(food => {
        console.log(`${pad20(food.name, 15, ".")}` + `$${food.price}`);
    });
}

const menu_items = [
    {name: "pasta", price: 20},
    {name: "pizza", price: 8},
    {name: "Sphagetti", price: 10},
];

// menu_gen(menu_items);


/*  Task 6:
    Given a user input (string), sanitize it:
    Remove leading/trailing spaces (.trim())
    Make the first letter uppercase and rest lowercase.
    Example:
    Input: " helloWORLD " → Output: "Helloworld"
*/

const sanitize = function sanitize(string){
    let nonsp = string.trim()
    return nonsp.slice(0,1).toUpperCase() + nonsp.slice(1,nonsp.length).toLowerCase()
};

console.log(sanitize(" hellowoeWE "));

/*  Task 7:
    Write a function that repeats a word 10 times using .repeat() but separates each repetition with a dash -.
    Example:
    Input: "Hi" → Output: "Hi-Hi-Hi-Hi-Hi-Hi-Hi-Hi-Hi-Hi"
*/

const rept = function rept(string, num){
    return string.concat("-").repeat(num).slice(0, -1)
};

console.log(rept("hi", 10));

/*  Task 8:
    Use .split() and .join() to reverse the words in a sentence.
    Input:
    "Learn JavaScript with practice"
    Output:
    "practice with JavaScript Learn"
*/

const reverse_8 = function reverse_8(string){
    let reversed = "";
    let words = string.split(" ");
    for (let i = words.length - 1; i >= 0; i--){
        reversed = reversed + String(words.slice(i, i+1)) + " ";
    }
    return reversed;
}

console.log(reverse_8("Learn JavaScript with practice"));

/*  Task 9:
    Create a function that replaces every vowel in a string with *.
    Use .replaceAll() with regex or loops.
    Example:
    Input: "Hello World" → Output: "H*ll* W*rld"
*/

let vowel_rep = function vowel_rep(string, substitute){
    let vowels = ["a","e","i","o","u"];
    let returnable = string;
    string.split("").forEach(alpha => {
        if (vowels.includes(alpha)){
            returnable = returnable.replaceAll(alpha, substitute);
        }
    })
    
    return returnable;
}

console.log(vowel_rep("Hello Worldi", "-"));

/*  Task 10:
    Build a function to validate if a string is well-formed using .isWellFormed().
    Print a custom message:
    "String is clean!" if true
    "Found lone surrogates!" if false
*/

const form = function form(string){
    if (string.isWellFormed()){
        return "String is clean!";
    }else{
        return "Found lone surrogates!";
    }
}

console.log(form("Hello im Nihit"));

/*  Task 11:
    Create an HTML dynamic link generator:
    Use .link() to wrap any URL and text.
    Example: generateLink("Google", "https://google.com")
    Output: <a href="https://google.com">Google</a>
*/

let generateLink = function generateLink(domain, url){
    return domain.link(url);
}

console.log(generateLink("Google", "https://google.com"));

/*  Task 12:
    Write a small regex tool:
    Find all digits inside a messy string using .match() and .matchAll().
    Count how many digits there are.
    Example:
    Input: "Order#123 was placed at 5pm on 4/5/2023"
*/

let messy = function messy(string){
    const num_dig = string.match(/\d/g);
    const len = num_dig ? num_dig.length : 0;
    console.log(num_dig);
    console.log(num_dig.length);
}

messy("Order#123 was placed at 5pm on 4/5/2023");

messy = function messy(string){
    const num_dig = [...string.matchAll(/\d/g)]; // spread operator used to convert iterator into an array
    const len = num_dig ? num_dig.length : 0;
    // let arr = [];
    // num_dig.forEach(element => {
    //     arr.push(element[0]);
    // })
    // console.log(arr);
    // console.log(arr.length);
    let arr = num_dig.map(element => element[0]);
    console.log(arr);
    console.log(arr.length);
}

messy("Order#123 was placed at 5pm on 4/5/2023");

/*  Task 13:
    Use .normalize() to:
    Compare two visually identical Unicode strings that might be encoded differently.
*/

const str1 = "é";             // U+00E9 (single character)
const str2 = "e\u0301";       // 'e' + U+0301 (combining acute accent)

console.log("Raw comparison:", str1 === str2); // false

// Normalize both to the same Unicode form
const normalized1 = str1.normalize('NFC'); // NFC = Normalization Form Composed
const normalized2 = str2.normalize('NFC');

console.log("After normalization:", normalized1 === normalized2); // true



/*  Task 14:
    Emoji counter:
    Emojis often have multiple Unicode points.
    Write a function that counts emojis using .codePointAt() carefully.
*/

const emojico = function emojico(string){

}

/*  Task 15:
    Create a string formatter:
    If a string length > 10, slice it and add "..." at the end using .slice() and .concat().
    Example:
    Input: "JavaScript is Awesome"
    Output: "JavaScript..."
*/

/*
    🎯 Bonus Fun Challenges
    HTML Renderer: Build a function that takes a text and adds:
    .bold(), .italics(), .strike(), .sub(), .sup(), .big(), .small()
    Dynamic Font Colorizer: User enters text + color, return colored string using .fontcolor()
    Anchor Tag Formatter: Create multiple links by mapping a list of URLs through .anchor().
*/