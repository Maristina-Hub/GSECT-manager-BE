import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

export const connectDB = async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  console.log("MongoDB connected");
};

// module.exports = connectDB;
