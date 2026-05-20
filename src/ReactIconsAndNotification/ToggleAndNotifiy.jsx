import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import toast from 'react-hot-toast';
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';


const ToggleAndNotifiy = () => {


    const [showPassword, setShowPassword] = useState(false);

    let eye = () => {
        setShowPassword(!showPassword)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("success");
        toast.success("Form Submitted Successfully")
        // toast.error("SomeThing went wrong")

    }

    return (
        <div className='w-full h-screen bg-yellow-500 flex flex-col justify-center items-center gap-10'>

            <h1 className='text-3xl font-semibold font-mono'>Toggle and Notification</h1>

            <form action="" onSubmit={handleSubmit}
                className='  border-2 rounded-xl border-amber-500 rounder-lg bg-blue-500 w-1/4   px-8 py-10 shadow-black flex flex-col gap-5'>

                <div
                    className='w-full flex flex-col gap-2 relative'>
                    <label
                        htmlFor=""
                        className='text-xl text-white text-bolder'>
                        UserName:</label>

                    <input
                        type="text"
                        className='p-2 block outline-none rounded pl-8 py-1 px-2 border border-white text-red-950 caret-red-500' />
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
                        //^ with the help of state
                        type={showPassword ? "text" : "password"}
                        // type="password"
                        id="password"
                        className='block outline-none py-1 pl-8 px-2 border border-white rounded text-red-950 caret-red-500 w-full' />
                    <span className='text-white text-2xl absolute top-14 left-1'><CiLock /></span>
                    <span onClick={eye}
                        className='absolute text-white right-2 top-15 cursor-pointer '>
                        <FaEye />
                    </span>

                </div>
                <div
                    className='w-full justify-center items-center'>
                    <button
                        className='block rounded outline-none py-1 px-2 border border-violet-600 text-white caret-red-500 bg-violet-600 hover:bg-violet-900 hover:cursor-pointer w-full'>
                        Login User
                    </button>
                </div>

            </form>
        </div>
    )
}

export default ToggleAndNotifiy
