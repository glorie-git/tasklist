const taskListRouter = require("express").Router();
const Task = require("../models/task");

taskListRouter.get("/", (request, response) => {
  Task.find({})
    .then((task) => {
      if (task) {
        response.json(task);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => console.error(error));
});

taskListRouter.post("/", (request, response) => {
  const body = request.body;

  // Error handling for creating new entries
  if (!body.name) {
    return response.status(400).json({
      error: "name missing",
    });
  }

  const task = Task({
    name: body.name,
  });

  task
    .save()
    .then((savedTask) => {
      response.json(savedTask);
    })
    .catch((error) => console.error(error));
});

taskListRouter.delete("/:id", (request, response) => {
  Task.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => console.log(error));
});

module.exports = taskListRouter;
