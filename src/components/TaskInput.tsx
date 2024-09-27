import { KeyboardEvent } from "react";

interface TaskInputProps {
  taskInput: string;
  setTaskInput: (input: string) => void;
  createTask: () => void;
}

const TaskInput = ({ taskInput, setTaskInput, createTask }: TaskInputProps) => {
  const createNewTask = () => {
    createTask();
    const taskSection = document.querySelector(".tasks") as HTMLElement;
    if (taskSection) {
      if (taskSection.offsetHeight >= offsetHeight)
        taskSection.classList.add("overflow");
      else taskSection.classList.remove("overflow");
    }
  };
  const offsetHeight = 300;
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (taskInput.length !== 0) {
        createNewTask();
      } else {
        alert("The task field is blank. Enter a task name and try again.");
      }
    }
  };
  const handleClick = () => {
    if (taskInput.length === 0) {
      alert("The task field is blank. Enter a task name and try again.");
    } else {
      createNewTask();
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
