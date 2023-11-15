const person = {
    name: 'John',
    age: 30,

    getName: function(){
        console.log(`my name ${this.name}`)
    },
    introduce: function () {
        console.log(`Hi, I'm ${this.name} and my age is ${this.age}`)
    },
    birthday: function (){
        this.age++;
        console.log(` Birthday is ${this.age}`)
    },
    changeName: function(newName){
        this.name = newName;
        console.log(`my new Name is ${this.name}`)
    },
    arrowF: ()=>{
        console.log(this)
    },
    regularF: function(){
        console.log(this)
    }

}

const anotherPerson = {
    name: "Bassam",
    age: 40
}
// person.regularF();
// person.arrowF();
const SaveMe = person.getName()
// person.introduce()
// anotherPerson.getName = person.getName;
// anotherPerson.introduce = person.introduce;
// anotherPerson.address = "Tel Aviv";
// anotherPerson.name = "Fady";
// console.log(anotherPerson);
// anotherPerson.introduce()
// person.birthday()
// person.birthday()
// person.birthday()

// person.changeName("Nikolai")
// person.introduce()

console.log(SaveMe)

// const introduceFunc = person.getName;
// console.log(introduceFunc());
// console.log(typeof introduceFunc);



// -----------------------------Question 1:-----------------------
// In your own words what will this point to and why?
// (Note this is the global scope)
console.log(this);

// this in the global scope would be an empty object {} by default, not the Window object as in the browser.

// ----------------------------Question 2:-------------------------
// a. In your own words what will this point to and why?
// b. How can you fix this code?

const myObj = {
    name: "Timmy",
    greet: () => {
    console.log(`Hello ${this.name}`);
    },
};
myObj.greet();

// this within the greet method will not refer to the myObj object as expected. The reason is that arrow 
// functions do not bind their own this value.

const myFixedObj = {
    name: "Timmy",
    greet: function() {
      console.log(`Hello ${this.name}`);
    },
  };
  
  myObj.greet();


// ------------------------------------Question 3:--------------------------
// In your own words what will this point to and why?

const myFuncDec = function () {
console.log(this);
};

// In the context of the function myFuncDec, the value of this depends on how the function is invoked.


// -------------------------------------Question 4:---------------------------
// In your own words what will this point to and why?

const myFuncArrow = () => {
console.log(this);
};
myFuncArrow();

// this will refer to the global object (e.g., window in a browser environment or global in Node.js).


// --------------------------------------Question 5:-------------------------------
// a. In your own words, what will this point to and why?
// b. How can you fix this code?

document.querySelector(".element").addEventListener(() => {
console.log(this);
});

// the value of this will be inherited from the enclosing scope at the time of its creation. 
// In the context of an arrow function used as an event listener, this would likely refer to the global object 

document.querySelector(".element").addEventListener(function() {
    console.log(this);
  });
  