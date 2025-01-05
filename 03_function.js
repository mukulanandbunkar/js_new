/*
    *Function
    *What is function declaration/ funtion defination/ funtion statement ?
        - function name (params) {
            return params;
        }
    
    * What is function expression
        - if we store function in variable is called funtion expression
        - the function assign to variable is either anonymous funtion or funtion with name
        - Ex1: const a = funtion () {
                                        <---- Example function expression in which anonymous funtion assigned to variable
        }

         - Ex1: const a = funtion name (params) {
                    return params;      <---- Example function expression in which funtion with name assigned to variable
                 }

    
    * ANONYMOUS FUNCTION
       - funtion with no name is anonymous funtion
       - anonymous function can be assigned to any variable
       - anonnymous function can be passed as callback for another funtion
       - Ex1: const a = funtion () {
                                        <---- Example with anonymous funtion assigned to variable
            }


       - Ex2: fn(()=> {
                                        <---- Example with anonymous function as  call back funtion 
       })



    * What is first class function
       - first class funtion is th function in which we can pass another function as a variable 
       - the function which is passed can  be act as a varable for the function in which it pass
       - we can manipulate the value with the help of function passed
       - the parent function in which another funtion is passed is first class function
*/

/**
 * If functionis defined with the same name  using function key word the last function defination overrides the function defination
       of previous one
 */


       /**
        * why function is called first class object
          In JavaScript, functions are first-class objects, 
          because they can be passed to other functions, 
          returned from functions, and assigned to variables and properties.
          They can also have properties and methods just like any other object. 
        */
const sum = (a, b) => a + b;

/**
 * Below is the example of First class function
 */

const logSum = (fn) => {
  console.log(fn(5, 4));
};

logSum(sum); // 9

/**
 * IIFE
 * IIFE is the immediade invoke function expression
 */

(function square(num) {
  console.log(num * num); //25
  return num * num;
})(5);

// ouput based question

(function x(num1) {
  (function y(num2) {
    var num1 = 29;
    console.log(num1); // 29
  })(23);
  console.log(num1); //25
})(25);

// Function Scope

var num1 = 1000;
var num2 = 2000;
var name = "Mukul";

function multiply() {
  return num1 * num2;
}

console.log(multiply(), "multuply"); // 2000000

function getScore() {
  var num1 = 45;
  var num2 = 90;

  function addScore() {
    return num1 + num2;
  }

  console.log(`my name is ${name} having score ${addScore()}`);
}

getScore(); // my name is mukul having score 135



function fn3(a, b, c) {
  // parameter
}

fn3(12, 13, 14); // argument

/**
 * Rest operator
 * Rest operator is the operator which is used to pass n no of arguments
 */

function sumOfN(...args) {
  console.log(args);
  /**
   * [1, 2, 3, 5, 6, 3, 2, 4 ]
   */
  const total = args.reduce((acc, curr) => acc + curr, 0);
  console.log(total, "");
  return total;
}

sumOfN(1, 2, 3, 5, 6, 3, 2, 4); // 26


