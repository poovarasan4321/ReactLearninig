import React, { useState } from 'react'
const Form2 = () => {

    //^ state for 
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    //^ handleInputChange
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value })

    }

    //^ handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data", formData);
        console.log("Form Submitted ✔");
        setFormData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        })

    }


    return (
        <div>
            <h1 >Form With One Object </h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2'>
                    <div>
                        <label htmlFor="">UserName:</label>
                        <input type="text" className='border rounded' name="username" id="username" onChange={handleInputChange} value={formData.username} />
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                        <input type="email" className='border rounded' name="email" id="email" onChange={handleInputChange} value={formData.email} />
                    </div>
                    <div>
                        <label htmlFor="">Password:</label>
                        <input type="password" className='border rounded' name="password" id="password" onChange={handleInputChange} value={formData.password} />
                    </div>
                    <div>
                        <label htmlFor="">ConfirmPassword:</label>
                        <input type="password" className='border rounded' name="confirmPassword" id="confirmPassword" onChange={handleInputChange} value={formData.confirmPassword} />
                    </div>
                    <div>
                        <button className='border rounded p-2 bg-red-400 text-white'>Create Account</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form2
