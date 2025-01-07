const initialState = {
    reportData : ""
}

export const reportReducer = (state = initialState, action) => {
    switch(action.type){
        case 'POPULATE_REPORT_DATA':
            return {
                ...state,
                reportData : action.payload
            }
        default:
            return initialState;
    }
}

