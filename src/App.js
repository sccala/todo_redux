// @ts-nocheck
import { DarkModeToggle } from './Button/Toggle';
import { ThemeProvider } from './hooks/providers/themeContext'


function App() {
  return (
    <ThemeProvider initialTheme>
      <div className=''>
        <header className='h-screen bg-check'>
          <p className='text-brightblue'>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <DarkModeToggle />
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App;
