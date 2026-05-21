import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {

    //! State For Count1
    const [count1, setCount1] = useState(0);
    //! State For Count2
    const [count2, setCount2] = useState(0);


    //! useEffect with dependency array-count1
    useEffect(() => {
        console.log("Count1 changed!!");

    },[count1])

    //! useEffect with dependency array-count1
    useEffect(() => {
        console.log("Count2 Changed!!!")

    },[count2])

    return (
        <div>
            <h1>UseEffect2</h1>
            <h2>Count1:{count1}</h2>
            <button onClick={() => { setCount1(count1 + 1) }}>Increment</button> &nbsp;
            <button onClick={() => { setCount1(count1 - 1) }}>Decrement</button> &nbsp;
            <button onClick={() => { setCount1(0) }}>Reset</button>

            <hr />

            <h2>Count2:{count2}</h2>
            <button onClick={() => { setCount2(count2 + 1) }}>Increment</button> &nbsp;
            <button onClick={() => { setCount2(count2 - 1) }}>Decrement</button> &nbsp;
            <button onClick={() => { setCount2(0) }}>Reset</button>

        </div>
    )
}

export default UseEffect2
