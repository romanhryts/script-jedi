// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

// Playing with Sets : Equal or Not ?

const areEqual = (s1, s2)  => [...s1].every(item => s2.has(item)) && [...s2].every(item => s1.has(item));
const notEqual = (s1, s2) => !areEqual(s1, s2);

/******************************************************************************/

// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript

// Operations with Sets

function process2Arrays(arr1, arr2) {
  const result = [];
  
  const bothArrNums = arr1.filter(num => arr2.includes(num));
  const bothArrTotal = bothArrNums.length;
  
  const onlyArr1Nums = arr1.filter(num => !arr2.includes(num));
  const onlyArr2Nums = arr2.filter(num => !arr1.includes(num));

  const onlyArr1Total = onlyArr1Nums.length;
  const onlyArr2Total = onlyArr2Nums.length;
  
  const uniqueArrsNums = onlyArr1Total + onlyArr2Total;
  
  result.push(bothArrTotal, uniqueArrsNums, onlyArr1Total, onlyArr2Total);
  return result;
}
