import React from 'react'
import { useContext } from 'react'
import { UserContext } from './ContextApi';

const User1 = () => {


    //^ Step - 3 use or consume the context
    let dataComingFromContext = useContext(UserContext);
    console.log(dataComingFromContext);

    let { name, role, access, noOfSystem } = dataComingFromContext;

    return (
        <div>
            <h2>Name: <strong>{name}</strong></h2>
            <h2>Role: <strong>{role}</strong></h2>
            <h2>No Of System <button>{noOfSystem}</button></h2>
            <ol>
                {access.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ol>
        </div>
    )
}

export default User1
