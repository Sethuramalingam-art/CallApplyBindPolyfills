function Car(model, fuelType) {
  console.log(model);
  console.log(fuelType);
  console.log(this); // If Car.call(this) from funtion setBrand means here this value is setBrand enviornment. If Car.call() from funtion setBrand means here this value is global object
  this.model = model;
  this.fuelType = fuelType;
}

// this will defined from which function they called. ex. in line no 13 this is inside setBrand function it denotes setBrand as a object

function setBrand(brand) {
  Car.call(this, "convertible", "petrol");
  this.brand = brand;
  console.log("car details:", this); // car details: setBrand { model: 'convertible', fuelType: 'petrol', brand: 'brand1' }
}

function definePrice(price) {
  Car.call(this, "convertible", "petrol");
  this.price = price;
  console.log("car details:", this);
}

function defineTypes(type) {
  Car.apply(this, ["i10", "i20"]); // it is external binding in javascript using this object
  this.type = type;
  console.log("car details", this); // car details defineTypes { model: 'i10', fuelType: 'i20', type: 'i3000' }
}

const checkBind = defineTypes.bind("-4000");
console.log("bindfunc");
console.log(checkBind()); // car details defineTypes { model: 'i10', fuelType: 'i20', type: undefined } // there is no value for 'this'

const checkThisBind = defineTypes.bind(this, "-4000");
console.log("bindfunc1");
console.log(checkThisBind()); // car details defineTypes { model: 'i10', fuelType: 'i20', type: '-4000' } // there is value for 'this'

const checkThis1Bind = defineTypes.bind("-4000");
console.log("bindfunc2");
console.log(checkThis1Bind(this)); // car details [String: '-4000'] {
//     model: 'i10',
//     fuelType: 'i20',
//     type: { model: 'i10', fuelType: 'i20', type: '-4000' }
//   } // there is value for 'this'

const checkThis2Bind = defineTypes.bind();
console.log("bindfunc3");
console.log(checkThis2Bind(this, 3000, 50000000)); // car details [String: '-4000'] {
//     model: 'i10',
//     fuelType: 'i20',
//     type: { model: 'i10', fuelType: 'i20', type: '-4000' }
//   } // there is value for 'this'

const newBrand = new setBrand("brand1");
const newCarPrice = new definePrice(100000);
const newDefineTypes = new defineTypes("i3000");
