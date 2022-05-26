// https://www.codewars.com/kata/array-number-reduce/train/javascript

// Array#reduce

Array.prototype.reduce = function(process, initial) {
  let accumulator = initial ? initial : this[0];
  for (let i = initial ? 0 : 1; i < this.length; i++) {
    accumulator = process(accumulator, this[i]);
  }
  return accumulator;
}

/*******************************************************************/

// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056/train/javascript

// Deep Freeze

Object.deepFreeze = function (object) {
  Object.freeze(object);
  
  Object.keys(object).forEach(key => {
    if (typeof object[key] === 'object') Object.deepFreeze(object[key]);
  });
  
  return object;
}
