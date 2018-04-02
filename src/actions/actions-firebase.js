import firebase from "firebase";
import actionTypes from "./action-types";

import config from "../secrets/firebase-config.json"


import * as routerActions from "./actions-router";

export function initializeFirebase(){

    return(
        (dispatch) => {

            if (!firebase.apps.length) {
                firebase.initializeApp(config);
            }

            dispatch( {
                type: actionTypes.FIREBASE_INITIALIZED,
                payload: true
            })

            firebase.auth().onAuthStateChanged(
                (user) => {
                    console.log("dispatching onAuthStateChanged", user);

                    dispatch(
                        {
                            type: user ? actionTypes.SET_USER_INFO : actionTypes.CLEAR_USER_INFO,
                            payload: user
                        }
                    )

                    return(
                        dispatch(
                            {
                                type: actionTypes.ON_AUTH_STATE_CHANGE,
                                payload: user
                            }
                        )
                    )
                }
            )

            dispatch( {
                type: actionTypes.ATTACHED_ON_AUTH_STATE_CHANGE,
                payload: true
            })
            
        }
    )

}

export function signInWithGoogle(){

    return(

        (dispatch) => {
            dispatch(
                {
                    type: actionTypes.SIGN_IN,
                    payload: "google"
                }
            )

            const provider = new firebase.auth.GoogleAuthProvider();
            //provider.addScope('profile');
            //provider.addScope('email');
            firebase.auth().signInWithPopup(provider)
                .then(
                    () => {
                        dispatch(routerActions.push("/"));
                    }

                );
        
        }
    )


}

export function signOut(){
    return(
       (dispatch) => {
            firebase.auth().signOut().then(
                () => {
                    console.log("signed out");
                    dispatch(routerActions.push("/"));
                }
            )
            
        }
    )
}



