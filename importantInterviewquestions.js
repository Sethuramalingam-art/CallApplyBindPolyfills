// Call Apply Bind in Javascript (Explicit Binding)

// What is Call()

// var obj = { name: "sethu" };

// without using Call()
// function sayHello() {
//   return "Hello" + this.name;
// }

// console.log(sayHello()); // this .is window object so Helloundefined

// // with using Call()
// function sayHello() {
//   return "Hello" + this.name;
// }
// // it is a explicit binding using this
// console.log(sayHello.call(obj)); // this .is now obj so Hellosethu.

// with using Call()(scenario1)
// function sayHello() {
//   return "Hello" + this.name;
// }
// // it is a explicit binding using this
// console.log(sayHello.call(this)); // this .is global window object so name is undefined.

// with using Call()(scenario2)
// function sayHello(age) {
//   return "Hello" + this.name + age;
// }
// // it is a explicit binding using this
// console.log(sayHello.call(obj, 34)); // Hellosethu34

// function sayHello() {
//   return this.name;
// }

// function exName() {
//   this.name = "ram";
//   console.log(sayHello.call(this));
// }

// console.log(exName());

// ===========================================================================

// What is apply()

//same like call but we need to share the arguments as array

// var obj = { name: "sethu" };

// function sayHello(age, place) {
//   return this.name + age + place;
// }

// console.log(sayHello.apply(obj, [23, "coimbatore"])); // if arg is not an array it throws an error

//===============================================================================

// What is bind()

// it will create a new function and the function should call separate and it is usefull when we can resuable

// var obj = { name: "sethu" };

// function sayHello(age, place) {
//   return this.name + age + place;
// }

// const bindFn = sayHello.bind();
// console.log(bindFn(obj, 23, "ram")); //undefined[object Object]23

// const bindFn1 = sayHello.bind(obj);
// console.log(bindFn1(23, "ram")); // sethu23ram

// ===============================================================================

// output based question important

const age = 20;

var person = {
  name: "sethu",
  age: 30,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 24 };
console.log(person.getAge.call(person2)); // 24 because it refering person2 object
console.log(person.getAge.bind(person2)()); // 24 because it refering person2 object
console.log(person.getAge.apply(person2)); // 24 because it refering person2 object

//==================================================================================
