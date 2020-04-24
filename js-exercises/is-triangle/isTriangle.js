const isNumber = (arg) => typeof arg === 'number';

const isPositiveNumber = (arg) => isNumber(arg) && (arg > 0);

const arePositiveNumbers = (args) => args.every(isPositiveNumber);

const isTriangle = (side1, side2, side3) => {
  if (!arePositiveNumbers(side1, side2, side3)) {
    throw Error(`program expect all sides positive numbers, instead got ${side1}, ${side2}, ${side3}`);
  }

  if (side1 + side2 <= side3) {
    return false;
  }

  if (side2 + side3 <= side1) {
    return false;
  }

  return (side3 + side1 <= side2);
};

export {
  isTriangle,
};
