/**
 * object binding 
    there is two trypes of object binding in js
     *implecit
        implecit binding can be apply usind dot (.)
     *explicit
        explicit can apply using call, bind and apply
 */

/**
 * this
   - this keyword  is used to reference something like an object
   - everything in js is object even function is first class object
   - the value of this totally depend on context we are in
*/

/**
 * This keyword (Implecit binding)
 */

this.a = 5;

console.log(this.a); // 5
console.log(this); // windows

function getParam() {
  console.log(this.a);
}

/*
 this insode function which is declare with function keyword will reference to window object itself so below function call will print 5
 */

getParam(); // 5

/*
 this insode function which is declare with fat aRROW will reference to window object itself so below function call will print 5
 BUT THE BEHAVIOUR OF THIS IN FAR ARROW IS DIFFERENT
 */

const getParam1 = () => {
  console.log(this.a);
};

getParam1(); // 5

let user = {
  name: "Piyush",
  age: 24,
  getDetails() {
    console.log(this);
  },
};

user.getDetails();
/**
 * output
 {
   name: "Piyush", 
   age: 24, 
   getDetails() {
   console. log(this);
   }
}
 */

let user1 = {
  name: "Piyush",
  age: 24,
  childobj: {
    newName: "Roadside Coder",
    getDetails() {
      console.log(this.newName, "and", this.name);
    },
  },
};
/**
 * noraml funtion will always target to immidiate parent
 */
user1.childobj.getDetails(); // Roadside Coder and  undefined

let user3 = {
  name: "Piyush",
  age: 24,
  getDetails: () => {
    console.log(this.name);
  },
};
user3.getDetails(); // windows

// Object with a fat arrow function
// Fat arrow functions don't have their own 'this';
//they take the value of  this of the enclosing lexical context
const ObjWithFatArrow = {
  name: "mukul",
  surname: "anand",
  printName: () => {
    console.log(this, "This inside the object function");
  },
};
ObjWithFatArrow.printName();
// Will print window since it takes the enclosing lexical context

const ObjWithFatArrow1 = {
  name: "mukul",
  surname: "anand",
  printName: function () {
    return () => {
      console.log(this, "This inside the object function");
    };
  },
};
ObjWithFatArrow1.printName()();
// This will log ObjWithFatArrow1 since the enclosing lexical scope of the fat arrow function is the object

class user23 {
  constructorn(n) {
    this.name = n;
  }
  getName() {
    console.log(this.name);
  }
}

/**
 * in case of classes this keyword refernce to whatever be the value inside the constructor
 */
const User = new user23("Piyush");
console.log(User.getName()); // Piyush

// Question 1 - What is the Output?
const user99 = {
  firstName: "Mukul!",
  getName() {
    const firstName = "Mukul Anand!";
    return this.firstName;
  },
};

console.log(user99.getName()); // What is logged?
/**
 * output
 * Mukul!
 */

// Question 2

function makeUser() {
  return {
    name: "John",
    ref: this, // this will reference to window obj
  };
}
let user23 = makeUser();
console.log(user23.ref.name); // What's the result? // undefined

/**
 * how to correct above functionality
 */

function makeUser1() {
  return {
    name: "John",
    ref() {
      return this;
    }, // this will reference to  return object
  };
}
let user24 = makeUser();
console.log(user24.ref().name); // John

// Question 3 - What is the Output?
const user45 = {
  name: "Mukul Anand!",
  logMessage() {
    console.log(this.name); // What is logged?
  },
};
setTimeout(user45.logMessage(), 1000); // undefined
/**
 * output
 * undeined
 * since we are using setTimeout() this will refer to the window as it take it as callback
 * to resolve above problem we can use modify above code as below
 */

setTimeout(function () {
  user45.logMessage(); // Mukul Anand!
}, 1000);

// Question 4 - What is the Output?
const user33 = {
  name: "Mukul",
  greet() {
    return `Hello, ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye, ${(this, name)}!`;
  },
};
console.log(user33.greet()); // What is logged?  // Hello Mukul!
console.log(user33.farewell()); // What is logged? // Goodbye, undefined!

// Question 5 - Create an object calculator
let calculator = {
  read() {
    this.a = +prompt("a = ", 0); // promt use to ask value from user
    this.b = +prompt("b = ", 0); // + is here to change string to num
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read(); // let say we are putting 5 and 2
calculator.sum(); // 7
calculator.mul(); // 10

// Question 6 - What will be the Output?
var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(fn) {
    fn();
  },
};
object.method(callback); // 4
/**
 * since we are using method of object but callback refernce will be the windows always since it is dend as a callback
 */

// Question 7 - What will be the Output?
var length = 9;
function callback1() {
  console.log(this.length); // What is logged?
}
const object1 = {
  length: 10,
  method() {
    // argument : {[callback1, 2,3], length: 3}
    arguments[0]();
  },
};
object.method(callback1, 2, 3); // 3
/**
 * since we are refernecing to argument object array this time length of array will print
 */

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};

const result = calc.add(10).multiply(1000).add(99);
console.log(result.total);


// usind=g  class constructor 


class operation {
   constructor() {
       this.total = 0
   }
   add(a) {
     this.total += a;
     return this;
   }
   multiply(a) {
     this.total *= a;
     return this;
   }
 };
 
 const op = new operation()

 const res = op.add(10).multiply(1000).add(99);
console.log(res.total);
