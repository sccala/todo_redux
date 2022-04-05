import { combineReducers, createStore } from 'redux'
import { filterReducer } from './reducers/filterReducer'
import { todoReducer } from './reducers/todoReducer'

export const ConfigureStore = () => {
  const store = createStore(
      combineReducers({ todoReducer, filterReducer }))
  return store
}
