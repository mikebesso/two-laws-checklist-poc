
// Import the framework
import React from 'react';
// redux
import * as redux from 'redux';

import { Provider, connect } from 'react-redux';
//import createHistory from 'history/createBrowserHistory';
//import { withRouter } from 'react-router';

// middlewares
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import externalInterfaceMiddleware from './middlewares/axios';

//import routerMiddleware from './middlewares/router-middleware';
//import ConnectedRouter from './middlewares/router-middleware/ConnectedRouter';

//import axios from 'redux-axios/lib/middleware';
import { logger } from 'redux-logger';

//import reducers from "../reducers"

import hashRouterReducers from "../hashRouter/reducers";

import _ from "lodash";
import hashRouterActions from '../hashRouter/actions/hashRouterActions';
 

class AppStoreException {
    constructor(message) {
        this.message = message;
        this.name = "AppStoreException";
    }
}

class AppStore {

    static store = null;

    static reducers = null;
    static actions = null;

    //static history = null;

    constructor(actions, reducers){

        if (AppStore.store !== null){
            throw new AppStoreException("There can be only one AppStore");
        }
        
        AppStore.actions = {
            ...actions,
            ...hashRouterActions
        };
        AppStore.reducers = redux.combineReducers(
            {
                ...reducers,
                ...hashRouterReducers
            }
        );

        AppStore.store = AppStore.createStore(AppStore.reducers);



        //console.log("creating history")
        //AppStore.history = createHistory()
        //console.log(AppStore.history)

        // if we have action called "initializeStore", invoke it
        if (_.has(actions, "initializeStore")) {
            AppStore.Dispatch(AppStore.actions.initializeStore());
        }
    }

    static createStore = (reducers) => {

       
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;


/*
        const createStoreWithMiddleware = redux.applyMiddleware(
            logger,  
            ReduxPromise, 
            thunk,
            externalInterfaceMiddleware,
            routerMiddleware
          )(redux.createStore);
          
    
        return(createStoreWithMiddleware(AppStore.reducers))
*/
        const store = redux.createStore(
            reducers, 
            /* preloadedState, */ 
            composeEnhancers(
                redux.applyMiddleware(
                    logger,  
                    ReduxPromise, 
                    thunk,
                    //routerMiddleware
                    externalInterfaceMiddleware
                )
            )
        );

        return(store);

    
    }    

    static GetState = () => AppStore.store.getState();

    static Dispatch = (action) => AppStore.store.dispatch(action);

   
    static Provider = (props) => {
        return(
            <Provider store={AppStore.store}>
                {props.children}
            </Provider>
        )
/*
        return(
            <Provider store={AppStore.store}>
                <ConnectedRouter history={AppStore.history}>
                    {props.children}
                </ConnectedRouter>
            </Provider>
        )
       */
    }

    Provider = (props) => {
        return(AppStore.Provider(props));
    }

    /*
    static connectToStore = (mapStateToProps, actions) => {

        // TODO:  Add with router

        return(
            (component) => {
                    connect(
                        mapStateToProps,
                        AppStore.actions
                    )
            }
        )

    }    
*/

    static Connect = (mapStateToProps) => {

        /*
        return(
            (Component) => {
                return(    
                    withRouter(
                        connect(
                            mapStateToProps,
                            (dispatch) => redux.bindActionCreators({...AppStore.actions}, dispatch) 
                        )(Component)
                    )
                )
            }
        ) 

        */

        return(
            (Component) => {
                return(    
                    
                    connect(
                        mapStateToProps,
                        (dispatch) => redux.bindActionCreators({...AppStore.actions}, dispatch) 
                    )(Component)
/*
                    withRouter(connect(
                            mapStateToProps,
                            (dispatch) => redux.bindActionCreators({...AppStore.actions}, dispatch) 
                        )(Component))
                        */
                )
            }
        ) 

    }

}


       


/*
export function connectToStore(mapStateToProps, actions){

    return(
        (component) => {
            withRouter(
                connect(
                    mapStateToProps,
                    (dispatch) => {
                        return(
                            redux.bindActionCreators(
                                {
                                    ...actions
                                },
                                dispatch
                            )
                        )
                    }
                )
            )
        }
    )
}    
*/


export default AppStore;
