// // Arrays in JS
// /*
// it is a collection of elements of the same data type stored in contiguous memory locations.

// in JS , Arras uses numbered indexes

// datatype of array is also an object

// An array is like of object that can store multiple data types thats one of the reason its in Non Primitive Data Type

// Note : Array indexes starts from 0 

// Example of an Array :
// Array gets stored in square brackets [];
// objects gets stored in curly braces or flower brackets is {};

// let arr = [10, "10",true,"false,null,"undefined,"hello",12];
// //          0   1    2      3   4         5        6     7

// */

// let names = ["azhar", "farhan", "syed", "suhail"];
//  //             0        1        2         3

//  //CRUD
//  //Create
//  let names = ["azhar", "farhan", "syed", "suhail"];
//  names.push("suhail");
//  names.unshift("suhail");
//  names.pop();
//  names.shift();
//  names.splice(1,1,"suhail");
//  names.splice(1,0,"suhail");
//  names.splice(1,1);
//  names.splice(1,0);
//  names.splice(1);
//  names.splice(1,1,"suhail","suhail","suhail");
//  names.splice(1,0,"suhail","suhail","suhail");
//  names.splice(1,1,"suhail","suhail","suhail");
//  names.splice(1,0,"suhail","suhail","suhail");
//  names.splice(1,1);





//  // Array methods to perform ADD // Update // Delete
//  // 1. push() : adds an element at the end of the array
//  // 2. unshift() : adds an element at the beginning of the array
//  // 3. pop() : removes an element from the end of the array
//  // 4. shift() : removes an element from the beginning of the array
//  // 5. splice() : removes or adds an element at a specified position in the array
//  // 6. concat() : combines two or more arrays
//  // 7. sort() : sorts the elements of an array in place
//  // 8. reverse() : reverses the order of the elements in an array


//  // Adding ELEMENTS to an Array

//  // 1. unshift() : to add element at first position
//  // 2. push() : to add element at last position

//  let students = ["Azhar", "shamil"];

//  students.unshift("Suhail");
//  console.log(students);

//  students.push(10);
//  console.log(students);

//  // Removing / Deleting

//  // 2. unshift() : adds an element at the beginning of the array
//  // 3. pop() : removes an element from the end of the array

//  let students = ["Azhar", "shamil"];

//  students.shift()
//  console.log(students);

//  students.pop();
//  console.log(students);


//  // index 

//  let arr = [10, "10", true, "hello", "hi"]
//  //               
//  console.log(arr)
//  arr[2]= false
//  console.log(arr);




//  ////////////////////////////////////////////


//  // Dates in JS

// let currentDate = new Date();
// console.log(currentDate); // output : 2025-03-21T09:58:01.201Z
//  // 2025 => year
//  // 03 => month march
//  // 21 => date
//  // 09 => hour
//  // 58 => minute
//  // 01 => second
//  // 201 => millisecond
//  // Z => timezone
//  // UTC+5:30
//  // IST
//  // utc => universal time coordinate

//  // by default the new date gives time in UTC - ISO format

//  // if u r in india use +5:30
//  // if u r in usa use -5:30

//  let date1 = new Date().toDateString();
//  console.log(date1); // fri mar 21 2025

//  let date2 = new Date().toLocaleDateString();
//  console.log(date2); // 21/03/2025

//  let date3 = new Date().toLocaleString();
//  console.log(date3); // 21/03/2025, 9:58:01

//  let date4 = new Date().toString();
//  console.log(date4); // Fri Mar 21 2025 09:58:01 GMT

//  // to get time in your Time zone
//  let date5 = new Date().toLocaleString('en-IN', {timeZone: 'Asia/K
//     olkata'});
//     console.log(date5); // 21/03/2025, 2:28:01
    

//     // Parameters of Date
//     // 1. year
//     // 2. month
//     // 3. date
//     // 4. hour
//     // 5. minute
//     // 6. second
//     // 7. millisecond
//     // 8. timezone
//     // 9. UTC
//     // 10. ISO
//     // 11. locale
//     // 12. options
    
//     // 13. locale options
//     // 14. time zone options
//     // 15. date options
//     // 16. time options
//     // 17. number options