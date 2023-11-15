// function calcAverage (arr){
//     var sum ;
//     for ( var i = 0 ; i < arr .length; i ++ ){
//     sum += arr [ i ];
//     } return sum ;
//     }
//     calcAverage ([ 85 , 90 , 92 ]);

// 1- The sum variable was not initialized, leading to NaN when attempting to add values to it.

// 2- The corrected code initializes sum to 0, allowing it to accumulate the sum of elements correctly.

// 3- The code calculates the average by dividing the sum by the number of elements in the array



function calcAverage (arr){
    var sum=0 ;
    for ( var i = 0 ; i < arr .length; i ++ ){
      sum += arr[ i ];
    }
     return sum / arr.length ;
}

console.log(calcAverage ([ 85 , 90 , 92 ]));




