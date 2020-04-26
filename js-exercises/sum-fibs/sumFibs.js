const isNumber = (arg) => typeof arg === 'number';

const isOddNumber = (arg) => isNumber(arg) && (arg % 2 !== 0);

const isPositiveNumber = (arg) => isNumber(arg) && (arg >= 0);

const addition = (num1, num2) => {
  if (!isNumber(num1) || !isNumber(num2)) {
    throw TypeError('Expect number in input');
  }

  return num1 + num2;
};

function* fibonacciGenerator(endNumber) {
  let currentNumber = 1;
  let previousNumber = 1;

  yield previousNumber;
  while (currentNumber < endNumber) {
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

  const fibonacciINumbers = [...fibonacciGenerator(endNumber)];
  const filteredOddNumbers = fibonacciINumbers.filter(isOddNumber);

  return filteredOddNumbers.reduce(addition);
};

export {
  sumFibs,
};
