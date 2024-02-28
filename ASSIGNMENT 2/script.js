// ==================chapter 2=================
// =========VARIABLES FOR STRING==================

// Q1:Declare a variable called username.

var username;

// Q2:Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Abdul Sami"

// Q3: Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message="Hello World"
alert(message)

// Q4:Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var name="Abdul Sami"
var age=23
var city="Karachi"

alert(name)
alert(age)
alert(city)

// Q5: Write a script to display the following alert using one JS variable:

var food="PIZZA \n PIZZ \n PIZ \n PI \n P \n"
alert(food)


// Q6:Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

var email="abdulsami0324@gmail.com"
alert("My email address is "+ email)

// Q7:Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

var book="A Smarter Way To Learn JavaScript"
alert("I am trying to learn from the Book " +book)

// Q8: Write a script to display this in browser through JS

document.write("Yah! I can write HTML content through JavaScript" + "</br>")

// Q9:Store following string in a variable and show in alert and browser through JS

var design="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
alert(design)
document.write(design+ "</br>")





// ==================chapter 3=================
// ================VARIABLES FOR NUMBERS============


// Q1:Declare a variable called age & assign to it your age. Show your age in an alert box.

var age=23
alert(age)

// Q2:Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

var visited="You have visited this site"
var times="14 times"
alert(visited+times)

// Q3:Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthYear=2001
document.write("My birth year is " +birthYear + "</br>" + "Data type of my declared variable is " +typeof(birthYear) + "</br>")


// Q4:A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName="John Doe"
var productTitle="T-Shirt(s)"
var quantity=5
var message1=visitorName + " ordered " +quantity +productTitle + " on XYZ Clothing Store "
document.write(message1)