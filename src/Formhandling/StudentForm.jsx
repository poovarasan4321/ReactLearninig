import React, { useState } from 'react'
import StudentDisplay from './StudentDisplay';

const StudentForm = () => {


    //! state for student data -- collection
    const [studentData, setStudentData] = useState([]);


    //! state form fro student from
    const [fromData, setFormdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmPassword: "",
        gender: "",
        dob: "",
        skills: [],
        city: "",
        address: "",

    })

    //! destructure the state
    let { firstName, lastName, email, phonenumber, password, confirmPassword, gender, dob, skills, address, city } = fromData;

    //^ handleInputChange
    let handleInputChange = (e) => {
        let { name, value, checked, type } = e.target;
        if (type === "checkbox") {
            if (checked) {
                setFormdata({
                    ...fromData, skills: [...skills, value]
                })
            } else {
                setFormdata({
                    ...fromData, skills: skills.filter((skill) => skill !== value)
                })
            }
        } else {
            setFormdata({
                ...fromData, [name]: value
            })
        }

    }


    //^ handleSubmit
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(fromData);

        setFormdata({
            firstName: "",
            lastName: "",
            email: "",
            phonenumber: "",
            password: "",
            confirmPassword: "",
            gender: "",
            dob: "",
            skills: [],
            city: "",
            address: "",
        })
        //^ add the from data inside the array called as studentData
        setStudentData([...studentData, fromData])

    }


    return (
        <div>
            <div>
                <h1 className='text-center text-bold text-blue-500 text-5xl uppercase  '>student form </h1>

                <form
                    action=""
                    onSubmit={handleSubmit}
                    className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-xl rounded-xl space-y-4 mb-5 mt-3 border-2 border-amber-400"
                >
                    <div className="grid grid-cols-2 gap-4">

                        <div className="flex flex-col text-bold text-blue-800">
                            <label className='text-semibold'>firstName:</label>
                            <input
                                type="text"
                                name='firstName'
                                id='firstName'
                                value={firstName}
                                onChange={handleInputChange}
                                className='border rounded px-3 py-2'
                            />
                        </div>

                        <div className="flex flex-col text-bold text-blue-800">
                            <label>LastName:</label>
                            <input
                                type="text"
                                name='lastName'
                                value={lastName}
                                onChange={handleInputChange}
                                className='border rounded px-3 py-2'
                            />
                        </div>

                        <div className="flex flex-col text-bold text-blue-800">
                            <label>Email:</label>
                            <input
                                type="email"
                                name='email'
                                value={email}
                                onChange={handleInputChange}
                                className='border rounded px-3 py-2'
                            />
                        </div>

                        <div className="flex flex-col" text-bold text-blue-800>
                            <label>PhoneNumber:</label>
                            <input
                                type="tel"
                                name='phonenumber'
                                value={phonenumber}
                                onChange={handleInputChange}
                                className='border rounded px-3 py-2'
                            />
                        </div>

                        <div className="flex flex-col text-bold text-blue-800">
                            <label>Password</label>
                            <input
                                type="password"
                                name='password'
                                value={password}
                                onChange={handleInputChange}
                                className='border rounded px-3 py-2'
                            />
                        </div>

                        <div className="flex flex-col" text-bold text-blue-800>
                            <label>ConfirmPassword</label>
                            <input
                                type="password"
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={handleInputChange}
                                className='border rounded px-3 py-2'
                            />
                        </div>

                    </div>

                    <div>
                        <label className="font-semibold text-bold text-blue-800">Gender:</label>
                        <div className="flex gap-4 mt-2">
                            <label>
                                <input
                                    type="radio"
                                    name='gender'
                                    value={"Male"}
                                    onChange={handleInputChange}
                                    checked={fromData.gender === "Male"}
                                /> Male
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name='gender'
                                    value={"Female"}
                                    onChange={handleInputChange}
                                    checked={fromData.gender === "Female"}
                                /> Female
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name='gender'
                                    value={"Others"}
                                    onChange={handleInputChange}
                                    checked={fromData.gender === "Others"}
                                /> Others
                            </label>
                        </div>
                    </div>

                    <div>
                        <label>DOB:</label>
                        <input
                            type="date"
                            name='dob'
                            value={dob}
                            onChange={handleInputChange}
                            className="border rounded px-3 py-2 ml-2"
                        />
                    </div>

                    <div>
                        <label className="font-semibold text-bold text-blue-800">skills</label>

                        <div className="flex flex-wrap gap-4 mt-2">
                            <label>
                                <input
                                    type="checkbox"
                                    name='skills'
                                    value="HTML"
                                    onChange={handleInputChange}
                                    checked={fromData.skills.includes("HTML")}
                                /> HTML
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    name='skills'
                                    value="CSS"
                                    onChange={handleInputChange}
                                    checked={fromData.skills.includes("CSS")}
                                /> CSS
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    name='skills'
                                    value="JS"
                                    onChange={handleInputChange}
                                    checked={fromData.skills.includes("JS")}
                                /> JS
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    name='skills'
                                    value="REACT.JS"
                                    onChange={handleInputChange}
                                    checked={fromData.skills.includes("REACT.JS")}
                                /> REACT.JS
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    name='skills'
                                    value="JAVA"
                                    onChange={handleInputChange}
                                    checked={fromData.skills.includes("Java")}
                                /> JAVA
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    name='skills'
                                    value="SQL"
                                    onChange={handleInputChange}
                                    checked={fromData.skills.includes("SQL")}
                                /> SQL
                            </label>
                        </div>
                    </div>

                    <div >
                        <label>city</label>

                        <select
                            name="city"
                            value={city}
                            onChange={handleInputChange}
                            id="city"
                            className='border rounded px-3 py-2 ml-2'
                        >
                            <option value="">--select city----</option>
                            <option value="vellore">Vellore</option>
                            <option value="thuraiyur">thuraiyur</option>
                            <option value="chennai">chennai</option>
                            <option value="trichy">trichy</option>
                        </select>
                    </div>

                    <div className=" text-bold text-blue-800 flex flex-col">
                        <label>Address:</label>

                        <textarea
                            name='address'
                            value={address}
                            onChange={handleInputChange}
                            className='border rounded px-3 py-2'
                        />
                    </div>

                    <div className="text-center text-bold text-blue-800">
                        <button className='bg-blue-500 text-white px-5 py-2 rounded hover:cursor-pointer hover:bg-blue-600'>
                            Submit Form
                        </button>
                    </div>
                </form>
            </div>
            <hr />
            <StudentDisplay studentData={studentData} setStudentData={setStudentData} />
        </div>

    )
}

export default StudentForm