
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
import {logger} from 'redux-logger';

// middlewares
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import externalInterfaceMiddleware from './middlewares/axios';
import routerMiddleware from './middlewares/router-middleware';

// Import our stuff
import App from './components/app';
import reducers from './reducers';
import actions from './actions';




// https://fontawesome.com/how-to-use/js-component-packages#


const createStoreWithMiddleware = applyMiddleware(
    logger,  
    ReduxPromise, 
    thunk,
    externalInterfaceMiddleware,
    routerMiddleware
  )(createStore);
  

const store = createStoreWithMiddleware(reducers);

console.log("action types", actions);
actions.initializeFirebase()

store.dispatch(actions.initializeFirebase());

ReactDOM.render(
    (
        <Provider store={store}>
           <App />
        </Provider>
    ), 
    document.getElementById('root')
  );
  

// Register our service worker
registerServiceWorker();
