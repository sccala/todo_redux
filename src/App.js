// @ts-nocheck
import { useEffect, useState } from 'react'
import { DarkModeToggle } from './button/Toggle'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { TodoItem } from './components/TodoItem'
import { TodoList } from './components/TodoList'
import { ThemeProvider } from './hooks/providers/themeContext'

const data = [
  { id: 1, content: 'Complete online JavsScript course', completed: true },
  { id: 2, content: 'Jog around the park 3x', completed: false },
  { id: 3, content: '10 minutes meditation', completed: false },
  { id: 4, content: 'Read for 1 hour', completed: false },
  { id: 5, content: 'Pick up groceries', completed: false },
  { id: 6, content: 'Complete Todo App on Frontend Mentor', completed: false }
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
      <Navbar />
      <div className='h-full w-screen bg-primary  -mt-28'>
        <div className='dashboard mx-auto'>
          <div className='flex items-center  justify-between place-items-center'>
            <h1 className=' text-gray-100 font-bold tracking-widest'>TODO</h1>
            <DarkModeToggle />
          </div>
          {/* <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          /> */}
          {/* <TodoItem /> */}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
