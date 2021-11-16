// @ts-nocheck
import { useState } from 'react'
import { IncompletedIcon } from './CheckIcon'

export const TodoItem = ({ todo, todos, setTodos }) => {
  const [mutableTodo, setMutableTodo] = useState(todo)
  const classes = mutableTodo.completed === true ? 'completed' : ''

  const toggleCompleted = () => {
    setMutableTodo({ ...mutableTodo, completed: !mutableTodo.completed })
    const updatedTodos = todos.map(item =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    )
    setTodos(updatedTodos)
  }
  const checkIcon =
    mutableTodo.completed === true ? <IncompletedIcon onClick={toggleCompleted} /> : ''

  return (
    <>
      <li className={`${classes} py-4`}>
        <label className='hidden' htmlFor={`todoCheckbox-${todo.id}`}>
          Completed Checkbox
        </label>
        <div className='flex '>
          <div className='pt-2 flex'>
            <IncompletedIcon className='mr-2' onClick={checkIcon} />
            <p className=''>{mutableTodo.content}</p>
          </div>
        </div>
      </li>
    </>
  )
}
