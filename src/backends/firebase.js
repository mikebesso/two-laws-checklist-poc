
import * as firebase from 'firebase';

// get configuration
import config from "../secrets/firebase-config.json";

function initialize() { 
    console.log("initializeing");
    firebase.initializeApp(config);
    
    const auth = firebase.auth();
    const google = new firebase.auth.GoogleAuthProvider();
    const twitter = new firebase.auth.TwitterAuthProvider();
    
  
    return(
        {
            ...firebase,
            app: {
                initialize,
                config,
                auth,
                authenticators: {
                    google,
                    twitter
                }
            }   
        }   
    )


    
};



export default initialize();