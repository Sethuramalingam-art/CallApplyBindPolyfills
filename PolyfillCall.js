var obj1 = {
  name: "sethu",
  age: 32,
};

function x(place) {
  return this.name + this.age + place;
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }

  //this is x function here
  //context is obj1
  // so inside obj1 when we can add cx function so automatically it accepts this.name and this.age
  context.fn = this;

  return context.fn(args);
};

console.log(x.myCall(obj1, "palani"));
