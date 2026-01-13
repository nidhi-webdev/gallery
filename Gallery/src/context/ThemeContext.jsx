import { createContext } from 'react'

export const ThemeDataContext = createContext()

export const ThemeContext = (props) => {
    return (
        <ThemeDataContext value="Nidhi">
            {props.children}
        </ThemeDataContext> 
    )
}

export default ThemeContext
