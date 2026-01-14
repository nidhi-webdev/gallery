import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)
 
    const changeTheme = () => {
        setTheme("dark")
        
    }


  return (
    <div>
      <button onClick={changeTheme} className='bg-gray-600 m-3 px-4 py-2 rounded'> Change Theme </button>
    </div>
  )
}

export default Button
