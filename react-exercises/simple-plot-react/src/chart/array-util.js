const range = ({
  start,
  stop,
  step,
  includeStartInResult = false,
  includeStopInResult = false,
}) => {
  let result = Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);
  result.shift();

  if (includeStartInResult) {
    result = [start, ...result];
  }

  if (includeStopInResult) {
    result = [...result, stop];
  }

  return result;
};

export { range };
