// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

// Training JS #13: Number object and its properties

function whatNumberIsIt(n) {
  return n === Number.MAX_VALUE
    ? "Input number is Number.MAX_VALUE"
    : n === Number.MIN_VALUE
    ? "Input number is Number.MIN_VALUE"
    : isNaN(parseFloat(n))
    ? "Input number is Number.NaN"
    : n === Number.NEGATIVE_INFINITY
    ? "Input number is Number.NEGATIVE_INFINITY"
    : n === Number.POSITIVE_INFINITY
    ? "Input number is Number.POSITIVE_INFINITY"
    : "Input number is " + n;
}

/************************************************************************/

// Training JS #14: Methods of Number object--toString() and toLocaleString()

// https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript

function colorOf(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length === 1) r = "0" + r;
  if (g.length === 1) g = "0" + g;
  if (b.length === 1) b = "0" + b;

  return "#" + r + g + b;
}

/************************************************************************/

// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

function howManySmaller(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let roundedElement = arr[i].toFixed(2);
    if (roundedElement < n) count++;
  }
  return count;
}
