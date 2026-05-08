import React from 'react'

const ListRendering1 = () => {
    let skills=["React","Java","Python","Sql","Web Tech","Angular","Devops"]
    return (
        <div>
            <h1>List Rendering In React JS</h1>
            <ol>
                {skills.map((skill,index)=>{
                    return <li key={index}>{skill}</li>

                })}
            </ol>
        </div>
    )
}

export default ListRendering1
