import { createContext } from 'react'
import { useState } from 'react'

export const ThemeDataContext = createContext()

export const ThemeContext = (props) => {

const [theme, setTheme] = useState("light")


    return (
        <ThemeDataContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeDataContext.Provider> 
    )
}

export default ThemeContext
