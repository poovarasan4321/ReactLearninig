import React from 'react'

const Childcomponent = (props) => {

    console.log(props);
    

    return (

        <div>

            <h1>Child Component</h1>
            {props.children}

        </div>
    )
}

export default Childcomponent
