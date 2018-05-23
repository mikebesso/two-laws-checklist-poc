import fx from "../../fx";
import actionTypes from '../actions/action-types';
  
export const initialState = {};



export const checklistsReducer = (state = initialState, action) => {



  switch(action.type) {

    case actionTypes.SIGN_OUT:
      return(initialState)

    case actionTypes.LOAD_CHECKLISTS_SUCCESS:
      return(action.payload);
      
    default:
      return({...state});

  }

}





export default fx.reducerLogger(checklistsReducer);