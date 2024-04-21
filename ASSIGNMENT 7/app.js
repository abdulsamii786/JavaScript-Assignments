// <<<<<===========================ARRAYS===========================>>>>>

// Q1. Declare an empty array using JS literal notation to store student names in future.

// let studentNames = [];

// -------------------------------------------------------------------------

// Q2. Declare an empty array using JS object notation to store student names in future.

// let emptyArr = {};

// -------------------------------------------------------------------------

// Q3. Declare and initialize a strings array.

// let stringArrays = ["apple", "banana", "grapes", "mango"];

// -------------------------------------------------------------------------

// Q4. Declare and initialize a numbers array.

// let numbArrays = [10, 50, 680, 12, 50, 84];

// -------------------------------------------------------------------------

// 5. Declare and initialize a boolean array.

// let booleanArray = [true, false];

// -------------------------------------------------------------------------

// Q6. Declare and initialize a mixed array.

// let mixedArray = ["apple", "banana", 12, 50, 80, true, false, null, undefined];

// -------------------------------------------------------------------------

// Q7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// let educationsInPak = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "B.COM",
//   "MS",
//   "M.Phil",
//   "PhD",
// ];
// document.write(`${educationsInPak}`);

// -------------------------------------------------------------------------

// Q8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// let studentsName = ["student1", "student2", "student3"];
// let studentsScore = [320, 230, 480];
// let totalMarks = 500;

// document.write(
//   `Score Of ${studentsName[0]} is ${studentsScore[0]}. Percentage: ${
//     (studentsScore[0] / totalMarks) * 100
//   }% <br/>`
// );
// document.write(
//   `Score Of ${studentsName[1]} is ${studentsScore[1]}. Percentage: ${
//     (studentsScore[1] / totalMarks) * 100
//   }% <br/>`
// );
// document.write(
//   `Score Of ${studentsName[2]} is ${studentsScore[2]}. Percentage: ${
//     (studentsScore[2] / totalMarks) * 100
//   }%`
// );

// -------------------------------------------------------------------------

// Q9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// let colorsName = ["red", "blue", "green", "yellow", "black", "white"];
// document.write(`${colorsName}<br/>`);

// let userClrAddInStart = prompt("Enter Your Color You Want To Add To The Beginning");
// colorsName.unshift(userClrAddInStart);
// document.write(`${colorsName}<br/>`);

// let userClrAddInEnd = prompt("Enter Your Color You Want To Add To The End");
// colorsName.push(userClrAddInEnd);
// document.write(`${colorsName}<br/>`);

// let userClrAddInStart2 = prompt("Enter Two More Colors You Want To Add To The Beginning");
// colorsName.unshift(userClrAddInStart2);
// document.write(`${colorsName}<br/>`);

// colorsName.shift()
// document.write(`${colorsName}<br/>`);

// colorsName.pop()
// document.write(`${colorsName}<br/>`);

// let userIndex=+prompt("Enter the index you want to add a color")
// let userIndexClr=prompt("Enter the Color")

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// -------------------------------------------------------------------------

// Q10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// let studentsScore = [320,230,480,120];
// studentsScore.sort();
// console.log(studentsScore);

// -------------------------------------------------------------------------

// Q11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// let cityNames = ["Karachi", "Islamabad", "Quetta", "Pishawar", "Multan"];
// let copyCity = cityNames.slice(0, 3);
// console.log(`Cities array ${cityNames}`);
// console.log(`Copied array ${copyCity}`);

// -------------------------------------------------------------------------

// Q12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

// let arr = ["This", "is", "my", "cat"];
// console.log(arr)
// console.log(arr.join(" "));

// -------------------------------------------------------------------------

// Q13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// let fifoArr = [];
// fifoArr.push("keyboard");
// fifoArr.push("mouse");
// fifoArr.push("printer");
// fifoArr.push("monitor");

// console.log(fifoArr);

// let firstValue = fifoArr.shift();
// let secondValue = fifoArr.shift();
// let thirdValue = fifoArr.shift();
// let fourthValue = fifoArr.shift();

// console.log(firstValue);
// console.log(secondValue);
// console.log(thirdValue);
// console.log(fourthValue);

// -------------------------------------------------------------------------

// Q14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)

// let lifoArr = [];
// lifoArr.push("keyboard");
// lifoArr.push("mouse");
// lifoArr.push("printer");
// lifoArr.push("monitor");

// console.log(lifoArr);

// let firstValue = lifoArr.pop();
// let secondValue = lifoArr.pop();
// let thirdValue = lifoArr.pop();
// let fourthValue = lifoArr.pop();

// console.log(firstValue);
// console.log(secondValue);
// console.log(thirdValue);
// console.log(fourthValue);

// -------------------------------------------------------------------------

// Q15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

// let phones = "Apple Samsung Motorola Nokia Sony Haier";
// phones = phones.split(" ");

// document.write(`<select>`);
// document.write(`<option> Select a manufacturer </option>`);

// for (let i = 0; i < phones.length; i++) {
//   document.write(`<option value="${phones[i]}">${phones[i]}</option>`);
// }
