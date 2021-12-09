import * as constants from './constants'

export const Reducer = (state = [], action) => {
  const newTodos = Object.assign([], state)
  switch (action.type) {
    case constants.ADD_TODO:
      return [newTodos, action.payload]
    case constants.TOGGLE_TODO:
      return newTodos.splice(action.index, 1)
    case constants.DELETE_ALL_COMPLETED:
      return newTodos.filter(todo => !todo.completd)
    default:
      return newTodos
  }
}
