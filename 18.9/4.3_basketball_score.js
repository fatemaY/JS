var johnScores = [89, 120, 103];
var mikeScores = [116, 94, 123];
var maryScores = [97,134,105];

var johnAverage = (89+120+103)/3;
var mikeAverage = (116+94+123)/3;
var maryAverage = (97+134+105)/3;

// if (johnAverage > mikeAverage && johnAverage > maryAverage) {
//     console.log("John's team wins with an average score of " + johnAverage + " points.");
//   } else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
//     console.log("Mike's team wins with an average score of " + mikeAverage + " points.");
//   } else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
//     console.log("Mary's team wins with an average score of " + maryAverage + " points.");
//   } else {
//     console.log("It's a tie! All teams have the same average score of " + johnAverage + " points.");
//   }

// if (johnAverage > mikeAverage) {
//   console.log("John's team wins with an average score of " + johnAverage + " points.");
// } else if (mikeAverage > johnAverage) {
//   console.log("Mike's team wins with an average score of " + mikeAverage + " points.");
// } else {
//   console.log("It's a tie! Both teams have an average score of " + johnAverage + " points.");
// }

if (johnAverage > mikeAverage){
    if(johnAverage > maryAverage){
        console.log("John's team wins with an average score of " + johnAverage + " points.");
    }
}
if (mikeAverage > johnAverage){
    if(mikeAverage > maryAverage){
        console.log("Mike's team wins with an average score of " + mikeAverage + " points.");
    }
}
if (maryAverage > mikeAverage){
    if (maryAverage > johnAverage){
        console.log("Mary's team wins with an average score of " + maryAverage + " points.");
    }
}
else {
      console.log("It's a tie! Both teams have an average score of " + johnAverage + " points.");
    }

 

