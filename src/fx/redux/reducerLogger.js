
export default (reducer) => {

    return(
        (state, action) =>
        {
            console.log("REDUCING", reducer.name, {state, action});
            const newState = reducer(state, action);
            console.log("REDUCED", {newState});
            return(newState);
        }
    )
}