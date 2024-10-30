import React, { useState } from "react";

function AddTasks({ addTasks }) {
  const [task, setTask] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      const newTask = { id: Date.now(), text: task };
      addTasks(newTask); 
      setTask(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task"
        value={task} // Use 'task' for value
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add task</button>
    </form>
  );
}

export default AddTasks;
