import routerActionTypes from "../fx/redux/middlewares/router-middleware/action-types";

const actionTypes = {
    LOAD_CHECKLISTS: "LOAD_CHECKLISTS",
    LOAD_CHECKLISTS_SUCCESS: "LOAD_CHECKLISTS_SUCCESS",
    LOAD_CHECKLISTS_FAIL: "LOAD_CHECKLISTS_FAIL",
    REINITIALIZE_CHECKLISTS: "REINITIALIZE_CHECKLISTS",

    LOAD_TAXONOMIES: "LOAD_TAXONOMIES",
    LOAD_TAXONOMIES_SUCCESS: "LOAD_TAXONOMIES_SUCCESS",
    LOAD_TAXONOMIES_FAIL: "LOAD_TAXONOMIES_FAIL",
    REINITIALIZE_TAXONOMIES: "REINITIALIZE_TAXONOMIES",

    SET_USER_INFO: "SET_USER_INFO",
    CLEAR_USER_INFO: "CLEAR_USER_INFO",

    FIREBASE_INITIALIZED: "FIREBASE_INITIALIZED",
    ATTACHED_ON_AUTH_STATE_CHANGE: "ATTACHED_ON_AUTH_STATE_CHANGE",
    ON_AUTH_STATE_CHANGE: "ON_AUTH_STATE_CHANGE",
    SIGN_IN: "SIGN_IN",
    SIGN_UP: "SIGN_UP",

    UPDATE_PROFILE: "UPDATE_PROFILE",

    STORE_INITIALIZED: "STORE_INITIALIZED",
  

    ...routerActionTypes

};

export default actionTypes;