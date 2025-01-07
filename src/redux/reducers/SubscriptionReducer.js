const initialState = {
    subscriptionPlan : "FREE"
}

const subscriptionReducer = (state = initialState, action) => {
    switch(action.type){
        case 'NEW_SUBSCRIPTION_FREE':
        default:
            return initialState;
    }
}

export default subscriptionReducer;