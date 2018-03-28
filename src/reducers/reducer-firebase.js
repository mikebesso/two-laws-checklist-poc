import actions from '../actions';


const initialState =
{
    initialized: false,
    onAuthStateChangeAttached: false,
    signIn: null,
    user: null
}

export default function(state = initialState, action) {

    console.log("firebaseReducer", action, state);
  
    let newState = state;

    switch (action.type) {
        
        case actions.types.FIREBASE_INITIALIZED:
            newState = {...newState, initialized: true};
            break;

        case actions.types.ATTACHED_ON_AUTH_STATE_CHANGE:
            newState = {...newState, onAuthStateChangeAttached: true};
            break;

        case actions.types.ON_AUTH_STATE_CHANGE:
            newState = {...newState, user: action.payload};
            break;

        case actions.types.SIGN_IN:
            newState = {...newState, signIn: action.payload};
            break;

        default:
            newState = state;
            break;
    }

    console.log("reduced", newState);
    return(newState);
}

