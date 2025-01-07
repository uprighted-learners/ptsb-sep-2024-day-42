import React, { useState } from 'react'
import TaskList from "./components/TaskList"

export default function App() {
    const [tasks, setTasks] = useState(["clean room", "wash dishes", "feed cat", "walk dog", "do homework"])

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h1>TASK LIST:</h1>
            <TaskList tasks={tasks} removeTask={removeTask} />
        </div>
    )
}
