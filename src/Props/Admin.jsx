import React from 'react'
import User from './User'

const Admin = () => {
    let employee1={
        eName:"poovarasan",
        eAge:20,
        eSalary:30000,
        eRole:"Full Stack Developer"
    }
    let employee2={
        eName:"Rahul",
        eAge:19,
        eSalary:20000,
        eRole:"MERN Stack Developer"
    }
    let employee3={
        eName:"Dniesh",
        eAge:22,
        eSalary:50000,
        eRole:"Java Full Stack Developer"
    }
    let employee4={
        eName:"Arun MS",
        eAge:23,
        eSalary:40000,
        eRole:"python Full Stack Developer"
    }
    let employee5={
        eName:"Kalanithi",
        eAge:24,
        eSalary:1.30000,
        eRole:"Full Stack Developer"
    }
  return (
   <>
    <h1>Admin Component</h1>
    <hr />
    <User employee1={employee1} employee2={employee2} employee3={employee3} employee4={employee4} employee5={employee5}
    />
   </>
  )
}

export default Admin

