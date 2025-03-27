// Destructoring Object and Array
// Destructoring Object
const person = {
    fname: 'Azhar',
    age: 20,
    city: 'Hyd'
    };

const {fname, age, city} = person; 
// const declare all variables in one line
// take variables of same name as object keys called person 

console.log(fname, age, city); // Azhar 20 Hyd


// Destructoring Array

let arr = [10, 20, 30, 40, 50];
let [a, b, c, d] = arr;    
// const declare all variables in one line
// take variables of same name as array index   
console.log(a, b, c, d); // [10, 20, 30, 40]

/*
1.Complete JS Intro
2.Complete Control Flow
3.Do it all except recursion
4.In Objects Only 1st one
5.In JS Types 
do
array
multi arry
string
for in loop
number

6.In Exception 
do
try catch
throw
modules ==> import / export

// 
Task :

1.Create a New Repo Called revisionJS
private and add me as a collab
2. https://www.programiz.com/javascript/examples
Questions
Do First 20 Questions 
in same repo
*/