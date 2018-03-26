
// Styles
import styles from 'bootstrap/dist/css/bootstrap.css';
import './css/styles.css';

// Service workers for offline use
import registerServiceWorker from './registerServiceWorker';

// Import the framework
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// middlewares
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import externalInterfaceMiddleware from './middlewares/axios';

// Import our stuff
import App from './components/app';
import reducers from './reducers';


// https://fontawesome.com/how-to-use/js-component-packages#


console.log("here")



const createStoreWithMiddleware = applyMiddleware(
    ReduxPromise, 
    thunk,
    externalInterfaceMiddleware
  )(createStore);
  


ReactDOM.render(
    (
        <Provider store={createStoreWithMiddleware(reducers)}>
           <App />
        </Provider>
    ), 
    document.getElementById('root')
  );
  

// Register our service worker
registerServiceWorker();
