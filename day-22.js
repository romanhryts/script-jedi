// https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript

// Are there any arrows left?

const anyArrows = arrows => arrows.some(arrow => !arrow.damaged);

/************************************************************************/

// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

// Currying functions: multiply all elements in an array

const multiplyAll = numbers => multiplier => numbers.map(number => number * multiplier);
