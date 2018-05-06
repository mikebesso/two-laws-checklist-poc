import firebase from "firebase";
import actionTypes from "./action-types";

import config from "../../secrets/firebase-config.json"

import fx from "../../fx";


firebase.initializeApp(config);


const firebaseDatabase = firebase.database();
const firebaseAuth = firebase.auth();

export {
    firebaseDatabase,
    firebaseAuth,
};



const handleOnAuthStateChanged = (user) => {
    
    return(
        fx.AppStore.Dispatch(
            {
                type: actionTypes.ON_AUTH_STATE_CHANGE,
                payload: user
            }
        )
    )
}


firebase.auth().onAuthStateChanged(handleOnAuthStateChanged);




export function firebaseSignInWithGoogle(){

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

export function firebaseSignOut(){
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


export function firebaseSignInWithEmailAndPassword(email, password){

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


export function firebaseSignUpWithEmailAndPassword(email, password){

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


