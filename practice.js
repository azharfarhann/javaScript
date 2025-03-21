/*
1. Console.log & Comments- Write a program that logs "Hello, World!" in the console. Add a single-line and multi-line comment
 explaining the code.
 */
// This is a single-line comment explaining the code
// console.log("Hello, World!"); // This is a multi-line comment explaining the code

///////////////////////////

// 2. Variables & Data Types- Declare variables of all primitive data types in JavaScript and log their types using `typeof`.

// let num = 10;
// let str = "Hello";
// let isAlive = true;
// let isNull = null;
// let isUndefined = undefined;


// console.log(typeof num, typeof str, typeof isAlive, typeof isNull, typeof isUndefined);
    
///////////////////////////

//  3. Type Conversions- Convert the string `"123"` into a number and add 10 to it. Log the result and its type.

// let str = "123"
// str = 123
// console.log(str + 10, typeof str);


/////////////////////////////

//  4. Conditional Statements- Write a program that checks if a number is positive, negative, or zero.

// let num = 10;
// if (num > 0) {
//     console.log("The number is positive");
// } else if (num < 0) {
//     console.log("The number is negative");
// } else {
//     console.log("The number is zero");
// }

////////////////////////////

//  5. Loops- Print all numbers from 1 to 10 using a `for` loop.
   
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

////////////////////

//  6. Template Literals- Use a template literal to log a greeting message: "Hello [YourName], Welcome to JavaScript!".
 
//  let name = "Azhar";
//  let age = 25;
//  console.log(`Hello! I am ${name}, and I am ${age} years old`);

//////////////////

//  7. Functions- Write a function that takes a name as input and logs a welcome message
//  function Azhar() {
//     console.log("Welcome! I am practising JavaScript");
//  }
//  Azhar();

 /////////////////

//  8. Objects- Create an object representing a book with properties: title, author, and year. Log each property.
// let book = {
//     title: "JavaScript",
//     author: "Azhar",
//     year: 2022,
// };
// console.log(book.author);

////////////////////

//  9. Arrays- Create an array of five numbers and log the third number.

// let numbers = [12, 13, 14, 15, 16];
// console.log(numbers[2]);

//////////////////

//  10. Date & time - Write a program to display the current  date and time.
// let Date = function(){
// console.log(Date); 
// }
// Date(); // Output: Current Date and Time

///////////////////

// // INTERMEDIATE-LEVEL QUESTIONS
// 1. Scoping & Variables- Demonstrate the difference between `var`, `let`, and `const` with examples of block scope.
//  var  a= 10;
//  var  a= 20;
// console.log(a); // output: var a can be redeclared n reassigned
// // let b = 10;
//   b = 20;
// console.log(b); // output:let b cannot be redeclared but can b reassigned
// const c = 10;
// console.log(c); // output: const c cannot be redeclared n reassigned

////////////////////////

//  2. Type Conversions- Write a program that takes input as a string and converts it to a boolean using explicit conversion.

//  let str = "10";
//  let bool = Boolean(str);
//  console.log(bool); // output: true

 /////////////////////
// let str = "20";
// let num = Number(str);
// console.log(num, typeof num);///// string to number

/////////////////////
 // let num = 20;
 // let str = String(num);
 // console.log(str, typeof str); // number to string
 /////////////////////

//  3. Operators- Write a program that checks if a number is divisible by both 3 and 5 using logical operators.

// let num = 15;
// let isDivisibleBy3 = num % 3 === 0;
// let isDivisibleBy5 = num % 5 === 0;
// let isDivisibleByBoth = isDivisibleBy3 && isDivisibleBy5;
// console.log(isDivisibleByBoth); // output: true

/////////////////////

//  4. Nested If-Else- Write a program that grades a student based on their marks (e.g., >90: A, >75: B, >50: C, <=50:
//  F).
// let marks = 85;
// if (marks > 90) {
//     console.log("Grade: A");
//     } else if (marks > 75) {
//         console.log("Grade:  B");
//         } else if (marks > 50) {
//             console.log("Grade: C");
//             } else {
//                 console.log("Grade: F");
//                 }
                // output: Grade: B
                /////////////////////////

//  5. Loops
// - Use a `while` loop to find the sum of the first 10 natural numbers.
 // let sum = 0;
 // let i = 1;
 // while (i <= 10) {
 //     sum += i;
 //     i++;
 // }
 // console.log(sum); // output: 55

 ////////////////////
 
    // let i = 1;
    // while (i <= 5) {
    //     console.log(i);
    //     i ++
    // }
    /////////////////////

    // let a = 5;
    // console.log(a++);
    // console.log(a);

    ///////////////////////







//  6. Recursion- Write a recursive function to calculate the factorial of a number.
//  7. Default Parameters- Create a function that calculates the area of a rectangle. If only one parameter is provided, assume
//  it's a square.
//  8. Objects & CRUD- Add a new property `publisher` to a book object, update the `year`, and then delete the `author`.
//  9. Array Methods- Write a program to sort an array of numbers in ascending order using `sort`.
//  10. Try-Catch Block- Write a program to parse a JSON string. If parsing fails, catch and log the error.
//  Advanced-Level Questions
//  1. Hoisting- Write a program to demonstrate function and variable hoisting. Explain the output.
//  2. Arrow Functions- Write an arrow function to check if a given number is prime.
// 3. IIFE- Create an IIFE that logs the square of a number