import { useState } from "react";

const Task = ({ task, deleteTask, id }) => {
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
          id="check-task"
        />
        <p className={lineThrough ? "checked" : ""}>{task}</p>
      </label>
      <div className="delete" onClick={() => deleteTask(id)}>
        <i className="uil uil-trash"></i>
      </div>
    </div>
  );
};

export default Task;
