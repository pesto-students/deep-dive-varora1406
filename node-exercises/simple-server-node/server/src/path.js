const isPathMatch = (url, path) => {
  // TODO: Do betterment in path matching
  return url.indexOf(path) >= 0;
};

module.exports = { isPathMatch };