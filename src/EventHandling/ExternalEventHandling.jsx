import React from 'react'

const ExternalEventHandling = () => {

    //! Seperate Event Handler Function

    let greetUser =()=>{
        console.log("Iam Learning react js");
        
    }

    return (
        <div>
            <h1>2. External Event Handling Function</h1>
            <button onClick={greetUser}>Greet Me</button>
        </div>
    )
}

export default ExternalEventHandling
