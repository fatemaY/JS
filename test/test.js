// Question: Write a function getEvens that takes an array of numbers and returns a new array containing only the even numbers.

// const arr = [1, 2, 3, 4, 5, 6];

// function evenNum(arr){
//     const evenArr= arr.filter((num) => num >3);
//     return evenArr
// }
// console.log(evenNum(arr));

// Question: Implement a function sumArray that takes an array of numbers and returns the sum of all elements.

const arr2 = [10, 5, 8, 2];
const sumArray = (arr) => arr.reduce((acc,curr)=>acc+curr ,0)
console.log(sumArray(arr2))