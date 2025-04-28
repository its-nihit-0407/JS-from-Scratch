let str = new String("sNishidhs");

console.log(str.__proto__.anchor("www.youtube.com"));//returns the anchor tag
console.log(str.at(-1)); // returns the element related to that index
console.log(str.big()); // to display the text bigger than the normal text
console.log(str.blink()) // used for blink animation but not supported in modern browsers
console.log(str.bold()) // used to bold the text on web returns <b> tag
console.log(str.charAt(2)) // not supports -ve indexing and return empty str if index out of range
console.log(str.charCodeAt(1)) // returns the ASCII value of that element returns NaN if index out of range
console.log(str.codePointAt(1)); // also give the full unicode of the fancy characters
console.log(str.concat(["--", "Nishidh"])); // concatenation of strings
console.log(String()) // String() is a constructor
console.log(str.endsWith("h")); // returns true and false based on the passed arguments
console.log(str.fixed()); // returns the teletype tt tag , deprecated in HTML5
console.log(str.fontcolor("red")); // returns the font tag
console.log(str.fontsize(2)); // returns the font tag with size attribute
console.log(str.includes("i",1)); // returns true if you find the substring in the string has two parameters substring and position or start index
console.log(str.indexOf("i",2)); // returns the first index of substring from the string
console.log(str.isWellFormed()); // Returns true if this string does not contain any lone surrogates, false otherwise.
console.log(str.italics());// returns the italic tag element
console.log(str.lastIndexOf("h", 2)); // search returns the last occurence index traverse from right to left
console.log(str.link("")); // returns the anchor tag with href attribute
console.log(str.localeCompare("aNishidhs"));
/*
-1 if the string is sorted before the compareString
 0 if the two strings are equal
 1 if the string is sorted after the compareString
*/

console.log(str.match("i"));// [ 'i', index: 1, input: 'Nishidhs', groups: undefined ]
console.log(str.matchAll()); // method returns an iterator of results after matching a string against a regular expression.
console.log(str.normalize()); //The normalize() method of String values returns the Unicode Normalization Form of this string.
console.log(str.padEnd(10, "0")); // pads the give element to the string to make the length of the string like argumented string
console.log(str.padStart(10, "a")); // same as padEnd just pads the elements to the start of the string
console.log(str.repeat(3)); // multiply the strings
console.log(str.replace("i", "a")); // returns a string after replacing the first occurrence of element
console.log(str.replaceAll("i", "a")); // replace of the string
console.log(str.search("h")); // returns the first index of the string
console.log(str.slice(1,7)); // used to slice the strings
console.log(str.small()); // returns the small tag with the string 
console.log(str.split("N")); // same as other split functions
console.log(str.startsWith("i", 5)); // returns true if the strings exist after 2nd argument
console.log(str.strike()); // return strike tag, cuts the text
console.log(str.sub()); // return subscript tag
console.log(str.substr(1)); // returns the substr from the given index
console.log(str.substring(1, 22)); // same as substr has start and end index parameters
console.log(str.sup()); // return the superscript tag
console.log(str.toLocaleLowerCase()) // lowers the string locally
console.log(str.toLocaleUpperCase()); // uppers the string locally
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.toString()); // same as type conversion
console.log(str.trim());// removes the leading an trailing space from the string
console.log(str.trimEnd()); // removes the trailing white spaces
console.log(str.trimLeft()); // removes the leading whitespaces
console.log(str.trimStart()); // removes the leading whitespaces
console.log(str.trimRight()); // removes the trailing whitespaces
console.log(str.valueOf()) // returns the primitive value of object