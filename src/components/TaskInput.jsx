const TaskInput = ({ taskInput, setTaskInput, createTask }) => {
  return (
    <>
      <input
        value={taskInput}
        id="task-input"
        type="text"
        placeholder="Add a task"
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") createTask();
        }}
      />
      <button id="push" onClick={createTask}>
        Add
      </button>
    </>
  );
};

export default TaskInput;
