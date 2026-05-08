import React from 'react'

const InlineEventFunction = () => {
    return (
        <div>
            <h1>1.Inline Event Function</h1>
            <button onClick={
                () => {
                    alert("Hello,How are you ?")
                        , console.log("Button is Clicked");

                }
            }>
                Alert Me
            </button> &nbsp;

            <button onClick={
                function () {
                    alert("We Are you using anonymous function"),
                        console.log("we can you this way also ");

                }
            }>
                Click Me
            </button>

        </div>
    )
}

export default InlineEventFunction
