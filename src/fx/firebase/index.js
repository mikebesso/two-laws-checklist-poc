import firebase from "firebase";
import AppStore from "../redux/AppStore";
import HashRouter from "../hashRouter/HashRouter";
import actionTypes from "./actions/types";

export default class Firebase {

    static actionTypes = actionTypes

    static handleOnAuthStateChanged = (user) => {

        
        const payload = user ? 
            {
                authenticated: true,
                name: user.displayName,
                email: user.email
            } 
            :
            {
                authenticated: false,
                name: "anonymous",
                email: ""            
            }

        AppStore.Dispatch(
            {
                type: actionTypes.ON_AUTH_STATE_CHANGE,
                payload: payload
            }
        )
    }


    static SignInWithGoogle = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        //provider.addScope('profile');
        //provider.addScope('email');
        firebase.auth().signInWithPopup(provider)

        HashRouter.NavigateTo("home");

    
    }
    
    static SignOut = () => {
        firebase.auth().signOut().then(
            () => {
                AppStore.Dispatch(
                    {
                        type: actionTypes.SIGN_OUT,
                        payload: null
                    }
                );
                HashRouter.NavigateTo("home");
            },
            () => console.log("signOut() failed")
        
        );

       
                
    }
    
    
    static SignInWithEmailAndPassword = (email, password) => {
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        HashRouter.NavigateTo("home");
            
    }
    
    
    static SignUpWithEmailAndPassword = (email, password) => {
    
        firebase.auth().createUserWithEmailAndPassword(email, password)
        HashRouter.NavigateTo("home");
    
    }


    static get CurrentUser(){
        return firebase.auth().currentUser;
    }

    constructor(firebaseConfig){
        

        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged(Firebase.handleOnAuthStateChanged);

    }






}