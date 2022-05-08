// https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript

// Training JS #37: Unlock new weapon---RegExp Object

function countAnimals(animals, count) {
  return count.map((v) => (animals.match(new RegExp(v, "g")) || []).length);
}

/************************************************************************/

// https://www.codewars.com/kata/573975d3ac3eec695b0013e0/train/javascript

// Training JS #38: Regular Expression--"^","$", "." and test()

const similarTo = (a) => (b) => {
  return (a.length == b.length && a[0] == b[0] && a[a.length-1] == b[b.length-1]);
};

const findSimilarity = (str, word) => {
  return str.split(" ").filter(similarTo(word)).join(" ");
};
