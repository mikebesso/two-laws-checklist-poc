
// Import the framework
import React from 'react';
// redux
import * as Redux from 'redux';

import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'

// middlewares
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import externalInterfaceMiddleware from './middlewares/axios';

import routerMiddleware from './middlewares/router-middleware';
import ConnectedRouter from './middlewares/router-middleware/ConnectedRouter';

//import axios from 'redux-axios/lib/middleware';
import { logger } from 'redux-logger';

//import reducers from "../reducers"

import _ from "lodash";
 



/*
export function createStore() {

    console.log("CREATING STORE")
    const createStoreWithMiddleware = Redux.applyMiddleware(
        logger,  
        ReduxPromise, 
        thunk,
        externalInterfaceMiddleware,
        routerMiddleware
      )(Redux.createStore);
      

    return(createStoreWithMiddleware(reducers))

}


export function ReduxStoreProvider(props){
    return(<Provider store={props.store || createStore()}>{props.children}</Provider>)
} 

*/

export class Store {

    store = null;
    history = null;

    constructor(actions, reducers){

        this.store = this.createStore(reducers);

        // if we have action called "initializeStore", invoke it

        if (_.has(actions, "initializeStore")) {
            this.store.dispatch(actions.initializeStore());
        }

        this.history = createHistory()

        this.Provider.bind(this);


    }

    createStore = (reducers) => {

        console.log("CREATING STORE")
        const createStoreWithMiddleware = Redux.applyMiddleware(
            logger,  
            ReduxPromise, 
            thunk,
            externalInterfaceMiddleware,
            routerMiddleware
          )(Redux.createStore);
          
    
        return(createStoreWithMiddleware(reducers))
    
    }    

    Provider = (props) => {
        return(
            <Provider store={this.store}>
                <ConnectedRouter history={this.history}>
                    {props.children}
                </ConnectedRouter>
            </Provider>
        )
    }

}

