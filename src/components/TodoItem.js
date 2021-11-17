// @ts-nocheck
import { useState } from 'react'

export const TodoItem = ({ todo, todos, setTodos }) => {
  const [mutableTodo, setMutableTodo] = useState(todo)

  const classes = mutableTodo.completed ? 'line-through text-gray-400' : ''
  const CompletedIcon = mutableTodo.completed
    ? 'bg-check' 
    : 'bg-transparent border border-indigo-300 hover:border-indigo-400'
    const CompletedCheck = mutableTodo.completed
      ? (<svg xmlns='http://www.w3.org/2000/svg' width='11' height='11'>
              <path fill='none' stroke='#FFF' strokeWidth='2' d='M1 4.304L3.696 7l6-6' />
            </svg>)
      : ''

  const toggleCompleted = () => {
    setMutableTodo({ ...mutableTodo, completed: !mutableTodo.completed })
    
    const updatedTodos = todos.map(item =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    )
    setTodos(updatedTodos)
  }
 

  return (
    <>
      <li className={`${classes} text-primary py-4 px-8 border-b-0 dark:border-gray-700`}>
        <label className='hidden' htmlFor={`todoCheckbox-${todo.id}`}>
          Completed Checkbox
        </label>
        <input
          id={`todoCheckbox-${todo.id}`}
          type='checkbox'
          name='completed-checkbox'
          defaultChecked={mutableTodo.completed}
          className='hidden'
        />
        <div className='pt-2 flex'>
          <button
            className={`${CompletedIcon} py-2 px-2 mr-4 text-indigo-400 rounded-full sm:mt-0 w-7 h-7`}
            onClick={toggleCompleted}
          >
            {CompletedCheck}
          </button>
          <p>{mutableTodo.content}</p>
        </div>
      </li>
    </>
  )
}
