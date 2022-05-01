// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript

// Training JS #22: Unlock new skills--Arrow function,spread operator and deconstruction

function shuffleIt(numbers, ...positions) { 
  positions.forEach( ([first, second]) => 
                     [ numbers[first], numbers[second] ] = [ numbers[second], numbers[first] ] 
                     );
  return numbers;
}

// Or with a loop:

function shuffleIt(arr, ...positions) {
  for (let i = 0; i < positions.length; i++) {
    let position = positions[i];
    [ arr[position[1]], arr[position[0]] ] = [ arr[position[0]], arr[position[1]] ];
  }
  return arr;
}

/************************************************************************/

// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/train/javascript

// Loop Array

function loopArr(nums, direction, steps) {
  for (let i = 0; i < steps; i++) {
    direction === 'left' ? nums.push(nums.shift()) : nums.unshift(nums.pop());
  }
  return nums;
}

/************************************************************************/

// https://www.codewars.com/kata/572af273a3af3836660014a1/train/javascript

// Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()

function infiniteLoop(nums, direction, steps) {
  for (let i = 0; i < steps; i++) {
    if (direction === 'left') {
      nums[2].push(nums[0].shift());
      nums[1].push(nums[2].shift());
      nums[0].push(nums[1].shift());
    } else {
      nums[0].unshift(nums[2].pop());
      nums[1].unshift(nums[0].pop());
      nums[2].unshift(nums[1].pop());
    }
  }
  return nums;
}
