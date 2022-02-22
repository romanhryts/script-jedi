// https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript

// Training JS #6: Basic data types--Boolean and conditional statements if..else

const trueOrFalse = (val) => {
  return val === false ||
    val === undefined ||
    val === null ||
    val === "" ||
    val === 0
    ? "false"
    : "true";
};

/************************************************************************/

// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

// Training JS #7: if..else and ternary operator

const saleHotdogs = (n) =>
  n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;

/************************************************************************/

// https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript

// Training JS #8: Conditional statement--switch

function howManydays(month) {
  let days;
  switch (month) {
    case 2:
      days = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    default:
      days = 31;
  }
  return days;
}
