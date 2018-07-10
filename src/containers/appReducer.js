const INITIAL_STATE = { userAuthenticated: false }

const checkAuthReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case 'USER_AUTHENTICADED_CHANGED':
            return { ...state, userAuthenticated: action.payload }
        default:
            return state
    }
}

export default checkAuthReducer