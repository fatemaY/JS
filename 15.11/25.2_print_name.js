const user = {
    name: "Fatema",
    course: "FullStack Bootcamp",
    printName: function() {
        console.log(this.name);
    },
    printNameAfterASecond: function() {
        setTimeout(function() {
        console.log(this.name);
        }.bind(this), 1000);
        }
};

user.printName();
user.printNameAfterASecond();
      