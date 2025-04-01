// String Methods Practice
//1. charAt()
// give me index ==> value

// let str = "Hello";
// console.log(str.charAt(2));

// //1.charAt()
// let str = "Azhar"
// console.log(str.charAt(3));

// //1. charAt()
// let str = "Farhan";
// console.log(str.charAt(3)

//1.charAt()
// let num = "23755745756";
// console.log(num.charAt(5));


//2. concat()
// let a1 ="hello ";
// let a2 = "Azhar";
// console.log(a1.concat(a2));

// let a1 ="Hello";
// let a2 = "  Farhan";
// console.log(a1.concat(a2));

// let b1 = "avfgfg";
// let b2 = "   3344545";
// console.log(b1.concat(  b2));

// let c1 = "az";
// let c2 =true;
// console.log(c1.concat(c2));


//3.endsWith()
// gives booleans true or false
// only checks end of the string

// let str ="hello world"
// console.log(str.endsWith("hello"));

// let str = "abc  deaf";
// console.log(str.endsWith("deaf"));

// let str = "olleh";
//console.log(str.endsWith("hello"));

// let str = "123321";
// console.log(str.endsWith("321"));\

//4. includes()
// it checks anyword in the String

// let str = "hello world!";
// console.log(str.includes("world!"));

// let str = "JavaScript";
// console.log(str.includes("Script"));

// let str ="azharfarhan";
// console.log(str.includes("zhar"));

//5. indexof()
//opposite of charAt()
// give me value => returns index

// let str = "hello world";
// console.log(str.indexOf("world"));

// let str = "1234 4321";
// console.log(str.indexOf("3"));

// let str = "hello ! azhar";
// console.log(str.indexOf("!"));

//6.lastIndexOf()
// gives right to left index
//  let str = "1234 4321";
//  console.log(str.lastIndexOf("")); // 9 how??ask

//  let str = "azhar1123";
//  console.log(str.lastIndexOf("1"));

// let str = "hellohello";
// console.log(str.lastIndexOf("l"));

//7. length
// returns the length of the string
// lenngth starts from 1

// let str = "azharfarhan";
// console.log(str.length);

// let str = "1233    4332323";
// console.log(str.length);



//8. padStart()
// padding is applied from start of current string

// let str = "Hello";
// console.log(str.padStart(10, "*"));

// let str = "1234 azhar";
// console.log(str.padStart(15,"a"));

// let str = "abcdef";
// str= "abcdefghioj"
// console.log(str.padStart(20,"azhar"));

// let str = "12344555";
// console.log(str.padStart(015, "9"));

//9.padEnd()
// padding is applied from end of current string
// pads current string to the end string

// let str = "ahzar";
// console.log(str.padEnd(15,"ha"));

// let str = "12344321";
// console.log(str.padEnd(23,"hi"));


// let str = "12344321";
// console.log(str.padEnd(23,"hi"));


// let str = "12344321";
// console.log(str.padEnd(23,"hi"));

//10. repeat()
//returns a new string with specified no of copies 

// let str = "hello";
// console.log(str.repeat(3));

// let str = "123";
// console.log(str.repeat("3"));

// let str = " azhar farhan";
// console.log(str.repeat(3));

// let str = " 1233 ";
// console.log(str.repeat(2));

//11.replace()
// replaces a specified value with anotheer value in string only.

// let str = "Hello World";
// console.log(str.replace(""));

// let str = "hello123";
// console.log(str.replace("llo","azh"));

// let str = "9848";
// console.log(str.replace("8","66"));

//12. slice()
// extracts a part of a string and returns a new string.

// let str = "Azhar123";
// console.log(str.slice(4,1));

// let str = "Farahan";
// console.log(str.slice(0,2));

//13. split()
// splits a string into an array
// pass the val where u want ot split the string

// let str  = "Helloworld";
// console.log(str.split(" "));

// let str = "hello123";
// console.log(str.split("hello"));  // ASK SIRRRRR ???????

//14. startsWith()
// gives boolean true or false
// only checks the start

// let str = "Azhar123";
// console.log(str.startsWith("Azhar"));

// let str = "Azhar321";
// console.log(str.startsWith("zhar321"));

// let str ="Azharfarhan";
// console.log(str.startsWith("Azharfarha"));

//15. endsWith()
// only checks the end of string 
// true or false 

// let str = "Azhar";
// console.log(str.endsWith("ar"));

// let str = "Azhar123321";
// console.log(str.endsWith("32"));

// let str = "Helloo";
// console.log(str.endsWith("oo"));

//15. toloweCase()
// convers a string to lower case

// let str = "aZhZhZhzH";
// console.log(str.toLowerCase());

//16. toUpperCase();
// convers string to uppercase

// let str = "azhsaghdghdfh";
// console.log(str.toUpperCase());

//17. trim()
// removes whitespace from both ends of a string

// let str = "Azharfarha   ";
// console.log(str.trim());

// let str = "   azhart    ";
// console.log(str.trim());

// let str = "azga   12    ";
// console.log(str.trim());

//18.trimeEnd()
//removes white sapce from only end of a string.

// let str = "   azhar    ";
// console.log(str.trimEnd());

// let str = "azhar 123c   ";
// console.log(str.trimEnd());

// let str = "    123444      ";
// console.log(str.trimEnd());

//19. trimStart()
// removes whitespace from start

// let str = "  Hello world  ";
// console.log(str.trimStart());

//20. substring()
// extraxcts specified chars from in between the string

// let str = "JavaScript";
// console.log(str.substring(1,3));

// let str = "123Azhar";
// console.log(str.substring(3,6));

// let str = "1233211223";
// console.log(str.substring(3,7));   ASK SIRRRRRRR ?????


//21. valueOf()
// returns primitive value of string



// lastindexof

// indexOf

// let str = "Farhan";
//         012345

// indexOf ==> str ==> index
// Iif not found ===> -1
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));

//  let str = "1234 4321";
//  //         012345678
//  console.log(str.lastIndexOf("")); 
// // 9

// let str = "suhail+azhar+shamil";
// console.log(str.split("+"));

// let str = "suhail()azhar()shamil";
// console.log(str.split("()"));


// let a = "1233211223"
// //  i    0123456789
// //  l    123456789^

// console.log(a.slice(7,10))
// console.log(a.substring(7,10))

// let str = "1233211223";
// console.log(str.substring(3,7));   ASK SIRRRRRRR ?????


// let b =  15;
// console.log(b.valueOf(2))