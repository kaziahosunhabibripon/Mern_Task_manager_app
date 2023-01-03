const mongoose = require("mongoose");
// const ObjectId = mongoose.SchemaTypes.ObjectId;
const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a task"],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
    description: {
      type: String,
      required: [true, "Please provide a unique description of task"],
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
