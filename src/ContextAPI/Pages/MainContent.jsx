import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider'

const MainContent = () => {

    let { theme } = useContext(ThemeContext)

    return (
        <div className='w-full h-125 flex justify-center items-center '>
            <aside className={`w-1/4 h-full ${theme ? "bg-black text-white border-2 border-b-white flex justify-center items-center" : "bg-blue-300 "}flex justify-center items-center`}>
                <h1 className='text-2xl font-semibold'>Sidebar</h1>
            </aside>
            <section className={`w-3/4  h-full flex justify-center items-center ${theme ? "bg-black text-white" : " bg-red-300"}`}>
                <h1 className={` ${theme ? "text-white" : "text-red-500"} text-3xl font-semibold`}>Main Content</h1>
            </section>
        </div>
    )
}

export default MainContent
