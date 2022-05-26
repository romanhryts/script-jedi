// https://www.codewars.com/kata/5636840bd87777688b00006c/train/javascript

// Generators #1

function* generator(i = 1) {
  while(true) {
    const exactly = yield i++;
    i = exactly ? exactly : i;
  }
}
