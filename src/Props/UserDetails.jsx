import React from 'react'
import UserDisplay from './UserDisplay';

const UserDetails = () => {
    const userDetails = {
        name: "john",
        salary: 2000,
        role: "Admin",
        address: {
            city: "chennai",
            pincode: 632106
        }
    };

    //! Function How To Pass  asa a Props in parent to child  

    let displayMsg = () => {

        let userInput = confirm("Are you really interseted to learn react.js")
        if (userInput === true) {
            alert("Ok,Then why You People are  Not Responding ? ")
        } else {
            alert("ThankYou For Your replay ")
        }
    }


    return (
        <>
            <h1>UserDetails Component</h1>
            <hr />
            <UserDisplay
                userDetails={userDetails}
                displayMsg={displayMsg}
            />
        </>
    )
}

export default UserDetails
