// Cartesian Product
// This function computes the Cartesian product of two arrays.
// The Cartesian product is the set of all ordered pairs from two arrays.

const cartasianProduct = (arr1, arr2) => {
  let largeArr = [];
  let smallArr = [];
  const outputArr = [];

  // Determine which array is larger.
  if (arr1.length >= arr2.length) {
    largeArr = [...arr1];
    smallArr = [...arr2];
  } else {
    largeArr = [...arr2];
    smallArr = [...arr1];
  }

  // Create pairs of elements from both arrays.
  for (let i = 0; i < smallArr.length; i++) {
    for (let j = 0; j < largeArr.length; j++) {
      outputArr.push([smallArr[i], largeArr[j]]);
    }
  }

  return outputArr;
};

// Example Usage of Cartesian Product
console.log(cartasianProduct([1, 2], ["a", "b"]));
// Output: [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

// Time Complexity: O(mn) where m and n are the lengths of the input arrays.

// Climbing Staircase
// This function calculates how many ways there are to climb a staircase with `n` steps,
// if you can take 1 or 2 steps at a time.

const climgStairCase = (n) => {
  const numOfWays = [1, 2]; // Base cases: 1 way to climb 1 step, 2 ways to climb 2 steps.

  // Fill the array with the number of ways to climb each number of steps.
  for (let i = 2; i <= n; i++) {
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2]; // You can reach step i from either step i-1 or step i-2.
  }

  return numOfWays[n - 1]; // Return the number of ways to climb n steps.
};

// Example Usage of Climbing Staircase
console.log(climgStairCase(5));
// Output: 8 (Ways to climb a 5-step staircase: 1+1+1+1+1, 1+1+1+2, 1+1+2+1, 1+2+1+1, 2+1+1+1, 2+2+1, 1+2+2, 2+1+2)

// Time Complexity: O(n)

// Tower of Hanoi
// This function solves the Tower of Hanoi problem for `n` disks, moving them from one rod to another.
// The objective is to move all disks from the `fromRod` to the `toRod`, using the `usingRod` as an auxiliary rod.

const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
  // Base case: If there's only one disk, move it from the source rod to the target rod.
  if (n === 1) {
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    return;
  }

  // Recursive case: Move the top n-1 disks from the source rod to the auxiliary rod.
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);

  // Move the nth disk from the source rod to the target rod.
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

  // Move the n-1 disks from the auxiliary rod to the target rod.
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
};

// Example Usage of Tower of Hanoi
towerOfHanoi(3, "A", "C", "B");
// Output:
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C

// Time Complexity: O(2^n)

// next permutation

const findNextPermutation = (arr) => {
  let i = arr.length - 2;
  while (arr[i] >= arr[i + 1] && i >= 0) {
    i--;
  }

  if (i >= 0) {
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
      j--;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  i = i + 1;
  j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
};

const getOccuranceArr = (arr) => {
  const output = [];
  let leftPtr = 0;
  let rightPtr = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    leftPtr = i;
    rightPtr = arr.length - 1;
    while (leftPtr <= rightPtr) {
      if (arr[leftPtr] === arr[rightPtr]) {
        output.push(arr[i]);
        break;
      }
      rightPtr--;
    }
  }
};

const obj = {
  a: {
    b: {
      c: 1,
      d: [3, 4, 5, 6],
      e: {
        f: 7,
      },
    },
  },
  b: [1, 2, 3],
  c: {
    d: {
      e: 63,
      f: 44,
    },
  },
};
// {
//  a_b_c: 1,
//  a_b_d_0: 3,
//  a_b_d_1: 4,
//  a_b_d_2: 5,
//  a_b_d_3: 6,
//  a_b_e_f: 7,
//  b_0: 1,
//  b_1: 2,
//  b_2: 3,
//  c_d_e: 63,
//  c_d_f: 44
// }

const output = {};

const getOutFromObj = (obj, tempKey) => {
  const keys = Object?.keys(obj);
  if (typeof obj === "object" && keys?.length) {
    for (let i = 0; i < keys.length; i++) {
      tempKey = tempKey ? `${tempKey}_${keys[i]}` : keys[i];
      if (typeof obj[keys[i]] === "number") {
        output[tempKey] = obj[keys[i]];
      } else if (typeof obj[keys[i]] === "object" && obj[keys[i]]?.length) {
        const k = obj[keys[i]];
        for (let j = 0; j < k.length; j++) {
          output[`${tempKey}_${j}`] = k[j];
        }
      } else if (typeof obj[keys[i]] === "object") {
        getOutFromObj(obj[keys[i]], tempKey);
      }
    }
  }
};

// const getOutFromObj = (obj, tempKey = "") => {
//   const keys = Object.keys(obj);
//   if (typeof obj === "object" && keys.length) {
//     for (let i = 0; i < keys.length; i++) {
//       const currentKey = keys[i];
//       const newKey = tempKey ? `${tempKey}_${currentKey}` : currentKey;
//       if (typeof obj[currentKey] === "number") {
//         output[newKey] = obj[currentKey];
//       } else if (obj[currentKey]?.length) {
//         const array = obj[currentKey];
//         for (let j = 0; j < array.length; j++) {
//           output[`${newKey}_${j}`] = array[j];
//         }
//       } else if (
//         typeof obj[currentKey] === "object" &&
//         obj[currentKey] !== null
//       ) {
//         getOutFromObj(obj[currentKey], newKey, output);
//       }
//     }
//   }
//   return output;
// };

getOutFromObj(obj, undefined);

console.log(output);

const string = "swidfgjssjgkttyty";
// widfgjs

const getLongestStr = (str) => {
  let initialIndex = 0;
  let outputStr = "";
  const outputArr = [];
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (outputStr.includes(str[i])) {
      const indexOfmatch = outputStr.indexOf(str[i]);
      const strBeforeMatch = outputStr.slice(0, indexOfmatch + 1);
      outputArr.push(strBeforeMatch);
      outputStr = outputStr.slice(indexOfmatch + 1);
    }
    outputStr += str[i];
  }
  outputArr.push(outputStr);

  for (let i = 0; i < outputArr.length; i++) {
    if (outputArr[i].length > maxLength) {
      maxLength = outputArr[i].length;
      outputStr = outputArr[i];
    }
  }

  return outputStr;
};

console.log(getLongestStr(string));

const arr3 = [
  "FORECAST-24",
  "Q1-24",
  "Q2-23",
  "Q4-23",
  "Q3-23",
  "FY-22",
  "FY-23",
];
// Expected Result: ['FY-22', 'FY-23', 'Q2-23', 'Q3-23', 'Q4-23', 'Q1-24', 'FORECAST-24'];

const getSortedForecast = () => {
  const obj = {};
  let output = [];
  for (let i = 0; i < arr3.length; i++) {
    const splitStrArr = arr3[i].split("-");
    const key = splitStrArr[0];
    const val = splitStrArr[1];
    if (key[0] === "Q") {
      if (obj[val]) {
        obj[val] = [...obj[val], key].sort();
      } else {
        obj[val] = [key];
      }
    } else {
      if (obj[key]) {
        obj[key] = [...obj[key], val].sort();
      } else {
        obj[key] = [val];
      }
    }
  }
  obj["FY"].forEach((val) => {
    output.push(`FY-${val}`);
  });
  Object.keys(obj)
    .filter((ele) => !isNaN(+ele))
    .sort()
    .forEach((e) => {
      obj[e].forEach((i) => {
        output.push(`${i}-${e}`);
      });
    });
  obj["FORECAST"].forEach((val) => {
    output.push(`FORECAST-${val}`);
  });
  return output;
};

console.log(getSortedForecast());

// input 3
// ouput: [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
function generateParentheses(n) {
  const result = [];

  function backtrack(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
}

const n = 3;
console.log(generateParentheses(1));

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//["red", 'red', "blue", "blue", "blue", "blue","red","blue", "white"]

// [blue, white]

//[]
//prev
//curr
//[red,red]

// const getOut = (arr) => {
//   let left = 0;
//   let right = 0;
//   while (right < arr.length) {
//     if (arr[left] === arr[right]) {
//       right++;
//     } else {
//       if (right - left > 2) {
//         arr.splice(left, right - left);
//         left = 0;
//         right = 0;
//       } else {
//         left = right;
//       }
//     }
//   }
//   arr.splice(left, right - left);
//   return arr;
// };

const getOut = (arr) => {
  const hasMap = arr.slice(0, 3);
  for (let i = 3; i < arr.length; i++) {
    if (arr[i] !== hasMap[hasMap.length - 1]) {
      let j = hasMap.length - 1;
      let count = 0;
      while (hasMap[j] === hasMap[j - 1]) {
        j--;
        count++;
      }
      if (count > 1) {
        hasMap.splice(j);
      }
    }
    hasMap.push(arr[i]);
  }
  let j = hasMap.length - 1;
  let count = 0;
  while (hasMap[j] === hasMap[j - 1]) {
    j--;
    count++;
  }
  if (count > 1) {
    hasMap.splice(j);
  }
  return hasMap;
};

console.log(getOut(["red", "red", "blue", "blue", "blue", "red", "blue"]));
