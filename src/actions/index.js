import actionTypes from "./action-types";

import * as firebaseActions from "./actions-firebase";
import * as userActions from "./actions-users";
import * as storeActions from "./actions-store";

import * as checklistActions from "./actions-checklists";

import * as routerActions from "../fx/redux/middlewares/router-middleware/actions";


const actions = {
    types: {
        ...actionTypes
    },
    ...firebaseActions,
    ...userActions,
    ...routerActions,
    ...checklistActions,
    ...storeActions

}

export default actions;





