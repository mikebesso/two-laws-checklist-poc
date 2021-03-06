import data from "../../data";

import actionTypes from "./action-types";
import firebase from "firebase";


export function reinitializeChecklists() {
    return(
        (dispatch) => {
            dispatch(
                {
                    type: actionTypes.REINITIALIZE_CHECKLISTS,
                    payload: {}
                }
            );
            data.checklists.reinitialize();
            dispatch(loadChecklists());
        }
    )                
}

   
export function loadChecklists() {
   return(
        (dispatch) => {
            dispatch(
                {
                    type: actionTypes.LOAD_CHECKLISTS,
                    payload: {loading: true}
                }
            );

            firebase.database().ref("/root/checklists")
                .once(
                    "value", 
                    (snapshot) => {
                        dispatch(
                            {
                                type: actionTypes.LOAD_CHECKLISTS_SUCCESS,
                                payload: snapshot.val()
                            }
                        )
                    }
                )
        }
    )                
            
    
}


