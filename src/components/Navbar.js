// @ts-nocheck
import { useContext } from 'react'
import { ThemeContext } from '../hooks/providers/themeContext'

export const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <>
      {theme==='dark' ? (
        <img src='./images/bg-desktop-dark.jpg' alt='theme header' />
      ) : (
        <img src='./images/bg-desktop-light.jpg' alt='theme header' />
      )}
     
    </>
  )
}
