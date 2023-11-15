// array:
// const people = ["Greg", "Mary", "Devon", "James"];
// 1. Write the command to remove "Greg" from the array.
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);

// 2. Write the command to remove "James" from the array.
people.pop();
console.log(people);
// 3. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log(people);

// 4.. Write the command to add your name to the end of the
// array.
people.push("Fatema");
console.log(people);

// 5. Write the command to make a copy of the array using a
// slice. The copy should NOT include "Mary" or "Matt".
const copyOfPeople = people.slice(2,4); // Removes "Mary" and "Matt"
console.log(copyOfPeople);

// 6. Write the command that gives the indexOf where "Mary"
// is located.
const maryIndex = people.indexOf("Mary");
console.log(maryIndex);

// 7. Write the command that gives the indexOf where "Foo" is
// located. What is returning? Why?
const fooIndex = people.indexOf("Foo");
// 8. Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" from the array and add
// "Elizabeth"
// and "Artie". Your array should look like this when you are
// done ["Greg", "Mary", "Elizabeth", "Artie",
// "James"].
const copypeople = ["Greg", "Mary", "Devon", "James"];
copypeople.splice(2, 1, "Elizabeth", "Artie");
console.log(copypeople);


// 9. Create a new variable called withBob and set it equal
// to the people array concatenated with the string of "Bob".
const withBob = people.concat("Bob");
console.log(withBob);