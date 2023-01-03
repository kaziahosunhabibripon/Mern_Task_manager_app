const express = require("express");
const Task = require("../models/taskModel");
const {
  createTask,
  getAllTask,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const router = express.Router();

router.route("/").get(getAllTask).post(createTask);

router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);
// router.post("", createTask);

// router.get("", getAllTask);

// router.get("/:id", getTask);

// router.put("/:id", updateTask);

// router.delete("/:id", deleteTask);

module.exports = router;
