// ============================================STRING METHODS============================================

// Q1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// let firstName = prompt("Enter Your First Name");
// let lastName = prompt("Enter Your Last Name");
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// ===============================================================================================

// Q2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// let userPrompt = prompt("Enter Your Favorite Mobile Phone Model");

// swal.fire(
//   `My Favorite Phone Is: ${userPrompt} <br/> Length Of String: ${userPrompt.length}`
// );

// ===============================================================================================

// Q3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// let str = "Pakistani";
// document.write(`String:${str}<br/>Index Of 'n':${str.indexOf("n")}`);

// ===============================================================================================

// Q4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// let str = "Hello World";
// document.write(`String:${str}<br/>Index Of 'l':${str.lastIndexOf("l")}`);

// ===============================================================================================

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// let str = "Pakistani";
// document.write(`String:${str}<br/>Character at index 3:${str.charAt(3)}`);

// ===============================================================================================

// Q6. Repeat Q1 using string concat() method.

// let firstName = prompt("Enter Your First Name");
// let lastName = prompt("Enter Your Last Name");
// let fullName = firstName.concat(" ", lastName);
// console.log(fullName);

// ===============================================================================================

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// let city = "Hyderabad";
// document.write(
//   `City:${city}<br/>After Replacement: ${city.replace("Hyder", "Islam")}`
// );

// ===============================================================================================

// Q8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

// let sentence =
//   "Ali and Sami are best friends. They play cricket and football together";
// let result = sentence.replace(/and/g, "&");
// swal.fire(result);

// ===============================================================================================

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// let str = "472";
// console.log(`Value: ${str}\n Type: ${typeof str}`);
// let num = +str;
// console.log(`Value: ${str}\n Type: ${typeof num}`);

// ===============================================================================================

// 10. Write a program that takes user input. Convert and show the input in capital letters.

// let userInput = prompt("Enter Anything In Lowercase");
// let upperCase = userInput.toUpperCase();
// console.log(`User Input: ${userInput}\n Upper Case: ${upperCase}`);

// ===============================================================================================

// Q11. Write a program that takes user input. Convert and show the input in title case.

// let userInput = prompt("Enter Your Name");
// let titleCase =
//   userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// swal.fire(titleCase);

// ===============================================================================================

// Q12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// let num = 35.36;
// let dot = num.toString().replace(".", "");
// console.log(dot);

// ===============================================================================================

// Q13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// Note: ASCII code of ! is 33 ASCII code of , is 44 ASCII code of . is 46 ASCII code of @ is 64

// let userName = prompt("Enter Your Username");
// let specialChar = ["@", ".", ",", "!"];
// let isValid = true;

// for (let i = 0; i < specialChar.length; i++) {
//   if (userName.includes(specialChar[i])) {
//     console.log("Invalid Username");
//     isValid = false;
//     break;
//   }
// }
// if (isValid) {
//   console.log("Valid Username");
// }

// ===============================================================================================

// Q14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

// let bakeryItems = ["cake", "apple pie", "chips", "patties"];
// let userInput = prompt("Enter Bakery Item You Want To Search").toLowerCase();
// let found = false;

// for (let i = 0; i < bakeryItems.length; i++) {
//   if (bakeryItems[i] === userInput) {
//     found = true;
//   }
// }
// if (found) {
//   console.log("Item Found");
// } else {
//   console.log("Item Not Found");
// }

// ===============================================================================================

// 15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// let userPass = prompt("Enter Your Password");
// if(userPass.length<6){
//   console.log("Password length must be at least 6 Characters");

// }else if()

// ===============================================================================================

// 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.

// let university = "University of Karachi";
// console.log(university.split(""));

// ===============================================================================================

// Q17. Write a program to display the last character of a user input.

// let userInput = prompt("Enter Your Name");
// console.log(userInput[userInput.length - 1]);

// ===============================================================================================

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// let string = "The quick brown fox jumps over the lazy dog";
// let wordToSearch = "the";
// string = string.toLowerCase();
// let count = 0;
// let word = string.split(" ");

// for (let i = 0; i < word.length; i++) {
//   if (word[i] === wordToSearch) {
//     count++;
//   }
// }
// console.log(`Number of occurrences of the word 'the': ${count}`);
