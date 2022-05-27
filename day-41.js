// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

// The Supermarket Queue

const queueTime = (customers, tillsAmount) => {
  const activeTills = Array(tillsAmount).fill(0);
  return customers.reduce((_, customer) => {
    const fastest = activeTills.indexOf(Math.min(...activeTills));
    activeTills[fastest] += customer;
    const totalTime = Math.max(...activeTills);
    return totalTime;
  }, 0);
}
