// Arrays in JS
/*
it is a collection of elements of the same data type stored in contiguous memory locations.

in JS , Arras uses numbered indexes

datatype of array is also an object

An array is like of object that can store multiple data types thats one of the reason its in Non Primitive Data Type

Note : Array indexes starts from 0 

Example of an Array :
Array gets stored in square brackets [];
objects gets stored in curly braces or flower brackets is {};

let arr = [10, "10",true,"false,null,"undefined,"hello",12];
//          0   1    2      3   4         5        6     7

*/

let names = ["azhar", "farhan", "syed", "suhail"];
 //             0        1        2         3

 //CRUD
 //Create
 let names = ["azhar", "farhan", "syed", "suhail"];
 names.push("suhail");
 names.unshift("suhail");
 names.pop();
 names.shift();
 names.splice(1,1,"suhail");
 names.splice(1,0,"suhail");
 names.splice(1,1);
 names.splice(1,0);
 names.splice(1);
 names.splice(1,1,"suhail","suhail","suhail");
 names.splice(1,0,"suhail","suhail","suhail");
 names.splice(1,1,"suhail","suhail","suhail");
 names.splice(1,0,"suhail","suhail","suhail");
 names.splice(1,1);





 // Array methods to perform ADD // Update // Delete
 // 1. push() : adds an element at the end of the array
 // 2. unshift() : adds an element at the beginning of the array
 // 3. pop() : removes an element from the end of the array
 // 4. shift() : removes an element from the beginning of the array
 // 5. splice() : removes or adds an element at a specified position in the array
 // 6. concat() : combines two or more arrays
 // 7. sort() : sorts the elements of an array in place
 // 8. reverse() : reverses the order of the elements in an array


 // Adding ELEMENTS to an Array

 // 1. unshift() : to add element at first position
 // 2. push() : to add element at last position

 let students = ["Azhar", "shamil"];

 students.unshift("Suhail");
 console.log(students);

 students.push(10);
 console.log(students);

 // Removing / Deleting

 // 2. unshift() : adds an element at the beginning of the array
 // 3. pop() : removes an element from the end of the array

 let students = ["Azhar", "shamil"];

 students.shift()
 console.log(students);

 students.pop();
 console.log(students);


 // index 

 let arr = [10, "10", true, "hello", "hi"]
 //               
 console.log(arr)
 arr[2]= false
 console.log(arr);