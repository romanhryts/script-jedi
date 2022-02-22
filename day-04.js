// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

// Training JS #9: loop statement --while and do..while

function padIt(str, n) {
  let i = 0;
  while (i < n) {
    i++;
    str = i % 2 !== 0 ? "*" + str : str + "*";
  }
  return str;
}

/************************************************************************/

// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

// Training JS #10: loop statement --for

function pickIt(arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return [odd, even];
}

/************************************************************************/

// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript

// Training JS #11: loop statement --break,continue

function grabDoll(dolls) {
  let bag = [];
  for (i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
    }

    if (bag.length !== 3) continue;
    else break;
  }
  return bag;
}

/************************************************************************/

// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

// Training JS #12: loop statement --for..in and for..of

function giveMeFive(obj) {
  let fiveLettersWordsArray = [];
  for (key in obj) {
    if (key.length === 5) {
      fiveLettersWordsArray.push(key);
    }
    if (obj[key].length === 5) {
      fiveLettersWordsArray.push(obj[key]);
    }
  }
  return fiveLettersWordsArray;
}
