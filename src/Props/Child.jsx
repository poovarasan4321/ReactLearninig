import React from 'react'

//! Here,props = Default Parameter
//* The props default parameter is used to accept all upcoming data from the parent componenet to child component i the form of object 

const Child = (Props) => {
  return (
   <>
    <h1>Child Component</h1> 
    <h2>username :{Props.username}</h2>
    <h2>Age:{Props.age}</h2>
    <h2>Status:{Props.status}</h2>
    <h2>IsMarried:{Props.isMarried}</h2>
    <h2>Child:{Props.isChild}</h2>
      </>

      
  )
}

export default Child
