const mycountry = {
    country: "France",
    capital: "Paris",
    language: "French",
    population: 67.50 , 
    neighbours: ["Spain", "Italy", "Germany", "Switzerland"],
    describe: function() {
      console.log( this.country + " has" + this.population + " million people, their mother tongue is "
      + this.language + ", they have " + this.neighbours.length + " neighbouring countries, and a capital called " + this.capital + ".");
    },
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        console.log(mycountry.isIsland)
      }
};

mycountry.describe();
mycountry.checkIsland();