import dotenv from 'dotenv'
import "express-async-errors";

import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import MQTTService from "./mqtt/mqttService.js";

// middleware
import notFoundHandler from "./middlewares/notFound-handler.js";
import errorHandler from "./middlewares/error-handler.js";
import { authenticateUser } from "./middlewares/authMiddleware.js";

// routers
import { accountRoutes,authRoutes, calendarRoutes, componentRoutes, financeRoutes, vesselRoutes } from "./routes/index.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

MQTTService.connect()

app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/account", accountRoutes);
app.use("/api/v1/component", componentRoutes);
app.use("/api/v1/finance", financeRoutes);
app.use("/api/v1/vessel",vesselRoutes);
app.use("/api/v1/calendar",calendarRoutes)

app.use(notFoundHandler);
app.use(errorHandler);

try {
  await mongoose.connect(process.env.MONGO_DB_URL);
  app.listen(port, () => console.log(`server is running on port ${port}`));
} catch (error) {
  console.log(error);
  process.exit(1);
}