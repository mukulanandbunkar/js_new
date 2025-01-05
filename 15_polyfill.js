console.log("this is my polyfill file");

Function.prototype.myCall = function (context, ...args) {
  const uniqueKey = Symbol();
  context[uniqueKey] = this;
  let result = context[uniqueKey](...args);
  delete context[uniqueKey];
  return result;
};

const obj = {
  name: "mukul",
};
function sum() {
  return `${this.name}`;
}

console.log(sum.call(obj));

console.log(sum.myCall(obj));

Function.prototype.myApply = function (context, ...args) {
  const uniqueKey = Symbol();
  context[uniqueKey] = this;
  let result = context[uniqueKey](args);
  delete context[uniqueKey];
  return result;
};

Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }
    const output = [];
    const completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          output[index] = val;
          completed++;
          if (completed === promises.length) {
            resolve(output);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.MyAny = function (promises) {
  return new Promise((resolve, reject) => {
    const errorCount = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((err) => {
          errorCount++;
          if (errorCount === promise.length) {
            reject("all promise are rejected");
          }
        });
    });
  });
};
