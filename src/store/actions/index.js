import actionTypes from "./action-types";

import * as firebaseActions from "./actions-firebase";
//import * as userActions from "./actions-users";
import * as storeActions from "./actions-store";

import * as checklistActions from "./actions-checklists";


const actions = {
    types: {
        ...actionTypes
    },
    ...firebaseActions,
    ...checklistActions,
    ...storeActions

}

export default actions;





