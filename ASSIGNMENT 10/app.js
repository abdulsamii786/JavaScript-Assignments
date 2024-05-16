// ========================================MATH METHODS========================================

// Q1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number b. round off value of the number c. floor value of the number d. ceil value of the number

// let positiveInt = +prompt("Enter a positive Integer");
// let roundOffValue = Math.round(positiveInt);
// let floorValue = Math.floor(positiveInt);
// let ceilValue = Math.ceil(positiveInt);

// console.log(
//   positiveInt + "\n" + roundOffValue + "\n" + floorValue + "\n" + ceilValue
// );

// ==================================================================

// Q2. Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number

// let positiveInt = +prompt("Enter a negative Integer");
// let roundOffValue = Math.round(positiveInt);
// let floorValue = Math.floor(positiveInt);
// let ceilValue = Math.ceil(positiveInt);

// console.log(
//   positiveInt + "\n" + roundOffValue + "\n" + floorValue + "\n" + ceilValue
// );

// ==================================================================

// Q3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// ==================================================================

// Q4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// let dice = [1, 2, 3, 4, 5, 6];
// console.log(Math.ceil(Math.random() * dice.length));

// ==================================================================

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// let coin = ["Heads", "Tails"];
// let random = Math.floor(Math.random() * coin.length);

// if (random === 0) {
//   console.log(coin[0] + " Wins");
// } else if (random === 1) {
//   console.log(coin[1] + " Wins");
// }

// ==================================================================

// Q6. Write a program that shows a random number between 1 and 100 in your browser.

// let random = Math.floor(Math.random() * 100);
// console.log(random);

// ==================================================================

// Q7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms

// let weight = +prompt("Enter your weight");

// ==================================================================

// Q8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

// while (true) {
//   let secretNumber = Math.floor(Math.random() * 10) + 1;
//   let userInput = +prompt("Enter a number between 1 to 10");
//   if (userInput === secretNumber) {
//     console.log("Congratulation");

//     break;
//   } else {
//     console.log("Try Again");
//   }
// }
