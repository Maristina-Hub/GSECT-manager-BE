import mongoose from "mongoose";

//const uri = 'mongodb+srv://test:test@123@cluster0.w8yce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  console.log("MongoDB connected");
};

// module.exports = connectDB;
