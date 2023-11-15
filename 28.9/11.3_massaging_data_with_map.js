const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ];

    function getNames(arr){
        return arr.map(function(element){
            return element.name ;
        })
    }
    console.log(getNames(data));


    function getdata(arr){
        const bornBefore1990 = arr.filter(person => new Date(person.birthday).getFullYear() < 1990);
        return bornBefore1990;
    }
    console.log(getdata(data));



    function countFoods(data) {
        const foodCounts = {};
        data.forEach(person => {
          for (const category in person.favoriteFoods) {
            for (let food of person.favoriteFoods[category]){
              if (!foodCounts[food]) {
                foodCounts[food] = 1;
              } 
              else {
                foodCounts[food]++;
              }
            }
          }
        })
        return foodCounts;
      }
      console.log(countFoods(data));
      