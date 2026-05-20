import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider';

const NavBar = () => {

    //! Step-3 consume or use the context 
    let data = useContext(ThemeContext);
    console.log(data);

    let { theme, toggleTheme } = data;



    return (
        <div className={`w-full h-20  ${theme ? "bg-black text-white border-2 border-b-white" : "bg-amber-300 "} 
         flex justify-between items-center px-10 shadow-xl`}>
            <aside>
                <h1 className='text-2xl font-semibold '>Navbar Component</h1>
                <h2>{theme ? ("dark") : ("light")}Theme</h2>
            </aside>
            <nav>
                <button onClick={toggleTheme} className={`bg-white ${theme ? "text-red-300":"text-black"} px-8 py-2 rounded text-lg font-semibold cursor-pointer `}>
                    {theme ? ("dark") : ("light")}</button>
            </nav>
        </div>
    )
}

export default NavBar
