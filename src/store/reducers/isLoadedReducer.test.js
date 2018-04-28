import isLoadedReducer, {initialState} from "./isLoadedReducer";
import actions from "../actions";


/*
    Actions objects to test with
*/


// An action that does not apply 
const doesNotApplyAction = {
    type: "gibberish",
    payload: {}
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

//    The action that signals checklists are loading.
const loadChecklistsAction = {
    type: actions.types.LOAD_CHECKLISTS,
    payload: {}
}

//    The action that signals checklists are loaded.
const loadChecklistsSuccessAction = {
    type: actions.types.LOAD_CHECKLISTS_SUCCESS,
    payload: {}
}

//    The action that signals checklists failed to load.
const loadChecklistsFailAction = {
    type: actions.types.LOAD_CHECKLISTS_FAIL,
    payload: {}
}



let testInitialState = initialState;

describe(
    "isLoadedReducer", 

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
        ),


        describe(
            "handle `user` actions",
            () => {

                // We are looking for a change in the user flag
                beforeEach(
                    () => {
                        testInitialState = {...initialState, user: null};
                    }
                )


                describe(
                    "handle `user` being loaded",
                    () => {
                        it(
                            "the `user` flag is set, nothing else should change",
                            () => {
                                const newState = isLoadedReducer(testInitialState, setUserAction);
                                expect(newState).toEqual({...testInitialState, user: true})
                            }
                        )
                    }
                ),
        
                describe(
                    "handle `user` being cleared",
                    () => {
                         it(
                            "the `user` gets cleared, nothing else should change",
                            () => {
                                const newState = isLoadedReducer(testInitialState, clearUserAction);
                                expect(newState).toEqual({...testInitialState, user: false})
                            }
                        )
                    }
                )
            }
        ),

        describe(
            "handle `checklists` actions",

            () => {

                // We are looking for a change in the checklists flag
                beforeEach(
                    () => {
                        testInitialState = {...initialState, checklists: null};
                    }
                )

                describe(
                    "handle `checklists` being loaded",
                    () => {
                        it(
                            "the `checklist` flag is cleared, nothing else should change",
                            () => {
                                const newState = isLoadedReducer(testInitialState, loadChecklistsAction);
                                expect(newState).toEqual({...testInitialState, checklists: false})
                            }
                        )
                    }
                ),
        
                describe(
                    "handle `checklists` successfully loaded",
                    () => {
                         it(
                            "the `checklist` is set, nothing else should change",
                            () => {
                                const newState = isLoadedReducer({...initialState, checklists: null}, loadChecklistsSuccessAction);
                                expect(newState).toEqual({...testInitialState, checklists: true})
                            }
                        )
                    }
                ),
                
                describe(
                    "handle `checklists` failed to load",
                    () => {
                         it(
                            "the `checklist` gets cleared, nothing else should change",
                            () => {
                                const newState = isLoadedReducer({...initialState, checklists: null}, loadChecklistsFailAction);
                                expect(newState).toEqual({...testInitialState, checklists: false})
                            }
                        )
                    }
                )      

            }

        )
    }
)


