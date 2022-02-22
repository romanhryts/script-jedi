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
