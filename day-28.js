// https://www.codewars.com/kata/59bdbe9d46038724ca0000b9/train/javascript

// Pure Functions

const solution = (numbers, { modifier }) => numbers.map(number => number += 2 * modifier);

/************************************************************************/

// https://www.codewars.com/kata/53844152aa6fc137d8000589/train/javascript

// A function within a function

const always = n => () => n;
