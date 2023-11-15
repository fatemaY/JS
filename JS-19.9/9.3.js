const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
// const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

// function testArr(arr1,arr2){
//     for (var i = 0; i < arr1.length; i++) {
//         for (var j = 0; j < arr2.length; j++) 
//           if (arr1[i]===arr2[j]) {
//             arr2.splice(j, 1);

//         }
//     }
// }


function testArr(arr1,arr2){
    if (arr1.length !== arr2.length) {
        console.log("false");
    }
    for (var i = 0; i < arr1.length; i++) {
          let j;
          if(arr2.indexOf(arr1[i])===-1){
            console.log("false");
            break;
          }
          else{
          j=arr2.indexOf(arr1[i]);
          arr2.splice(j, 1);
          }
     }
        if(arr2.length===0){
                console.log("true");
            }
    }


       

testArr(food1,food2);

// if (food2.length === 0) {
//     console.log("true");
// } else {
//     console.log("false");
//   }
// }
