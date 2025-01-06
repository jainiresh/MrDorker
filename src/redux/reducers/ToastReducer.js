const initialState = {
    message : undefined, 
    error: undefined
}

const ToastReducer = (state = initialState, action) => {
    switch(action.type){
        case 'TOASTER_ON':
            return {...action.payload};
        case 'TOASTER_OFF':
        default:
            return initialState;
    }
}

export default ToastReducer