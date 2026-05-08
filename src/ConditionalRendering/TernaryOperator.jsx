import React from 'react'

const TernaryOperator = () => {
    let isLoggedIn = true;

    //? ternary Operator {condition ? (if):(else)}

    return (
        <div>
            <h1>Ternary Operator</h1>

            {isLoggedIn == true ?
                (
                    <h1>Welcome Back User!</h1>
                ) : (
                    <h1>Go and Register yourself</h1>)
            }
        </div>
    )
}

export default TernaryOperator
