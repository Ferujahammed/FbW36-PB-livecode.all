// setTimeout(): method of the window object.
// It sets a timer and executes a callback function after the timer expires.
// syntax:
// let timeoutID = setTimeout(callback[arguments])
// callback function will be executed after the timer expires.
// delay is in milliseconds that the timer should wait before executing the callback function
function greet() {
  console.log("Howdy!");
}
// setTimeout(greet, 2000);
function makeTalk(animal) {
  const sounds = {
    cat: "purr",
    dog: "woof",
    cow: "moo",
    pig: "oink",
  };
  console.log(`A ${animal} goes ${sounds[animal]}!`);
}
// makeTalk('cat');    // A cat goes purr!
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const animals = ["cat", "dog", "cow", "pig"];
const randomAnimal = getRandom(animals);
setTimeout(() => {
  makeTalk(randomAnimal);
}, 1000);
// setTimeout is asynchronous.
// JavaScript is single-threaded.

// Function binding
// problem: when passing object methods as callbacks, for instance to setTimeout, there's a known problem of 'losing this'.
const dog = {
  sound: "wooff",
  bark() {
    console.log(`Rover says ${this.sound}!`);
  },
};
// in the function call, 'this' points to the dog object
// dog.bark(); // Rover says wooff!
// 'this' points to the global window object which doesn't have a sound property.
// setTimeout(dog.bark, 500);  // Rover says undefined!
// bind(): a method which creates a new function that, when called, has its 'this' keyword set to the provided value (in our case, the dog object)
// setTimeout(dog.bark.bind(dog), 50); // Rover says wooff!
// ------------##------------
const dog2 = {
  sound: "wooff",
  bark() {
    console.log(`Rover-2 says ${this.sound}!`);
  },
};
dog2.bark(); // Rover-2 says wooff!
const dog3 = {
  sound: "wooff",
  bark: () => {
    console.log(`Rover-3 says ${this.sound}!`);
  },
};
// arrow functions don't have their own 'this' value. Instead, they use the 'this' value of the enclosing lexical context.
dog3.bark(); // Rover-3 says undefined!
// 'this' points to the global window object(which again doesn't have a sound property)
setTimeout(dog3.bark.bind(dog3), 1000); // Rover-3 says undefined!
const dog4 = {
  sound: "woof",
  delayedBark() {
    setTimeout(
      function () {
        console.log(`Rover-4 says ${this.sound}!`);
      }.bind(this),
      1000
    );
  },
};
dog4.delayedBark(); // Rover-4 says woof!
const dog5 = {
  sound: "woof",
  delayedBark() {
    setTimeout(() => {
      console.log(`Rover-5 says ${this.sound}!`);
    }, 1000);
  },
};
dog5.delayedBark(); // Rover-5 says woof!

// {...} spread operator allows us to create a new object.
// constructor functions and 'new' operator.
// Constructor functions are technically regular functions. There are two conventions:
// 1. They are named with capital letter first.
// 2. They should only be executed with 'new' operator.
// const User = {
//      name: name,
//      isAdmin: false,
// }
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user = new User("Jack");
// const user = {
//      name: Jack,
//      isAdmin: false,
// }
console.log(user.name); // Jack
console.log(user.isAdmin); // false
// When a function is executed with 'new', it does the following steps:
// 1. A new empty object is created and assigned to 'this'.
// 2. The function body executes. It modifies 'this' and adds new properties to it.
// 3. The value of 'this' is returned.
function User2(name) {
  // 1. this = {};  (implicitly)
  // 2. add properties to this
  this.name = name;
  this.isAdmin = false;
  // 3. return this (implicitly)
}
// const user = {
//      name: Jack,
//      isAdmin: false,
// }
let user2 = new User("Ann");
console.log(user.name); // Ann
console.log(user.isAdmin); // false
// The main purpose of constructor function is to implement reusable object creation code.
// ------------##------------
// Return from constructors
function BigUser() {
  let blah = "blah";
  this.name = "John";
  return blah;
}
console.log(new BigUser().name); // John
console.log(new BigUser().blah); // undefined
console.log(BigUser().blah); // undefined
console.log(BigUser()); // blah
// return overrides 'this' by returning an object
function BigUser2() {
  this.name = "John";
  return { name: "Godzilla" };
}
console.log(new BigUser2().name); // Godzilla
function BigUser3() {
  this.name = "John";
  return; // return 'this'
}
console.log(new BigUser3().name); // John
// ------------##------------
// Methods in constructors
function User3(name) {
  this.name = name;
  this.sayHi = function () {
    console.log(`My name is ${this.name}.`);
  };
}
let johna = new User3("Johna");
johna.sayHi(); // My name is Johna.
// johna = {
//      name: 'Johna',
//      sayHi: function() {
//          something....
//      }
// }
// ------------##------------
function Vehicle(type, speed) {
  this.type = type;
  this.speed = speed;
  this.move = function () {
    console.log(
      `I'm a ${this.type} and I'm moving at a speed of ${this.speed} km/hr.`
    );
  };
  this.stop = function () {
    console.log(`I'm a ${this.type} and I've stopped moving.`);
  };
}
console.log(Vehicle); // [Function: Vehicle]
let car = new Vehicle("car", 120);
// because of the 'new' operator 'this' binds to the newly created instance of Vehicle, which is car.
car.move(); // I'm a car and I'm moving at a speed of 120 km/hr.
let bus = new Vehicle("bus", 220);
bus.move(); // I'm a bus and I'm moving at a speed of 220 km/hr.
bus.stop(); // I'm a bus and I've stopped moving.
