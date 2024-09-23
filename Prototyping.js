// JavaScript Prototyping allows adding properties and methods to objects or constructors.

function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function() {
    console.log(`Hello, ${this.name}`);
  };
  const person = new Person('Alice');
  person.greet();  
  