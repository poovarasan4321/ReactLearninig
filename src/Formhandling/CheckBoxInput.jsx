import React, { useState } from 'react'

const CheckBoxInput = () => {

    //! state for from data
    const [formData, setFormData] = useState({
        skills: [],

    })

    //! Destructing
    let { skills } = formData;


    //! handleInputChange
    let handleInputChange = (e) => {

        let { name, value, checked } = e.target;
        setFormData({
            ...formData, [name]: value
        })
        if (checked) {
            //! Add the skill into the array only if it is checked
            setFormData({ ...formData, skills: [...skills, value] })
        } else {
            //! remove skill  if it is unchecked from the array
            setFormData({
                ...formData, skills: skills.filter((skill) => skill !== value
                )
            })

        }
    }

    //! handleSubmit 
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("skills", formData);
        setFormData({
            skills:[]
        })
    }

    return (
        <div>
            <h1>Check Box Input </h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Skills</label>
                    <input type="checkbox" name='skills' id='skills' onChange={handleInputChange} value={"HTML"} checked={skills.includes("HTML")}/> HTMl
                    <input type="checkbox" name='skills' id='skills' onChange={handleInputChange} value={"CSS"} checked={skills.includes("CSS")}/> CSS
                    <input type="checkbox" name='skills' id='skills' onChange={handleInputChange} value={"JS"} checked={skills.includes("JS")}/> JS
                    <input type="checkbox" name='skills' id='skills' onChange={handleInputChange} value={"Java"} checked={skills.includes("Java")}/> Java
                    <input type="checkbox" name='skills' id='skills' onChange={handleInputChange} value={"React.JS"} checked={skills.includes("React.JS")}/> React.js
                    <input type="checkbox" name='skills' id='skills' onChange={handleInputChange} value={"SQL"} checked={skills.includes("SQL")}/> SQl
                </div>
                <div>
                    <button className='border rounder p-1'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CheckBoxInput
