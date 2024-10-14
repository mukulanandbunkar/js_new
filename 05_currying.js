/*
what is currying
1.currying is nothing but a convert a function that will take only single argument and return anither function that will also take 
also single argument
why we are using curring
there is several use cases of using curring one if we want same operation with different varible we we can assign one high level function
to the varible and use it with differnet values
in Dom manipulation also if we are targeting paticulat element of a HTML then we can easily change its inner text
both above example is explained below:-
*/

// convert below function in curring function

const sum = (a, b, c) => a + b + c;

const curringSum = (a) => (b) => (c) => a + b + c;

/*
there is several use cases of using curring one if we want same operation with different varible we we can assign one high level function
to the varible and use it with differnet values
 */

const computation = (operation) => (a) => (b) => {
  if (operation === "sum") return a + b;
  else if (operation === "multiply") return a * b;
  else if (operation === "divide") return a / b;
  else if (operation === "substraction") return a - b;
};

const sumResults = computation("sum");
sumResults(5)(2);
sumResults(10)(11);

const substractionResults = computation("substraction");
substractionResults(5)(2);
substractionResults(10)(11);

const multiplyResults = computation("multiply");
multiplyResults(5)(2);
multiplyResults(10)(11);

const divideResults = computation("divide");
divideResults(5)(2);
divideResults(10)(11);

/*
in Dom manipulation also if we are targeting paticulat element of a HTML then we can easily change its inner text
 */

const changeInnerText = (id) => (text) => {
  const element = document.querySelector(`#${id}`);
  element.innerText = text;
  element.style.color = 'green'
};

const changeCurringText = changeInnerText("currying");
changeCurringText("fhjdksfhsjkdhf");

/*
Infinite curring
infinite curring is a curring which goes till n number of return functions 
and in each functions we can pass n no. of agruments

function nonCurring(a,b,c,d,e,.....n) ----->>>> function curring(a)(b)(c)(d)(e).....()
 */

const infiniteCurrying = (a) => (b) => b ? infiniteCurrying(a + b) : a;

console.log(infiniteCurrying(16)(32)(100)(12)());

/*
Currying VS PArtial application
curring is always return function withb single argument 
Partial function will also return function but more than one argument
 */

const partialApp = (a) => (b, c) => a + b + c; // PArtial application
const currying = (a) => (b) => (c) => a + b + c; // currying

function curry(func) {
    /**
     * Imp point
     * func.length gives us the no of argment pass
     */
    console.log(func, func.length);
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}
const sum1 = (a, b, c, d) => a + b + c + d;
const totalSum = curry(sum1);
console.log(totalSum(1)(6)(5)(6));