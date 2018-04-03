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
export default function routerReducer(state = initialState, action) {

  console.log("routerReducer", action, state);
  
  let newState = state;

  switch(action.type){
    
    case actionTypes.LOCATION_CHANGE:

      if (action.payload) {
        newState = { ...state, location: action.payload.location, action: action.payload.action };      
      } else {
        newState = initialState;
      }
      break;
    
      default: 
      newState = state;

    }
  

  console.log("reduced", newState);
  return(newState);  

}