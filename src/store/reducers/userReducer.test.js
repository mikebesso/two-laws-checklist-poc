import userReducer, {anonymousUser} from "./userReducer";
import actions from "../actions";


/*
    Actions objects to test with
*/


// An action that does not apply 
const doesNotApplyAction = {
    type: "gibberish",
    payload: {
        displayName: "gibberish",
        email: "gibberish@email.com"
    }
}

//    The set user action provides the firebase auth user as the payload.
const setUserAction = {
    type: actions.types.SET_USER_INFO,
    payload: {
        displayName: "name",
        email: "name@email.com"
    }
}

//    The clear user action provides an empty object as the payload.
const clearUserAction = {
    type: actions.types.CLEAR_USER_INFO,
    payload: {}
}



describe(
    "userReducer", 

    () => {

        describe(
            "ignore actions that do not apply",
            () => {
                it(
                    "Unknown `action` returns `state` unchanged",
                    () => {
                        const testObject = {a: "is for apple", pi: 3.14}
                        expect(userReducer(testObject, doesNotApplyAction)).toEqual(testObject);
                    }
                )
            }
        ),

        describe(
            "handle `user` being set",
            () => {
                it(
                    "the `user` gets set",
                    () => {
                        const newState = userReducer(anonymousUser, setUserAction);
                        expect(newState).toEqual({name: "name", email: "name@email.com"});

                    }
                )
            }
        ),

        describe(
            "handle `user` being cleared",
            () => {
                 it(
                    "the `user` gets cleared",
                    () => {
                        const newState = userReducer(anonymousUser, clearUserAction);
                        expect(newState).toEqual(anonymousUser);

                    }
                )

            }
        )

    }

)


