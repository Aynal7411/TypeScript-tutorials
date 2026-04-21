import express, { Application } from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import checkAnyRoutes from "./routes/check.any.routes";
import { errorHandler } from "./middlewares/error.middleware";
import unknown2Routes from "./routes/unknown2.routes";

const app: Application = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/check-any", checkAnyRoutes);
app.use("/api/unknown2", unknown2Routes);
// health check
app.get("/", (req, res) => {
  res.send("API running 🚀");
});

// error handler
app.use(errorHandler);

export default app;