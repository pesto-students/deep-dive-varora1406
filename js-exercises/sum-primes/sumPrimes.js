const isNumber = (arg) => typeof arg === 'number';

function* getRange(start, end) {
  let temp = start;
  while (temp <= end) {
    yield temp += 1;
  }
}

const isQuotientZero = (dividend, divisor) => dividend % divisor === 0;

const isPrime = (number) => {
  if (!isNumber(number) || number < 2) {
    return false;
  }

  const listOfNumbers = Array.from(getRange(1, number - 2));

  return listOfNumbers.every(listNumber => !isQuotientZero(number, listNumber));
};

function sumPrimes(endNumber) {
  if (!isNumber(endNumber)) {
    throw TypeError(`Expected input of number type, instead got ${typeof endNumber}`);
  }

  if (endNumber < 2 || endNumber > Number.MAX_SAFE_INTEGER) {
    throw Error(`Number input should fall in between 2 and ${Number.MAX_SAFE_INTEGER}`);
  }

  const list = Array.from(getRange(1, endNumber - 1));
  const primeNumbersList = list.filter(isPrime);
  return primeNumbersList.reduce((prev, current) => prev + current);
}

export {
  sumPrimes,
};
