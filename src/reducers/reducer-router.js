import actionTypes from "../actions/action-types";


const initialState = {
  location: null,
  action: null
};

/**
 * This reducer will update the state with the most recent location history
 * has transitioned to. This may not be in sync with the router, particularly
 * if you have asynchronously-loaded routes, so reading from and relying on
 * this state is discouraged.
 */
export default function routerReducer(state = initialState, { type, payload } = {}) {
  if (type === actionTypes.LOCATION_CHANGE) {
    const { location, action } = payload || {};

    return { ...state, location, action };
  }

  return state;
}