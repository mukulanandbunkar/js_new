console.log("LET VAR AND CONST");

/**
* SCOPE
   it is the space is js file within it js varaible can be recognized and outside which it will not recognized.
 * TYPES OF SCOPE
   * GLOBAL SCOPE
        everything outside function or a block is consider as global scope
   * FUNCTIONAL SCOPE
        everything inside any function is called functional scope
        Ex: function fn() {...}
   * BLOCK SCOPE
        everything inside any block is called block scoping
        Ex: {....}
 */

var a = 5; // global scope
console.log("value of a in the global space: ", a); // value of a in the global space:  5

{
  var a = 6; // block scope
  console.log("value of a in the block space: ", a); // value of a in the block space:  6
}

function fn() {
  var a = 10; // function scope
  console.log("value of a in the function space: ", a); // value of a in the function space:  10
}

fn();

console.log(a) // 6

/* BEHAVIOUR OF LET, VAR & CONST WITH DIFFERENT SCOPE*/
/*
        *VAR
          - var occupies the global space and functional space so it doesn't have block scope.
          - since var having a functional scope it will reflect different value for same variable name if it is defined inside function & global space
          - since var is not block scope whatever be the value of b we are try to assign will override the value in global space
          - if we are not redeclare the variable declare with var in global space then value will override in each scope and final value is the
            value of recent scope
          - we can redeclare the variable with var in same scope  
     */

var b = "this is global space";
var c = 10;
console.log("BEFORE BLOCK & FUNCTION: ", b); // BEFORE BLOCK & FUNCTION:  this is global space
console.log("BEFORE BLOCK & FUNCTION (C): ", c); // BEFORE BLOCK & FUNCTION (C):  10

{
  console.log(b); // this is global space
  var b = "this is block space";
  console.log(b); // this is block space
  c = 100;
  console.log("INSIDE THE BLOCK (C): ", c); // INSIDE THE BLOCK (C):  100
}

function fn2(params) {
  console.log(b); // undefined
  var b = "this is my functinal scope";
  console.log(b); // this is my functinal scope
  c = 1000;
  console.log("INSIDE THE FUNCTION (C): ", c); //INSIDE THE FUNCTION (C):  1000
}
fn2();

console.log("AFTER BLOCK & FUNCTION: ", b); // AFTER BLOCK & FUNCTION:  this is block space
console.log("AFTER BLOCK & FUNCTION (C): ", c); // AFTER BLOCK & FUNCTION (C):  1000

/*
        *LET  & CONST
          - let and const  occupies the funtion and block space seperately .
          - since let and const having a block scope it will reflect different value for same variable name if it is defined inside function, global & block space 
          - since there is sperate scope for function, block & global so no override phenomenon since there is sepreate value in each scope.
          - if we are not redeclare the variable declare with let in global space then value will override in each scope and final value is the
            value of recent scope but we can't override the const value 
          - these variable show the shadowing inside the function and block so override the value within in function & block without affecting
            the value of global scope
          - we can't redeclare the variable with let and const in same scope  
     */

let x = 10;
const y = 89;
console.log("value of x in global space:", x); // value of x in global space: 10
console.log("value of y in global space:", y); // value of y in global space: 89

{
  let x = 20;
  const y = 99;
  console.log("value of x in block space:", x); // value of x in block space: 20
  console.log("value of y in block space:", y); // value of y in block space: 99
}

function fn1() {
  let x = 30;
  const y = 109;
  console.log("value of x in functional space:", x); // value of x in functional space: 30
  console.log("value of y in functional space:", y); // value of y in functional space: 109
}

fn1();

console.log("value of x in global space after function and block call:", x); // value of x in global space after function and block call: 10
console.log("value of y in global space after function and block call:", y); // value of y in global space after function and block call: 89

/**
 * Illigal Shadowing
 * if we try to shadow or override var with the let it is completely valid shadowing
 * but if we try to shadow const or let with var it is ILLIGAL SHADOWING
 */

const u = 10;
let v = 1000;
var w = 2000;

console.log("in global space u:", u);

// try to shadow const u with let and var in block scope

{
  let u = 20;
  let w = 30000;
  console.log("in block space u:", u);
  console.log("in block space w:", w);
}

function f3() {
  let u = 30;
  console.log("in function space u:", u);
}

f3();

console.log("in global space u:", u);
