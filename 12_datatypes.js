console.log('this is my datatype file');

const a = new Array;

console.log(typeof('type of a is', a));

const detail = {
    name: 'mukul',
    rollno: 123456
}

const b = detail instanceof Object;

console.log(b, 'b')

console.log(('ba' + + 'a' + 'a').toLowerCase());
console.log(3 !== '3')

//primitive data types
console.log(typeof ('mukul')) // string
console.log(typeof (1)) // number
console.log(typeof (987065554433444555666777667766776677788777788787766)) // bigInt
console.log(typeof (false)) // boolean
console.log(typeof (Symbol('fdddf'))) // Symbol

//non primitive datatypes
// tey always return object as a type

console.log(typeof([])); // object
console.log(typeof ({})) // object

// mislaneous dataltyoe
console.log(typeof(NaN))// number
console.log(typeof(null))// obj
console.log(typeof(isNaN))// function

//isNaN
console.log(isNaN(NaN)); // true
console.log(isNaN('zasdasda')); // true
console.log(isNaN(111111)); // false

//isNaN consider boolean as number
console.log(isNaN(true)); // false
console.log(isNaN(false)); // false

//is NaN convert string into Number
console.log(isNaN('123454332')); // false
console.log(isNaN('dafdafdfs')); // true


//isNan with string concat

console.log(isNaN(+ + 'a')); // true




