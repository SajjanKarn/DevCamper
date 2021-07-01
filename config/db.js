const mongoose = require("mongoose");

const connectDB = async () => {
  const db = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`Connected to database on host ${db.connection.host}`.cyan.bold.underline);
};

module.exports = connectDB;
