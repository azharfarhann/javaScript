// let arr3 = [10, 20, 30];
// console.log(arr3);
// arr[3] = 50;
// console.log(arr3);


// let arr2 = ["10", 20, ["hello, "history, "bye"], 40, [true, false]]
// console.log(arr2);
// console.log(arr2[2][1]);


// Array methods

// let arr = [1, 2, "hi", "hello", null, false];

// // 1. at() method
// // 2. it takes indexes as parameter
 
// console.log(arr[1]);  // prints the same
// // or
// console.log(arr.at(1)); // prints the same

/// 2. concat() method

//  let arr1 = ["Suhail, "Azahr];
//  let arr2 = ["ishwari", "test"];
//  let arr3 = arr1.concat(arr2);
//  console.log(arr3);


 /// 3. fill() Method

//  let arr4 =["hello", 1 ,2, 3, "bye"];
//  let arr5 = arr4.fill("azhar");
//  console.log(arr5);

// 4. flat() method

// let arr6 = [10, 20, [30,40], [50, 60], [70, 80]];
// console.log(arr6);
// let arr7 = arr6.flat();
// console.log(arr7);

// 5. Includes Method

// let arr8 = ["Shamil", "Azhar", "suhail"];
// let arr9 = arr8.includes("Azhar");
// console.log(arr9);

// 6. indexof Method 


// let arr10 = ["hi", 1, 3, false, null, "Azhar"];
// console.log(arr10.at(5)); // prints azhar
// console.log(arr10.indexOf("Azhar")); // prints index 5
// console.log(arr10.indexOf("suhail")); // prints -1 .since no matching value


// 7. Array. isArray() Method

// checks the array is array or not

// let arr11 = {
//     fname: 'azhar',
//     age: 24
// }
 
// let arr12 = [["Azhar"], 24];

// console.log(Array.isArray(arr11));
// console.log(Array.isArray(arr12));


// 8. join() Method

let arr13 = [23, 24, 45, 6, 7, 35, 76, 343];
// 1. it will take the parameter ("*")
// 2. it will concat i nbtwn all elements
// 3. it will convert to a string


// console.log(arr13.join("Azhar")); // prints anything given ion (" ") value


// 9. lastindexof() method

let arr14 = ["Azhar", "Shamil", "Azhar"];
// console.log(arr14.indexOf("Azhar")); // prints 0 index value from l to r. 
// if we use indexof it will start from left to right
// if we use lastuindexof it will start from right to left

// console.log(arr14.lastIndexOf("Azhar"));  // prints 2 index value from r to l.

// 10. length() Method

let arr15 = [1,2,3,4,5,6,7,8,9,7,56,7,5,66,4,4,55,45,45,5,4];

// console.log(arr15.length); // prints the length 



let myArr = ["Shamil", "Azhar", "Ishwari", "Hello"];
//index        0          1        2          3
// lenght      1          2        3          4

// console.log(myArr[0]);  // prints Shamil
// console.log(myArr[1]);  // prints Azhar

// for(let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);   // prints the original values of indexes starting from index0 to length
// }


11. reverse () method


let arr16 = ["Hello", "Shamil", "Suhail", "Azhar"];

console.log(arr16.reverse());


12. // keys () method

let arr17 = ["Hello", "hi", "azhar"];

let allindex = arr17.keys();
console.log(allindex);

// use for of loop 

for (let index of allindex) {
    console.log(index);
}


// 17. Values Method

let allValues = arr17.values()  // values are elements

for (let values of allvalues) {
    console.log(values);
}
