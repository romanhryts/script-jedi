// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript

// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()

function alienLanguage(str) {
 return str.split(' ').map(word => word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase()).join(' ');
}

/************************************************************************/

// https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript

// Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()

function topSecret(str) {
  let chars = str.split('');
  for (let i = 0; i < chars.length; i++) {
    if ((chars[i].charCodeAt() >= 68 && chars[i].charCodeAt() <= 90) || (chars[i].charCodeAt() >= 100 && chars[i].charCodeAt() <= 122)) {
      chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
    } else if ((chars[i].charCodeAt() >= 65 && chars[i].charCodeAt() <= 68) || (chars[i].charCodeAt() >= 97 && chars[i].charCodeAt() <= 99)) {
      chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3 + 26);
    }
  }
  return chars.join('');
}
answer1="2373";
answer2="FoGrt";
answer3="Apple core";

/************************************************************************/

// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

// Training JS #21: Methods of String object--trim() and the string template

function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`
}

// or

function fiveLine(s) {
  return [1, 2, 3, 4, 5].map(n => s.trim().repeat(n)).join('\n');
}
