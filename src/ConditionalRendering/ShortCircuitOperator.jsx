import React from 'react'

const ShortCircuitOperator = () => {

    let arr = [
        "vijay",
        "ajith",
        "poovarasan"
    ]

    return (
        <div>
            <h1>Conditional Rendering By Using Short Circuit Operator (&&)</h1>

            {arr.length > 0 && (
                <ul>
                    {arr.map((hero, index) => {
                        return <li key={index}>{hero}</li>

                    })}
                </ul>
            )}
        </div>
    )
}

export default ShortCircuitOperator
