// https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript

// Training JS #2: Basic data types--Number

let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

const equal1 = () => v1 + v1;
const equal2 = () => v3 - v1;
const equal3 = () => v1 * v5;
const equal4 = () => v4 / v5;
const equal5 = () => v6 % v3;

/************************************************************************/

// https://www.codewars.com/kata/571edea4b625edcb51000d8e/train/javascript

// Training JS #3: Basic data types--String

let a1 = "A", a2 = "a";
let b1 = "B", b2 = "b"; 
let c1 = "C", c2 = "c"; 
let d1 = "D", d2 = "d"; 
let e1 = "E", e2 = "e"; 
let n1 = "N", n2 = "n";

const Dad = () => d1 + a2 + d2;
const Bee = () => b1 + e2 + e2;
const banana = () => b2 + a2 + n2 + a2 + n2 + a2;

const answer1 = () => "no";
const answer2 = () => "no";
const answer3 = () => "yes";

/************************************************************************/

// https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript

// Training JS #4: Basic data types--Array

const getLength = (arr) => arr.length;
const getFirst = (arr) => arr[0];
const getLast = (arr) => arr[arr.length - 1];

const pushElement = (arr) => {
  arr.push(1);
  return arr;
}

const popElement = (arr) => {
  arr.pop();
  return arr;
}

/************************************************************************/

// https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript

// Training JS #5: Basic data types--Object

const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
