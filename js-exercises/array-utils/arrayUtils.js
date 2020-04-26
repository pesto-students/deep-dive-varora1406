const toObject = (argument) => {
  if (argument === undefined) {
    throw TypeError('undefined value is not accepted');
  }

  if (argument === null) {
    throw TypeError('null value is not accepted');
  }

  return argument;
};

const toLength = (argument) => {
  let length = toInteger(argument);
  // TODO: Complete code after toInteger is done.
};

const toInteger = (argument) => {
  let number = toNumber(argument);
  // TODO: Complete code after toNumber is done.
}

const isNumber = (arg) => typeof arg === 'number' && !Number.isNaN(Number(arg));

const isSymbol = (argument) => {
  const object = toObject(argument);
  return typeof object[Symbol.iterator] === 'function';
}

const toPrimitive = (input, preferredType) => {
  // TODO: Complete code after understanding 
};

const toNumber = (argument) => {
  if (argument === undefined) {
    return Number.NaN;
  }

  if (argument === null) {
    return 0;
  }

  if (typeof argument === 'boolean') {
    return Number(argument)
  }

  if (isNumber(argument)) {
    return argument;
  }

  if (typeof argument === 'string') {
    const argumentNumberForm = Number(argument);
    if (isNumber(argumentNumberForm)) {
      return argumentNumberForm;
    }
  }

  if (isSymbol(argument)) {
    throw TypeError('Symbol cannot be converted to a number');
  }

  if (typeof argument === 'object') {
    let primValue = toPrimitive(argument, 'number');
    return toNumber(primValue);
  }
};

const forEach = (array, callback, thisArg) => {
  let object = toObject(array);
  // TODO: Complete code after toObject is done.
}

export {
  forEach,
  map,
  filter,
  reduce,
}