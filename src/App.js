// @ts-nocheck
import { Dashboard } from './components/Dashboard';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './hooks/providers/themeContext'


function App() {
  return (
    <ThemeProvider initialTheme>
      <div className='h-screen w-screen bg-primary'>
        <Navbar />
        <Dashboard />
       
      </div>
    </ThemeProvider>
  )
}

export default App;
