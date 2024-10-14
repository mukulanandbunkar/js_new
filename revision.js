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
    return args[0] + convertNoramlToCurry(args.slice(1))
} 


convertNoramlToCurry(1,2,3,4)


//polyfill of setTimeout


const getTimeOut = (cb, delay) => {
    let timeOut;
    if(timeOut) {
      clearTimeout(timeOut)
      return
    }
    timeOut = setTimeout(() => {
      return cb();
    },delay)
}


const charCountFromStr = (string) => {
  const obj = {};
  const result = {}
  for (let i = 0; i < string.length; i++) {
    if(obj[string[i]]) {
      obj[string[i]] ++
    } else {
      obj[string[i]] = 1
    }
    if(obj[string[i]] > 1) {
      result[string[i]] = 2
    }
  }



  return obj
} 

const removeVowel = (str) => {
  let string = ''
  const vowel = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < str.length; i++) {
    if(vowel.includes(str[i])) {
      string+= str[i]
    }
    
  }
  return string;
}

const rotateByk = (arr, k) => {
  //  for (let i = 0; i < k; i++) {
  //    const temp = arr.shift();
  //  }
  //  return arr;

  const temp =  arr.splice(0,k)
  return [...arr, ...temp]
}


const rotateBykUsingRecurr = (arr, k) => {
  if(k=== 0) {
    return arr
  }else {
    const temp = arr.shift();
    arr.push(temp)
    return rotateBykUsingRecurr(arr, k--)
  }
}

var a =1
function foo() {
   var  a=2;
    function a(){}
}
foo();
console.log(a);
