// console.log(a); // undefined

// var a = "global";

// function mukul() {
//   console.log(a);
//   var a = "function 1";
//   console.log(a, "after mukul call");
//   function kamini() {
//     console.log(a);
//     var a = "function 2";
//     console.log(a, "after kamini call");
//   }
//   kamini()
// }
// console.log(a);
// mukul();

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // shows the current step
//     console.log(this.step)
//     return this;
//   },
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

const user45 = {
  name: "Mukul Anand!",
  logMessage() {
    console.log(this.name); // What is logged?
  },
};
setTimeout(user45.logMessage(), 1000); // undefined
