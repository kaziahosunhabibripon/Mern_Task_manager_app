const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      mongoose.set("strictQuery", false)
    );
    console.log(`MongoDB connected: with URI: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
