import React, { useState } from 'react'

const WithoutSate = () => {

    let count =0;


    let incrementCount = () => {
       ++count;
    };

    let decrementCount = () => {
        --count;

    };

    let restCount = () => {
       count= 0;

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
