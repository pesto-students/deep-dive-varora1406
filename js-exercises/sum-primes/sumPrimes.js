const isNumber = (arg) => typeof arg === 'number';

function* getRange(start, end) {
  let temp = start;
  while (temp <= end) {
    yield temp += 1;
  }
}

const isQuotientZero = (dividend, divisor) => dividend % divisor === 0;

const isPrime = (number) => {
  if (!isNumber(number)) {
    return false;
  }

  const listOfNumbers = Array.from(getRange(1, number - 2));
  return listOfNumbers.every(listNumber => !isQuotientZero(number, listNumber));
}

function sumPrimes() {

}

export {
  sumPrimes,
};
