import React from 'react'

const Child1 = ({username,age,role,skills}) => {

    //! Destructing of an object (props)
    //* One Way

    // let { username, age } = Props;

    //* Second Way
    //! Directly -- in function recommended way
    // Const Child1 = ({username,age})=>{} 

    return (
        <>
            <h1>Child1 Component ✔</h1>
            <h2>{username}</h2>
            <h2>{age}</h2>
            <h2>{role}</h2>
            <ol>
                <li>{skills[0]}</li>
                <li>{skills[1]}</li>
                <li>{skills[2]}</li>
                <li>{skills[3]}</li>
            </ol>
        </>
    )
}

export default Child1
