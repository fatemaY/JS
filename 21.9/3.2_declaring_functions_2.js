/* From function declarations to explicit and implicit
return functions (one of each).

function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}*/

const welcome = () => {
  let welcomeMessage = 'Welcome to Appleseeds Bootcamp!';
  return welcomeMessage;
};
// Implicit  function :

const Impwelcome = () => 'Welcome to Appleseeds Bootcamp!';


/*function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}*/

const power = (a) => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};
  
//Implicit  function
const Imppower = (a) => Math.pow(a, 2);


// From function expressions to IIFE functions.
//const squareRoot = a => Math.sqrt(a);

const squareRoot = ((a) => {
  return Math.sqrt(a);
})(3);




//const randomNumbers = (a, b) => Math.random() * (a - b) +b;

const randomNumbers = ((a, b) => {
  return Math.random() * (a - b) + b;
})
(2,3);