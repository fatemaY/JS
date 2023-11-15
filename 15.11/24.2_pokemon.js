function Pokemon(pokemonName, pokemonType,pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}
const pokemon1= new Pokemon("Pokemon1", "Fire", ["Fire Punch", "Ember", "Flamethrower"]);
const pokemon2 = new Pokemon("pokemon2", "Electric", ["Thunderbolt", "Quick Attack", "Iron Tail"]);
const pokemon3 = new Pokemon("Pokemon3", "Fire", ["Water Gun", "Waterfall", "Bubble"]);

console.log(pokemon1);
console.log(pokemon2);
console.log(pokemon3);

Pokemon.prototype.callPokemon = function () {
    console.log(`I choose you, ${this.name}`)
};
Pokemon.prototype.attack = function (num) {
    console.log(`${this.name} used ${this.attackList[num-1]}`)
};

pokemon1.callPokemon();
pokemon1.attack(1); 

pokemon2.callPokemon();
pokemon2.attack(1); 

pokemon3.callPokemon();
pokemon3.attack(1);

