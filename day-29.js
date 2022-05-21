// https://www.codewars.com/kata/525a5b2185a9a4f5670006c1/train/javascript

// How new Works

const myObj = {__proto__: MyObject.prototype};
MyObject.call(myObj);

/************************************************************************/

// https://www.codewars.com/kata/558cb3df5f511f40d500001d/train/javascript

// Replicate `new`

function nouveau(Constructor, ...args) {
  const value = Object.create(Constructor.prototype);
  const result = Constructor.apply(value, args);
  return (typeof result === "object" || typeof result === "function") && result !== null
    ? result
    : value;
}
