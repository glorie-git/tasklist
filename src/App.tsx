import { useState, useEffect } from "react";
import Task from "./components/Task.tsx";
import "./App.css";
import TaskInput from "./components/TaskInput.tsx";
import taskService from "./services/tasks.ts";

function App() {
  // constansts declared for input button and task list area
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasksHook = () => {
    taskService
      .getAll()
      .then((response: Task[]) => {
        setTasks(response);
      })
      .catch((error: Error) => {
        console.error("Failed to fetch tasks:", error);
        // Handle the error appropriately
      });
  };

  useEffect(() => {
    fetchTasksHook();
  }, []);

  // the function that creates a new task
  const createTask = () => {
    if (taskInput.length === 0)
      alert("The task field is blank. Enter a task name and try again.");
    else {
      const newTask = { name: taskInput };

      taskService
        .create(newTask)
        .then((response) => {
          setTasks([...tasks, response]);
        })
        .catch((error: Error) => {
          console.log("There was an error adding the new task:", error);
        });
    }
    // clear the task input after adding a task
    setTaskInput("");
  };
  const deleteTask = (id: string) => {
    if (window.confirm(`Are you sure you want to delete the task?`)) {
      const tasksShallowCopy = tasks.filter((task) => task.id !== id);
      taskService
        .deleteTask(id)
        .then(() => {
          setTasks([...tasksShallowCopy]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
            <Task key={index} task={task} deleteTask={deleteTask} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
