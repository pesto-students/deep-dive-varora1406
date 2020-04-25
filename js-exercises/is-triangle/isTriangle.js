const isNumber = (arg) => typeof arg === 'number';

const isPositiveNumber = (arg) => isNumber(arg) && (arg > 0);

const arePositiveNumbers = (args) => args.every(isPositiveNumber);

const isTriangle = (sideA, sideB, sideC) => {
  if (!arePositiveNumbers(sideA, sideB, sideC)) {
    throw Error(`program expect all sides positive numbers, instead got ${sideA}, ${sideB}, ${sideC}`);
  }

  const sumOfAB = sideA + sideB;
  const sumOfBC = sideB + sideC;
  const sumOfCA = sideC + sideA;

  return (
    sumOfAB > sideC
    && sumOfBC > sideA
    && sumOfCA > sideB
  );
};

export {
  isTriangle,
};
