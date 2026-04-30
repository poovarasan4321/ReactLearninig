import React from 'react'
import Child from './Child'


const Parent = () => {
    return (
        <>
            <h1>Parent Component</h1>
            <hr />
            <Child
                username={"Poovarasan"}
                age={20}
                status={true}
                isMarried={null}
                isChild={undefined}
            />
        </>
    )
}

export default Parent
