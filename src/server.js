import express from "express";
import cors from "cors";
// import router from "./routes/router.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Just for testing
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to our App.",
  });
});

app.use("/api/users", userRoutes);

// app.use(router);

export default app;
