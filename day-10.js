// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript

// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()

function alienLanguage(str) {
 return str.split(' ').map(word => word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase()).join(' ');
}

/************************************************************************/

//
