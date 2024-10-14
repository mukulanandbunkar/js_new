const obj = {
    name: "mukul",
    surname: "anand",
    rollNo: 1234445,
  };
  
  delete obj.rollNo;
  
  console.log(obj);
  
  /**
   * delete is use to delete the key value from particular object
   * OUTPUT
   * { name: 'mukul', surname: 'anand' }
   */
  
  const fn = (function (num) {
    delete num;
    console.log(num);
  })(5);
  
  /**
   * What will be the output of above
   * 5 will be the output since there is no delete operation happen it will happen only on object
   */
  
  const user = {
    name: "Mukul Anand",
    age: 29,
    "school name": "kvn",
  };
  
  console.log(user["school name"]);
  
  /**
   * above expression used to create a key of there is space in between for Ex. 'school name': 'kvn'
   * to use same for the output we can use with [] for Ex. user['school name']
   */
  
  const property = "first name";
  const name = "Mukul Anand";
  
  const user1 = {
    property: name,
  };
  
  console.log(user1, "user1");
  /**
   * OUTPUT
   * { property: 'Mukul Anand' }
   * but expectation was {'first name': 'Mukul Anand'}
   * to resolve above we can do like below
   */
  
  const user2 = {
    [property]: name,
  };
  
  console.log(user2, "user2");
  /**
   * output
   * { 'first name': 'Mukul Anand' } user2
   */
  
  const user3 = {
    name: "vedansh tiwari",
    age: 32,
    school: "kvn",
    collage: "srit",
  };
  
  /**
   * wrap above using for in loop
   */
  
  for (const key in user3) {
    if (Object.hasOwnProperty.call(user3, key)) {
      const element = user3[key];
      console.log(`${key} -----> ${element}`);
    }
  }
  
  /**
   * What is the output
   */
  
  const obj1 = {
    x: 12,
    y: 32,
    x: 99999,
    name: "mukul",
  };
  
  console.log(obj1);
  
  /**
   * OUTPUT
   * { x: 99999, y: 32, name:'mukul' }
   * IF there is a key twicw in a object the latest or last one will be the final value of that key
   */
  
  /**
   * Write an js function that take obj as params and if value is number then return it by multiply by 2
   */
  
  const multiplyBy2 = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === "number") {
        obj[key] *= 2;
      }
    }
    return obj;
  };
  
  console.log(multiplyBy2(obj1));
  
  /**
   * Output
   * { x: 199998, y: 64, name: 'mukul' }
   */
  
  /**
   * What is the output of the below code
   *
   */
  
  const a = {};
  const b = { key: "b" };
  const c = { key: "c" };
  
  a[b] = 233;
  a[c] = 466;
  
  console.log(a[b]);
  
  /**
   * we are predicting that output will be 233 but it will be 466
   * Output
   * 466 ? why
   */
  
  console.log(a);
  /**
   * OUTPUT
   * { '[object Object]': 466 }
   * since we are try to assign object as a key it will take [object Object] for a[b] & a[c] and the value of a[c] will be overlap a[b]
   * thats why above output will be 466
   */
  
  /**
   * What is JSON.stringify() & JSON.parse()
   * first use case of this is stroing the data in the localstorage
   * we cant store object directly in local storage if we try also it will store as
   * 'test' : [object, object]
   * to resolve this we are using JSON.strigify to store
   * & JSON.parsse to use it from local storage
   */
  
  //localStorage.setItem('test1',user1)
  //console.log((localStorage.getItem(test1))) //['object', 'object']
  
  // to resolve above we can do
  //localStorage.setItem('test2',JSON.stringify(user1));
  //console.log((localStorage.getItem(JSON.parse(test2))));
  
  /**
   * What is the output of below
   */
  
  console.log([..."mukul"]);
  
  /**
   * output
   * [ 'm', 'u', 'k', 'u', 'l' ]
   */
  
  const admin = {
    isAdmin: true,
    ...user2,
  };
  
  console.log(admin);
  
  /**
   * output
   * { isAdmin: true, 'first name': 'Mukul Anand' }
   */
  
  /**
   * what is the ouput of below
   */
  
  const obj3 = {
    name: "mukul",
    age: 23,
    class: 1,
    look: "good",
    isHAndsome: "yes",
  };
  
  const str = JSON.stringify(obj3, ["age", "name", "class"]);
  console.log(str);
  
  /**
   * output
   * {"age":23,"name":"mukul","class":1}
   */
  
  /**
   * What is destructuring in obj
   */
  
  const obj4 = {
    name: "mukul",
    class: "1st",
    fullName: {
      firstName: "mukul",
      lastName: "anand",
    },
  };
  
  const { name: myName } = obj4;
  
  console.log(myName); // mukul
  
  // nested destructurign
  
  const {
    fullName: { lastName },
  } = obj4;
  console.log(lastName); // anand
  
  /**
   * What is the ouput
   */
  
  function changeAgeAndReference(person) {
    person.age = 25;
    person = {
      name: "John",
      age: 50,
    };
  
    return person;
  }
  
  const personObj1 = {
    name: "Alex",
    age: 30,
  };
  
  const personObj2 = changeAgeAndReference(personObj1);
  
  console.log(personObj1);
  /**
   * output
   * { name: 'Alex', age: 25 }
   */
  console.log(personObj2);
  /**
   * output
   * { name: 'John', age: 50 }
   */
  
  /**
   * What is th output
   */
  
  let person = { name: "mukul" };
  
  const member = [{ person }];
  person = null;
  console.log(member, "member");
  /**
   * output
   * [ { person: { name: 'mukul' } } ] member
   */
  let person1 = { name: "vedansh" };
  person1.name = null;
  const member1 = [{ person1 }];
  //in above we are manipulating reference
  console.log(member1, "member");
  //output: [ { person1: { name: null } } ] member
  
  /**
   * what is the output
   *
   */
  
  const val = { number: 10 };
  
  const multiply = (x = { ...val }) => {
    console.log((x.number *= 2));
  };
  
  multiply(); //20
  multiply(); //20
  multiply(val); // 20
  multiply(val); // 40
  
  //output
  // console.log({ a: 1 } === { a: 1 }); // false
  
  //output
  let x = { greeting: "hi" };
  let y;
  y = x;
  x.greeting = "hello";
  x = null;
  console.log(y, x);
  /**
   * output: { greeting: 'hello' } null
   */
  
  /**
   * Deep copy of object
   */
  
  const data = {
    person: "mukul",
    isAuthorize: true,
    goodWill: "yes",
  };
  
  //approach1
  const cloneData = Object.assign({}, data); 
  
  //approach2
  //const cloneData = JSON.parse(JSON.stringify(data) )
  
  //approach3
  //const cloneData = {...data}
  
  
  data.person = 'vedansh'
  
  console.log(data);
  /** output
   * { person: 'vedansh', isAuthorize: true, goodWill: 'yes' }
   */
  console.log(cloneData);
  
  /** output
   * { person: 'mukul', isAuthorize: true, goodWill: 'yes' }
   */


  // Objects in Javascript
// Question 4 - What's JSON.strigify and JSON.parse ?
const user11 = {
name: "Piyush" , 
age: 24
};
const strobj = JSON. stringify(user11);
localstorage.setItem("test", strobj);
console.log(JSON.parse(localStorage.getItem("test")));


// Objects in Javascript
// Question 13 - What's the output?
//case 1
let person1 = { name: "Lydia" };
const members = [person1];//  <-- if we wrap something to no premitive data dtype the original referrence will change
person = null;
console. log (members); // [{ name: "Lydia" }]
  

// Objects in Javascript
// Question 13 - What's the output?
// case 2
let person2 = { name: "Lydia" };
const members1 = [person2];
person.name = null;
console. log(members1) ;  // [{ name: null }]


// Objects in Javascript
// Question 10 - What's the output?
function getItems(fruitlist, favoriteFruit, ...args) {
  /**
   * fruitlist: ["banana", "apple"]
   * favoriteFruit: pear
   * args: ['orange']
   */
  return [...fruitlist,...args, favoriteFruit];
}
  console/log(getItems (["banana", "apple"], "pear", "orange")); //  [banana, apple, orange, pear]



// Objects in Javascript
// Question 14 - What's the output?
const value = { number: 10 };
const multiply23 =(x = {...value}) => {
console. log((x.number*= 2));
}
multiply23(); // 20
multiply23(); // 20
multiply23(value); // 20
multiply23(value); // 40