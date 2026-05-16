import React, { useRef } from 'react'

const FormUncontrolled = () => {

    //& Create references for email
    let emailRef = useRef();

    //& Create references fro password
    let passwordRef = useRef();

    //& HandleSubmit
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Email",emailRef.current.value);
        console.log("password",passwordRef.current.value);
        console.log({email:emailRef.current.value,
            password:passwordRef.current.value
        });
        
    }

    return (
        <div className='flex flex-col  justify-center items-center gap-2'>
            <h1>Uncontrolled Form</h1>
            <form action="" onSubmit={handleSubmit} className='text-center p-4 rounded bg-gray-500 text-white border rounder border-amber-300 flex flex-col gap-5'>
                <div>
                    <label htmlFor="" className='text-bolder text-3xl'>Email:</label>
                    <input type="email" ref={emailRef} className='border rounded p-2' />
                </div>
                <div>
                    <label htmlFor="" className='text-bolder text-3xl'>Password:</label>
                    <input type="password" ref={passwordRef} className='border rounded p-2' />
                </div>
                <div>
                    <button className='border rounded p-4 text-2xl text-bolder bg-red-500'>
                        Login User
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormUncontrolled
