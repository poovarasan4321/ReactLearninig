import React from 'react'

const PreventDefault = () => {



    //! This Method is used to prevent the default behaviour of form to reload the page.
    //! It will stop reloading the page after submission of the from.
    //? syntax : e.preventDefault();
    
    
    let handleForm = (e) => {
        e.preventDefault();
        console.log("Form submitted successfully");

    }


    return (
        <div>
            <h1>e.preventDefault(); Demo</h1>
            <form action="" onSubmit={handleForm}>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="text" name="" id="" />

                </div>
                <br />
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="text" name="" id="" />
                </div>
                <br />
                <div>
                    <button >Login</button>
                </div>
            </form>
        </div>
    )
}

export default PreventDefault
