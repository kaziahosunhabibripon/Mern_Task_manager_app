const Task = require("../models/taskModel");
// Create task
const createTask = async (req, res) => {
  try {
    let task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (e) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get a single task
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json(`No task found with this id: ${id}`);
    }
    res.status(201).json(task);
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};

// Update a task

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json(`No task found with this id: ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
// Delete a task

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`No task found with this id: ${id}`);
    }
    res.status(201).json(`Task with the ${id} is deleted successfully`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getAllTask,
  getTask,
  updateTask,
  deleteTask,
};
