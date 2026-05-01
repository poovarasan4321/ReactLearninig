import React from 'react'

const UserDisplay = (props) => {
    let { name, role, salary, address: { city, pincode } } = props.userDetails
    let { displayMsg } = props
    console.log(displayMsg);



    return (
        <>
            <h1>UserDisplay Component</h1>
            <h2>Name:{name}</h2>
            <h2>Salary:{salary}</h2>
            <h2>Role:{role}</h2>
            <h2>City:{city}</h2>
            <h2>Pincode:{pincode}</h2>
            <hr />
            <button onClick={displayMsg} style={{ marginBottom: "20px" }}>Click Me</button>
        </>
    )
}

export default UserDisplay
