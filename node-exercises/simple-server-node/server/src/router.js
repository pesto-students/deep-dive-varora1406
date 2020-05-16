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

function getRouteScore(routeSegments, pathnameSegments) {
  let currentRouteSegmentMatches = 0;
  for (let i = 0; i < routeSegments.length; i += 1) {
    // console.log('curreent segemnt: ', routeSegments[i], pathnameSegments[i]);
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
        status: 'valid',
      };
    }
  }
  return slugParameters;
}

function matchRoutes(pathname, routesArr, requestMethod) {
  let bestRouteScore = 0;
  let bestRoute = { path: '/404' };
  const pathnameSegments = trimStartEndSlashes(pathname).split('/');
  const totalPathnameSegments = pathnameSegments.length;

  //  console.log('pathname segments: ', pathnameSegments, totalPathnameSegments);
  //  console.log('request method: ', requestMethod);

  for (const route of routesArr) {
    const routeSegments = trimStartEndSlashes(route.path).split('/');
    const totalRouteSegments = routeSegments.length;
    let currentRouteScore = 0.0;
    if (
      requestMethod === route.method &&
      totalPathnameSegments === totalRouteSegments
    ) {
      currentRouteScore = getRouteScore(routeSegments, pathnameSegments);
      route.parameters = getRouteParameters(routeSegments, pathnameSegments);
    }

    if (currentRouteScore > 0 && currentRouteScore >= bestRouteScore) {
      bestRouteScore = currentRouteScore;
      bestRoute = route;
    }
  }

  console.log('best route: ', bestRouteScore, bestRoute);
}

function router(request, response) {
  const path = request.url;
  const { host } = request.headers;
  const requestMethod = request.method.toLowerCase();
  const urlParts = new URL(path, `http://${host}`);
  const params = urlParts.searchParams;
  const { pathname } = urlParts;

  console.log(pathname);
  console.log(this.routes);

  const matchedRoute = matchRoutes(pathname, this.routes, requestMethod);

  console.log(matchedRoute);
}

module.exports = { router };
