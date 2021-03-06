import actionTypes from "./action-types";

function updateLocation(method) {
  return (...args) => ({
    type: actionTypes.CALL_HISTORY_METHOD,
    payload: { method, args }
  });
}

/**
 * These actions correspond to the history API.
 * The associated routerMiddleware will capture these events before they get to
 * your reducer and reissue them as the matching function on your history.
 */
export const push = updateLocation("push");
export const replace = updateLocation("replace");
export const go = updateLocation("go");
export const goBack = updateLocation("goBack");
export const goForward = updateLocation("goForward");

//export default { push, replace, go, goBack, goForward };