/**
 * Map
    - map written the fresh new array 
    - syntax Array.prototype.map((ele, index, array) => {})
    - we can do array manipulation also but genearally it is used to return new array
    - since it return new array can be use as chaining
 */

const arr = [
  1, 3, 45, 6, 7, 87, 3, 6, 87, 32, 67, 32, 86, 2, 4, 9732, 67, 2346, 245, 56,
];

const newArrayAfterMap = arr.map((ele, index, arr) => {
  //console.log(ele, index, arr);
  return ele * 2 + index;
});

console.log("New array after map is ", newArrayAfterMap);

/* POLYFILL OF MAP */

function newMap(cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(cb(this[i], i, this));
  }
  return output;
}

Array.prototype.newMap = newMap;

// Filter poltfill
function getFilter(cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
}

Array.prototype.getFilter = getFilter;


//slice polyfill
function getSlice(initial, final) {
  const output = [];
  const ini =  initial < 0 ? this.length+initial : initial;
  const fin = final < 0 ? (this.length) + final : initial < 0 ? this.length : final;
  for (let i = ini; i < fin; i++) {
    output.push(this[i]);
  }
  return output;
}

Array.prototype.getSlice = getSlice;


// getFlaten

function getFlaten (arr) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      return getFlaten(arr[i])
    }
    output.push(arr[i])
  }
  return output;
}

const newArrayAfterNewMap = arr.newMap((ele, index, arr) => {
  // console.log(ele, index, arr);
  return ele * 2 + index;
});

//polyfill of reduce
function getReduce(cb, initial) {
  let accum = initial ? initial : this[0];
  initialIndex = initial ? 0 : 1;
  for (let i = initialIndex; i < this.length; i++) {
    accum = cb(accum, this[i], i, this);
  }
  return accum;
}




Array.prototype.getReduce = getReduce;
console.log([2, 3, 5, 4].getReduce((acc, ini) => [ini, ...acc], []));
console.log("New array after New map is ", newArrayAfterMap);
