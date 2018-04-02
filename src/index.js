
// Styles
import styles from 'bootstrap/dist/css/bootstrap.css';

// Service workers for offline use
import registerServiceWorker from './registerServiceWorker';

// Import the framework

import ReactDOM from 'react-dom';

import React, {fx} from "./fx";



// Import our stuff
import App from './components/app';

import reducers from './reducers';
import actions from './actions';

import './styles/css/index.css';



// https://fontawesome.com/how-to-use/js-component-packages#


const store = new fx.redux.Store(actions, reducers);



ReactDOM.render(
    (
        <store.Provider>
           <App />
        </store.Provider>
        
    ), 
    document.getElementById('root')
  );
  

// Register our service worker
registerServiceWorker();
