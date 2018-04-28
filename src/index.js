
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

import MyStore from "./store";
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


fx.initializeFx(routes, aliases);

// move to initialize fx
/*
const hashRouter = new fx.HashRouter(routes, aliases)

const handleHashChange = () => {
    console.log("ROUTE CHANGE");
    fx.AppStore.Dispatch(fx.HashRouter.Actions.handleHashChange())
}

window.addEventListener('hashchange', handleHashChange, false);

// Set the initial route and render the app
fx.AppStore.Dispatch(fx.HashRouter.Actions.handleHashChange())
*/


ReactDOM.render(
    (
        <MyStore.Provider>
           <App />
        </MyStore.Provider>
        
    ), 
    document.getElementById('root')
  );
  

// Register our service worker
registerServiceWorker();
