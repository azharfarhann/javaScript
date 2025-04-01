// Array Methods
// let arr =[10, 20,30];
// console.log(arr);
// arr = [450];  // updated value 
// console.log(arr); 

//1. at()
// it takes index as parameter and prints the value

// let arr =["hi", "azhar", true,3,45];
// console.log(arr.at(2));

// let arr =["hello", true, 34,56,"azha123"];
// console.log(arr.at(4));

// let arr = ["123",false,2("azhar")];
// console.log(arr.at(2));

//2. concat()
// joins arrays

// let str =[1,2,3];
// let str2 = [4,5,"azhga"];
// console.log(str.concat(str2));

// let str = [1,"azha22",true,"azghae"];
// let str2 = [2,3,3];
// console.log(str.concat(str2));

3. //fill()
// fills the array with a value

// let arr =[1,2,3,"azhar"];
// console.log(arr.fill("replace"));

// let arr =[true, false, 98];
// console.log(arr.fill(null));
  

//4. flat()

// let arr = ["azhar",true,[24]];
//   console.log(arr.flat());

// let arr = [24, 45,["azhar"][23]];
// console.log(arr.flat());

//5. includes()
// checks if the array has the value    


// let arr =[1,2,2,3];
// console.log(arr.includes(3));

// let arr = ["azhar", true, 123,"34"];
// console.log(arr.includes(true));

// let arr =["azhar", "hello","122",23];
// console.log(arr.includes("hello"));

// let arr = ["azhar12", "hello",345, " "];
// console.log(arr.includes(" "));

// let arr =["azha12",445];
// console.log(arr.includes("azha1"));

//6. indexOf()
// returns the index of the first occurrence of the value
// if the value is not found, it returns -1

// let arr = ["ahzatr",567,true];
// console.log(arr.indexOf(3));

// let arr =["az12",567,"567"];
// console.log(arr.indexOf("az12"));

// let arr = ["1233","azhar",true];
// console.log(arr.indexOf("123"));

//7. lastIndexOf()
// returns the index of the last occurrence of the value
// if the value is not found, it returns -1

// let arr = ["azhar",123,"azhar"];
// console.log(arr.lastIndexOf("azhar"));

// let arr=[123,231,231];
// console.log(arr.lastIndexOf(231));

//8. Array.IsArray()
// true  or false if value is array

// let arr = ["azhar",123];
// console.log(arr.Array.isArray()); // ASK SIR?

//9. join()
// returns a string with all elements of the array
// separated by a specified separator   
// if no separator is specified, it uses a comma

// let arr = ["azhar",123,"azhar"];
// console.log(arr.join(" "));

// let arr = ["azhar",123,"azhar"];
// console.log(arr.join(""));

// let arr = ["azhar",123,"azhar"];
// console.log(arr.join("hello", "hi"));

// let arr =["azhar  ", "123",true];
// console.log(arr.join(false));

// let arr = ["azhar",123];
// console.log(arr.join("  "));

//10. length()

// let arr =[12,12,3,4,5,565,6,6767,75];
// console.log(arr.length);

// let arr =["azha", 12,true,22];
// console.log(arr.length);

//11. 

// let arr =[1,2,3];
// let arr2 =[4,5,6];
// console.log(arr2.fill(1,2,3)); // ASK SIR???


// let arr = ["Shamil","Azhar",10,true,null,undefined];

// console.log(arr.fill("Suhail"))



// let str = "Md Suhail Ali";
// console.log(str.replace("Ali","Roushan"))

// let nums = [1,2,3,4,5,6,7,8,10];
// console.log(nums.fill("100")) // fill === replaceall with one value


// let arr1 = [10,20,[30,40],[50,60],[70,80]]
// ///         0  1  2[0] 2[1]     
// console.log(arr1[2][0])

// let arr2 = [10,40];
// let arr3= {
//   name:'suhail',
//   age:22
// }

// console.log(Array.isArray(arr2))
// console.log(Array.isArray(arr3))

// 19. filter()
// returns array of elements that passthe condition
// wont change the original array

// let arr = [1,2,3,4,5,6,7,8];   
// console.log(arr.filter((ele) => ele % 2 === 0))  
// console.log(arr) // original array wont change   


// let arr = [1,2,3,4,45,54,65];
// console.log(arr.filter((ele) => ele > 2 ));

// let arr =[10,34,67,30];
// console.log(arr.filter((x) => x > 30)); 
// console.log(arr);

// let arr =["azhar", "34", true,20];
// console.log(arr.filter((ele) => typeof ele == "number")); // returns array of numbers

// 20. find()
// returns first element that passes the condition

// let arr = [1,2,3,4,5,6,7,8];
// console.log(arr.find((ele) => ele > 5)) // returns first element that passes th condition   

// let arr = [20,-30,-40,-1,-0.1];
// console.log(arr.find((ele) => ele < 0));

// let arr =["23","ka","azha",true,20];
// console.log(arr.find((ele) => typeof ele == "null")); // returns first element that passes

// 21. findIndex()
// returns index of first element that passes the condition
// returns -1 if no element is found

// let arr =[13,34,56,77];
// console.log(arr.findIndex((ele) => ele > 50)); // returns index of first element that

// let arr =[20,-3,-1,0.5,4];
// console.log(arr.findIndexOf((ele) => ele < 0 ));

// let arr = [1,2,3,4,5,6,7,8];
// console.log(arr.findIndex((ele) => ele > 5)) // returns index of first element that
// console.log(arr.findIndex((ele) => ele > 10)) // returns -1 if no element   

22.//toString()
// converts array to string
// converts all elements to string

// let arr = [1,2,3,4,5,6,7,8];
// console.log(arr.toString()); // converts array to string


// let arr =[1,2,3];
// console.log(arr.toString(),typeof arr);

// 22.sort()
// sort array in ascending order

// let arr =[80,45,95,105,366,55];
// console.log(arr.sort()); 

// let arr = [80,45,95,105,366,55];
// console.log(arr.sort((a,b) => a-b)); // sort array in ascending order

// let arr = [80,45,95,105,366,55];
// console.log(arr.sort((a,b) => b-a)); // sort array in descending order

//23. slice()
// returns new array with elements from start to end

// let arr = [1,2,3,4,5,6,7,8];
// console.log(arr.slice(2,5)); // returns new array with elements from start to end

// let arr =["azhar","23",3,45];
// console.log(arr.slice(0,3));

// let arr =["azhar",[23,45],"hi"];
// console.log(arr.slice(0,1[0])); ?? ask

// 25. splice()
// removes elements from array
// adds elements to array
// returns array of removed elements
//  let arr = ["appple","orange","banana"]
//  console.log(arr.splice(1,3));
//  console.log(arr);// removed elements

// let arr = ["appple","orange","banana"];
// console.log(arr.splice(1,0,"grapes"));
// console.log(arr);    // adds elements to array

// let arr = ["appple","orange","banana"];
// console.log(arr.splice(0,2));
// console.log(arr);

// 26. some()
// // true or false if any element in array meets the condition
// let arr = [1,2,3,4,5];
// console.log(arr.some((ele) => ele >3)); // returns true if any element in array meets the condition

// let arr = ["azhar","24",34,50];
// console.log(arr.some((ele) =>  Array. isArray(ele); //

// 27. reduce()
// returns single value
let arr = [1,2,3,4,5];
console.log(arr.reduce((acc,ele) => acc+ele,3)); // Ask sir













