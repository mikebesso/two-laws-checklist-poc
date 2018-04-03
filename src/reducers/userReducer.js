import reducerLogger from "./reducerLogger";
import actions from '../actions';


export const anonymousUser = {
    name: "anonymous",
    email: ""
}

export const userReducer = (state = anonymousUser, action) => {

    let newState = state;

    switch (action.type) {
        
        case actions.types.SET_USER_INFO:
            return (
                {
                    ...state, 
                    name: action.payload.displayName, 
                    email: action.payload.email
                }
            );
            break;

        case actions.types.CLEAR_USER_INFO:
            return (anonymousUser);
            break;

        default:
            return(newState);
            break;
    }

    return(newState);

}


export default reducerLogger(userReducer);