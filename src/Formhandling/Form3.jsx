import React, { useState } from 'react'

const Form3 = () => {
    //^ state for userData
    let [userData, setUserData] = useState({
        username: "",
        email: "",
        gender: "",
        dob:""
    })

    //^ Destructing the userData
    let { username, email, gender ,dob} = userData;

    //& HandleSubmit
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        setUserData({
            username: "",
            email: "",
            gender: "",
            dob:""
        })

    }

    //! handleInputChange
    let handleInputChange = (e) => {
        let { name, value } = e.target;
        setUserData({ ...userData, [name]: value })

    }

    return (
        <div>
            <h1 className='text-center text-bold'>Handling Radio input (gender)</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Username:</label>
                    <input type="text" name="username" id="username" className='border' onChange={handleInputChange} value={username} />
                </div>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" id="email" className='border' onChange={handleInputChange} value={email} />
                </div>
                <div>
                    <label htmlFor="" >Gender</label>
                    <input type="radio" name="gender" id="gender" onChange={handleInputChange} value={"Male"} checked={gender==="Male"} /> Male
                    <input type="radio" name="gender" id="gender" onChange={handleInputChange} value={"Female"} checked={gender==="Female"}/> Female
                    <input type="radio" name="gender" id="gender" onChange={handleInputChange} value={"Others"} checked={gender==="Others"}/> Others
                </div>
                <div>
                    <label htmlFor="">DOB:</label>
                    <input type="date" name="dob" id="dob" onChange={handleInputChange} value={dob}/>
                </div>
                <div>
                    <button className='border rounded p-1'>Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Form3
