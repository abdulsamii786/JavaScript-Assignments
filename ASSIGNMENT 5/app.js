// =====================USER INPUT & CONDITIONAL STATEMENT=======================

// Q1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let userCity = prompt("Enter Your City Name");
// if (userCity.toLowerCase() === "karachi") {
//   swal.fire("“Welcome to city of lights”");
// } else {
//   swal.fire("“Welcome to city”");
// }

// -------------------------------------

// Q2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// let gender = prompt("Enter Your Gender");

// if (gender.toLowerCase() === "male") {
//   swal.fire("Good Morning Sir");
// } else if (gender.toLowerCase() === "female") {
//   swal.fire("Good Morning Ma'am");
// } else {
//   swal.fire("Good Morning");
// }

// ----------------------

// Q3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

// let color = prompt(
//   "Please write down the color you are observing at Traffic Signal!"
// );

// if (color.toLowerCase() === "red") {
//   swal.fire("Must Stop!");
// } else if (color.toLowerCase() === "yellow") {
//   swal.fire("Ready To Move!");
// } else if (color.toLowerCase() === "green") {
//   swal.fire("Move Now");
// } else {
//   swal.fire("This color is not present on the traffic signal");
// }

// ----------------------

// Q4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,show the message “Please refill the fuel in your car”

// let remainingFuel = prompt("Enter The Remaining Fuel In Your Car (in litres)!");
// if (remainingFuel.toLowerCase() === "0.25 litres") {
//   swal.fire("Please refill the fuel in your car");
// } else if (remainingFuel.toLowerCase() === "1 litre") {
//   swal.fire("Your Fuel is about to End");
// } else {
//   swal.fire("You don't need to refuel");
// }

// ----------------------

//  Q5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

// ----------------------

// Q6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// let obtMarks1 = +prompt("Enter Your Obtained Marks In Maths Subject ");
// let obtMarks2 = +prompt("Enter Your Obtained Marks In Physics Subject");
// let obtMarks3 = +prompt("Enter Your Obtained Marks In Bio Subject");
// let totalMarks = +prompt("Enter Total Marks");
// let result = obtMarks1 + obtMarks2 + obtMarks3;
// let percentage = (result / totalMarks) * 100;
// // console.log(percentage.toFixed(1));
// if (percentage.toFixed(1) >= 80) {
//   swal.fire(
//     `Excellent! Your Grade Is "A-ONE" Your Percentage is: ${percentage.toFixed(
//       1
//     )} `
//   );
// } else if (percentage.toFixed(1) >= 70) {
//   swal.fire(
//     `Good! Your Grade Is "A" Your Percentage is: ${percentage.toFixed(1)} `
//   );
// } else if (percentage.toFixed(1) >= 60) {
//   swal.fire(
//     `You Need To Improve! Your Grade Is "B" Your Percentage is: ${percentage.toFixed(
//       1
//     )} `
//   );
// } else if (percentage.toFixed(1) < 60) {
//   swal.fire(
//     `Sorry You Are Fail! Your Percentage is: ${percentage.toFixed(1)} `
//   );
// }

// ----------------------

// Q7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// let secretNum = 7;
// let guessNum = +prompt("Guess The Secret Number (ranging from 1 to 10)");

// if (guessNum == 7) {
//   swal.fire(`Bingo! Correct Answer`);
// } else if (guessNum == 6) {
//   swal.fire(`Close Enough To The Correct Answer!`);
// } else if (guessNum > 10) {
//   swal.fire(`Please Guess The Answer from 1 to 10!`);
// } else {
//   swal.fire(`Incorrect Answer!`);
// }

// ----------------------

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// let userNum = +prompt("Enter a Number to check is divisible by 3");
// let result = userNum % 3;
// if (result == 0) {
//   swal.fire("Your Number is Divisible by 3");
// } else {
//   swal.fire("Your Number is Not Divisible  by 3");
// }

// ----------------------

// Q9.Write a program that checks whether the given input is an even number or an odd number.

// let userInput = +prompt("Enter The Number to check if it is EVEN OR ODD");
// result =
//   userInput % 2 == 0
//     ? swal.fire(`Your Number "${userInput}" is EVEN!`)
//     : swal.fire(`Your Number "${userInput}" is ODD!`);

// ----------------------

// Q10. Write a program that takes temperature as input and shows a message based on following criteria:
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let userInput = prompt("Enter The Temperature");
// if (userInput >= 40) {
//   swal.fire("It's too Hot Outside");
// } else if (userInput >= 30) {
//   swal.fire("The Weather Today is Normal");
// } else if (userInput >= 20) {
//   swal.fire("Today’s Weather is cool");
// } else if (userInput >= 10) {
//   swal.fire("OMG! Today’s weather is so Cool");
// }

// ----------------------

// Q11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

// let userInput1 = +prompt("Enter the First Number");
// let userInput2 = +prompt("Enter the Second Number");
// let operation = prompt("Enter the operation (+, -, *, /, %):");
// let result;

// if (operation === "+") {
//   result = userInput1 + userInput2;
//   alert(`${userInput1}+${userInput2}=${result}`);
// } else if (operation === "-") {
//   result = userInput1 - userInput2;
//   alert(`${userInput1}-${userInput2}=${result}`);
// } else if (operation === "*") {
//   result = userInput1 * userInput2;
//   alert(`${userInput1}*${userInput2}=${result}`);
// } else if (operation === "%") {
//   result = userInput1 % userInput2;
//   alert(`${userInput1}%${userInput2}=${result}`);
// } else if (operation === "/") {
//   if (userInput2 !== 0) {
//     result = userInput1 / userInput2;
//     alert(`${userInput1}/${userInput2}=${result}`);
//   } else {
//     alert(`Cannot Divide by Zero`);
//   }
// }


