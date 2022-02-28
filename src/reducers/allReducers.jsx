import { combineReducers } from 'redux'
import classPageReducer from './isClassPage'
import loading from './loading'
import userReducer from './user'

const allReducers = combineReducers({
    isClassPage : classPageReducer,
    userReducer:userReducer,
    loadingReducer:loading
})

export default allReducers