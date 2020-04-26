const isNumber = (arg) => typeof arg === 'number' && !Number.isNaN(Number(arg));

const areNumbers = (args) => args.every(isNumber);

function* getRange(start = 0, end) {
  let temp = start;
  while (temp <= end) {
    yield temp;
    temp += 1;
  }
}

function sumAll(arrayOfNumbers) {
  let inputArray = arrayOfNumbers;
  if (!Array.isArray(inputArray)) {
    throw TypeError(`${inputArray} is not an array, expects array as input`);
  }

  if (inputArray.length !== 2) {
    throw Error(`Input has ${inputArray.length} length, expects only two elements in array`);
  }

  if (!areNumbers(inputArray)) {
    throw TypeError('Input array should have numbers only');
  }

  // program is for numeric integers without decimal, so removing the decimals
  inputArray = inputArray.map(number => Math.floor(number));

  const sortedArray = inputArray.sort((a, b) => a - b);

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
