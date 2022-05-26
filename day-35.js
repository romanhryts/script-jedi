// https://www.codewars.com/kata/557e508a47c7e9adf9000062/train/javascript

// JS Prototypes Module #1 - Object Prototypes

const Device = {
  description : "TODO: GIVE ME A DESCRIPTION"
}

widget.__proto__ = Device;
gadget.__proto__ = Device;
thingamabob.__proto__ = Device;

/************************************************************************/

// https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript

// JavaScript class-like objects

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}
