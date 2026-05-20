import React, { createContext, useState } from 'react'


//! Step-1 create context for theme

 export let ThemeContext = createContext(null);


//! Step-2 provide the context 


// It should be children don't use suggestion

const ThemeProvider = ({ children }) => {


    //! Theme logic

    let [theme, setTheme] = useState(false)

    //! toggleTheme function
    let toggleTheme = () => {
        setTheme(!theme);
    }

    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>

            {children}

        </ThemeContext.Provider>

    )
}

export default ThemeProvider
