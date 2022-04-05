import { filterReducer } from './filterReducer'
import { todoReducer } from './todoReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({ filter: filterReducer, todo: todoReducer })

export default allReducers
