// https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript

// Duplicate Arguments

const solution = (...chars) => [...new Set(chars)].length !== chars.length;

/************************************************************************/

// https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript

// Last

function last(list) {
  const last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
