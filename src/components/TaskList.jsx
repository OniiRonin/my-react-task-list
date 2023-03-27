import React from 'react';
import Task from './Task';

const TaskList = () => {
    const tasks = [
        { id: 1, name: 'Aprender Ingles', completed: false },
        { id: 2, name: 'Revisar Trabajos ADA', completed: false },
        { id: 3, name: 'Trabajo Grupal', completed: true },
        { id: 4, name: 'Pendientes Universidad', completed: false },
    ];

    return (
        <section>
            <h2>Tareas</h2>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </section>
    );
};

export default TaskList;
