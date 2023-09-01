// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to Dane as the name.
// We write "if else" conditional to determine an output.
// The if is set to the name is exactly equal to Mary, then the console log outputs 'Hi Mary!'
// The else is set to console log an output of 'How do you do?' if the name does not equal exactly to Mary

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Make a variable called 'secret'.
// Make a variable called 'code' and set a value of 123.
// Write a 'if' conditional to determine the value of 'secret'.
// The if states that if code is exactly equal to '123' then the value of secret is 'super'
// and code will have a value that doubles.

// Or if the value of code is less than '250' then the value of secret is 'duper'.
// Then console log an output for the value of secret.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//  Create variable 'isStudent'. Assign it a boolean value of true.
//  Create variable 'age' and set it to have a value of '34'.
//  Create variable 'zip' and assign it a value of '55407'.
//  Create a compound 'else if' conditional with the following 
//  Set the console log to output 'You're a student on the West Coast!' if 
//  'isStudent' equals true and 'zip' is less than 80000

// Else if 'isStudent' equals false and 'age' is less than 30. Set the console log output
// to 'What are your hobbies?'

// If 'isStudent' equals 'true' then have the console log to output 'Welcome to Prime!'
// Else set the console log to output 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
//FIX - Missing the expression to assign colorTwo the value of purple in the conditional.
colorTwo= 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
//Fix the code above sets time as a constant as opposed to a variable.
instead we use 'let time = 4;'

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;

// Fix -- description does not mention minAge as a constant therefore
let minAge = 21;


const minAge = 21;

if(minAge <= age) {
//Fix - the description does not call for an if else conditional, we are only checking to see 
if age is greater or equal to minAge and if so to console log output with 'enter.'

console.log ('enter');
}

  console.log('no entry');
} else {
  console.log('enter');
}
*/

