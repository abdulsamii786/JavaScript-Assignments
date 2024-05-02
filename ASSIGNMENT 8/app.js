// <<<<<<<<<<======================ARRAYS AND LOOP======================>>>>>>>>>>

// Q1. Declare and initialize an empty multidimensional array. (Array of arrays)

// let multiArray=[];
// multiArray.push([]);
// multiArray.push([]);
// multiArray.push([]);
// console.log(multiArray)

// ---------------------------------------------------------------------------------------------------

// 2. Declare and initialize a multidimensional array representing the following matrix:

// let matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// console.log(matrix);

// ---------------------------------------------------------------------------------------------------

// Q3. Write a program to print numeric counting from 1 to 10.

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// ---------------------------------------------------------------------------------------------------

// Q4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// let tableNum = +prompt("Enter Your Table Number");
// let length = +prompt("Enter Your Table Length");

// for (let i = 1; i <= length; i++) {
//   console.log(`${tableNum}x${i}=${tableNum * i}`);
// }

// ---------------------------------------------------------------------------------------------------

// Q5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// let arrOfFruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < arrOfFruits.length; i++) {
//   console.log(`${arrOfFruits[i]}`);
//   console.log(`Element at index ${i} is ${arrOfFruits[i]}`);
// }

// ---------------------------------------------------------------------------------------------------

// Q6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write(`<h1>Counting</h1>`);
// for (let c = 1; c <= 15; c++) {
//   document.write(`${c},`);
// }
// document.write(`<h1>Reverse Counting</h1>`);
// for (let r = 10; r >= 1; r--) {
//   document.write(`${r},`);
// }
// document.write(`<h1>Even Numbers</h1>`);
// for (let e = 0; e <= 20; e++) {
//   if (e % 2 === 0) {
//     document.write(`${e},`);
//   }
// }
// document.write(`<h1>Odd Numbers</h1>`);
// for (let o = 0; o <= 20; o++) {
//   if (o % 2 === 1) {
//     document.write(`${o},`);
//   }
// }
// document.write(`<h1>Odd Numbers</h1>`);
// for (let s = 1; s <= 20; s++) {
//   if (s % 2 === 0) {
//     document.write(`${s}k,`);
//   }
// }

// ---------------------------------------------------------------------------------------------------

// Q7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

// let bakeryItem=["cake","apple pie","cookie","chips","patties"];

// ---------------------------------------------------------------------------------------------------

// Q8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].

// let arr = [24, 53, 78, 91, 12];

// let largestNum = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largestNum) {
//     largestNum = arr[i];
//   }
// }
// document.write(`Array Items: ${arr} <br>`)
// document.write(`The Largest Number is ${largestNum}`)

// ---------------------------------------------------------------------------------------------------

// Q9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

// let arr = [24, 53, 78, 91, 12];
// let smallestNum = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < smallestNum) {
//     smallestNum = arr[i];
//   }
// }
// document.write(`Array Items: ${arr} <br>`)
// document.write(`The Smallest Number is ${smallestNum}`)

// ---------------------------------------------------------------------------------------------------

// Q10. Write a program to print multiples of 5 ranging 1 to 100.

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
