import * as constants from '../actions/constants'
import { initialState } from '../initialState'

const generateId = array => {
  const ids = array.map(item => item.id)
  return Math.max(...ids) + 1
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      const todoAdd = {
        id: generateId,
        text: action.todo,
        completed: false,
      }
      return [...state, todoAdd]
    case constants.TOGGLE_TODO:
      return state.map(todos => {
        if (todos.id !== action.id) {
          return todos
        }
        return {
          ...todos,
          completed: !todos.completed,
        }
      })
    case constants.DELETE_ALL_COMPLETED:
      return state.filter(todos => !todos.completed)
    default:
      return state
  }
}
