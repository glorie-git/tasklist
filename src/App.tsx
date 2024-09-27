import { useState, useRef, useEffect } from "react";
import Task from "./components/Task.tsx";
import "./App.css";
import TaskInput from "./components/TaskInput.tsx";
import taskService from "./services/tasks.ts";

interface Task {
  id: number;
  name: string;
}

function App() {
  // constansts declared for input button and task list area
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const taskCount = useRef<number>(0);

  // [] means we only want the effect to run during the first render
  useEffect(() => {
    taskService
      .getAll()
      .then((response: Task[]) => {
        setTasks(response);
      })
      .catch((error: Error) => {
        console.error("Failed to fetch tasks:", error);
        // Handle the error appropriately
      });
  }, []);

  // the function that creates a new task
  const createTask = () => {
    if (taskInput.length === 0)
      alert("The task field is blank. Enter a task name and try again.");
    else {
      const task: Task = {
        id: taskCount.current,
        name: taskInput,
      };
      setTasks([...tasks, task]);
      taskCount.current += 1;
    }
    // clear the task input after adding a task
    setTaskInput("");
  };
  const deleteTask = (id: number) => {
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
