import React, { useState } from 'react';
import Column from '../Column/Column';

const initialTasks = [
    { id: 1, title: "Tarea 1", description: "Descripción de la tarea 1", status: "todo" },
    { id: 2, title: "Tarea 2", description: "Descripción de la tarea 2", status: "inProgress" },
    { id: 3, title: "Tarea 3", description: "Descripción de la tarea 3", status: "done" },
];

const Board = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState({ title: "", description: "", status: "todo" });

    const addTask = () => {
        if (!newTask.title || !newTask.description) return;
        const newTaskId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
        const task = { id: newTaskId, ...newTask };
        setTasks([...tasks, task]);
        setNewTask({ title: "", description: "", status: "todo" }); // Reinicia el formulario
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const updateTaskStatus = (id, newStatus) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
    };

    return (
        <div className="container my-4">
            {/* Formulario para agregar nueva tarea */}
            <div className="card p-3 mb-4 shadow">
                <div className="row g-3">
                    <div className="col-md-4">
                        <input
                            type="text"
                            placeholder="Título"
                            className="form-control"
                            value={newTask.title}
                            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            placeholder="Descripción"
                            className="form-control"
                            value={newTask.description}
                            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                        />
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-select"
                            value={newTask.status}
                            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                        >
                            <option value="todo">Por Hacer</option>
                            <option value="inProgress">En Progreso</option>
                            <option value="done">Completado</option>
                        </select>
                    </div>
                    <div className="col-md-1 d-grid">
                        <button className="btn btn-primary" onClick={addTask}>Añadir</button>
                    </div>
                </div>
            </div>

            {/* Columnas de tareas */}
            <div className="row">
                <Column title="Por Hacer" tasks={tasks.filter(task => task.status === "todo")} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
                <Column title="En Progreso" tasks={tasks.filter(task => task.status === "inProgress")} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
                <Column title="Completado" tasks={tasks.filter(task => task.status === "done")} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
            </div>
        </div>
    );
};

export default Board;
