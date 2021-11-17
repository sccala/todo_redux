import { useState } from 'react'

const generateId = array => {
  const ids = array.map(item => item.id)
  return Math.max(...ids) + 1
}

export const TodoForm = ({ todos, setTodos }) => {
  const [todoInput, setTodoInput] = useState('')
  const handleChange = e => {
    setTodoInput(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (todoInput) {
      const newTodo = {
        id: generateId(todos),
        content: todoInput.trim(),
        completed: false,
      }
      setTodos([newTodo, ...todos])
      setTodoInput('')
    }
  }

  return (
    <form
      className='items-center pl-8 h-12 flex bg-white dark:bg-secondary  rounded-md shadow-lg my-8'
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
        value={todoInput}
        onChange={handleChange}
      />
      <button className='hidden' type='submit'>
        Add
      </button>
    </form>
  )
}
