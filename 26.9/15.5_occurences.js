// function countOccurrences (str, char){
//     let counter = 0 ;
//     for ( let i = 0 ; i < str .length; i ++ ){
//     if ( str . charAt ( i ) === char ){
//     counter + 1 ;
//     }
//     } return counter ;
//     }
//     countOccurrences ( "ini mini miny moe" , "n" );

// 1. The bug in the original code was that the counter variable was not being incremented correctly. The line counter + 1; 
// should have been counter++; to properly increase the count when the character matches.


function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str . charAt ( i ) === char ){
    counter ++ ;
    }
  }
 return counter ;
}

const count = countOccurrences( "ini mini miny moe" , "n" );
console.log(count);