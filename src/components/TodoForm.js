import { useState } from 'react'
import { connect } from 'react-redux'
import * as todoActions from '../redux/ActionCreators'


const TodoForm = ({ newTodos, todoAdd }) => {
  const [name, setName] = useState('')
   const handleChange = event => {
     setName(event.target.value)
   }
  const handleSubmit = e => {
      todoAdd(e.target.value)
  }

  return (
    <form
      className='items-center pl-8 h-16 flex bg-white dark:bg-secondary  rounded-md shadow-lg my-8'
      onSubmit={handleSubmit}
    >
      <label className='hidden' htmlFor='todoInput'>
        Add New Todo
      </label>
      <button className='align-middle bg-transparent border border-indigo-300 hover:border-indigo-400 text-indigo-400 rounded-full sm:mt-0 w-7 h-7'></button>
      <input
        type='text'
        name='todo-input'
        className='w-11/12 bg-white dark:bg-secondary text-primary px-4'
        id='todoInput'
        placeholder='Create a new todo...'
        value={name}
        onChange={handleChange}
      />
      <button className='hidden' type='submit'>
        Add
      </button>
    </form>
  )
}
function mapDispatchToProps(dispatch) {
  return { addTodo: todo => dispatch(todoActions.addTodo(todo)) }
}

export default connect(null, mapDispatchToProps)(TodoForm)
