import { useState } from 'react'
import { IncompletedIcon } from './CheckIcon'

const generateId = array => {
  const ids = array.map(item => item.id)
  return Math.max(...ids) + 1
}

const onClickComplete = () => {}

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
    <div className='form-control flex justify-items-stretch bg-white dark:bg-secondary items-center w-full'>
      <form className='flex' onSubmit={handleSubmit}>
        <IncompletedIcon onClick={onClickComplete} />
        <input
          type='text'
          name='todo-input'
          className='w-full h-12 shadow-lg rounded-md'
          id='todoInput'
          placeholder='Create a new todo...'
          value={todoInput}
          onChange={handleChange}
        />
        <button id='submitNewTodo' type='submit'>
          Add
        </button>
      </form>
    </div>
  )
}
