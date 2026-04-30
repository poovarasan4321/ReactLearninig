import React from 'react'

//! 5. Attributes should be written in camelcase
const Rule5 = () => {
  return (
    <div>
      {/* // in javascript */}
      <button onclick="">Click</button>
      {/* // in react js  */}
      <button onclick={()=> alert("Hii Poovarasan")}>Click</button>
    </div>
  )
}

export default Rule5
