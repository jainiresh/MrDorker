export const saveStateToLocal = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
        // console.log('State was set in LS!  ' + JSON.stringify(state))
    } catch (error) {
        console.error("Error serializing redux state, with error : ",error )
    }
}


export const getStateFromLocal = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        const deserializedState = JSON.parse(serializedState);
        return deserializedState === null ? undefined : deserializedState;
    } catch (error) {
        console.error("Error de-serializing redux state, with error : ",error )
    }
}