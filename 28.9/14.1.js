let numbers = [1, 2, 3,4,5,6,7,8,9,10];

function sumOfeven(numbers){
    if (numbers.length === 0) {
        return undefined;
      }
    return numbers.reduce((accumulator, currentValue)=>{
        if(currentValue % 2 ===0){
          return accumulator + currentValue;
        }
          return accumulator;
      }, 0);
}
console.log(sumOfeven(numbers));
  

function max(arr) {
    if (arr.length === 0) {
      return undefined;
    }
  
    return arr.reduce((accumulator, currentNumber) => {
      if (currentNumber > accumulator) {
        return currentNumber;
      }
      return accumulator;
    }, arr[0]); 
  }

console.log(max(numbers)); 
  
function average(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    const sum = numbers.reduce((accumulator, currentValue)=>{
      return accumulator + currentValue
    }, 0);
    return sum/ arr.length;
  }

console.log(average(numbers)); 