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

/************************************************************************/

// https://www.codewars.com/kata/is-he-gonna-survive/train/javascript

// Is he gonna survive?

function hero(bullets, dragons) {
  return bullets / dragons >= 2 ? true : false;
}

/************************************************************************/

// https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript

// 5 without numbers !!

const unusualFive = () => "World".length;
