// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

// Training JS #16: Methods of String object--slice(), substring() and substr()

function cutIt(arr) {
  let minLength = Math.min(...arr.map(str => str.length));
  return arr.map(str => str.slice(0, minLength));
}

/************************************************************************/

// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

function firstToLast(str, c) {
  const firstSymbol = str.indexOf(c);
  const lastSymbol = str.lastIndexOf(c);
  let position;
  return str.indexOf(c) === -1
    ? (position = -1)
    : (position = lastSymbol - firstSymbol);
}

// Shorter option: 

function firstToLast(str, c) {
  let position;
  return str.indexOf(c) === -1
    ? (position = -1)
    : (position = str.lastIndexOf(c) - str.indexOf(c));
}

/************************************************************************/

// https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

// Training JS #18: Methods of String object--concat() split() and its good friend join()

function splitAndMerge(string, separator) {
  return string.split(' ').map(word => word.split('').join(separator)).join(' ');
}
