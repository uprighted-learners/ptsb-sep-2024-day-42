import React from 'react'

export default function TaskList({ tasks, removeTask }) {
    return (
        <div>
            <ul>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <p>{task}</p>
                        <button
                            onClick={() => removeTask(index)}
                        >
                            REMOVE
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}
