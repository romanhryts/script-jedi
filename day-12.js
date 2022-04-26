// https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript

// Word to binary

const wordToBin = (word) => word.split('').map(char => 0 + char.charCodeAt().toString(2));

/************************************************************************/

// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript

// Char Code Calculation

function calc(word) {
  const code = word.split('').map((letter) => letter.charCodeAt());
  
  const total1 = String(code).replace(/,/g, '').split('').map(num => Number(num));
  const total2 = total1.join(' ').replace(/7/g, 1).split(' ').map(num => Number(num));
  
  const result1 = total1.reduce((a, b) => a + b);
  const result2 = total2.reduce((a, b) => a + b);

  return result1 - result2;
}
