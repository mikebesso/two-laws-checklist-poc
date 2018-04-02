import actionTypes from './action-types';
import * as actionsFirebase from "./actions-firebase";



// This will be called by the framework after the store is created
// but before it is used.

export function initializeStore(){
    return(
       (dispatch) => {
            dispatch(actionsFirebase.initializeFirebase())
        }
    )
}


