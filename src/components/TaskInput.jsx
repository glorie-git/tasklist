const TaskInput = ({ taskInput, setTaskInput, createTask }) => {
  const offsetHeight = 300;
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      if (taskInput.length !== 0) {
        createTask();
        const taskSection = document.querySelector(".tasks");
        taskSection.offsetHeight >= 300
          ? taskSection.classList.add("overflow")
          : taskSection.classList.remove("overflow");
      } else {
        alert("The task field is blank. Enter a task name and try again.");
      }
    }
  };
  const handleClick = () => {
    if (taskInput.length === 0) {
      alert("The task field is blank. Enter a task name and try again.");
    } else {
      createTask();
      const taskSection = document.querySelector(".tasks");
      console.log(taskSection);
      taskSection.offsetHeight >= 300
        ? taskSection.classList.add("overflow")
        : taskSection.classList.remove("overflow");
    }
  };
  return (
    <>
      <input
        value={taskInput}
        id="task-input"
        type="text"
        placeholder="Add a task"
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
      />
      <button id="push" onClick={handleClick}>
        Add
      </button>
    </>
  );
};

export default TaskInput;
