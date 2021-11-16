// @ts-nocheck
import { TodoItem } from './TodoItem'
import { TodoFilter } from './TodoFilter'
import { useEffect, useState } from 'react'

export const TodoList = ({ todos, setTodos, filteredTodos, filterStatus, setFilterStatus }) => {
  const [leftTodoCount, setLeftTodoCount] = useState(0)

  useEffect(() => {
    const unCompletedTodos = todos.filter(todo => !todo.completed)
    setLeftTodoCount(unCompletedTodos.length)
  }, [todos])

  const textPlacer = filterStatus === 'completed' ? 'closed task' : 'task'

  const clearCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed))
    setFilterStatus('all')
  }

  return (
    <>
      <section className='bg-white dark:bg-secondary text-primary pb-8 px-8 shadow-lg rounded-lg'>
        {filteredTodos.length < 1 ? (
          <p className='info-text'>There's no {textPlacer}</p>
        ) : (
          <ul className=''>
            {filteredTodos.map(todo => (
              <TodoItem todo={todo} key={todo.id} setTodos={setTodos} todos={todos} />
            ))}
          </ul>
        )}

        <div className='todo-filter-control'>
          <div className='todos-count'>{leftTodoCount} items left</div>

          <div className='control-btn group filter-control-for-desktop'>
            <TodoFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
          </div>

          <div className='control-btn'>
            <button className='btn' onClick={clearCompletedTodos}>
              Clear Completed
            </button>
          </div>
        </div>
      </section>

      {/* For Mobile
      <section className='filter-control-for-mobile'>
        <div className='control-btn group'>
          <TodoFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
        </div>
      </section> */}
    </>
  )
}
