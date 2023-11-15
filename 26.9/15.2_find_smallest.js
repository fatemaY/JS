// function findSmallest(a, b, c){
//     if (a > b > c){
//     return c;
//     } else if (a > c > b) {
//     return a;
//     } else {
//     return b;
//     }
//     }
// findSmalest(52,66, 2);

// 1. Corrected the function name from findSmalest to findSmallest to match the function definition and call
// 2. the logic of if conditions doesn't correct. The corrected code uses the < operator to check:
//      1-if a is the smallest by using &&
//      2-if b is the smallest by using &&
//      3- else return c  


function findSmallest(a, b, c){
    if (a < b && a < c){
    return a;
    }
    else if (b < a && b < c) {
    return b;
    }
    else {
    return c;
    }
    }

console.log(findSmallest(52,66, 2));