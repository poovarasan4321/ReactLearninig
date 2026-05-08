import React from 'react'

const InlineEvent = () => {

    let handleClick = (event) => {
        // console.log(event);   //Synthetic Based Event

        // console.log(event.nativeEvent);  // Pointer Event
        
        
    }
    return (
        <div>
            <h1>Inline Event</h1>
            <button onClick={handleClick}>Clik Me</button>
        </div>
    )
}

export default InlineEvent
