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

/************************************************************************/

// https://www.codewars.com/kata/567ed5db4089538eea000010/train/javascript

// Nuclear Missile Manager

const launchAll = launchMissile => [0, 1, 2, 3, 4].forEach(launcher => setTimeout(() => launchMissile(launcher), launcher * 1000));
