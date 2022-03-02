import { combineReducers } from 'redux'
import homePageReducer from './homePageReducer'
import classPageReducer from './isClassPage'
import loading from './loading'
import userReducer from './user'

const allReducers = combineReducers({
    isClassPage : classPageReducer,
    userReducer:userReducer,
    loadingReducer:loading,
    homePageReducer:homePageReducer
})

export default allReducers