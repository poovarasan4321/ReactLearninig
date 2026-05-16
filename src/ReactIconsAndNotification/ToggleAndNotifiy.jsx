import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

const ToggleAndNotifiy = () => {


    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("sucess");

    }

    return (
        <div className='w-full h-screen bg-green-400 flex flex-col justify-center items-center gap-10'>

            <h1 className='text-3xl font-semibold font-mono'>Toggle and Notification</h1>

            <form action="" onSubmit={handleSubmit}
                className='  border-3 border-amber-500 rounder-lg bg-blue-500 w-1/4   px-8 py-10 shadow-2xl flex flex-col gap-5'>

                <div
                    className='w-full flex flex-col gap-2 relative'>
                    <label
                        htmlFor=""
                        className='text-xl text-white text-bolder'>
                        UserName:</label>

                    <input
                        type="text"
                        className='p-2 block outline-none pl-8 py-1 px-2 border border-white text-red-500 caret-red-500' />
                    <span
                        className=' text-white text-2xl absolute top-10 left-1 '>
                        <FaUserPlus />
                    </span>
                </div>

                <div
                    className='w-full flex flex-col gap-2 relative'>
                    <label
                        htmlFor=""
                        className='text-xl p-2 text-white text-bolder '>Password</label>
                    <input
                        type="password" className='block outline-none py-1 pl-8 px-2 border border-white text-red-500 caret-red-500 w-full' />
                    <span className='text-white text-2xl absolute top-14 left-1'><CiLock /></span>

                </div>
                <div
                    className='w-full justify-center items-center'>
                    <button
                        className='block outline-none py-1 px-2 border border-violet-600 text-white caret-red-500 bg-violet-600 hover:bg-violet-900 hover:cursor-pointer w-full'>
                        Login User
                    </button>
                </div>

            </form>
        </div>
    )
}

export default ToggleAndNotifiy
