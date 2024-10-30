// App.js
import React, { useState } from "react";
import AddTasks from "./components/addTasks";
import DeleteTasks from "./components/deleteTasks";
import MoveTasksUp from "./components/moveTaskUp";
import MoveTasksDown from "./components/moveTaskDown";
import "./App.css";


function App() {
  const [tasks, setTasks] = useState([]);
  const addTasks = (newTask) => {
  setTasks((prevTasks) => [...prevTasks, newTask]);
};
  return (
    <div className="maindiv">
      <h1>To-Do List</h1>
      <AddTasks addTasks={addTasks} />
      <ol>
        {tasks.map((task) => (
           <li key={task.id}>
            <p>{task ? task.text : "No task"}  : </p>
            <DeleteTasks tasks={tasks} setTasks={setTasks} id={task.id} />
            <MoveTasksUp tasks={tasks} setTasks={setTasks} id={task.id} />
            <MoveTasksDown tasks={tasks} setTasks={setTasks} id={task.id} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
