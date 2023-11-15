let numbers= [1,2,3,4,5,6,7,8,9,10]

function doubleValues(arr,callback){
    return arr.map(function(num){
        return callback(num);
    })
}
function double(num) {
   return num*2;
}
const doublesArr= doubleValues(numbers,double);
console.log(doublesArr);


function onlyEvenValues(arr) {
    return arr.filter(function(num) {
      return num % 2 === 0;
    });
  }
  const evenArray = onlyEvenValues(numbers);
  console.log(evenArray); 

  function showFirstAndLast(arr){
    return arr.filter(function(element, index) {
        return typeof element === 'string' && (index === 0 || index === arr.length - 1);
      });
    }
let array = [1, 2, 'apple', 'fatema', 5, 'fullStack'];
let resultArray = showFirstAndLast(array);
console.log(resultArray); 


function vowelCount(str){
    str=str.toLowerCase();
    const counts = {};
    for (let char of str) {
        if(char=== 'a' || char=== 'o'|| char=== 'u'|| char=== 'e' || char=== 'i'){
          if (counts[char]) {
            counts[char]++;
          }
          else {
            counts[char] = 1;
          }
        }
      }
    return counts;
}
// const inputString = 'This Is for each Mapping Exercise';
const result = vowelCount(inputString);
console.log(result);



function capitalize (str){
    let strArr = str.split('').map(function(c){
        return c === c.toUpperCase() ? c : c.toUpperCase()
      }).join('')
      return strArr;
    }
      
// const inputString = 'This Is for each Mapping Exercise';
console.log(capitalize(inputString));


function shiftLetters(str) {
    let newString = '';
      for (let i = 0; i < str.length; i++) {
      if (/[b-zB-Z]/.test(str[i])) {
        const newCharCode = str.charCodeAt(i) - 1 ;
        newString += String.fromCharCode(newCharCode);

      } 
      else {
        newString += str[i];
      }
    }
  
    return newString;
  }
  
  console.log(inputString);
  console.log(shiftLetters(inputString)); 
  


  function swapCase (str){
    let strArr = str.split('').map(function(c){
        return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
      }).join('')
      return strArr;
    }

    const inputString = 'RhhdS fffGhbG';
    console.log(swapCase(inputString)); 