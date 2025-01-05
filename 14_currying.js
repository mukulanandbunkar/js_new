  // currying in javascript
  // question 1


  //consvert f(a,b,c) === f(a)(b)(c)


  function add(a,b,c) {
    return a + b +c;
  }


  const convertCurry = (fn) =>  {
    return function curryfn (...args) {
      if(args.length >= fn.length){
        return fn(...args)
      } else {
        return function(...next) {
          return curryfn(...args, ...next)
        }
      }
    }
  }


  const currSum = (a) => {
    let  sum = function (b) {
        if(b) {
          return currSum(a+b)
        } else {
          return a
        }
    }
    sum.valueOf = () => a;
    return sum
  }