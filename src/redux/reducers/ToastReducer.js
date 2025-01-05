const initialState = {
    message : undefined, 
    error: false
}

const toastReducer = (state = initialState, action) => {
    switch(action.type){
        case 'TOASTER_ON':
            return {...state, ...action.payload};
        case 'TOSTER_OFF':
        default:
            return initialState;
    }
}

export default toastReducer