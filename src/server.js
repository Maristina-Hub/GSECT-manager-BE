import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";

import { errorHandler } from "./middleware/error.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Just for testing
// app.get("/", (req, res) => {
//   res.json("Welcome to our GSECT-MANAGER App.");
// });

app.use("/", userRoutes);
app.use("/", subscriptionRoutes);

// app.use(router);
app.use(errorHandler);

export default app;
