import { combineReducers } from 'redux';

import checklistsReducer from './checklistsReducer';
import isLoadedReducer from './isLoadedReducer';
import firebaseReducer from './firebaseReducer';
import userReducer from './userReducer';
import routerReducer from "../fx/redux/middlewares/router-middleware/reducer";


export default rootReducer = combineReducers(
    {
        checklists: checklistsReducer, 
        isLoaded: isLoadedReducer,
        firebase: firebaseReducer,
        user: userReducer,
        router: routerReducer
    }
);


