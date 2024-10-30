
function MoveTaskDown({ tasks, setTasks, id }) {
  const moveTaskDown = () => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index + 1], newTasks[index]] = [
        newTasks[index],
        newTasks[index + 1],
      ];
      setTasks(newTasks);
    }
  };

  return (
    <button className="btnaln" onClick={moveTaskDown}>
      Move Down
    </button>
  );
}

export default MoveTaskDown;
