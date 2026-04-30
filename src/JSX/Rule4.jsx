import React from 'react'
//! Use JSX  expression 
//* If we want to access or write the javascript scode into the jsx we will use JSX and it's represented by  -->{} 
//* And it is represented by --> {}

//! special note : In JSX expression only expression are allowed not the statement
//* if-else ,switch  => Ternary Operator
//^ for loop => map(),filter(),reduce()
const Rule4 = () => {
    const username ="john";
    const age = 20;
  return (
    <div>
      <h1>{username}</h1>
      <h2>{age}</h2>
    </div>
  )
}

export default Rule4
