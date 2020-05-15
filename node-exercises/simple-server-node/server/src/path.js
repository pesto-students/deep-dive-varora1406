const isPathMatch = (url, path) => {
  if (path instanceof RegExp) {
    return path.test(url);
  }

  const regex = new RegExp(`^${url}`);
  return regex.test(path);
};

module.exports = { isPathMatch };
