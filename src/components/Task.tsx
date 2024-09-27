import { useState } from "react";

interface Task {
  id: string;
  name: string;
}

interface TaskProps {
  task: Task;
  deleteTask: (input: string) => void;
}

const Task = ({ task, deleteTask }: TaskProps) => {
  const [checked, setChecked] = useState(false);
  const [lineThrough, setLineThrough] = useState(false);
  const handleChange = () => {
    const check = !checked;
    setLineThrough(check);
    setChecked(check);
  };
  return (
    <div className="task">
      <label id="taskname">
        <input
          onChange={handleChange}
          checked={checked}
          type="checkbox"
          className="check-task"
          name="taskname"
        />
        <p className={lineThrough ? "checked" : ""}>{task.name}</p>
      </label>
      <div className="delete" onClick={() => deleteTask(task.id)}>
        <i className="uil uil-trash"></i>
      </div>
    </div>
  );
};

export default Task;
