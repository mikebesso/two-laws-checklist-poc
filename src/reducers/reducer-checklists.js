import actionTypes from '../actions/action-types';
  
const initialState = {};



const checklistsReducer = (state = initialState, action) => {

  console.log("checklistsReducer", action, state);
  
  let newState = null;

  switch(action.type) {

    case actionTypes.LOAD_CHECKLISTS_SUCCESS:
      newState = action.payload;
      break;
      
    default:
      newState = {...state}

  }

  console.log("reduced", newState);
  return(newState);
}



export default checklistsReducer;