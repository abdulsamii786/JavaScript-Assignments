// ==========Chapter 4 VARIABLE NAMES: LEGAL & ILLEGAL==========

// -------------------------------------

// Q1.Declare 3 variables in one statement.

let firstName = "Abdul",
  lastName = "Sami",
  age = 22;

// -------------------------------------------------

// Q2.Declare 5 legal & 5 illegal variable names.

//Legal Variables

let variableOne = "one",
  _variable_two = "two";
(variable3 = "three"), (my_Alert = "four"), ($dollarSign = "five");

//Illegal Variables

// let 123variable (start with a number)
// let alert (reserved keywords)
// let this is my variable (space in it)
// let this-is-variable (using special characters in it accept "$","_")

// -------------------------------------------------

// Q3.Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

let heading = "Rules For Naming JS Variables";
document.write("<b>" + heading + "</b>" + "</br>");

document.write(
  "</br>" +
    "Variable Names Can Only Contain " +
    "<b>" +
    "letters (abc), " +
    "</b>" +
    "<b>" +
    "digits (123), " +
    "</b>" +
    "<b>" +
    "dollar ($), " +
    "</b>" +
    "<b>" +
    "underscores ( _ ) " +
    "</b>" +
    "For Example: " +
    "<b>" +
    "$my_1stVariable" +
    "</b>"
);
document.write(
  "</br>" +
    "Variable Must Begin With A " +
    "<b>" +
    "letters (abc), " +
    "</b>" +
    "<b>" +
    "dollar ($), " +
    "</b>" +
    "<b>" +
    "underscores ( _ ) " +
    "</b>" +
    "For Example: " +
    "<b>" +
    "$name, " +
    "</b>" +
    "<b>" +
    "name, " +
    "</b>" +
    "<b>" +
    "_name, " +
    "</b>"
);
document.write(
  "</br>" + "Variable Names Are Case " + "<b>" + "Sensitive " + "</b>"
);
document.write(
  "</br>" +
    "Variable Names Should Not Be JS " +
    "<b>" +
    "Keywords" +
    "</b>" +
    "</br>" +
    "</br>" +
    "</br>"
);
