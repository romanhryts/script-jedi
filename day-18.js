// https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript

// #30: methods of arrayObject---reduce() and reduceRight()

// function tailAndHead(nums) {
  // Convert to string, because we need to use length property
  const stringNums = nums.map((num) => num.toString());
  const filtredNums = [];
  const finalResult = [];
  const numbersToSum = [];
  let firstSlice = 0;
  let secondSlice = 2;
  // Checking should we take only start, end or start && end of the number
  for (const num of stringNums) {
    stringNums.indexOf(num) === 0 ? filtredNums.push(num[num.length - 1])
      : stringNums.indexOf(num) === stringNums.length - 1 ? filtredNums.push(num[0])
      : filtredNums.push(num[0], num[num.length - 1]);
  }
  // Creating as many arrays with two numbers as we need (it helps us to find a sum of each two numbers)
  for (let i = 0; i < filtredNums.length / 2; i++) {
    numbersToSum.push(filtredNums.slice(firstSlice, secondSlice));
    firstSlice += 2;
    secondSlice += 2;
  }
  // Here we making each element with type number and also count the sum of two numbers in each subArray
  for (let i = 0; i < numbersToSum.length; i++) {
    let sum = numbersToSum[i].map((num) => Number(num));
    finalResult.push(sum[0] + sum[1]);
  }
  // Returning final result using reduce to multiply each sum
  return finalResult.reduce((a, b) => a * b);
}

/************************************************************************/

// https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript

// #31: methods of arrayObject---isArray() indexOf() and toString()

const blackAndWhite = nums => 
                           `It's a ${!Array.isArray(nums) ? 'fake' : nums.includes(5) && nums.includes(13) ? 'black' : 'white'} array`;

/************************************************************************/

// https://www.codewars.com/kata/5735956413c2054a680009ec/train/javascript

// Training JS #36: methods of Math---kata author's lover:random()

function rndCode() {
  return randomLetters() + randomNumbers() + randomSymbols();
} 

function randomLetters() {
  let randomLetters = '';
  const letters = 'ABCDEFGHIJKLM';
  for (let i = 0; i < 2; i++) randomLetters += letters.charAt(Math.random() * letters.length);
  return randomLetters;
}

function randomNumbers() {
  let randomNumbers = '';
  const numbers = '0123456789';
  for (let i = 0; i < 4; i++) randomNumbers += numbers.charAt(Math.random() * numbers.length);
  return randomNumbers;
}

function randomSymbols() {
  let randomSymbols = '';
  const symbols = '~!@#$%^&*';
  for (let i = 0; i < 2; i++) randomSymbols += symbols.charAt(Math.random() * symbols.length);
  return randomSymbols;
}
