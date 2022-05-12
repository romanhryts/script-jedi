// https://www.codewars.com/kata/56b71b1dbd06e6d88100092a/train/javascript

// Understanding closures - the basics

function buildFun(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(() => i);
  }
  return res;
}

/***********************************************************************/

// https://www.codewars.com/kata/shifty-closures/train/javascript

// Shifty Closures

const createGreeter = name => () => "Hello, " + name + "!";

let name = 'Abe';
const greet_abe = createGreeter(name);
name = 'Ben';
const greet_ben = createGreeter(name);
