import fx from "../../fx";
import actions from '../actions';


const initialState =
{
    initialized: false,
    onAuthStateChangeAttached: false,
    signIn: null,
    user: null
}

export const firebaseReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case actions.types.FIREBASE_INITIALIZED:
            return ({...state, initialized: true});

        case actions.types.ATTACHED_ON_AUTH_STATE_CHANGE:
            return ({...state, onAuthStateChangeAttached: true});

        case actions.types.ON_AUTH_STATE_CHANGE:
            return ({...state, user: action.payload});
            
        case actions.types.SET_USER_INFO:
            return ({...state, user: action.payload});

        case actions.types.CLEAR_USER_INFO:
            return ({...state, user: null, signIn: false});


        case actions.types.SIGN_IN:
            return ({...state, signIn: action.payload});

        default:
            return (state);
    }

    
}


export default fx.reducerLogger(firebaseReducer);
