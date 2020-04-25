const isNumber = (arg) => typeof arg === 'number';

const areNumbers = (args) => args.every(isNumber);

function* getRange(start, end) {
  let temp = start;
  while (temp <= end) {
    yield temp += 1;
  }
}

function sumAll(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers)) {
    throw TypeError(`${arrayOfNumbers} is not an array, expects array as input`);
  }

  if (arrayOfNumbers.length !== 2) {
    throw Error(`Input has ${arrayOfNumbers.length} length, expects only two elements in array`);
  }

  if (!areNumbers(arrayOfNumbers)) {
    throw TypeError('Input array should have numbers only');
  }

  const sortedArray = arrayOfNumbers.sort((a, b) => a - b);

  let result = 0;
  const rangeIterator = getRange(sortedArray[0], sortedArray[1]);

  for (const number of rangeIterator) {
    result += number;
  }

  return result;
}

export {
  sumAll,
};
