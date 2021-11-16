// @ts-nocheck
import { useContext } from 'react'
import { ThemeContext } from '../hooks/providers/themeContext'

export const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <>
    {theme === 'dark' ? (
        <img src='./images/bg-desktop-dark.jpg' alt='theme header' className='bg-contain' />
      ) : (
        <img src='./images/bg-desktop-light.jpg' alt='theme header' className='bg-contain' />
      )} 
       
      <div className='bg-light sm:bg-light-mobile dark:bg-dark dark:sm:bg-dark-mobile bg-contain' />

      
    </>
  )
}
