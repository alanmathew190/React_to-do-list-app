import React from 'react';

function DeleteTasks({ tasks, setTasks, id }) {
    const deleteTasks = () => {
        // Remove the task with the matching id
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <button className="btnaln"onClick={deleteTasks}>Delete Task</button>
    );
}

export default DeleteTasks;

