import React from 'react'

const EventWithParameter = () => {

    //! Event With Parameter Function
    let launchRocket = (name) => {
        console.log(`${name} has pressed the wrong person 🚀🚀`);


    }
    return (
        <div>
            <h1>3. Event With Parameter</h1>
            <button onClick={() => launchRocket("poovarasan")}
            >Lunch Rocket 🚀</button>
        </div>
    )
}

export default EventWithParameter

