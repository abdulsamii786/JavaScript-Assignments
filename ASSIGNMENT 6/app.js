// ==========================================
// CHAPTER: IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
// ==========================================

// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// ---------------------------------------------------------------------

// Q2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");

// if (num1 == num2) {
//   swal.fire("Both numbers are Equal");
// } else if (num1 < num2) {
//   swal.fire(`The Larger Number is: ${num2}`);
// } else if (num1 > num2) {
//   swal.fire(`The Larger Number is: ${num1}`);
// }

// ---------------------------------------------------------------------

// Q3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// let num = +prompt("Enter a number");

// if (num < 0) {
//   swal.fire(`The number ${num} is Nagative`);
// } else if (num > 0) {
//   swal.fire(`The number ${num} is Positive`);
// } else if (num == 0) {
//   swal.fire(`The number is 0`);
// }

// ---------------------------------------------------------------------

// Q4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// let userInput = prompt("Enter a Character");
// let char;
// if (userInput.length === 1) {
//   char = userInput.toLowerCase();
//   if (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u"
//   ) {
//     swal.fire("Is the character a vowel? True");
//   } else {
//     swal.fire("Is the character a vowel? False");
//   }
// } else {
//   swal.fire("Please Enter a Single Character");
// }
