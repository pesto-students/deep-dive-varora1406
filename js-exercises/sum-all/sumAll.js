const isNumber = (arg) => typeof arg === 'number' && !Number.isNaN(Number(arg));

const areNumbers = (args) => args.every(isNumber);

const addition = (num1, num2) => {
  if (!isNumber(num1) || !isNumber(num2)) {
    throw TypeError('Expect number in input');
  }

  return num1 + num2;
};

function* getRange(start = 0, end) {
  let temp = start;
  while (temp <= end) {
    yield temp;
    temp += 1;
  }
}

function sumAll(numbers) {
  let numbersInput = numbers;
  if (!Array.isArray(numbersInput)) {
    throw TypeError(`${numbersInput} is not an array, expects array as input`);
  }

  if (numbersInput.length !== 2) {
    throw Error(`Input has ${numbersInput.length} length, expects only two elements in array`);
  }

  if (!areNumbers(numbersInput)) {
    throw TypeError('Input array should have numbers only');
  }

  // program is for numeric integers without decimal, so removing the decimals
  numbersInput = numbersInput.map(number => Math.floor(number));

  const sortedArray = numbersInput.sort((a, b) => a - b);

  const lowerBound = sortedArray[0];
  const upperBound = sortedArray[sortedArray.length - 1];

  const range = [...getRange(lowerBound, upperBound)];
  return range.reduce(addition);
}

export {
  sumAll,
};
