import data from "../data";
import firebase from "../backends/firebase";
import actionTypes from "./action-types";


export function reinitializeChecklists() {

    return(
        (dispatch) => {
            dispatch(
                {
                    type: actionTypes.REINITIALIZE_CHECKLISTS,
                    payload: {}
                }
            );

            data.reinitializeChecklists();

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


const actions = {
    loadChecklists,
    reinitializeChecklists
};

export default actions;