import React from "react";

function MoveTasksUp({ tasks, setTasks, id }) {
  const moveTaskUp = () => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index > 0) {
      const newTasks = [...tasks]; 
      [newTasks[index - 1], newTasks[index]] = [
        newTasks[index],
        newTasks[index - 1],
      ];
      setTasks(newTasks);
    }
  };

  return (
    <button className="btnaln" onClick={moveTaskUp}>
      Move Up
    </button>
  );
}

export default MoveTasksUp;
