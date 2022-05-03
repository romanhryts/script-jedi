// https://www.codewars.com/kata/572cb264362806af46000793/train/javascript

// Training JS #24: methods of arrayObject---splice() and slice()

function threeInOne(arr) {
  const result = [];
  let nums = arr.slice();
  let firstElement = 0;
  let secondElement = 3;
  for (let i = 0; i < arr.length / 3; i++, firstElement += 3, secondElement += 3) {
    result.push(
      nums.slice(firstElement, secondElement)
          .reduce((prevValue, currValue) => prevValue + currValue)
    );
  }
  return result;
}

/************************************************************************/

// https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript

// Training JS #25: methods of arrayObject---reverse() and sort()

function sortIt(arr) {
  const numbers = arr.slice();
  
  const duplicates = numbers.reduce((values, value) => {
    value in values ? values[value]++ : values[value] = 1;
    return values;
  }, {});

  const sortedNumbers = numbers.sort((a, b) => {
    if (a === b) return 0;
    if (duplicates[a] === duplicates[b]) return b - a;
    return duplicates[a] - duplicates[b];
  });

  return sortedNumbers;
}

/************************************************************************/

// https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript

// Training JS #26: methods of arrayObject---map()

function isolateIt(arr) {
  return arr.map((str) => {
  if (str.length % 2 === 0) {
    return str.slice(0, str.length / 2) + "|" + str.slice(str.length / 2);
  }
  if (str.length % 2 !== 0) {
    return str.slice(0, str.length / 2) + "|" + str.slice(str.length / 2 + 1);
  }
});

}
