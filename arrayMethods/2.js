// 19. filter() Method
// it returns the array of elements that pass the condition. (All elements that pass the condition)
// it will not change the original array
// it will give the new array
//
// let arr16 = [1,2,3,4,5,6,7,8,9,10];
// let newarr = arr16.filter((elem) => {
//     return elem > 5;
// });    
// console.log(newarr);
// console.log(arr16);
/////
// let arr = [1,2,3,4,5,6,7,8,9,10];

// let check = arr.filter((x) => {
//     return x > 5;
// }
// )
// console.log(check);
// console.log(arr);
/////////////////////////////

// 20. find() Method
//  returns the first element that passes or satisfies the condition
// it will not change the original array
// it will give the first element that passes the condition
// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let check1 = arr1.find((elem) => {
//     return elem > 5;
// });
// console.log(check1);
// console.log(arr);


// 20.  findIndex() Method
// it returns the index of the first element that passes or satisfies the condition
// it will not change the original array
// it will give the index of the first element that passes the condition
// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let check1 = arr1.findIndex((elem) => {
//     return elem > 5;
// });
// console.log(check1);
// console.log(arr1);
//

// 21. toString() Method
// it will convert the array to a string

// let arr2 = [1, 2, 3, "hi"];
// let checks = arr2.toString();
// console.log(checks, typeof checks);

// 22. sort() Method
// it will sort the array in ascending order

// let num = [1, 2, 8, 4, 6, 9];
// let sorted = num.sort();
// console.log(sorted);

// let num1 = [ 11, 12, 45, 76, 34];
// clg = (num1.sort(a, b) => a -b)) // ascending order
// clg = (num1.sort(a, b) => b -a)) // descending order

// 23. slice() Method
// it will return the part of the array

// let num = [10, 20, 30,40];
//             0  1   2  3 ==> index (start position)
//             1  2   3  4 ==> length (end position)     
    // slice(index, length)
    // console.log(num.slice(1, 3))  // 20, 30

// 24. splice() Method
// it will change the original array
// it will remove the elements from the array
// it will add the elements to the array

// remove the elements
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
//index               
//length

// how to remove the elements

// let removed = fruits.splice(1, 4);
// console.log(removed); // Orange, Apple, Mango
// console.log(fruits); // Banana

// how to add the elements
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
//index            0         1       2        3
//length           1          2       3        4
// 3 steps to add the elements
// index
// how many elements to remove
// elements to add

// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits); // Banana, Orange, Lemon, Kiwi, Apple, Mango    

// replace the elements
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits); // Banana, Orange, Lemon, Kiwi, Mango

// some() Method
//  checks if at least one element passes the condition
// it will return true or false

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let everycheck = nums.every((x)) => {
//     return x % 2 == 0 ;
// })
c//onsole.log(everycheck); // false

let checkOnlyElement = nums.some((x) => {
    return x % 2 == 0;
}
)
//console.log(checkOnlyElement); // true


// 26. reduce() Method
// it will reduce the array to a single value
// it will not change the original array
// it will give the single value

// let num = [1, 2, 3, 4, 5];
// let sum = num.reduce((start, curr) => {
//  return start + curr;
// }, 0);
//console.log(sum); // 15

// start    current value ==> 0 + 1 = 1
// 1        2 ==> 1 + 2 = 3
// 3        3 ==> 3 + 3 = 6
// 6        4 ==> 6 + 4 = 10
// 10       5 ==> 10 + 5 = 15

// 27. reduceRight() Method
// it will reduce the array to a single value & it will start from the right side
// it will not change the original array
// it will give the single value
// let num = [1, 2, 3, 4, 5];
// let sum = num.reduceRight((start, curr) => {
//     return start + curr;
// }, 0);
// console.log(sum); // 15

// 28. forEach() Method
// it will iterate the array
// calls the function for each element
// is not executed for empty elements
// it will not return anything
// it will not change the original array
// let num = [1, 2, 3, 4, 5];
// num.forEach((x) => {
//     console.log(x);
// });  // 1, 2, 3, 4, 5    

// 29. map() Method
// it will iterate the array
// it will return the new array
// it will not change the original array
// let num = [1, 2, 3, 4, 5];
// let newarr = num.map((x) => {
//     return x * 2;
// });
// console.log(newarr); // 2, 4, 6, 8, 10

