// https://leetcode.com/problems/two-sum/

// Two Sum

const twoSum = (nums, target) => {
    const summands = [];
    for (let i = 0; i < nums.length; i++){
       for (let j = i + 1; j < nums.length; j++){
          if (nums[i] + nums[j] === target) {
              summands.push(i, j);
          }
       }
    }
    return summands;
};

/************************************************************************/

// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

// Scramblies

function scramble(chars, word) {
  let letterHolder = {};
  let possibility = true;
  
  for (const char of chars) {
    letterHolder[char] ? letterHolder[char]++ : letterHolder[char] = 1;
  }
  
  for (const letter of word) {
    !letterHolder[letter] ? possibility = false : letterHolder[letter]--;
  }
  
  return possibility;
}
