import { createContext } from 'react'

export const ThemeDataContext = createContext()

export const ThemeContext = (props) => {
    return (
        <ThemeDataContext.Provider value="Nidhi">
            {props.children}
        </ThemeDataContext.Provider> 
    )
}

export default ThemeContext
