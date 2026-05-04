import React from 'react'
import { useState } from 'react';

const Counter = () => {


    //! let or const [variable,setState] = useState(initial_value)
    // count= store values
    // setState=updateValue
    // useState() = initial value

    // * useState returns an array:
    // * [currentState, functionToUpdateState]

    //! Sir tells 
    //^ State : state is used to store and manage the data for functional based component in react js
    //^ useState() --> it will return [undefined,f]
    //^ State for variable
    //^ setState -- > function for updation 


    const [count, setState] = useState(0)


    let incrementCount = () => {
        setState(count + 1);
    };

    let decrementCount = () => {
        if (count > 0) {
            setState(count - 1);
        }

    };

    let restCount = () => {
        setState(0);

    }
    return (
        <div>

            <h2>Count :{count}</h2>
            <button onClick={incrementCount}>Increment</button> &nbsp;
            <button onClick={decrementCount}>Decrement</button> &nbsp;
            <button onClick={restCount}>Reset</button> &nbsp;

        </div>
    )
}

export default Counter