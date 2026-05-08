import React, { useState } from 'react'

const ThemeSwitcher = () => {
    let [theme, setTheme] = useState(true);

    let themeToggle = () => {
        setTheme(!theme);
    }

    return (
        <div
            style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                width: "100%",
                height: "100vh",
                backgroundColor: theme == true ? "white" : "black",
                color: theme == true ? "black" : "wheat",
            }}
        >
            <h1>Light and Dark Theme Demo by using ternary TernaryOperator</h1>
            <h1>{theme == true ? (<h1>light theme</h1>) : (<h1>Dark theme</h1>)}</h1>
            <button style={{ padding: "20px" }} onClick={themeToggle}>Switch To {theme == true ? "dark" : "light"} Mode</button>
        </div>
    )
}

export default ThemeSwitcher
