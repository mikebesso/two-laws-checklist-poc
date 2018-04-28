import isLoadedReducer, {initialState} from "./firebaseReducer";
import actions from "../actions";



/*
    Actions objects to test with
*/


// An action that does not apply 
const doesNotApplyAction = {
    type: "gibberish",
    payload: {}
}

const initializeFirebaseAction = {
    type: actions.types.FIREBASE_INITIALIZED,
    payload: {}
};

const signInAction = {
    type: actions.types.SIGN_IN,
    payload: {}
};
const signOutAction = {
    type: actions.types.SIGN_OUT,
    payload: {}
};

const signUpAction = {
    type: actions.types.SIGN_UP,
    payload: {}
};


let testInitialState = initialState;

describe(
    "firebaseReducer", 

    () => {

        describe(
            "ignore actions that do not apply",
            () => {
                it(
                    "Unknown `action` returns `state` unchanged",
                    () => {
                        const testObject = {a: "is for apple", pi: 3.14}
                        expect(isLoadedReducer(testObject, doesNotApplyAction)).toEqual(testObject);
                    }
                )
            }
        )


    }


    /*
        TODO: add rest of tests
    */



)

