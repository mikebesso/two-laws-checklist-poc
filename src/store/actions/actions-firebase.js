import firebase from "firebase";
import actionTypes from "./action-types";

import config from "../../secrets/firebase-config.json"

import fx from "../../fx";

// this is a closure so that onAuthStateChanged has access to dispatch

export function initializeFirebase(){

    
    return(
        (dispatch) => {
            
            if (!firebase.apps.length) {

                dispatch( {
                    type: actionTypes.FIREBASE_INITIALIZED,
                    payload: true
                })

            }

            firebase.auth().onAuthStateChanged(
                (user) => {
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

            return(
                dispatch( 
                    {
                        type: actionTypes.ATTACHED_ON_AUTH_STATE_CHANGE,
                        payload: true
                    }
                )
            )
            
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
                        dispatch(fx.HashRouter.Actions.navigateTo("home"));
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
                    dispatch(fx.HashRouter.Actions.navigateTo("home"));
                }
            )
            
        }
    )
}


export function signInWithEmailAndPassword(email, password){

    return(

        (dispatch) => {
            dispatch(
                {
                    type: actionTypes.SIGN_IN,
                    payload: "email"
                }
            )

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(
                    () => {
                        dispatch(fx.HashRouter.Actions.navigateTo("home"));
                    }

                );
        
        }
    )


}


export function signUpWithEmailAndPassword(email, password){

    return(

        (dispatch) => {
            dispatch(
                {
                    type: actionTypes.SIGN_IN,
                    payload: "email"
                }
            )

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(
                    () => {
                        dispatch(fx.HashRouter.Actions.navigateTo("home"));
                    }

                );
        
        }
    )


}

