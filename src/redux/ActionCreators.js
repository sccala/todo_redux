import * as constants from './constants'

export const addTodo = todo => ({
  type: constants.ADD_TODO,
  todo,
})

export const toggleTodo = id => ({
  type: constants.TOGGLE_TODO,
  id,
})

export const deleteAllCompleted = () => ({
  type: constants.DELETE_ALL_COMPLETED,
})
