import actionTypes from "./action-types";

import firebaseActions from "./actions-firebase";
import userActions from "./actions-users";
import routerActions from "./actions-router";


import actionChecklists from "./actions-checklists";




const actions = {
    types: {
        ...actionTypes
    },
    ...firebaseActions,
    ...userActions,
    ...routerActions,
    ...actionChecklists

}

export default actions;





