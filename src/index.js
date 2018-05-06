
// Styles
//import  'bootstrap/dist/css/bootstrap.css';
import "bulma";


// Service workers for offline use
import registerServiceWorker from './registerServiceWorker';



import React from "react";
import ReactDOM from "react-dom";





// Import our stuff
import App from './components/app';



import './styles/css/index.css';

import reducers from './store/reducers';
import actions from './store/actions';

import firebaseConfig from "./secrets/firebase-config.json"

import fx from "./fx";




// https://fontawesome.com/how-to-use/js-component-packages#


  const routes =
  { 
    home: 'GET /',
    checklists: 'GET /checklists',
    checklist: 'GET /checklist/:id',
    controlPanel: 'GET /controlpanel',
    signIn: 'GET /signin',
    signUp: 'GET /signup',
    signOut: 'GET /signout',
    notFound: 'GET /notfound'
  }
  const aliases =
  {
    'GET /': 'home'
  }  


fx.initializeFx(actions, reducers, routes, aliases, firebaseConfig);



ReactDOM.render(
    (
        <fx.AppStore.Provider>
           <App />
        </fx.AppStore.Provider>
        
    ), 
    document.getElementById('root')
  );
  

// Register our service worker
registerServiceWorker();
