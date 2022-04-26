// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript

// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()

function alienLanguage(str) {
 return str.split(' ').map(word => word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase()).join(' ');
}

/************************************************************************/

// https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript

// Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()

// In progress...

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
