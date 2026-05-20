import React, { useContext } from 'react'
import { UserContext } from './ContextApi'

const User2 = () => {

let data = useContext(UserContext);

let {name,role,access,noOfSystem} = data;

  return (
    <div>
        <hr />
        <h2>Name: <strong>{name}</strong></h2>
        <h2>Role: <strong>{role}</strong></h2>
        <h2>No Of System <button>{noOfSystem}</button></h2>
        <ol>
            {access.map((value,index)=>{
                return <li key ={index}>{value}</li>
            })}
        </ol>
    </div>
  )
}

export default User2
