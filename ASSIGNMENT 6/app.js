// ==========================================
// CHAPTER: IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
// ==========================================

// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// let userInput = prompt("Enter a character");
// const ascii = userInput.charCodeAt(0);
// if (ascii >= 65 && ascii <= 90) {
//   swal.fire(`${userInput} is a UpperCase Letter`);
// } else if (ascii >= 97 && ascii <= 122) {
//   swal.fire(`${userInput} is a LowerCase Letter`);
// } else {
//   swal.fire("Invalid Input");
// }

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

// ---------------------------------------------------------------------

// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

// let correctPass = 987654;
// let userPass = prompt("Enter Your Password");

// if (userPass === null || userPass === "") {
//   swal.fire("Please Enter a Password");
// } else if (userPass === correctPass) {
//   swal.fire("Correct!The password you entered matches the original password");
// } else {
//   swal.fire("Incorrect Password!");
// }

// ---------------------------------------------------------------------

// Q6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 18;
// var userInput = +prompt("Enter the hour");
// if (userInput < 18) {
//   greeting = "Good day";
//   swal.fire(greeting);
// } else {
//   greeting = "Good evening";
//   swal.fire(greeting);
// }

// ---------------------------------------------------------------------

// Q7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// let time = +prompt("Enter the time in 24 hours clock format like: 1900");
// if (time >= 0o000 && time < 2359) {
//   if (time >= 0 && time < 1200) {
//     swal.fire("Good Morning");
//   } else if (time > 1200 && time < 1700) {
//     swal.fire("Good Afternoon");
//   } else if (time > 1700 && time < 2100) {
//     swal.fire("Good Afternoon");
//   } else if (time > 2100 && time < 2359) swal, fire("Good Night");
// } else {
//   swal.fire("Invalid time entered");
// }
