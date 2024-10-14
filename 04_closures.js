/*
Closures
closures in a js is a refrences to a varible to outer scope from its inner scope

* Lexiccal scope
    - a scope refers to current context of your code wheather it can locally globally defined or in  block scope
    - lexical scope is a scope in which a variable declare outside the function can be accessible inside of another function defined after variable declaration
    - but opoosite of above is not true
*/

var name = "mukulanandbunkar";

// global scope

function local(params) {
  // local scope
  console.log(name); // mukulanandbunkar
}

local();

// global scope

function local(params) {
  // local scope
  var username = "mukul";
}
console.log(name); // throw error

/**
 * A closure is the combination of a function bundled together (enclosed)
 * with references to its surrounding state (the lexical environment).
 * In other words, a closure gives you access to an outer function's scope from an inner function.
 * In JavaScript, closures are created every time a function is created, at function creation
 */

function subscribe(params) {
  var name = "new name";
  function getName() {
    console.log(name); // new name
  }
  getName();
}

subscribe();

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
var myFunc = makeFunc();
myFunc(); // Mozilla

function makeFunc1() {
  var name = "Mozilla";
  function displayName(num) {
    console.log(name, num);
  }

  return displayName;
}

makeFunc1()(5); // Mozilla, 5

/**
 * Closure Scope Chain
Every closure has three scopes:
• Local Scope (Own scope)
• Outer Functions Scope
• Global
 */

// global scope
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}
console.log(sum(1)(2)(3)(4)); // 10g

// Ques 1: What will be logged to console?
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; // shadowing
    console.log(count); //  1
  }
})();
console.log(count); // 0

// Ques 2: Write a function that would allow you to do this
function createBase(num) {
  return (num1) => {
    console.log(num + num1);
  };
}
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

// use of closures for time optimization

//below is the conventional way of writing without closures

function fn9(index) {
  const a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  console.log("without time optimization", a[index]);
}

console.time("1000");
fn9(1000);
console.timeEnd("1000");

console.time("2000");
fn9(2000);
console.timeEnd("2000");

function timeOptimize() {
  const a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return (index) => {
    console.log("with time optimizaation", a[index]);
  };
}

const getIndexInLessTime = timeOptimize();
console.time("1000");
getIndexInLessTime(1000);
console.timeEnd("1000");

console.time("2000");
getIndexInLessTime(2000);
console.timeEnd("2000");

//output based question

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}

/**
 * 0
 * 1
 * 2
 * 3
 * 4
 */

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}

/**
 * 5
 * 5
 * 5
 * 5
 * 5
 */

// Closures in Javascript
// Ques 5: How would you use a closure to create a private counter?
function counter() {
  var _counter = 0;
  function add(increment) {
    _counter += increment;
  }
  function retrive() {
    return "Counter = " + _counter;
  }
  return {
    add,
    retrive,
  };
}

const { add, retrive } = counter();

add(2);
add(10);
add(20);
console.log(retrive);

//Module pattern
/**
 * it is a pattern in which we are not allowing user to call pvt function user can indirectly access the pvt function via public function
 */

var module = (function () {
  function privateMethod(params) {
    console.log("private");
  }

  return {
    publicMethod: function () {
      console.log("public function");
    },
  };
})();

//module.privateMethod --- we cant access this
module.publicMethod; // <--- we can access this

//once polyfill
/**
 * once means if function is called once it will not call another time
 */

const greetHello = (msg) => console.log(msg);
greetHello("hello i will call multiple times");
greetHello("hello i will call multiple times");
greetHello("hello i will call multiple times");
greetHello("hello i will call multiple times");

function callOnce(fn, context) {
  let ran;
  return function () {
    if (fn) {
      ran = fn.apply(context || this, arguments);
      fn = null;
    }
    /*
     * first time fn = function {...}, ran = fn
     * after that fn = null , ran = undefined
     */
    console.log(fn, ran, "----");
    return ran;
  };
}

const greetOnce = callOnce((msg) => console.log(msg));
greetOnce("this will call once");
greetOnce("this will call once");
greetOnce("this will call once");
greetOnce("this will call once");

// make this ran only once of some one already run show different msg

function likeVdo() {
  return function (msg) {
    console.log("u just liked out vdo");
  };
}

// likeVdo()();
// likeVdo()();
// likeVdo()();

// but user can like the vdo only once after that he will gwt u already like our vdo

function likeOnce(fn, context) {
  let count = 0;
  return function () {
    if (count > 0) {
      console.log("u already liked our vdo");
    } else {
      fn(context || this, arguments);
      count++;
    }
  };
}

const onlyOne = likeOnce(function (msg) {
  console.log("u just liked out vdo");
});

onlyOne();
onlyOne();
onlyOne();

// ployfill of memoize

const Memoize = (fn, context) => {
  const cache = {};

  return (...args) => {
    const argsCatche = JSON.stringify(args);
    if (!cache[argsCatche]) {
      cache[argsCatche] = fn.call(context || this, ...args);
    }
    return cache[argsCatche];
  };
};

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i <= 100000000; i++) {}
  return num1 * num2;
};

const MemoizeClumbsyProduct = Memoize(clumsyProduct);

console.time("First call");
console.log(MemoizeClumbsyProduct(9467, 7649));
console.timeEnd("First call");

console.time("second call");
console.log(MemoizeClumbsyProduct(9467, 7649));
console.timeEnd("second call");
