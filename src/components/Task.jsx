import React from 'react';

const Task = ({ task }) => {
    const handleChange = (event) => {
        console.log(event.target.checked);
    };

    return (
        <div>
            <input type="checkbox" checked={task.completed} onChange={handleChange} />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
        </div>
    );
};

export default Task;
