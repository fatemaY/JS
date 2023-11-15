
//--------------------------- Block 1-------------------------
// function funcA() {
//     console.log(a);
//     console.log(foo());
//     var a = 1;
//     function foo() {
//     return 2;
//     }
//     }
//     funcA();

// 1-console.log(a);: This line tries to log the value of the variable a to the console.
//   (a) has been declared using var, but it has not been assigned any value yet.
//   for that it assigned a default value of undefined to variables declared with var. 
//   So, the output of this line will be undefined.

// 2-console.log(foo());: This line calls the foo() function and tries to log its return value to the console.
//    Inside the foo() function, the value 2 is explicitly returned. Therefore,
//    the output of this line will be 2.
// 3-var a = 1;: This line declares the variable a and assigns it the value 1. 
//   his assignment happens after the first console.log statement, 
//   so it does not affect the output of that statement.

// function funcA() {
//     var a = 1; 
//     console.log(a);
//     console.log(foo()); 
    
//     function foo() {
//       return 2;
//     }
//   }
  
// funcA();
  
// --------------------------------------------------------------------------------
//--------------------------- Block 2----------------------------------------------

// var fullName = 'John Doe';
// var obj = {
// fullName: 'Colin Ihrig',
// prop: {
// fullName: 'Aurelio De Rosa',
// getFullName: function () {
// return this.fullName;
// }
// }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());


var fullName = 'John Doe';
var obj = {
fullName: 'Colin Ihrig',
prop: {
fullName: 'Aurelio De Rosa',
getFullName:  function () {
return this.fullName;
}
}
};
console.log(obj.prop.getFullName());
var test = obj.prop.fullName;
console.log(test);

// 1- 'Aurelio De Rosa' for the first console.log because it correctly accesses the inner object's
//     fullName property within the getFullName method's context.
// 2- 'John Doe' for the second console.log because the test function is detached from any specific object, 
//     so it falls back to the global context where fullName is 'John Doe'.

// --------------------------------------------------------------------------------------
//--------------------------- Block 3-------------------------

// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
//     }
//     funcB();
//     console.log(typeof a);
//     console.log(typeof b);


//    let a = b = 0;
// 1- In this line, two variables are declared: a and b, both initialized to 0.
//    However, it's important to note that b is declared without the let or var keyword, which 
//    means it becomes a global variable (implicitly global) rather than a local variable within the function funcB.
// 2- console.log(typeof a);
//    After calling funcB(), this line attempts to log the data type of a.
//    However, a is a local variable within the funcB function, and it's not accessible from outside the function.
//    As a result, this line will produce an error undefined.
//    console.log(typeof b);
//    Here, you're trying to log the data type of b.
//    Since b was declared without the let or var keyword inside the funcB function, it becomes a global variable.
//    As a global variable, b is accessible outside the function.
//    Therefore, this line will log "number" because b is globally scoped and has a value of 0.

function funcB() {
    a = b =0; 
    a++;
    return a;
  }
  funcB();
  console.log(typeof a); 
  console.log(typeof b); 
  

//   ------------------------------------------------------------
//--------------------------- Block 4-------------------------

function funcC() {
    console.log("1");
    }
    funcC();
    function funcC() {
    console.log("2");
    }
    funcC();
    
    // This declaration overwrites the previous funcC function.
    // both calls to funcC result in "2" being logged because the second function declaration overwrites the first one.
    // Fix:

    function funcC() {
        console.log("1");
        }
        funcC();
        function funcD() {
        console.log("2");
        }
        funcD();

// --------------------------------------------------------------------------------------
//--------------------------- Block 5--------------------------
// function funcD1() {
//      d = 1;
//  }
//     funcD1();
//     console.log(d);

// function funcD2() {
//     var e = 1;
//  }
//     funcD2();
//     console.log(e);
    
//   1-  In funcD1, d is assigned a value without declaring it using var, let, or const. 
//       This will result in d being treated as a global variable.
//   2-  In funcD2, e is declared using var and is scoped to the function funcD2.

function funcD1() {
    d = 1;
}
   funcD1();
   console.log(d);

function funcD2() {
    e = 1;
}
   funcD2();
   console.log(e);



// --------------------------------------------------------------------------------------
//--------------------------- Block 5--------------------------
var f = 1;

function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
// var f = 1;
funcE();

   