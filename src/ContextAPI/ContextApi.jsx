import React from 'react'
import { createContext } from "react"
import User1 from './User1';
import User2 from './User2';


//& Step-1 Create Context outside of function 

export let UserContext = createContext(null);
// console.log("Context", UserContext);  //* object {consumer , provider}


const ContextApi = () => {



    //! Data  for  provide 
    let userData = {
        name: "John",
        role: "admin",
        access: ["read", "write", "permission"],
        noOfSystem: 2
    }



    //& Step -2 Provide the context by using UserContext

    return (
        <UserContext.Provider value={userData}>
            <User1 /> <User2 />
        </UserContext.Provider>
    )
}

export default ContextApi

