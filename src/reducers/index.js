import { combineReducers } from 'redux';

import checklistReducer from './reducer-checklists'
import isLoadedReducer from './reducer-isLoaded'


const rootReducer = combineReducers(
    {
        checklists: checklistReducer, 
        isLoaded: isLoadedReducer
    }
);


export default rootReducer;