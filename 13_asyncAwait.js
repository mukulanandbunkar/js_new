const fn = (isResolve) => {
  const b = new Promise((resolve, reject) => {
    if (isResolve) {
      setTimeout(() => {
        return resolve("fn resolved");
      }, 3000);
    } else {
      return reject(new Error("fn rejecteed"));
    }
  });

  return b;
};

const fn1 = (isResolve) => {
  const b = new Promise((resolve, reject) => {
    if (isResolve) {
      setTimeout(() => {
        return resolve("fn1 resolved");
      }, 2000);
    } else {
      return reject(new Error("fn1 rejected"));
    }
  });

  return b;
};

const fn3 = (isResolve) => {
  const b = new Promise((resolve, reject) => {
    if (isResolve) {
      setTimeout(() => {
        return resolve("fn3 resolved");
      }, 5000);
    } else {
      return reject(new Error("fn3 rejected"));
    }
  });

  return b;
};

//MEthod 1

(async () => {
  const resolve = await fn(true)
    .then(async (res) => {
      console.log(res);
      await fn1(true).then(async (res) => {
        console.log(res);
        await fn3(false).then((res) => {
          console.log(res);
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(resolve);
})();

//plyfill of debouce

const getDebounce = (cb, delay) => {
  let time;
  return () => {
    if(time) {
        clearTimeout(time)
    }
    time = setTimeout(() => {
         cb();
    }, delay);
  };
};


//polyfill of throttle

const getThrottle = (cb, delay) => {
    let start = 0
    return () => {
        const current = new Date().getTime();
        if ((current - start) <= delay) return;
        start = current
        cb();
    }
}

let x =1
const increment = () => {
     x++;
     console.log('with throllte',x);
}

let y =1
const increment1 = () => {
     y++;
     console.log(y);
}

const throttle = getThrottle(increment, 1000)

const scrollToTop = () => {
    throttle();
    increment1();
}
console.log(fn(true));

console.log(fn(false));
