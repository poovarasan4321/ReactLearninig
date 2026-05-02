import React from 'react'
import Childcomponent from './Childcomponent'

//! Props .Children
const ParentComponent = () => {
    return (
        <div>
            <h1>Parent Component</h1>
            <hr />
            <Childcomponent>


                <h1>Hello Child Element</h1>
                <p>Iam Coming From Child Opening and Closing tag</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                </ul>
                
            </Childcomponent>
        </div>
    )
}

export default ParentComponent
