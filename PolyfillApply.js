var obj1 = {
  name: "sethu",
  age: 32,
};

function x(...place) {
  return this.name + this.age + place[0];
}

Function.prototype.myApply = function (context, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }

  context.fn = this;
  return context.fn(...args);
};

console.log(x.myApply(obj1, ["palani", "chennai"]));
