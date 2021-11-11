// @ts-nocheck
import { useState } from 'react'
import { CheckIcon } from '../images/CheckIcon'


export const TodoItem = ({ todo, todos, setTodos }) => {
  const [mutableTodo, setMutableTodo] = useState(todo)
  const classes = mutableTodo.completed ? 'completed' : ''

  const toggleCompleted = () => {
    setMutableTodo({ ...mutableTodo, completed: !mutableTodo.completed })
    const updatedTodos = todos.map(item =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    )
    setTodos(updatedTodos)
  }
  const checkIcon = mutableTodo.completed ? <CheckIcon onClick={toggleCompleted} /> : ''

  return (
    <>
      <li className={classes}>
        <label htmlFor={`todoCheckbox-${todo.id}`}>Completed Checkbox</label>
        <input
          type='checkbox'
          name='completed-checkbox'
          defaultChecked={mutableTodo.completed}
          className='outline-none shadow border-none rounded my-8 py-2 px-3 text-primary bg-secondary w-full'
        />
        <div className='checkbox-border-wrap'>
          <span className='checkbox'>{checkIcon}</span>
          <p>{mutableTodo.content}</p>
        </div>
      </li>
    </>
  )
}
