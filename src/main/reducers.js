import { combineReducers } from 'redux'

import checkAuthReducer from '../main/App/appReducer'
import eventsList from '../containers/eventsReducer'

const rootReducers = combineReducers({
    userStatus: checkAuthReducer,
    eventsList: eventsList
})

export default rootReducers