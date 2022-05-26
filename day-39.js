// https://www.codewars.com/kata/5637ead70013386e30000027/train/javascript

// Generators #2

function* generator(a, b=1) {
  while(true) {
    yield `${a} x ${b} = ${a * b++}`;
  }
}
