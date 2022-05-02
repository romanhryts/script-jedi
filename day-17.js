// https://www.codewars.com/kata/573023c81add650b84000429/train/javascript

// Training JS #27: methods of arrayObject---filter()

function countGrade(scores) {
  const grades = {
    S: scores.filter((grade) => grade === 100).length,
    A: scores.filter((grade) => grade < 100 && grade >= 90).length,
    B: scores.filter((grade) => grade < 90 && grade >= 80).length,
    C: scores.filter((grade) => grade < 80 && grade >= 60).length,
    D: scores.filter((grade) => grade < 60 && grade >= 0).length,
    X: scores.filter((grade) => grade === -1).length,
  };
  return grades;
}

/************************************************************************/

// https://www.codewars.com/kata/57308546bd9f0987c2000d07/train/javascript

// Training JS #28: methods of arrayObject---every() and some()

function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].toString().split('').reverse().join('') === arr[i + 1].toString()) {
      return [arr[i], arr[i + 1]];
    }
  }
  return [-1, -1];
}

/************************************************************************/

// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript

// Training JS #29: methods of arrayObject---concat() and join()

function bigToSmall(arr) {
  return arr.join(',').split(',').map(num => Number(num)).sort((a, b) => b - a).join('>');
}
