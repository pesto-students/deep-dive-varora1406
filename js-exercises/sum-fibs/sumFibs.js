const isNumber = (arg) => typeof arg === 'number';

const isOddNumber = (arg) => isNumber(arg) && (arg % 2 !== 0);

const isPositiveNumber = (arg) => isNumber(arg) && (arg >= 0);

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
  if (!isNumber(endNumber)) {
    throw TypeError(`Expect number in parameter, instead got ${typeof endNumber}`);
  }

  if (!isPositiveNumber(endNumber)) {
    throw Error(`Expects positive number in parameter, instead got ${endNumber}`);
  }

  if (endNumber < 1) {
    throw Error(`Fibonnaci series starts with 1, and param sent - ${endNumber} is less than 1`);
  }

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
