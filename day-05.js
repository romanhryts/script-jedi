// https://www.codewars.com/kata/is-this-my-tail/train/javascript

// Is this my tail?

const correctTail = (body, tail) => body[body.length - 1] === tail;

/************************************************************************/

// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

// Do I get a bonus?

function bonusTime(salary, bonus) { 
  return bonus === true ? "£" + (salary * 10) : "£" + salary; 
}

// I guess it's best practice, but another option that I like much:

const bonusTime = (salary, bonus) => bonus === true ? "£" + (salary * 10) : "£" + salary; 

/************************************************************************/

// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

// Automorphic Number (Special Numbers Series #6)

function automorphic(n) {
  return String(n * n).endsWith(String(n)) ? "Automorphic" : "Not!!";
}

/************************************************************************/
