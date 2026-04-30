import React from 'react'
import Child1 from './Child1'

const Parent1 = () => {
    return (

        //! Property

        <>
            <h1>Parent1 Component</h1>
            <hr />
            <Child1 
            username="poovarasan"
            age={20}
            role={"Admin"}
            skills={["HTML","CSS","Js","Tailwind CSS"]}

            />
        </>

    )
}

export default Parent1
