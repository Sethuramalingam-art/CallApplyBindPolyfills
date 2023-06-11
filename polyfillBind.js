var obj1 = {
  name: "sethu",
  age: 32,
};

function x(place) {
  return this.name + this.age + place;
}

Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }

  context.fn = this;
  return function (args) {
    return context.fn(args);
  };
};

var nwFn = x.myBind(obj1);
console.log(nwFn("planai"));
