import actions from '../actions';


const initialState = {
    name: "Unknown",
    email: "Unknown"
}

export default function(state = {}, action) {

    console.log("userReducer", action, state);
  
    let newState = state;

    switch (action.type) {
        
        case actions.types.SET_USER_INFO:
            newState = {
                ...state, 
                name: action.payload.displayName, 
                email: action.payload.email
            };
            break;

        case actions.types.CLEAR_USER_INFO:
            newState = initialState;
            break;

        default:
            newState = state;
            break;
    }

    console.log("reduced", newState);
    return(newState);
}

