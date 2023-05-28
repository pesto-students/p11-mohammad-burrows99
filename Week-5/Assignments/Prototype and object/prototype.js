// Protecting the Object
const person = {};

Object.defineProperty(person, 'name', {
  value: 'John',
  writable: false,
  enumerable: true,
});

Object.defineProperty(person, 'email', {
  value: 'john@example.com',
  writable: false,
  enumerable: true,
});

let age = null;

Object.defineProperty(person, 'age', {
  set: function(newAge) {
    age = newAge;
  },
  enumerable: true,
});

person.getAge = function() {
  return age;
};

person.setAge = function(newAge) {
  age = newAge;
};

console.log(person.name); // Output: John
console.log(person.email); // Output: john@example.com

person.age = 30;
console.log(person.getAge()); // Output: 30

person.setAge(35);
console.log(person.getAge()); // Output: 35


// JavaScript Prototype
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getDetails = function() {
  return 'Make: ' + this.make + ', Model: ' + this.model + ', Year: ' + this.year;
};

function Car(make, model, year, numDoors) {
  Vehicle.call(this, make, model, year);
  this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.getDetails = function() {
  return Vehicle.prototype.getDetails.call(this) + ', Doors: ' + this.numDoors;
};

const vehicle = new Vehicle('Toyota', 'Camry', 2020);
const car = new Car('Honda', 'Accord', 2022, 4);

console.log(vehicle.getDetails()); // Output: Make: Toyota, Model: Camry, Year: 2020
console.log(car.getDetails()); // Output: Make: Honda, Model: Accord, Year: 2022, Doors: 4
