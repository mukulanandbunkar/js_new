const promiseFn = (isResolve) => {
  const b = new Promise((resolve, reject) => {
    if (isResolve) {
      setTimeout(() => {
        resolve(10);
      }, 5000);
    } else {
      reject(new Error("this is my Error"));
    }
  });
  return b;
};

(async () => {
  try {
    const response = await promiseFn(true);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
})();

const convertNoramlToCurry = (...args) => {
  return args[0] + convertNoramlToCurry(args.slice(1));
};

convertNoramlToCurry(1, 2, 3, 4);

//polyfill of setTimeout

const getTimeOut = (cb, delay) => {
  let timeOut;
  if (timeOut) {
    clearTimeout(timeOut);
    return;
  }
  timeOut = setTimeout(() => {
    return cb();
  }, delay);
};

const charCountFromStr = (string) => {
  const obj = {};
  const result = {};
  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]]) {
      obj[string[i]]++;
    } else {
      obj[string[i]] = 1;
    }
    if (obj[string[i]] > 1) {
      result[string[i]] = 2;
    }
  }

  return obj;
};

const removeVowel = (str) => {
  let string = "";
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      string += str[i];
    }
  }
  return string;
};

const rotateByk = (arr, k) => {
  //  for (let i = 0; i < k; i++) {
  //    const temp = arr.shift();
  //  }
  //  return arr;

  const temp = arr.splice(0, k);
  return [...arr, ...temp];
};

const rotateBykUsingRecurr = (arr, k) => {
  if (k === 0) {
    return arr;
  } else {
    const temp = arr.shift();
    arr.push(temp);
    return rotateBykUsingRecurr(arr, k--);
  }
};

var a = 1;
function foo() {
  var a = 2;
  function a() {}
}
foo();
console.log(a);

const getPow = (x, n) => {
  if (n === 0) {
    return x;
  }
  return x * getPow(x, n - 1);
};

const anagram = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length === arr[j].length && !output.includes(arr[i])) {
        const isAnagram = arr[i]
          .split("")
          .every(
            (ele) =>
              arr[j].includes(ele.toLowerCase()) ||
              arr[j].includes(ele.toUpperCase())
          );
        if (isAnagram) {
          arr.splice(j, 1);
          output.push(arr[i]);
        }
      }
    }
  }
  return output;
};

const promise1 = (isResolved) => {
  let p1 = new Promise((resolve, reject) => {
    if (isResolved) {
      setTimeout(() => {
        resolve(1000);
      }, 1000);
    } else {
      reject(new Error("error is promise 1"));
    }
  });

  return p1;
};

const promise2 = (isResolved) => {
  let p2 = new Promise((resolve, reject) => {
    if (isResolved) {
      setTimeout(() => {
        resolve(1000);
      }, 2000);
    } else {
      reject(new Error("error is promise 1"));
    }
  });

  return p2;
};

promise1(true)
  .then((res) => {
    return promise2(true);
  })
  .then((res2) => {
    console.log(res2);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.all([promise1(true), promise2(true)]).then((res) => {
  console.log(res);
});
const reverseViaRecurr = (str) => {
  if (str.length < 2) {
    return str;
  } else {
    return reverseViaRecurr(str.slice(1)) + str[0];
  }
};

// 321
const sumOfDigit = (num) => {
  let sum = 0;
  while (num > 10) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  sum = sum + num;
  return sum;
};

const reverseStrUsingReduce = (str) => {
  return str
    .split("")
    .reduce((acc, ele) => [ele, ...acc], [])
    .join("");
};

const sumOfDigitViaRecurr = (num) => {
  if (num < 10) {
    return num;
  } else {
    return (num % 10) + sumOfDigitViaRecurr(Math.floor(num / 10));
  }
};

/**
 * Count the occurrence of keys and convert the result into array of 
 * objects where each object belongs to one key and it's occurrence (count).
 * 
 * Example:-
 * [
    { language: 'JavaScript' }, { language: 'JavaScript' }, { language: 'TypeScript' }, { language: 'C++' }
    ] 

    SHOULD BE CONVERTED TO =
    [
    { language: 'JavaScript', count: 2 },
    { language: 'C++', count: 1 },
    { language: 'TypeScript', count: 1 }
    ]
 */

const getOccurance = (array) => {
  const arr = [];
  const langInserted = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (obj[array[i].language]) {
  //     obj[array[i].language]++;
  //   } else {
  //     obj[array[i].language] = 1;
  //   }
  // }

  for (const element of array) {
    if (!langInserted.includes(element.language)) {
      arr.push.call(array);
    }
  }
  return arr;
};

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (leftArr, rightArr) => {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] >= rightArr[0]) {
      sortedArr.push(rightArr.shift());
    } else {
      sortedArr.push(leftArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
};

const bubbleSortRev = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        const temp = arr[i];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

const insertionSortRev = (arr) => {
  for (let i = 1; i < array.length; i++) {
    let numToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numToInsert;
  }
  return arr;
};

const getPowOf2Arr = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    let numbertToCheck = arr[i];
    if (numbertToCheck === 1) {
      continue;
    }
    if (!(numbertToCheck & (numbertToCheck - 1))) {
      output.push(numbertToCheck);
    }
  }
  return output;
};
