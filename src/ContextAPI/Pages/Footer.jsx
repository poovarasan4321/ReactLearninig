import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider'

const Footer = () => {

    let { theme } = useContext(ThemeContext);


    return (
        <div className={`w-full h-[calc(100vh - 580px)] ${theme ? "bg-black text-white  border border-white" : " bg-teal-300"}`}>
            <h1 className='text-2xl font-semibold'>Footer</h1>
        </div>
    )
}

export default Footer
