import React from 'react'

const Form1 = () => {

    let handleSubmit = (e) => {
        //! handle submit function
        e.preventDefault();
        console.log("Submit Successfully");
    }

    //! handleInputChange
    let handleInputChange=()=>{

    }

    return (
        <div className='w-full h-screen bg-slate-800 text-white flex flex-col justify-center items-center '>

            <h1 className='text-5xl font-bold p-4 '>Form handling in React</h1>

            <form onSubmit={handleSubmit} className='bg-white text-black p-10 w-1/4 rounded-xl scale-120 mt-10' >

                <div>
                    <div className='w-full flex flex-col p-2 gap-2 mb-2 '>
                        <label htmlFor="" className='text-xl font-semibold text-gray-700'>UserName</label>
                        <input type="email" className='outline-none border  border-gray-800 px-1 py-2 rounded-lg' />

                    </div>
                    <div className='w-full flex flex-col p-2 gap-2 mb-2 '>
                        <label htmlFor="" className='text-xl font-semibold text-gray-700'>Password</label>
                        <input type="password" className='outline-none border  border-gray-800 px-1 py-2 rounded-lg' />
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        <button  className='  bg-blue-600 text-white font-semibold  px-20 py-2 rounded cursor-pointer text-lg'>Login</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Form1
