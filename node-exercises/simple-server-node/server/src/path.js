const isPathMatch = (url, path) => {
  if (path instanceof RegExp) {
    return path.test(url);
  }

  // TODO: Fix issue of path end not matching with URL
  const regex = new RegExp(`^${url}`);
  return regex.test(path);
};

module.exports = { isPathMatch };
