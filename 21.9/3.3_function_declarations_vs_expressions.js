// The world population is 7900 million people. Create
// a function declaration called 'percentageOfWorld1'
// which receives a 'population' value, and returns the
// percentage of the world population that the given
// population represents. For example, China has
// 1441 million people, so it's about 18.2% of the world
// population

function percentageOfWorld1(population) {
    const worldPopulation = 7900; 
    const percentage = (population / worldPopulation) * 100;
    return percentage;
 }
  
const chinaPopulation = 1441; 
const indiaPopulation = 1380; 
const usaPopulation = 331; 

console.log(`China represents about ${percentageOfWorld1(chinaPopulation).toFixed(1)}% of the world population.`);
console.log(`China represents about ${percentageOfWorld1(indiaPopulation).toFixed(1)}% of the world population.`);
console.log(`China represents about ${percentageOfWorld1(usaPopulation).toFixed(1)}% of the world population.`);


const percentageOfWorld2 = function (population) {
    const worldPopulation = 7900; 
    const percentage = (population / worldPopulation) * 100;
    return percentage;
  };

console.log(`China represents about ${percentageOfWorld2(chinaPopulation).toFixed(1)}% of the world population.`);
console.log(`China represents about ${percentageOfWorld2(indiaPopulation).toFixed(1)}% of the world population.`);
console.log(`China represents about ${percentageOfWorld2(usaPopulation).toFixed(1)}% of the world population.`);




  