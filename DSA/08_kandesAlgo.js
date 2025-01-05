// find the contiguous subarray within an array (containing at least one number) which has the largest product.

let num = [2, 3, -2, 4];

const grtMaxProd = (arr) => {
  let maxProd = 1;
  let tempProd = 1;
  let startIndex = 0;
  let endIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    tempProd *= arr[i];
    if (tempProd > maxProd) {
      maxProd = tempProd;
    }
    if (tempProd < 0) {
      tempProd = 1;
    }
  }

  return { max_prod: maxProd, sub_array: arr.slice(startIndex, endIndex + 1) };
};

//Problem : Given an array of integers nums and an integer k,
//return the total number of continuous subarrays whose sum equals to k.

// method 1
const getNoOfArr = (arr, k) => {
  let count = 0;
  let tempSum = 0;
  for (let i = 0; i < arr.length; i++) {
    tempSum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      tempSum += arr[j];
      if (tempSum === k) {
        count++;
        break;
      }
    }
  }
};


const getCount = (str) => {
  const strArr = str.split("");
  const output = [];
  let temp = strArr[0];
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (temp === strArr[i]) {
      count++;
    } else {
      output.push([strArr[i - 1], count]);
      count = 1;
      temp = str[i];
    }
  }

  output.push([strArr[strArr.length - 1], count]);
  return output;
};



const getFlatten = (arr) => {
  const output = [];
  for(let i = 0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      return getFlatten(arr[i])
    } else {
     return output.push(arr[i])
    }
  }

  return output;
}