import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    // useEffect(()=>{},[dependency array])

    let [count, setCount] = useState(0);



    //! without dependency 
    //& if you not pass the empty denpendency - [] array useeffect will run for each and every component re-rendering
    //* it will execute again and again because of state and props changing in the component
    useEffect(() => {
        console.log("count is changed");

    })


    //!
    //* if you can pass the -- [] empty dependency array useEffect will run only once. 

    useEffect(() => {
        console.log("Componentrendered successfully ");
        console.log("component mounted");


    }, [])
    return (
        <div>
            <h1>UseEffect() hook demo without dependency array</h1>
            <h2>Count:{count}</h2>
            <button onClick={() => { setCount(count + 1) }}>Increment</button> &nbsp;
            <button onClick={() => { setCount(count - 1) }}>Decrement</button> &nbsp;
            <button onClick={() => { setCount(0) }}>Reset</button>

        </div>

    )
}


export default UseEffect1
