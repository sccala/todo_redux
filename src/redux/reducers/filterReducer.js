import * as constants from '../constants'

export const filterReducer = (state = [], action) => {
  const newTodos = Object.assign([], state)
  switch (action.type) {
    case constants.ADD_TODO:
      return
    default:
      return newTodos
  }
}
