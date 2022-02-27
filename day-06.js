// https://www.codewars.com/kata/maximum-multiple/train/javascript

// Maximum Multiple

function maxMultiple(divisor, bound) {
  let result;
  for (let i = bound; i > 0; i--) {
    if (i % divisor === 0) {
      result = i;
      break;
    } 
  }
  return result;
}
