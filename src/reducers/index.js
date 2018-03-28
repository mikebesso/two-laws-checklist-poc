import { combineReducers } from 'redux';

import checklistReducer from './reducer-checklists';
import isLoadedReducer from './reducer-isLoaded';
import firebaseReducer from './reducer-firebase';
import userReducer from './reducer-user';
import routerReducer from "./reducer-router";


const rootReducer = combineReducers(
    {
        checklists: checklistReducer, 
        isLoaded: isLoadedReducer,
        firebase: firebaseReducer,
        user: userReducer,
        router: routerReducer
        
    }
);


export default rootReducer;