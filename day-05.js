// https://www.codewars.com/kata/is-this-my-tail/train/javascript

// Is this my tail?

function correctTail(body, tail) { 
  let sub = body.substr(body.length - tail.length);
  return sub === tail ? true : false;
}
