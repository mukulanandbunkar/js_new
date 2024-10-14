console.log("LET VS VAR VS CONST");

// const header = document.getElementById("header");
// header.innerText = "LET VS VAR VS CONST";

/**
 * Scope
    * IT is a certain region in the program where defined variable can be exist or can be recognized 
    * and beyond that it connot be recognized
 * 
 * TYPES OF SCOPE
    * Global Scope
    * Functional Scope
        * the scope of the function wherather it is fat arrow or normal function is functional scope
    * Block Scope
        * Everething inside { } is block scope
 */


// VAR FUNCtIONALITY

{
  var a1 = 1000;
}

if (true) {
  var a2 = 2000222;
}

const x = () => {
  var a3 = 30033;
};

function z() {
  var a4 = 30033;
}

var a = 5;
console.log('a=',a); // can able to access val: 5
console.log('a1=',a1); // can able to access val: 1000
console.log('a2=',a2); // can able to access val: 2000222
// console.log('a3=',a3) // ReferenceError: a3 is not defined
//console.log('a4=',a4); //ReferenceError: a4 is not defined

//LET CONST

{
    let b = 1995
}

// console.log('b=',b);//  ReferenceError: b is not defined

{
    const c = 1910
}

// console.log('c=',c);//  ReferenceError: c is not defined


/**
 * VARIABLE SHADOWING
    * In ES6 the introduction of let and const with block scoping provide us the concept of shadowing
    * it is the concept in which  the value of varible declared with let or const is changed inside the scope for a while untill and unless 
    * execution in that particular scope after that value revert to original value
 */

function fn() {
    const d = 1000
    if(true) {
        const d = 2000
        console.log(d);
    }
    console.log(d);
}

fn();

/**
 * ILLIGAL SHADOWING
 * illigal shadowing is th shadowin in which we try to shadow the varible inside the scope which is already declare with let or const in local scope
 * with the varible inside the scope declare with var
 */

function fn1() {
    let e = 'hello'
    var f = 'morning'
    if(true) {
      // var e= 'hi'; // illigal shadowing not possible
       let f= 'good morning'
       console.log(e); // hello
       console.log(f); // good morning
    }
    console.log(f); // morning
}

fn1()




