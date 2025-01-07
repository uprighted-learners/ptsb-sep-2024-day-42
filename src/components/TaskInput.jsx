import React, { useState } from 'react';

function TaskInput({ addTask }) {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim()) {
            addTask(taskName);
            setTaskName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskInput;
