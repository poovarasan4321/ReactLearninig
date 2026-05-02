import React, { useState } from 'react'

const WithoutSate = () => {


    //! let or const [variable,setState] = useState(initial_value)
        // count= store values
        // setState=updateValue
        // useState() = initial value

    //* useState returns an array:
    //* [currentState, functionToUpdateState]


    const [count, setState] = useState(0)

    let incrementCount = () => {
        setState(count + 1);
    };

    let decrementCount = () => {
        setState(count - 1);

    };

    let restCount = () => {
        setState(0);

    }

    return (

        <div>
            <h1>WithoutSate</h1>
            <h2>Count :{count}</h2>
            <button onClick={incrementCount}>Increment</button> &nbsp;
            <button onClick={decrementCount}>Decrement</button> &nbsp;
            <button onClick={restCount}>Reset</button> &nbsp;

        </div>

    )
}

export default WithoutSate
