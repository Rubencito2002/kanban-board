import React from 'react';

const TaskCard = ({ task, updateTaskStatus, deleteTask }) => {
    const handleStatusChange = (e) => {
        updateTaskStatus(task.id, e.target.value);
    };

    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-title text-primary">{task.title}</h5>
                <p className="card-text">{task.description}</p>
                <select className="form-select mb-2" value={task.status} onChange={handleStatusChange}>
                    <option value="todo">Por Hacer</option>
                    <option value="inProgress">En Progreso</option>
                    <option value="done">Completado</option>
                </select>
                <button className="btn btn-danger btn-sm mt-2 w-100" onClick={() => deleteTask(task.id)}>Eliminar</button>
            </div>
        </div>
    );
};

export default TaskCard;
