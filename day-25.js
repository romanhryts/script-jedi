// https://www.codewars.com/kata/52d56d9c6b02b2fa9a0006d9/train/javascript

// Write JavaScript's 'call' function using apply.

Function.prototype.call = function(context, ...args) {
  return this.apply(context, args);
}

/************************************************************************/

// https://www.codewars.com/kata/53d4eec01f1a9b3020000786/train/javascript

// Anonymous Returns.

name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        return function() {
            return this.name;
        }.bind(this);
    }
};
