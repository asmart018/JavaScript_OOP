console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  removeHobby(hobby) {
    this.hobbies = this.hobbies.filter((index) => index != hobby);
  }

  greeting() {
    console.log("Hello there!!");
  }
  info() {}
  soundOff() {}
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }

  greeting() {
    console.log(`Hello there, I am ${this.name} from ${this.residence}`);
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let person = new Person("Austin", 1, "Cincinnati", [
  "reading",
  "watching tv",
  "cooking",
]);
person.removeHobby("watching tv");
person.addHobby("skating");
console.log(person);

let person2 = new Coder("Austin", 0, "Cincinnati", [
  "hockey",
  "running",
  "video games",
]);
person2.addHobby("sleeping");
person2.removeHobby("running");
console.log(person2);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    if (isNaN(b)) {
      b = a;
      a = this.result;
    }
    this.result = a + b;
  }

  subtract(a, b) {
    if (isNaN(b)) {
      b = a;
      a = this.result;
    }
    this.result = a - b;
  }

  multiply(a, b) {
    if (isNaN(b)) {
      b = a;
      a = this.result;
    }
    this.result = a * b;
  }

  divide(a, b) {
    if (isNaN(b)) {
      b = a;
      a = this.result;
    }
    this.result = a / b;
  }

  displayResult() {
    console.log(this.result);
  }
}

let calc = new Calculator();
calc.add(1);
calc.displayResult();
calc.subtract(2, 2);
calc.displayResult();
calc.multiply(3, 3);
calc.displayResult();
calc.divide(10, 2);
calc.displayResult();
