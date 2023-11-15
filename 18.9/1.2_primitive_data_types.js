/*--Delete the wrong answers--

1. Which of the following is/are strings?
   c) '4'

2. Which of the following is/are numbers?
   a) 4
   b) 4.0
   d) -4

3. Which of the following is/are booleans?
   a) true
   b) false

4. What is the result of 80 + 71.2?
   a) 151.2

5. What is the result of "80" + 71.2?
c) "8071.2"

6. Does 100 + 30 produce a number or a string?
a) number

7. Does "100" + 30 produce a number or a string?

b)string

*/

// let x = 80;
// let y = 71.2;
// let result = x + y;
// console.log(result);

let x = "80";
let y = 71.2;
let result = x + y;
console.log(result);

// create three different ways to declare variables
Using var:
var exercise = { name: 'using-var'};
console.log( 'exercise:', exercise );

Using let:
let exercise = { name: 'using-let' };
console.log( 'eexercise:', exercise);

Using const:
const exercise = { name: 'using-const' };
console.log( 'eexercise:', exercise);


//declare a variable and reassign a value to it

let greeting = "Hello!";
greeting = "How are you?";
console.log(greeting);

//create a variable and after that assign a string
// with its value being: He's got it!
var message;
message = "He's got it!";
console.log(message);

//1. create a variable and assign a value on how
//much a restaurant bill is.
let restaurantBill = 75.50;
console.log("The restaurant bill is $" + restaurantBill);


//2. create a variable and assign a value on how
//much tax they should pay.
let taxAmount = 10.25;
console.log("The tax amount to pay is $" + taxAmount);


//3. create a variable that will calculate the bill
//* tax and its output would be: Your total bill is
//<total bill> $.

let totalBill = restaurantBill + (restaurantBill * taxAmount);
console.log("Your total bill is $" + totalBill);

// Round the number 50.6 to its nearest integer
let number = 50.6;
let roundedNumber ;
console.log(roundedNumber);
console.log(typeof(number));


//Create a variable that is undefined
let myUndefined;
console.log(myUndefined);