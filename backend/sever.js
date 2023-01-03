const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel");

const taskRoutes = require("./routes/task.Route");

const PORT = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/tasks", taskRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Hello Home Page!");
});

const startServer = async () => {
  try {
    await connectDB();
    await app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
