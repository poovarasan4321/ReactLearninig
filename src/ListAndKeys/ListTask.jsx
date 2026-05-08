import React, { useState } from 'react'

const ListTask = () => {

    const [ToDo, setToDo] = useState([
        "Complete The React JS notes",
        "Revise The javaScript Concepts"
    ])

    let AddTask = () => {

    
        setToDo([...ToDo, "Task-3 ",])
    }

    return (
        <div>
            <h1>Dynamic list task adding demo</h1>

            <ul>

                {ToDo.map((task, index) => {
                    return <li key={index}>{task}</li>
                })}

            </ul>
            <button onClick={AddTask}> Add Task</button>
        </div>
    )
}

export default ListTask