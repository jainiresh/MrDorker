
const initialState = {
    showLoader : false
}


const loaderStateReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_LOADER':
            return {
                 showLoader: true
            }
        case 'HIDE_LOADER':
        default:
            return state;
    }
}

export default loaderStateReducer;