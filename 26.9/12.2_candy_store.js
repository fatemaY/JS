const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }

    // function getCandy(candyStore, id){
    //     return candyStore.candies.find(candy => candy.id === id);
    // }
    // console.log(getCandy(candyStore,"5hd7y"));
        


    // function getPrice(candyStore, id){
    //     const candy = candyStore.candies.find(c => c.id === id);
    //     return candy ? candy.price : null;   
    // }
    // console.log(getPrice(candyStore,"5hd7y"));

    // function addCandy(candyStore, id, name, price){
    //     const newCandy = {
    //       name: name,
    //       id: id,
    //       price: price,
    //       amount: 1
    //     };
    //     candyStore.candies.push(newCandy);
    //   }
    //   addCandy(candyStore, "abc", "kinder", 3)
    //   console.log(candyStore.candies);
    

    function buy(candyStore, id) {
        const candyIndex = candyStore.candies.findIndex(candy => candy.id === id);
        if (candyIndex !== -1 && candyStore.candies[candyIndex].amount > 0) {
          const candyPrice = candyStore.candies[candyIndex].price;
          candyStore.cashRegister += candyPrice;
          candyStore.candies[candyIndex].amount--;
          console.log("bying..");

        }
        else {
          console.log("Candy not found.");
        }
      }
      buy(candyStore, "5hd7y");

        