import React, { useState } from 'react'

export default function TaskInput({ addTask }) {
    const [taskName, setTaskName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (taskName.trim() !== "") {
            addTask(taskName)
            setTaskName("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter task name"
            />
            <button type="submit">ADD TASK</button>
        </form>
    )
}
