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

module.exports = taskListRouter;
