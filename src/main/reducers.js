import { combineReducers } from 'redux'

import checkAuthReducer from '../containers/appReducer'

const rootReducers = combineReducers({
    userStatus: checkAuthReducer
})

export default rootReducers