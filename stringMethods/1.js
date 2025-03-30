// String Methods

// 1. charAt()

 // Give me index ==> return Value

 //let str = "Hello World!";
    //console.log(str.charAt(0)); // H
    //console.log(str.charAt(6)); // W


// 2. concat()
// The concat() method is used to join two or more strings.

// let a1 = "Hello";
// let a2 = "World!";
// let result = a1.concat(" ", a2, " azhar" );
// console.log(result); // HelloWorld! azhar

// 3. endsWith()
/// returns true if a string ends with a specified value, otherwise false.
/// it only checks the end of the string

// let str = "Hello World!";

// let check = str.endsWith("World!");
// console.log(check); // true

// let check = str.endsWith("World");
// console.log(check); // false

// 4. includes()
/// it checks anyword in the string

// let str = "Hello World!";
// let check = str.includes("World");
// console.log(check); // true

// let check = str.includes("World", 7);
// console.log(check); // false

// 5. indexOf()
/// opposite of charAt() 
/// give me Value ==> returns index 

// let str = "Hello World!";
// let check = str.indexOf("World");
// console.log(check); // 6    (index)

// let check = str.indexOf("World", 7);
// console.log(check); // -1 ()

// 6. lastIndexOf()
/// gives right to left index
/// give me Value ==> returns index

// let str = "Hello World!";
// let check = str.lastIndexOf("World");
// console.log(check); // 6

// let check = str.lastIndexOf("World", 7);
// console.log(check); // 6

// 7. length 
// returns the length of the string
// length starts from 1

// let str = "Hello World!";
// console.log(str.length); // 12

8.// padEnd()
//  pads the current string to the end with a given string until the resulting string reaches the given length.
// padding is applied from the end of the current string.

//  let str = "Hello";
// console.log(str.padEnd(10, "*")); // Hello*****

// 9. padStart()
// padding is applied from the start of the current string.

// let str = "Hello";
// console.log(str.padStart(10, "*")); // *****Hello

// 10. repeat()
// returns a new string with a specified number of copies of the string it was called on.

// let str = "Hello";
// console.log(str.repeat(2)); // HelloHello

// 11. replace()
// replaces a specified value with another value in a string.

// let str = "Hello World!";
// clg(str.replace("World", "Azhar")); // Hello Azhar!

// 12. slice()
// extracts a part of a string and returns a new string.   

// let str = "Hello" ;
// index      01234
// length      12345
// console.log(str.slice(1, 5)); // ello

// 13. split()
// splits a string into an array.
// pass the value where you want to split the string

// let str = "Hello World!";
// let result = str.split(" ");
// console.log(result); // ["Hello", "World!"]

// 14. startsWith()
// gives true or false output
// returns true if a string starts with a specified value, otherwise false.
// it only checks the start of the string

// let str = "Hello World!";
// let check = str.startsWith("Hello");
// console.log(check); // true

// let check = str.startsWith("World");
// console.log(check); // false

// 15. tolowerCase()
// converts a string to lowercase letters.

// let m1 = "HELLO WORLD!";
// console.log(m1.toLowerCase()); // hello world!

// 16. toUpperCase()
// converts a string to uppercase letters.

// let m1 = "hello world!";
// console.log(m1.toUpperCase()); // HELLO WORLD!

// 17. trim()
// removes whitespace from both ends of a string.

// let str = "       Hello World!       ";
// console.log(str.trim()); // Hello World!

// 18. trimEnd()
// removes whitespace from the end of a string.

// let str = "       Hello World!       ";
// console.log(str.trimEnd()); //        Hello World!

// 19. trimStart()
// removes whitespace from the start of a string.

// let str = "       Hello World!       ";
// console.log(str.trimStart()); // Hello World!

// 20. substring()
// extracts characters from a string between two specified indices.

// let str = "JavaScript";
// index      0123456789
// length     12345678910 
// console.log(str.substring(2, 6)); // vaSc

// How to add a new line in a string?
// let str = "Hello\nWorld!";
// console.log(str); // Hello
//                   // World!








// 20. valueOf()
// returns the primitive value of a string object.

// let str = new String("Hello World!");
// console.log(str.valueOf()); // Hello World!


let a = new Number(10)

// let a = 10;
console.log(15 - a) 










