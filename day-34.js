// https://www.codewars.com/kata/547274e24481cfc469000416/train/javascript

// Adam and Eve

class God {
  static create() {
    return [new Man(), new Woman()]
  }
}

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super('Adam');
  }
}

class Woman extends Human {
  constructor(name) {
    super('Eva');
  }
}

/************************************************************************/

// https://www.codewars.com/kata/56ff9b53140fcca90b000530/train/javascript

// Labrador

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true);
  }
}

/************************************************************************/

// https://www.codewars.com/kata/55a144eff5124e546400005a/train/javascript

// Classy Classes

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  get info() {
    return `${this.name}s age is ${this.age}`
  }
}
