import mongoose from "mongoose";



export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: false,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  console.log("Database connected successfully.");
};


