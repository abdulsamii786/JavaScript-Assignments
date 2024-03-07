// ==========Chapter 5 MATH EXPRESSIONS==========

// Q1.Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// let firstNum = +prompt("Enter First Number");
// let secondNum = +prompt("Enter Second Number");
// let result = firstNum + secondNum;
// document.write("Sum Of " + firstNum + " and " + secondNum + " is ");
// document.write(result);

// Q2.Repeat task1 for subtraction, multiplication, division &
// modulus.

// ============Subtraction==============

// let firstNum = +prompt("Enter First Number");
// let secondNum = +prompt("Enter Second Number");
// let result = firstNum - secondNum;
// document.write("Subtraction Of " + firstNum + " and " + secondNum + " is ");
// document.write(result);

// ============Multiplication==============

// let firstNum = +prompt("Enter First Number");
// let secondNum = +prompt("Enter Second Number");
// let result = firstNum * secondNum;
// document.write("Multiplication Of " + firstNum + " and " + secondNum + " is ");
// document.write(result);

// ============Division==============

// let firstNum = +prompt("Enter First Number");
// let secondNum = +prompt("Enter Second Number");
// let result = firstNum / secondNum;
// document.write("Division Of " + firstNum + " and " + secondNum + " is ");
// document.write(result);

// ============Remainder==============

// let firstNum = +prompt("Enter First Number");
// let secondNum = +prompt("Enter Second Number");
// let result = firstNum % secondNum;
// document.write("Modulus Of " + firstNum + " and " + secondNum + " is ");
// document.write(result);

// --------------------------

// Q3.Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

let myVariable;
myVariable = "This Is Variable Value";
console.log("Value after variable declaration is " + myVariable);

let myNum = 5;
console.log("Initial Value: " + myNum);
myNum++;
let add = 7;
let addition = myNum + add;
console.log("Value after additon is " + addition);
addition--;
console.log("Value after decrement is " + addition);
let output = addition % 3;
console.log("The remainder is: " + output);

// --------------------------

// Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

const costOf1Ticket = 600;
let ticket = +prompt("How Much Tickets Do You Want To Buy");

let calculate = costOf1Ticket * ticket;

console.log(
  "Total cost to buy " + ticket + " tickets to a movie is " + calculate + "PKR"
);
