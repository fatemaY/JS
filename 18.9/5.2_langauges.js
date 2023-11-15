var language = prompt('Enter a language name:');
language = language.toLowerCase();

var message;

switch (language) {
  case 'mandarin':
    message = 'MOST number of native speakers!';
    break;
  case 'spanish':
    message = '2nd place in number of native speakers';
    break;
  case 'english':
    message = '3rd place';
    break;
  case 'hindi':
    message = 'Number 4';
    break;
  case 'arabic':
    message = '5th most spoken language';
    break;
  default:
    message = 'Not in the top 5';
}
console.log(message);
