import React, { useState } from 'react'

export default function App() {
    const [tasks, setTasks] = useState(["clean room", "wash dishes", "feed cat"])

    return (
        <div>
            <h1>TASK LIST:</h1>
            <ul>
                {tasks.map((task, index) =>
                    <li key={index}>{task}</li>
                )}
            </ul>
        </div>
    )
}
