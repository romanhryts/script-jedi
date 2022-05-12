// https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f/train/javascript

// Power .bind()

Function.prototype.bind = function (ctx) {
  const func = this;
  return function(...args) {
    const rightCtx = this === global ? ctx : this;
    return func.apply(rightCtx, args);
  }
};

/************************************************************************/

// https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/train/javascript

// Sort with Arrow Functions

const OrderPeople = people => people.sort((a, b) => a.age - b.age);
