// constansts declared for input button and task list area
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector(".tasks");
// listener for the enter key. Used to add new task
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") createTask();
});
// the onclick event for the 'Add' button
document.querySelector("#push").onclick = function () {
  createTask();
};
// the function that creates a new task
const createTask = () => {
  if (taskInput.value.length === 0)
    alert("The task field is blank. Enter a task name and try again.");
  else {
    // this block inserts HTML that creates each task into the task area div element
    taskSection.innerHTML += `
    <div class="task">
        <label id="taskname">
            <input onclick="updateTask(this)" type="checkbox" id="check-task" />
            <p>${document.querySelector("#newtask input").value}</p>
        </label>
        <div class="delete" onclick="deleteTask(this)">
            <i class="uil uil-trash"></i>
        </div>
    </div>
    `;
    taskSection.offsetHeight >= 300
      ? taskSection.classList.add("overflow")
      : taskSection.classList.remove("overflow");
  }
  // clear the task input after adding a task
  document.querySelector("#newtask input").value = "";
  // set the task input as the focused element
  document.querySelector("#newtask input").focus();
};
const deleteTask = (div) => {
  if (window.confirm(`Are you sure you want to delete the task?`)) {
    div.parentNode.remove();
  }
};
const updateTask = (task) => {
  let taskItem = task.parentElement.lastElementChild;
  if (task.checked) {
    taskItem.classList.add("checked");
  } else {
    taskItem.classList.remove("checked");
  }
};
