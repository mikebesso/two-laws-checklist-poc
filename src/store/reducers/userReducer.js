import fx from "../../fx";
import actions from '../actions';



export const anonymousUser = {
    name: "anonymous",
    email: ""
}

export const userReducer = (state = anonymousUser, action) => {

    let newState = state;
    let user = anonymousUser;
/*
    if (fx._.has(action, "payload") && fx._.has(action.payload, "name")){
        user = action.payload;
    }
*/

    switch (action.type) {
        
        case fx.Firebase.actionTypes.ON_AUTH_STATE_CHANGE:
            
            return (
                {
                    ...state, 
                    ...user
                }
            );        

        case actions.types.SET_USER_INFO:
            return (
                {
                    ...state, 
                    ...user
                }
            );

        case actions.types.CLEAR_USER_INFO:
            return (anonymousUser);

        default:
            return(newState);
    }


}


export default fx.reducerLogger(userReducer);