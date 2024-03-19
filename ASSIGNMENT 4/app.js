// =======================MATH EXPRESSIONS=====================

// Q1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// let num = +prompt("Enter a Number");

// console.log("The Value Of a is: ", num, "\n", "--------------");

// console.log("The Value Of ++a is: ", ++num, "\n",);
// console.log("Now The Value Of a is: ", num, "\n", "\n");

// console.log("The Value Of a++ is: ", num++, "\n",);
// console.log("Now The Value Of a is: ", num, "\n", "\n");

// console.log("The Value Of --a is: ", --num, "\n",);
// console.log("Now The Value Of a is: ", num, "\n", "\n");

// console.log("The Value Of a-- is: ", num--, "\n",);
// console.log("Now The Value Of a is: ", num, "\n", "\n");

// -----------------------------------------------

// Q2. What will be the output in variables a, b & result after execution of the following script:
// let a = 2,
//   b = 1;
// let result = --a - --b + ++b + b--;
// console.log(result);
// Explain the output at each stage:

// -----------------------------------------------------------------------

// Q3. Write a program that takes input a name from user & greet the user.

// let userName = prompt("Enter Your Name");
// Swal.fire("Hello", userName);

// -----------------------------------

// Q4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// let userNum = +prompt("Enter a number", 5);

// console.log(userNum, "x", "1", "=", userNum * 1);
// console.log(userNum, "x", "2", "=", userNum * 2);
// console.log(userNum, "x", "3", "=", userNum * 3);
// console.log(userNum, "x", "4", "=", userNum * 4);
// console.log(userNum, "x", "5", "=", userNum * 5);
// console.log(userNum, "x", "6", "=", userNum * 6);
// console.log(userNum, "x", "7", "=", userNum * 7);
// console.log(userNum, "x", "8", "=", userNum * 8);
// console.log(userNum, "x", "9", "=", userNum * 9);
// console.log(userNum, "x", "10", "=", userNum * 10);

// ---------------------------------------------

// Q5. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

let userSub1 = prompt("Enter First Subject ");
let userSub2 = prompt("Enter Second Subject ");
let userSub3 = prompt("Enter Third Subject ");
const totalMarks = 100;
let obtMarks1Sub = +prompt("Enter Your Obtained Marks For First Subject");
let obtMarks2Sub = +prompt("Enter Your Obtained Marks For Second Subject");
let obtMarks3Sub = +prompt("Enter Your Obtained Marks For Third Subject");
let perSub1 = (obtMarks1Sub / totalMarks) * 100;
let perSub2 = (obtMarks2Sub / totalMarks) * 100;
let perSub3 = (obtMarks3Sub / totalMarks) * 100;
let resultTotMarks = totalMarks * 3;
let resultObtMarks = obtMarks1Sub + obtMarks2Sub + obtMarks3Sub;
let resultper = (perSub1 + perSub2 + perSub3) / 3;

document.write(
  "<table> <tr> <th>",
  " Subject ",
  "<th/>",
  "<th>",
  " Total Marks ",
  "<th/>",
  "<th>",
  " Obtained Marks ",
  "<th/>",
  "<th>",
  " Percentage ",
  "<th/> <tr/>",
  "<tr> <td>",
  userSub1,
  "<td/>",
  "<td>",
  totalMarks,
  "<td/>",
  "<td>",
  obtMarks1Sub,
  "<td/>",
  "<td>",
  perSub1,
  "%",
  "<td/>",
  "<tr/>",

  "<tr> <td>",
  userSub2,
  "<td/>",
  "<td>",
  totalMarks,
  "<td/>",
  "<td>",
  obtMarks2Sub,
  "<td/>",
  "<td>",
  perSub2,
  "%",
  "<td/>",
  "<tr/>",

  "<tr> <td>",
  userSub3,
  "<td/>",
  "<td>",
  totalMarks,
  "<td/>",
  "<td>",
  obtMarks3Sub,
  "<td/>",
  "<td>",
  perSub3,
  "%",
  "<td/>",
  "<tr/>",

  "<tr> <th>",
  "<th/>",
  "<th>",
  resultTotMarks,
  "<th/>",
  "<th>",
  resultObtMarks,
  "<th/>",
  "<th>",
  resultper,
  "%",
  "<th/>",
  "<tr/>"
);
