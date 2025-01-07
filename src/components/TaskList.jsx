import React from 'react';

function TaskList({ tasks, toggleTaskCompletion, removeTask }) {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    <span onClick={() => toggleTaskCompletion(index)}>{task.name}</span>
                    <button onClick={() => removeTask(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
