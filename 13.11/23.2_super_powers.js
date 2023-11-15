const storm = {
    superPower: "flying",
    controlWeather: function () {
        console.log("I control the weather!");
      },
    }

    function printSuperPower() {
    console.log("my superpower is " +storm.superPower);
    }
    
    // const storm = {
    //     superPower: "flying",
    //     printSuperPower: function () {
    //       console.log("my superpower is " + this.superPower);
    //     },
    //     // additional property for controlling the weather
    //     controlWeather: function () {
    //       console.log("I control the weather!");
    //     },
    //   };
      
    //   // Invoke printSuperPower with storm as the context
    //   storm.printSuperPower();
      
    //   // Invoke controlWeather to demonstrate the additional functionality
    //   storm.controlWeather();