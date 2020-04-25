const isNumber = (arg) => typeof arg === 'number';

const isOddNumber = (arg) => isNumber(arg) && (arg % 2 !== 0);

function* returnNumberGenerator(number) {
  while (true) {
    yield number;
  }
}

function* fibonacciGenerator(startNumber) {
  let [currentNumber, previousNumber] = returnNumberGenerator(startNumber);

  while (true) {
    yield currentNumber;

    const temp = currentNumber;
    currentNumber += previousNumber;
    previousNumber = temp;
  }
}


const sumFibs = (endNumber) => {
  const startNumber = 1;
  let result = startNumber;

  const fibonacciIterator = fibonacciGenerator(startNumber);

  for (const number of fibonacciIterator) {
    if (number > endNumber) {
      break;
    }

    if (isOddNumber(number)) {
      result += number;
    }
  }

  return result;
};

export {
  sumFibs,
};
