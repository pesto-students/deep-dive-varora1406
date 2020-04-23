function isNumber(...args) {
  let result = true;

  for (const arg of args) {
    if (typeof arg !== 'number') {
      result = false;
      break;
    }
  }

  return result;
}

function isPositiveInteger(...args) {
  let result = true;

  for (const arg of args) {
    if (arg !== Math.abs(arg)) {
      result = false;
      break;
    }
  }

  return result;
}

function isTriangle(side1, side2, side3) {
  if (!isNumber(side1, side2, side3)) {
    throw TypeError(`program expect all sides numeric, instead got ${side1}, ${side2}, ${side3}`);
  }

  if (!isPositiveInteger(side1, side2, side3)) {
    throw Error(`program expect all sides positive, instead got ${side1}, ${side2}, ${side3}`);
  }

  if (side1 + side2 <= side3) {
    return false;
  }

  if (side2 + side3 <= side1) {
    return false;
  }

  if (side3 + side1 <= side2) {
    return false;
  }

  return true;
}

export {
  isTriangle,
};
