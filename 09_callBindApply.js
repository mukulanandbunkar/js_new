// Call, Bind and Apply in Javascript (Explicit Binding)
// Question 2 - What is Apply?
var obj = { name: "Piyush" };
function sayHello(age) {
  return "Hello " + this.name + " is " + age;
}
console.log(sayHello.call(obj, 24));

// Question 3 - What is Bind?
var obj = { name: "Mukul" };
function sayHello(age, profession) {
  return "Hello" + this.name + " is" + age + " and is an " + profession;
}
const bindFunc = sayHello.bind(obj);
console.log(bindFunc(24, "Software Engineer"));
console.log(bindFund(69, "Youtuber"));

// Question 7 - Call printAnimals such that it prints all animals in object
const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];
function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}
for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

// Question 8 - Append an array to another array
const array = ["a", "b"];
const elements = [0, 1, 21];
array.push.apply(array, elements);
console.log(array); // ['a', 'b', 0, 1, 21]

// Question 9 - Using apply to enhance Built-in functions
// Find min/max number in an array
const numbers = [5, 6, 12, 3, 7];
console.log(Math.min.apply(null, numbers)); // 3 -- same for max we can do

// Question 10 - Bound function
function f() {
  console.log(this); // pointing to window object
}
let user = {
  g: f.bind(null),
};
user.g();

// Question 11 - Bind Chaining
function f() {
  console.log(this.name);
}
f = f.bind({ name: "mukul" }).bind({ name: "mukul anand" });
/**
 * output
 * mukul
 * since bind will not allow chaining once bind is set it will hardly set
 */
f();

function checkPassword(success, failed) {
  let password = prompt("Password?", "");
  if (password == "Roadside Coder") success();
  else failed();
}
let user1 = {
  name: "Piyush Agarwal",
  loginSuccessful() {
    console.log(`${this.name} log in`);
  },
  loginFailed() {
    console.log(`${this.name} failed to log in`);
  },
};
checkPassword(user1.loginSuccessful.bind(user), user1.loginFailed.bind(user));

// Question 13 - Partial application for login function
function checkPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "Roadside Coder") ok();
  else fail();
}
let user3 = {
  name: "Piyush Agarwal",
  login(result) {
    console.log(this.name + (result ? " login successful" : "login fail"));
  },
};


checkPassword(user3.login.bind(user3, true),user3.login.bind(user3, false) )

/**
 * call bind and apply will not work with fat arrow function
 */