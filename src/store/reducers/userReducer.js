import fx from "../../fx";
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

        case actions.types.CLEAR_USER_INFO:
            return (anonymousUser);

        default:
            return(newState);
    }


}


export default fx.reducerLogger(userReducer);