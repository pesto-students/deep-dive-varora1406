function trimStartEndSlashes(path) {
  if (path === '/') return '/';
  return path.trim().replace(/^\//gm, '').replace(/\/$/gm, '');
}

function trimSlugParameter(segment) {
  return segment
    .trim()
    .replace(/(:)/gm, '')
    .replace(/(\([\w\\+*]+\))/gm, '');
}

function isSegmentIsParameter(segment) {
  const parameterPattern = new RegExp(/(:[\w()\\+*]+)/, 'g');
  return parameterPattern.test(segment);
}

function isParameterValid(segment, value) {
  const slugParameterTestPattern = segment.match(/\((.*?)\)/g);
  if (!slugParameterTestPattern) {
    return 'valid';
  }

  const regexp = slugParameterTestPattern[0]
    .replace(/^\(/gm, '')
    .replace(/\)$/gm, '');
  const parameterPattern = new RegExp(`^${regexp}$`, 'g');
  return parameterPattern.test(value) ? 'valid' : 'invalid';
}

function getRouteScore(routeSegments, pathnameSegments) {
  let currentRouteSegmentMatches = 0;
  for (let i = 0; i < routeSegments.length; i += 1) {
    if (
      routeSegments[i] === pathnameSegments[i] ||
      isSegmentIsParameter(routeSegments[i])
    ) {
      currentRouteSegmentMatches += 1;
    } else {
      return 0 / routeSegments.length;
    }
  }
  return currentRouteSegmentMatches / routeSegments.length;
}

function getRouteParameters(routeSegments, pathnameSegments) {
  const slugParameters = {};
  for (let i = 0; i < routeSegments.length; i += 1) {
    if (isSegmentIsParameter(routeSegments[i])) {
      slugParameters[trimSlugParameter(routeSegments[i])] = {
        value: pathnameSegments[i],
        status: isParameterValid(routeSegments[i], pathnameSegments[i]),
      };
    }
  }
  return slugParameters;
}

function matchRoutes(pathname, routesArr, requestMethod) {
  let bestRouteScore = 0;
  let bestRoute = { path: '/404', method: 'get', parameters: {} };
  const pathnameSegments = trimStartEndSlashes(pathname).split('/');
  const totalPathnameSegments = pathnameSegments.length;

  for (const route of routesArr) {
    const routeSegments = trimStartEndSlashes(route.path).split('/');
    const totalRouteSegments = routeSegments.length;
    let currentRouteScore = 0.0;
    if (
      requestMethod === route.method &&
      totalPathnameSegments === totalRouteSegments
    ) {
      currentRouteScore = getRouteScore(routeSegments, pathnameSegments);
      route.parameters.slugParams = getRouteParameters(
        routeSegments,
        pathnameSegments
      );
    }

    if (currentRouteScore > 0 && currentRouteScore >= bestRouteScore) {
      bestRouteScore = currentRouteScore;
      bestRoute = route;
    }
  }

  return bestRoute;
}

function router(request, response) {
  const path = request.url;
  const { host } = request.headers;
  const requestMethod = request.method.toLowerCase();
  const urlParts = new URL(path, `http://${host}`);

  const queryParams = {};
  for (const params of urlParts.searchParams) {
    queryParams[params[0].toString()] = params[1];
  }

  const { pathname } = urlParts;

  const matchedRoute = matchRoutes(pathname, this.routes, requestMethod);
  matchedRoute.parameters.queryParams = queryParams;

  console.log(matchedRoute);

  if (matchedRoute.path !== '/404') {
    request.parameters = matchedRoute.parameters;
    matchedRoute.handler(request, response);
  } else {
    // 404 route
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('Page not found');
    response.end();
  }
}

module.exports = { router };
