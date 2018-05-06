import firebase from "firebase";
import AppStore from "../redux/AppStore";
import HashRouter from "../hashRouter/HashRouter";
import actionTypes from "./actions/types";

export default class Firebase {

    static actionTypes = actionTypes

    static handleOnAuthStateChanged = (user) => {
        let payload = {
            authenticated: false,
            name: "anonymous",
            email: ""            
        }
        
        if (user){
            user = {
                authenticated: true,
                name: user.displayName,
                email: user.email
                
            }
        }
        AppStore.Dispatch(
            {
                type: actionTypes.ON_AUTH_STATE_CHANGE,
                payload: user
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
        firebase.auth().signOut()
        HashRouter.NavigateTo("home");
                
    }
    
    
    static SignInWithEmailAndPassword = (email, password) => {
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        HashRouter.NavigateTo("home");
            
    }
    
    
    static SignUpWithEmailAndPassword = (email, password) => {
    
        firebase.auth().createUserWithEmailAndPassword(email, password)
        HashRouter.NavigateTo("home");
    
    }

    constructor(firebaseConfig){
        

        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged(Firebase.handleOnAuthStateChanged);

    }



}