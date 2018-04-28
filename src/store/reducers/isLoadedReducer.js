import fx from "../../fx";
import actionTypes from '../actions/action-types';
  
  
export const initialState = {
  checklists: false,
  taxonomies: false,
  metadata: false,
  user: false,
  handled: false
};



const reducerIsLoaded = (state = initialState, action) => {

  


  switch(action.type) {

    case actionTypes.SET_USER_INFO:
      return {...state, user: true}

    case actionTypes.CLEAR_USER_INFO:
      return {...state, user: false}

    case actionTypes.LOAD_CHECKLISTS:
      return {...state, checklists: false};

    case actionTypes.LOAD_CHECKLISTS_SUCCESS:
      return {...state, checklists: true};
      
    case actionTypes.LOAD_CHECKLISTS_FAIL:
      return {...state, checklists: false};

    default:
      return {...state}

  }

}


export default fx.reducerLogger(reducerIsLoaded);