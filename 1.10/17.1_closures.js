// --------------------------------------------------------------------------------------
//--------------------------- Block 1--------------------------
var b = 1;
function someFunction(number) {
function otherFunction(input) {
return b;
}
b = 5;
return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
console.log(result)

// The result of result will be 5 because firstResult holds a reference to otherFunction, 
// which, when called, returns the value of b, which is 5. The change in the value of b within someFunction 
// affects the value that otherFunction returns because of closures.


// --------------------------------------------------------------------------------------
//--------------------------- Block 2--------------------------
var a = 1;
function b2() {
a = 10;
return;
function a() { }
}
b2();
console.log(a);

// The result of console.log(a); will be 1. Despite the assignment of 10 to a inside the b2 function,
// it only affects the local a variable within that function's scope. The global variable a remains unchanged
// and retains its initial value of 1.

// --------------------------------------------------------------------------------------
//--------------------------- Block 3--------------------------

let i;
for (i = 0; i < 3; i++) {
const log = () => {
  console.log(i);
}
setTimeout(log, 100);
}


// The log functions execute after the delay, each of them will log 3 to the console. 
// This is because they all reference the same i, which has the value 3 in the shared lexical environment.