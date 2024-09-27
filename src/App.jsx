import { useState, useRef } from "react";
import Task from "./components/Task";
import "./App.css";
import TaskInput from "./components/TaskInput";

function App() {
  // constansts declared for input button and task list area
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const taskCount = useRef(0);
  // the function that creates a new task
  const createTask = () => {
    if (taskInput.length === 0)
      alert("The task field is blank. Enter a task name and try again.");
    else {
      // this block inserts HTML that creates each task into the task area div element
      const task = {
        id: taskCount.current,
        name: taskInput,
      };
      setTasks([...tasks, task]);
      taskCount.current += 1;
    }
    // clear the task input after adding a task
    setTaskInput("");
  };
  const deleteTask = (id) => {
    if (window.confirm(`Are you sure you want to delete the task?`)) {
      const tasksShallowCopy = tasks.filter((task) => task.id !== id);
      setTasks(tasksShallowCopy);
    }
    taskCount.current -= 1;
  };

  return (
    <>
      <div className="container">
        <h1 id="head-text">Task List</h1>
        <div id="newtask">
          <TaskInput
            taskInput={taskInput}
            setTaskInput={setTaskInput}
            createTask={createTask}
          />
        </div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <Task
              key={index}
              id={task.id}
              task={task.name}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
