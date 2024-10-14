/**
 * Array declaration
 */
//method 1
let arr = new Array();

const obj = {
  name: "mukul",
  age: 28,
};

//method 2
let arr1 = ["apple", "banana", "cherry", obj];

//finding length

console.log(arr1.length);

//Method of array

// Add or remove element

// Add to end of the array

arr1.push("orange"); // this will return length of the new array
console.log(arr1); // ['apple', 'banana', 'cherry', obj, 'orange]
arr1.pop(); // this will return removed element ---> orange
arr1.pop(); // return obj
console.log(arr1); // ['apple', 'banana', 'cherry']

/**
  * both push() and pop() make permanent change in the array
  * push()
    -push is use to insert the element at the last of the array
    - on push the element it will return the length of new array
  * pop()
    -pop is used to remove element from the last of the array
    - pop will return removed element
  */

// Add to start of the array

arr1.unshift("orange"); // this will return length of the new array
console.log(arr1); // ['orange', 'apple', 'banana', 'cherry']
arr1.shift(); // this will return removed element ---> orange
arr1.shift(); // return obj
console.log(arr1); // ['banana', 'cherry']

/**
  * both unshift() and shift() make permanent change in the array
  * unshift()
    -unshift is use to insert the element at the start of the array
    - on unshift the element it will return the length of new array
  * pop()
    -shift is used to remove element from the start of the array
    - shift will return removed element
  */

//Looping in Array
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

let i = 0;
while (i < arr1.length) {
  console.log(arr1[i]);
  i++;
}


// slice 
/**
 * slice return the new array in which we have start index and one less than end index
 * it will not include end index
 * -ve index in allowed
 */
const arr2 = ['apple', 'orange', 'cherry', 'banana'];
console.log(arr2.slice(1,3)) // ['orange', 'cherry']
console.log(arr2.slice(1,-1)) // ['orange', 'cherry']
console.log(arr2.slice(-1)) // ['banana']

// slice 
/**
 * splice change the actual array
 * it will take three params first index, no_of_item to be deleted from initial index, replace with
 * -ve index is not allowed
 */

const arr3 = ['apple', 'orange', 'cherry', 'banana'];
console.log(arr3.splice(1,2, 'tomato')) // ['orange', 'cherry']
console.log(arr2.slice(1,-1)) // ['orange', 'cherry']
console.log(arr2.slice(-1)) // ['banana']