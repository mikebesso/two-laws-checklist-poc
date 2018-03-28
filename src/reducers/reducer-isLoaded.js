import actionTypes from '../actions/action-types';
  
  
const initialState = {
  checklists: false,
  taxonomies: false,
  metadata: false,
  user: false
};



const isLoadedReducer = (state = initialState, action) => {

  console.log("isLoadedReducer", action, state);
  
  let newState = null;

  switch(action.type) {

    case actionTypes.SET_USER:
      newState = {...state, user: action.payload !== {}}
      break;

    case actionTypes.LOAD_CHECKLISTS:
      newState = {...state, checklists: false};
      break;


    case actionTypes.LOAD_CHECKLISTS_SUCCESS:
      newState = {...state, checklists: true};
      break;
      
    case actionTypes.LOAD_CHECKLISTS_FAIL:
      newState = {...state, checklists: false};
      break;

    default:
      newState = {...state}

  }

  console.log("reduced", newState);
  return(newState);
}



export default isLoadedReducer;