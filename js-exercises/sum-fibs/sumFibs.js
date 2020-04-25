const isNumber = (arg) => typeof arg === 'number';

function* fibonacciGenerator(startNumber) {
  let [currentNumber, previousNumber] = returnNumberGenerator(startNumber);

  while (true) {
    yield currentNumber;

    const temp = currentNumber;
    currentNumber += previousNumber;
    previousNumber = temp;
  }
}

function* returnNumberGenerator(number) {
  while (true) {
    yield number;
  }
}

const sumFibs = (endNumber) => {

};

export {
  sumFibs,
};
