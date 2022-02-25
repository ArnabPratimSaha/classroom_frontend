import { combineReducers } from 'redux'
import classPageReducer from './isClassPage'

const allReducers = combineReducers({
    isClassPage : classPageReducer
})

export default allReducers