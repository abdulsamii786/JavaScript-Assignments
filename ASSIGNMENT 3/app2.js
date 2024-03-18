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
// console.log(table, "x1=", table * 1);
// console.log(table, "x2=", table * 2);
// console.log(table, "x3=", table * 3);
// console.log(table, "x4=", table * 4);
// console.log(table, "x5=", table * 5);
// console.log(table, "x6=", table * 6);
// console.log(table, "x7=", table * 7);
// console.log(table, "x8=", table * 8);
// console.log(table, "x9=", table * 9);
// console.log(table, "x10=", table * 10);

// -----------------

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

// let tot = +prompt("Enter Total Marks");
// let obt = +prompt("Enter Obtained Marks");
// document.write("Total Marks is: " + tot + "<br>" + "Obtained Marks is: " + obt);
// console.log("Percentage is: " + (obt / tot) * 100);

// --------------------------

// Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// let usDollar = +prompt("Enter Us Dollar You Have");
// let saudiRiyal = +prompt("Enter Us Saudi Riyals You Have");
// const dollar = 104.8;
// const riyal = 28;
// console.log("Total Currency In PKR", usDollar * dollar + saudiRiyal * riyal);

// ------------------------------

// Q10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// let num = +prompt("Enter a number");
// let result=(num + (5 * 10) / 2);
// console.log(result)

// ------------------------

// Q11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

// let currentYear = 2024,
//   birthYear = +prompt("Enter Your Birth Year"),
//   result = currentYear - birthYear;

// console.log("You are either ", result, "or ", result, "Years Old");

// ------------------

// Q12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// let radius = 5;
// let pie = 3.142;
// const circumference = 2 * pie * radius;
// console.log("The Circumference Is: ", circumference.toFixed(2));
// const area = (pie * radius * radius);
// console.log("The Area Is: ", area.toFixed(2));

// ----------------------------------

// Q13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// let fvrtSnack = "Papad",
//   currentAge = 25,
//   maxAge = 80,
//   estAmountPerDay = 2;
// let remainingYears = maxAge - currentAge;
// let result = remainingYears * 365 * estAmountPerDay;
// console.log(
//   "You will need",
//   result,
//   fvrtSnack,
//   "to last you untill the ripe old age of",
//   maxAge
// );
