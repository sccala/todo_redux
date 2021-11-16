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
    <div
      className='items-center h-12 flex bg-white dark:bg-secondary w-full'
      onSubmit={handleSubmit}
    >
      <IncompletedIcon className={`align-middle`} onClick={onClickComplete} />
      <input
        type='text'
        name='todo-input'
        className='w-full pl-4 bg-white dark:bg-secondary text-primary rounded-md'
        id='todoInput'
        placeholder='Create a new todo...'
        value={todoInput}
        onChange={handleChange}
      />
      <button className='hidden' type='submit'>
        Add
      </button>
    </div>
  )
}
