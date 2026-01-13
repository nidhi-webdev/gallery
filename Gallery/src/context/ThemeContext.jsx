import { createContext } from 'react'

export const ThemeDataContext = createContext()

export const ThemeContext = (props) => {
    return (
        <ThemeDataContext>
            {props.children}
        </ThemeDataContext> 
    )
}

export default ThemeContext
