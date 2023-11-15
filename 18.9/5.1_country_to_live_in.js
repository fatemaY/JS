var language = prompt('What is the official language of the country you are considering?');
let isIsland = prompt('Is the country an island? (true or false)');
var population = prompt('What is the population of the country?');
var country = prompt('What is the name of the country?');

population = parseFloat(population);

if (language === 'English' && population < 50000000 && isIsland === 'false') {
  console.log('You should live in ' + country + '.');
} 
else {
  console.log(country + ' does not meet your criteria.');
}
