// ==========Chapter 5 MATH EXPRESSIONS==========

// Q1.Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// let firstNum = +prompt("Enter First Number");
// let secondNum = +prompt("Enter Second Number");
// let result = firstNum + secondNum;
// document.write("Sum Of " + firstNum + " and " + secondNum + " is ");
// document.write(result);

// -----------------------

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

// let myVariable;
// myVariable = "This Is Variable Value";
// console.log("Value after variable declaration is " + myVariable);

// let myNum = 5;
// console.log("Initial Value: " + myNum);
// myNum++;
// let add = 7;
// let addition = myNum + add;
// console.log("Value after addition is " + addition);
// addition--;
// console.log("Value after decrement is " + addition);
// let output = addition % 3;
// console.log("The remainder is: " + output);

// --------------------------

// Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

// const costOf1Ticket = 600;
// let ticket = +prompt("How Much Tickets Do You Want To Buy");

// let calculate = costOf1Ticket * ticket;

// console.log(
//   "Total cost to buy " + ticket + " tickets to a movie is " + calculate + "PKR"
// );

// ------------------------

// Q5. Write a script to display multiplication table of any number in your browser.

// let table = +prompt("Enter Table Number");
// console.log(table + "x1=" + table);

// Q6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// let convertToC = +prompt("Enter a temperature in Fahrenheit");
// const c = ((convertToC - 32) * 5) / 9;
// document.write(
//   convertToC + "<sup>o</sup>F" + " is " + c + "<sup>o</sup>C" + "<br/"
//   );
//   let convertToF = +prompt("Enter a temperature in Celsius");
//   const f = (convertToF * 9) / 5 + 32;
//   document.write(
//     convertToF + "<sup>o</sup>C" + " is " + f + "<sup>o</sup>F" + "<br/"
//   );

// -----------------------

// Q7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables.
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

// let p1 = +prompt("Enter Price Of Item 1");
// let quantity1 = +prompt("Enter Quantity Of Item 1");
// let p2 = +prompt("Enter Price Of Item 2");
// let quantity2 = +prompt("Enter Quantity Of Item 2");
// const ship = 100;

// console.log(
//   "Price Of Item 1 is " +
//     p1 +
//     "\n" +
//     "Price Of Item 2 is " +
//     p2 +
//     "\n" +
//     "Quantity Of Item 1 is " +
//     quantity1 +
//     "\n" +
//     "Quantity Of Item 2 is " +
//     quantity2 +
//     "\n"
// );
// console.log(p1 * quantity1 + p2 * quantity2 + ship);

// -----------------------

// Q8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

let tot = +prompt("Enter Total Marks");
let obt = +prompt("Enter Obtained Marks");
document.write("Total Marks is: " + tot + "<br>" + "Obtained Marks is: " + obt);
console.log("Percentage is: " + (obt / tot) * 100);
