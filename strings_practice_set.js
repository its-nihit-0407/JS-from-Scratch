
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
    const vowels = ["a","e","i","o","u"];
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
