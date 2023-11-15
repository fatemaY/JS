var userGrade = prompt('Please enter your grade (in the form of a letter):');
if (userGrade && /^[a-zA-Z]$/.test(userGrade)) {
  var capitalizedGrade = userGrade.toUpperCase();
  var score;
  switch (capitalizedGrade) {
    case 'A':
      score = 'score of: 90-100 is an “A”';
      break;
    case 'B':
      score = 'score of: 80-89 is a “B”';
      break;
    case 'C':
      score = 'score of: 70-79 is a “C”';
      break;
    case 'D':
      score = 'score of: 65-69 is a “D”';
      break;
    case 'F':
      score = 'score of: 0-64 is an “F”';
      break;
    default:
      score = 'Invalid grade';
  }

  console.log('Your capitalized grade: ' + capitalizedGrade);
  console.log(' Your score: ' + score);
} 
else {
  console.log('Invalid input. Please enter a single letter grade.');

}

var userScore = prompt('Please enter your grade (in the form of a letter):');
if (!isNaN(userScore)) {
    var letterGrade;
  
    // Determine the letter grade based on the score
    if (userScore >= 0 && userScore <= 64) {
      letterGrade = 'F';
    } else if (userScore >= 65 && userScore <= 69) {
      letterGrade = 'D';
    } else if (userScore >= 70 && userScore <= 79) {
      letterGrade = 'C';
    } else if (userScore >= 80 && userScore <= 89) {
      letterGrade = 'B';
    } else if (userScore >= 90 && userScore <= 100) {
      letterGrade = 'A';
    } else {
      letterGrade = 'Invalid score (out of range)';
    }
  
    console.log('Your letter grade: ' + letterGrade);
  } else {
    console.log('Invalid input. Please enter a valid numeric score.');
  }