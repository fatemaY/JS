var randomNumber = Math.floor(Math.random() * 51); // Generates a number between 0 and 50
console.log(randomNumber);

while (true) {
  var userGuess = parseInt(prompt('Guess the number between 0 and 50:'));
  console.log(userGuess);
  if (isNaN(userGuess)) {
    alert('Invalid input. Please enter a number.');
    continue;
  }
  if (userGuess === randomNumber) {
    console.log('Congratulations! You guessed the correct number: ' + randomNumber);
    alert('Congratulations! You guessed the correct number: ' + randomNumber);
    break; 
  } 
  else if (userGuess < randomNumber) {
    console.log('Guess too low. Try again.');
  } 
  else {
    console.log('Guess too high. Try again.');
  }
}
