// @ts-nocheck
import { useEffect, useState } from 'react'
import { DarkModeToggle } from './button/Toggle'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { ThemeProvider } from './hooks/providers/themeContext'

const data = [
  { id: 1, content: 'Complete online JavsScript course', completed: true },
  { id: 2, content: 'Jog around the park 3x', completed: false },
  { id: 3, content: '10 minutes meditation', completed: false },
  { id: 4, content: 'Read for 1 hour', completed: false },
  { id: 5, content: 'Pick up groceries', completed: false },
  { id: 6, content: 'Complete Todo App on Frontend Mentor', completed: false },
]

function App() {
  const [todos, setTodos] = useState(data)
  const [filterStatus, setFilterStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)

  useEffect(() => {
    const handleFilter = () => {
      switch (filterStatus) {
        case 'active':
          return setFilteredTodos(todos.filter(todo => !todo.completed))
        case 'completed':
          return setFilteredTodos(todos.filter(todo => todo.completed))
        default:
          return setFilteredTodos(todos)
      }
    }
    handleFilter()
  }, [todos, filterStatus])

  return (
    <ThemeProvider initialTheme>
      <div className='bg-primary mx-auto'>
        <Navbar />
        <div className='h-full dashboard bg-primary -mt-24'>
          <div className='flex justify-between place-items-center'>
            <h1 className='text-gray-100 font-bold tracking-widest'>TODO</h1>
            <DarkModeToggle />
          </div>
          <TodoForm todos={todos} setTodos={setTodos} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
