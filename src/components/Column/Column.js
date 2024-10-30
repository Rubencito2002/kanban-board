import React from 'react';
import TaskCard from '../TaskCard/TaskCard';

const Column = ({ title, tasks, updateTaskStatus, deleteTask }) => {
    return (
        <div className="col-md-4">
            <div className="card border-0 shadow mb-4">
                <div className="card-header bg-primary text-white text-center">
                    <h5>{title}</h5>
                </div>
                <div className="card-body" style={{ minHeight: "400px", backgroundColor: "#f8f9fa" }}>
                    {tasks.map(task => (
                        <TaskCard key={task.id} task={task} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Column;
