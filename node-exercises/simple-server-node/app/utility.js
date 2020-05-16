const convertURLParamsIntoObject = (paramsString) => {
  return Array.from(new URLSearchParams(paramsString)).reduce(
    (o, i) => ({ ...o, [i[0]]: i[1] }),
    {}
  );
};

module.exports = { convertURLParamsIntoObject }