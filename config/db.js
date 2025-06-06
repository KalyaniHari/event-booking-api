const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    
    console.log("Database connected", connect.connection.host);
  } catch (err) {
    console.log(err);
    console.log("Database not connected");
  }
};

module.exports = connectDb;
