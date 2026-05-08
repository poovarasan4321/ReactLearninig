import React from 'react'

const IfElseRendering = () => {


    //! If-else are statement is nor allow in jsx 
    //! if else will return the jsx

    let isHungry = true;

    if (isHungry) {
        return (
            <div>
                <h1>Go and eat pizza🍕</h1>
            </div>
        )
    } else {
        return <h1>Go and slepp</h1>
    }



}

export default IfElseRendering
