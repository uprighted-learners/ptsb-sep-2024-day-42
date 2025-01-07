import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([
        { name: 'Task 1', completed: false },
        { name: 'Task 2', completed: true },
        { name: 'Task 3', completed: false },
    ]);

    const addTask = (taskName) => {
        setTasks([...tasks, { name: taskName, completed: false }]);
    };

    const toggleTaskCompletion = (index) => {
        console.log(index);

        // DO YOUR WORK HERE
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <TaskInput addTask={addTask} />
            <TaskList
                tasks={tasks}
                toggleTaskCompletion={toggleTaskCompletion}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
