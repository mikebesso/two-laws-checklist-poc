import userReducer, {anonymousUser} from "./userReducer";
import actions from "../actions";


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
                        expect(userReducer(testObject, "abc")).toEqual(testObject);
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

                        const action = {
                            type: actions.types.SET_USER_INFO,
                            payload: {
                                displayName: "name",
                                email: "name@email.com"
                            }
                        }

                        const newState = userReducer(anonymousUser, action);
                        expect(newState).toEqual({name: "name", email: "name@email.com"});

                    }
                )

            }
        )

    }

)


